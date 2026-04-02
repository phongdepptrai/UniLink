## 2024-04-01 - Add security headers
**Vulnerability:** Missing security headers
**Learning:** Next.js requires configuring security headers in `next.config.ts`. The implementation can be done using the `headers` async function matching all routes `/(.*)`.
**Prevention:** Next.js applications should always add basic security headers like `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.

## 2024-10-31 - [API Input Type Validation & DoS Prevention]
**Vulnerability:** Lack of strict `typeof` and `length` validation on POST endpoints (`/api/send`, `/api/match`, `/api/leave`), allowing malicious payloads (e.g. objects or massive strings) to be processed and broadcasted via Pusher.
**Learning:** In Next.js App Router, `request.json()` parses arbitrary JSON. If a client sends `{ text: {} }`, it bypasses `!text` truthy checks. If this object is broadcasted and rendered in React as `<div>{msg.text}</div>`, it causes a fatal client-side crash (DoS) on the receiving end. Large string payloads could also drain Pusher quotas or memory.
**Prevention:** Always implement strict `typeof === 'string'` checks and enforce `.length` limits on all incoming API payload fields before processing or broadcasting them.
