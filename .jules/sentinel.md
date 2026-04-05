## 2024-04-01 - Add security headers
**Vulnerability:** Missing security headers
**Learning:** Next.js requires configuring security headers in `next.config.ts`. The implementation can be done using the `headers` async function matching all routes `/(.*)`.
**Prevention:** Next.js applications should always add basic security headers like `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.

## 2024-05-23 - Prevent Client-Side DoS via Unvalidated Real-time Payloads
**Vulnerability:** The `/api/send` endpoint accepted unvalidated `request.json()` payloads and blindly broadcasted them via Pusher. A malicious client could broadcast massive arrays or unexpected objects instead of strings, leading to remote client-side Denial of Service (DoS) crashes when the React UI attempted to render the arbitrary JSON.
**Learning:** Always explicitly validate input types (e.g., `typeof === 'string'`) and add length limits for payloads parsed via `request.json()` before pushing to real-time channels. Failing to validate shape and size creates an easy vector for remote application crashes.
**Prevention:** Implement strict type and length validations (e.g., `typeof text !== 'string' || text.length > 2000`) on all API routes handling user input, especially those triggering real-time web socket events.
