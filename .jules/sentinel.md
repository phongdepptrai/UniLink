## 2024-04-01 - Add security headers
**Vulnerability:** Missing security headers
**Learning:** Next.js requires configuring security headers in `next.config.ts`. The implementation can be done using the `headers` async function matching all routes `/(.*)`.
**Prevention:** Next.js applications should always add basic security headers like `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.

## 2024-04-02 - Explicit Input Validation for JSON Requests
**Vulnerability:** Remote Client-Side DoS via Arbitrary JSON Broadcasts
**Learning:** In Next.js API routes, failing to strictly validate the shape and type of data parsed via `request.json()` can allow malicious clients to broadcast objects or massive arrays instead of strings. When React attempts to render this arbitrary JSON, it can cause client-side Denial of Service (DoS) crashes for all connected users.
**Prevention:** Always explicitly validate input types (e.g., `typeof === 'string'`) and add strict length limits for payloads parsed via `request.json()` before processing or broadcasting them.
