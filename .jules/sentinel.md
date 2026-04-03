## 2024-04-03 - Next.js Request Body JSON DoS Vulnerability
**Vulnerability:** Application-layer Denial of Service (DoS) via massive unvalidated JSON arrays/objects from `request.json()` on API endpoints.
**Learning:** In Next.js API routes, blindly parsing `request.json()` and broadcasting the payload (e.g., via Pusher) or using it directly can crash the client or server. If the payload is a massive array or object rather than the expected string, it consumes excessive memory or crashes React when it attempts to render the arbitrary JSON structure.
**Prevention:** Always explicitly validate the types (e.g., `typeof === 'string'`) and lengths of fields extracted from `request.json()` before processing or broadcasting them.

## 2024-04-01 - Add security headers
**Vulnerability:** Missing security headers
**Learning:** Next.js requires configuring security headers in `next.config.ts`. The implementation can be done using the `headers` async function matching all routes `/(.*)`.
**Prevention:** Next.js applications should always add basic security headers like `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.
