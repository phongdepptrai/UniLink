## 2024-05-18 - [Optimizing Material Symbols loading]
**Learning:** Loading `Material Symbols` directly via a `<link>` tag pointing to Google Fonts without preconnecting to the required origins slows down the initial render due to connection setup latency (DNS, TCP, TLS).
**Action:** Always add `<link rel="preconnect" href="https://fonts.googleapis.com" />` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />` when loading a stylesheet from Google Fonts in a Next.js `layout.tsx` file to speed up the font loading process.

## 2024-05-20 - [Unbounded user retrieval optimization]
**Learning:** Performing unbounded queries (`User.find({})`) in API routes can cause performance degradation and memory exhaustion as the dataset grows. Additionally, returning sensitive fields like password hashes increases response size and security risk.
**Action:** Always implement pagination using `.skip()` and `.limit()`, and use `.select('-password')` and `.lean()` for read-only Mongoose queries in API routes to improve performance and security. Ensure robust parsing of numeric query parameters to handle `NaN`.
## 2024-05-18 - [Optimizing Date Formatting in React Renders]
**Learning:** Using `new Date().toLocaleTimeString()` inside React render functions or loops is an anti-pattern as it implicitly instantiates a new `Intl.DateTimeFormat` object each time, which can become a bottleneck when rendering many items (like a list of chat messages).
**Action:** Cache a module-level `Intl.DateTimeFormat` instance and use `formatter.format(timestamp)` instead of creating inline formatter instances or using `toLocaleTimeString` directly in hot paths.

## 2024-05-23 - [Optimizing Mongoose Read Queries]
**Learning:** Using `User.findOne(...)` when only checking for existence is inefficient as it fetches the entire document from the database. Furthermore, using `User.countDocuments({})` forces a full collection scan for the total count which slows down with larger collections.
**Action:** Always use `.exists(...)` instead of `.findOne(...)` when a boolean outcome is sufficient, and use `.estimatedDocumentCount()` instead of `.countDocuments({})` when you need an unfiltered total count, enabling O(1) performance instead of O(N).
