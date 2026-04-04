## 2024-04-01 - Add security headers
**Vulnerability:** Missing security headers
**Learning:** Next.js requires configuring security headers in `next.config.ts`. The implementation can be done using the `headers` async function matching all routes `/(.*)`.
**Prevention:** Next.js applications should always add basic security headers like `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.

## 2024-04-04 - Strict input validation for Next.js App Router API Routes
**Vulnerability:** Missing Input Validation / Unbounded Payload Risk
**Learning:** In Next.js App Router API Routes (`route.ts`), calling `request.json()` parses the JSON body into a JavaScript object without any schema validation or type guarantees. Malicious clients can send unexpected shapes (e.g., massive arrays, deeply nested objects, or boolean/number where strings are expected). If these unexpected shapes are blindly broadcasted (e.g., via Pusher) to React clients, it can lead to client-side Denial of Service (DoS) crashes when React attempts to render the arbitrary JSON or excessive data.
**Prevention:** Always explicitly validate input types (e.g., `typeof === 'string'`) and add strict length limits for all payloads parsed via `request.json()` before processing or broadcasting them.
