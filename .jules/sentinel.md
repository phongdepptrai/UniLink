## 2024-04-01 - Add security headers
**Vulnerability:** Missing security headers
**Learning:** Next.js requires configuring security headers in `next.config.ts`. The implementation can be done using the `headers` async function matching all routes `/(.*)`.
**Prevention:** Next.js applications should always add basic security headers like `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.

## 2026-04-07 - [Preventing Sensitive Data Exposure in API Routes]
**Vulnerability:** API routes (`src/app/api/users/route.ts` and `src/app/api/users/[id]/route.ts`) returned Mongoose documents directly via `NextResponse.json()`, causing default serialization to leak sensitive fields like hashed passwords to the client.
**Learning:** Mongoose documents passed to `NextResponse.json()` serialize all fields by default unless explicitly excluded. When returning a document, we must make sure to exclude sensitive keys.
**Prevention:** Always use `.select('-password')` (or exclude other sensitive fields) for Mongoose queries, and convert `create` responses using `.toObject()` to strip sensitive keys before returning them to clients in Next.js API routes.
