import { NextResponse } from "next/server";
import pusherServer from "@/lib/pusher";

// POST /api/send
// Sends a chat message to a Pusher channel so both users in the room receive it.
export async function POST(request: Request) {
  try {
    const { roomId, text, sender } = await request.json();

    if (!roomId || !text || !sender) {
      return NextResponse.json(
        { error: "Missing required fields: roomId, text, sender" },
        { status: 400 }
      );
    }

    // Security enhancement: Input validation to prevent DoS via non-string payloads
    if (typeof roomId !== 'string' || typeof text !== 'string' || typeof sender !== 'string') {
      return NextResponse.json(
        { error: "Invalid input types: expected strings" },
        { status: 400 }
      );
    }

    if (roomId.length > 100 || sender.length > 100) {
      return NextResponse.json(
        { error: "Identifier too long" },
        { status: 400 }
      );
    }

    if (text.length > 1000) {
      return NextResponse.json(
        { error: "Message too long" },
        { status: 400 }
      );
    }

    // Trigger the message event on the shared chat channel
    await pusherServer.trigger(`chat-${roomId}`, "message-event", {
      text,
      sender,
      time: Date.now(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API /send] Error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
