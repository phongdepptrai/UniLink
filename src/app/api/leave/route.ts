import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import pusherServer from "@/lib/pusher";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const WAITING_KEY = "anonchat:waiting_user";

// POST /api/leave
// Handles user leaving: notifies partner via Pusher, cleans up Redis queue.
export async function POST(request: Request) {
  try {
    const { roomId, userId } = await request.json();

    // If the user was in a room, notify the partner
    if (roomId) {
      await pusherServer.trigger(`chat-${roomId}`, "partner-left", {
        userId,
        time: Date.now(),
      });
    }

    // If this user was queued and waiting, remove them
    const waitingUser = await redis.get<string>(WAITING_KEY);
    if (waitingUser === userId) {
      await redis.del(WAITING_KEY);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API /leave] Error:", error);
    return NextResponse.json(
      { error: "Failed to process leave" },
      { status: 500 }
    );
  }
}
