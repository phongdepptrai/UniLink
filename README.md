# AnonEdu — Anonymous Academic Sanctuary

A real-time, anonymous platform for students to discuss, share, and connect without revealing their identities. Built with **Next.js 16**, **Pusher Channels**, and **Upstash Redis**.

## Features

- **Pseudo-anonymous Identity** — Students chat under auto-generated anonymous IDs.
- **School Verification** — Verify student status to unlock school-only rooms.
- **Dashboard** — Discovery hub to browse trending schools and rooms.
- **Anonymous Real-time Chat (Omegle-style)** — Click "New Discussion" on the dashboard sidebar to get matched with a random fellow student for a private 1-on-1 conversation.
  - Matchmaking queue powered by **Upstash Redis** (serverless).
  - Real-time messaging via **Pusher Channels**.
  - Skip / Next partner feature.
  - Auto-cleanup of stale waiting entries (60s TTL).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS 4 + Vanilla CSS |
| Realtime | Pusher Channels |
| Matchmaking Queue | Upstash Redis |
| Auth | NextAuth.js (Google + Credentials) |
| Database | MongoDB (via Mongoose) |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file (a template is included) and fill in your credentials:

```env
# Pusher Channels (https://pusher.com)
PUSHER_APP_ID=your_app_id
NEXT_PUBLIC_PUSHER_KEY=your_key
PUSHER_SECRET=your_secret
NEXT_PUBLIC_PUSHER_CLUSTER=ap1

# Upstash Redis (https://upstash.com)
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── match/         # POST — matchmaking (Redis queue)
│   │   ├── send/          # POST — send message (Pusher trigger)
│   │   └── leave/         # POST — leave chat / cleanup
│   ├── auth/
│   │   └── signup/        # Sign-up page
│   ├── dashboard/
│   │   ├── chat/          # Anonymous chat page (Omegle-style)
│   │   └── page.tsx       # Dashboard / discovery hub
│   ├── main/
│   │   ├── privacy/       # Privacy mission page
│   │   ├── security/      # Security FAQ page
│   │   ├── layout.tsx     # Main layout (nav + footer)
│   │   └── page.tsx       # Home / landing page
│   ├── globals.css        # Design tokens & global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Root redirect
├── components/            # Shared UI components
└── lib/
    └── pusher.ts          # Pusher server instance (shared)
```

## Anonymous Chat Flow

```
User clicks "New Discussion" on Dashboard sidebar
  → Navigates to /dashboard/chat
  → Clicks "Find a Partner"

User A:
  → POST /api/match { userId: "anon-xxx" }
  → Redis: no one waiting → queued, subscribes to Pusher user channel
  → Waiting...

User B:
  → POST /api/match { userId: "anon-yyy" }
  → Redis: found User A → creates roomId
  → Pusher: notifies User A with roomId
  → Both subscribe to chat-{roomId}
  → Real-time messaging via POST /api/send
```

## Deploy on Vercel

1. Push to GitHub.
2. Import project in [Vercel](https://vercel.com).
3. Add all environment variables from `.env.local` to Vercel Environment Variables.
4. Deploy.

## License

This project is for educational purposes.
