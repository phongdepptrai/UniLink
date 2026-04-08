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

    if (
      typeof roomId !== 'string' ||
      typeof text !== 'string' ||
      typeof sender !== 'string'
    ) {
      return NextResponse.json(
        { error: "Invalid field types: roomId, text, and sender must be strings" },
        { status: 400 }
      );
    }

    const lengthViolations = [
      { field: "roomId", maxLength: 100, actualLength: roomId.length },
      { field: "text", maxLength: 1000, actualLength: text.length },
      { field: "sender", maxLength: 100, actualLength: sender.length },
    ].filter(({ maxLength, actualLength }) => actualLength > maxLength);

    if (lengthViolations.length > 0) {
      return NextResponse.json(
        {
          error: "Field length validation failed",
          details: lengthViolations,
        },
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
