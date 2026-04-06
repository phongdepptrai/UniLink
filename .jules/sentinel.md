## 2023-10-27 - [Mongoose Document Data Exposure via API]
**Vulnerability:** Next.js API routes directly returning Mongoose document objects (from queries like `User.find()` or `User.create()`) exposed sensitive fields, specifically hashed passwords.
**Learning:** Mongoose documents passed to `NextResponse.json()` serialize all fields by default, bypassing typical schema exclusions if `.select()` isn't explicitly chained to the query, or if the `create` response object isn't converted `toObject()` with manual deletion of sensitive fields.
**Prevention:** Always use `.select('-password')` (or other sensitive field exclusions) for read operations, and explicitly convert Mongoose documents `toObject()` and strip sensitive keys before returning them from creation/update API routes.
