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
## 2025-05-15 - User Enumeration and Timing Attacks in Authentication
**Vulnerability:** The login endpoint at `src/app/api/login/route.ts` previously returned distinct HTTP status codes and error messages for invalid emails (`404 Account does not exist`) versus invalid passwords (`401 Invalid password`). Additionally, it failed immediately on invalid emails without performing a bcrypt comparison. This allowed an attacker to enumerate valid user emails through error message inspection and timing analysis.
**Learning:** Returning distinct error messages or having significant processing time differences between valid and invalid user lookups enables user enumeration. This information can be used by attackers for credential stuffing, phishing, and brute-force attacks against known accounts.
**Prevention:** Always use unified, ambiguous error messages like "Invalid email or password" for all authentication failures. Furthermore, simulate the time taken by operations like password hashing (e.g., executing a dummy `bcrypt.compare`) even when the user is not found to mitigate timing-based enumeration attacks. Input validation should also strictly check types to avoid processing unexpected objects that could lead to crashes (DoS).
