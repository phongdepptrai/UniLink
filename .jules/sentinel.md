## 2024-04-01 - Add security headers
**Vulnerability:** Missing security headers
**Learning:** Next.js requires configuring security headers in `next.config.ts`. The implementation can be done using the `headers` async function matching all routes `/(.*)`.
**Prevention:** Next.js applications should always add basic security headers like `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.

## 2024-04-02 - Explicit Input Validation for JSON Requests
**Vulnerability:** Remote Client-Side DoS via Arbitrary JSON Broadcasts
**Learning:** In Next.js API routes, failing to strictly validate the shape and type of data parsed via `request.json()` can allow malicious clients to broadcast objects or massive arrays instead of strings. When React attempts to render this arbitrary JSON, it can cause client-side Denial of Service (DoS) crashes for all connected users.
**Prevention:** Always explicitly validate input types (e.g., `typeof === 'string'`) and add strict length limits for payloads parsed via `request.json()` before processing or broadcasting them.
## 2025-04-07 - [Preventing Sensitive Data Exposure in API Routes]
**Vulnerability:** API routes (`src/app/api/users/route.ts` and `src/app/api/users/[id]/route.ts`) returned Mongoose documents directly via `NextResponse.json()`, causing default serialization to leak sensitive fields like hashed passwords to the client.
**Learning:** Mongoose documents passed to `NextResponse.json()` serialize all fields by default unless explicitly excluded. When returning a document, we must make sure to exclude sensitive keys.
**Prevention:** Always use `.select('-password')` (or exclude other sensitive fields) for Mongoose queries, and convert `create` responses using `.toObject()` to strip sensitive keys before returning them to clients in Next.js API routes.

## 2025-04-07 - Prevent User Enumeration and Timing Attacks in Auth
**Vulnerability:** User Enumeration and Timing Attacks via Auth endpoints.
**Learning:** Returning different error messages or status codes depending on if the user exists vs. wrong password allows user enumeration. Differences in processing time between returning an early 404 (without hashing) vs. doing `bcrypt.compare` when a user exists can allow timing attacks.
**Prevention:** Always return a unified error message ("Invalid email or password") and status code (401) for both invalid users and incorrect passwords. In addition, when a user is not found, simulate the time taken for hash processing by executing a dummy `bcrypt.compare` with a properly formatted hash string.
