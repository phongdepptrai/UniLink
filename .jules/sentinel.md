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
## 2024-04-12 - User Enumeration and Timing Attack Vulnerability in Login
**Vulnerability:** The login endpoint in `src/app/api/login/route.ts` leaks information about whether a user exists. If an email is not found, it immediately returns a 404 with "Account does not exist". If it is found, it performs a costly `bcrypt.compare` operation before returning a 401 with "Invalid password". This allows attackers to enumerate valid email addresses based on both the error message and the time it takes for the server to respond.
**Learning:** Returning specific error messages and failing to normalize response times in authentication flows exposes systems to user enumeration attacks.
**Prevention:** Always return a generic error message (e.g., "Invalid email or password") and a consistent HTTP status code (e.g., 401) for all authentication failures. Furthermore, simulate the cost of a password hash comparison using a dummy hash when a user is not found to normalize response times and prevent timing attacks.
