import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import pusherServer from "@/lib/pusher";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const WAITING_KEY = "anonchat:waiting_user";

// POST /api/match
// Matchmaking endpoint: pairs two anonymous users into a shared chat room.
// If no one is waiting, the current user is queued. If someone is waiting,
// both users are matched and notified via Pusher.
export async function POST(request: Request) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { error: "Missing required field: userId" },
        { status: 400 }
      );
    }

    // Security enhancement: Type and length validation
    if (typeof userId !== 'string') {
      return NextResponse.json(
        { error: "Invalid input: userId must be a string" },
        { status: 400 }
      );
    }

    if (userId.length > 100) {
      return NextResponse.json(
        { error: "Invalid input: userId is too long" },
        { status: 400 }
      );
    }

    // Atomically get and delete the waiting user to prevent race conditions
    const waitingUser = await redis.getdel<string>(WAITING_KEY);

    if (waitingUser && waitingUser !== userId) {
      // Someone was waiting — match them together!
      const roomId = `room-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

      // Notify the waiting user via their personal Pusher channel
      await pusherServer.trigger(`user-${waitingUser}`, "matched", {
        roomId,
        partnerId: userId,
      });

      return NextResponse.json({
        status: "matched",
        roomId,
        partnerId: waitingUser,
      });
    } else {
      // No one waiting (or user matched themselves) — add to queue
      // 60s TTL auto-cleans stale entries
      await redis.set(WAITING_KEY, userId, { ex: 60 });

      return NextResponse.json({ status: "waiting" });
    }
  } catch (error) {
    console.error("[API /match] Error:", error);
    return NextResponse.json(
      { error: "Matchmaking failed" },
      { status: 500 }
    );
  }
}
