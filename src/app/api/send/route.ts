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
