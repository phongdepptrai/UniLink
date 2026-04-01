"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Pusher from "pusher-js";
import Link from "next/link";
import "./chat.css";

// Represents a single chat message
interface ChatMessage {
  text: string;
  sender: string;
  time: number;
}

// Possible states of the chat session
type ChatState = "idle" | "searching" | "connected" | "disconnected";

// Generate a random anonymous user ID
function generateUserId(): string {
  return `anon-${Math.random().toString(36).slice(2, 8)}`;
}

// ⚡ Bolt: Cache Intl.DateTimeFormat instance to avoid creating it on every message render (which happens inside loops).
// toLocaleTimeString([], { options }) is very slow because it implicitly instantiates this formatter every time.
const timeFormatter = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
});

// Format timestamp for display
function formatTime(timestamp: number): string {
  return timeFormatter.format(timestamp);
}

export default function ChatPage() {
  const [chatState, setChatState] = useState<ChatState>("idle");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [userId] = useState<string>(() => generateUserId());

  const pusherRef = useRef<Pusher | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Clean up Pusher on unmount
  useEffect(() => {
    return () => {
      if (pusherRef.current) {
        pusherRef.current.disconnect();
        pusherRef.current = null;
      }
    };
  }, []);

  // Initialize Pusher client (only once)
  const getPusher = useCallback(() => {
    if (!pusherRef.current) {
      pusherRef.current = new Pusher(
        process.env.NEXT_PUBLIC_PUSHER_KEY!,
        {
          cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
        }
      );
    }
    return pusherRef.current;
  }, []);

  // Join a chat room channel and listen for messages
  const joinRoom = useCallback(
    (pusher: Pusher, room: string) => {
      const chatChannel = pusher.subscribe(`chat-${room}`);

      // Listen for incoming messages
      chatChannel.bind("message-event", (data: ChatMessage) => {
        setMessages((prev) => [...prev, data]);
      });

      // Listen for partner leaving
      chatChannel.bind("partner-left", () => {
        setChatState("disconnected");
        pusher.unsubscribe(`chat-${room}`);
      });

      // Focus the input once connected
      setTimeout(() => inputRef.current?.focus(), 100);
    },
    []
  );

  // Start searching for a chat partner
  const startSearching = useCallback(async () => {
    setChatState("searching");
    setMessages([]);
    setRoomId(null);

    const pusher = getPusher();

    // Subscribe to personal channel to receive match notification
    const userChannel = pusher.subscribe(`user-${userId}`);

    userChannel.bind(
      "matched",
      (data: { roomId: string; partnerId: string }) => {
        // We got matched! Join the chat room
        setRoomId(data.roomId);
        setChatState("connected");
        joinRoom(pusher, data.roomId);
        // Unsubscribe from personal channel since we're matched
        pusher.unsubscribe(`user-${userId}`);
      }
    );

    // Call match API
    try {
      const res = await fetch("/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();

      if (data.status === "matched") {
        // Immediately matched with someone already waiting
        setRoomId(data.roomId);
        setChatState("connected");
        joinRoom(pusher, data.roomId);
        pusher.unsubscribe(`user-${userId}`);
      }
      // If "waiting", the Pusher event will handle the match
    } catch (err) {
      console.error("Match error:", err);
      setChatState("idle");
    }
  }, [userId, getPusher, joinRoom]);

  // Send a message
  const sendMessage = useCallback(async () => {
    if (!inputText.trim() || !roomId) return;

    const messageText = inputText.trim();
    setInputText("");

    try {
      await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomId,
          text: messageText,
          sender: userId,
        }),
      });
    } catch (err) {
      console.error("Send error:", err);
    }
  }, [inputText, roomId, userId]);

  // Leave current chat
  const leaveChat = useCallback(async () => {
    try {
      await fetch("/api/leave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomId, userId }),
      });
    } catch (err) {
      console.error("Leave error:", err);
    }

    // Clean up Pusher subscriptions
    if (pusherRef.current) {
      if (roomId) pusherRef.current.unsubscribe(`chat-${roomId}`);
      pusherRef.current.unsubscribe(`user-${userId}`);
    }

    setChatState("idle");
    setMessages([]);
    setRoomId(null);
  }, [roomId, userId]);

  // Skip to next partner (leave current + start new search)
  const skipToNext = useCallback(async () => {
    try {
      await fetch("/api/leave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomId, userId }),
      });
    } catch (err) {
      console.error("Leave error:", err);
    }

    if (pusherRef.current && roomId) {
      pusherRef.current.unsubscribe(`chat-${roomId}`);
    }

    setMessages([]);
    setRoomId(null);

    // Start searching again immediately
    startSearching();
  }, [roomId, userId, startSearching]);

  // Handle Enter key to send messages
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // ===== RENDER =====

  // Idle state — landing before any chat
  if (chatState === "idle") {
    return (
      <div className="chat-searching">
        <div className="search-pulse">
          <div className="pulse-core">
            <span className="material-symbols-outlined text-3xl">forum</span>
          </div>
        </div>
        <div className="text-center space-y-3 max-w-md">
          <h2 className="text-3xl font-extrabold font-headline text-primary tracking-tight">
            Anonymous Discussion
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Start a private, encrypted conversation with a random fellow student.
            Your identity remains completely anonymous.
          </p>
        </div>
        <button onClick={startSearching} className="action-btn primary" id="find-partner-btn">
          <span className="material-symbols-outlined">person_search</span>
          Find a Partner
        </button>
        <Link
          href="/dashboard"
          className="text-sm text-on-surface-variant hover:text-primary transition-colors font-label"
        >
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  // Searching state
  if (chatState === "searching") {
    return (
      <div className="chat-searching">
        <div className="search-pulse">
          <div className="pulse-ring" />
          <div className="pulse-ring" />
          <div className="pulse-ring" />
          <div className="pulse-core">
            <span className="material-symbols-outlined text-3xl">
              person_search
            </span>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold font-headline text-primary">
            Finding your partner...
          </h2>
          <p className="text-on-surface-variant text-sm">
            Searching for an available anonymous scholar
          </p>
        </div>
        <button onClick={leaveChat} className="action-btn secondary" id="cancel-search-btn">
          <span className="material-symbols-outlined">close</span>
          Cancel
        </button>
      </div>
    );
  }

  // Disconnected state — partner left
  if (chatState === "disconnected") {
    return (
      <div className="chat-disconnected">
        <div className="disconnect-icon">
          <span className="material-symbols-outlined text-4xl">
            person_off
          </span>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold font-headline text-primary">
            Partner Disconnected
          </h2>
          <p className="text-on-surface-variant text-sm">
            The stranger has left the conversation.
          </p>
        </div>
        <div className="chat-actions">
          <button onClick={startSearching} className="action-btn primary" id="find-new-btn">
            <span className="material-symbols-outlined">person_search</span>
            Find New Partner
          </button>
          <Link href="/dashboard" className="action-btn secondary">
            <span className="material-symbols-outlined">home</span>
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  // Connected state — active chat
  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header bg-surface-container-lowest shadow-ambient border border-outline-variant/20">
        <div className="partner-info">
          <div className="partner-avatar">
            <span className="material-symbols-outlined text-lg">person</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-primary font-headline">
                Anonymous Scholar
              </span>
              <span className="status-dot" />
            </div>
            <span className="text-xs text-on-surface-variant font-label">
              Connected • Encrypted
            </span>
          </div>
        </div>
        <div className="chat-actions">
          <button
            onClick={skipToNext}
            className="action-btn primary text-xs"
            title="Skip to next partner"
            id="skip-next-btn"
          >
            <span className="material-symbols-outlined text-lg">
              skip_next
            </span>
            Next
          </button>
          <button
            onClick={leaveChat}
            className="action-btn outline text-xs"
            title="Leave conversation"
            id="leave-chat-btn"
          >
            <span className="material-symbols-outlined text-lg">
              logout
            </span>
            Leave
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        <div className="system-message">
          🔒 You are now connected with an anonymous scholar. Be respectful and
          enjoy the conversation!
        </div>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message-bubble ${
              msg.sender === userId ? "sent" : "received"
            }`}
          >
            <div>{msg.text}</div>
            <div className="message-time">{formatTime(msg.time)}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input-area">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={500}
          id="chat-message-input"
        />
        <button
          onClick={sendMessage}
          disabled={!inputText.trim()}
          className="chat-send-btn"
          id="chat-send-button"
          title="Send message"
        >
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  );
}
