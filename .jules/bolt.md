## 2024-05-18 - [Optimizing Material Symbols loading]
**Learning:** Loading `Material Symbols` directly via a `<link>` tag pointing to Google Fonts without preconnecting to the required origins slows down the initial render due to connection setup latency (DNS, TCP, TLS).
**Action:** Always add `<link rel="preconnect" href="https://fonts.googleapis.com" />` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />` when loading a stylesheet from Google Fonts in a Next.js `layout.tsx` file to speed up the font loading process.

## 2024-05-20 - [Unbounded user retrieval optimization]
**Learning:** Performing unbounded queries (`User.find({})`) in API routes can cause performance degradation and memory exhaustion as the dataset grows. Additionally, returning sensitive fields like password hashes increases response size and security risk.
**Action:** Always implement pagination using `.skip()` and `.limit()`, and use `.select('-password')` and `.lean()` for read-only Mongoose queries in API routes to improve performance and security. Ensure robust parsing of numeric query parameters to handle `NaN`.
## 2024-05-18 - [Optimizing Date Formatting in React Renders]
**Learning:** Using `new Date().toLocaleTimeString()` inside React render functions or loops is an anti-pattern as it implicitly instantiates a new `Intl.DateTimeFormat` object each time, which can become a bottleneck when rendering many items (like a list of chat messages).
**Action:** Cache a module-level `Intl.DateTimeFormat` instance and use `formatter.format(timestamp)` instead of creating inline formatter instances or using `toLocaleTimeString` directly in hot paths.
## 2024-05-24 - [Mongoose Query Optimizations: count vs exists]
**Learning:** Using `countDocuments({})` for unfiltered counts forces MongoDB to scan indexes, which is slow for large collections. Using `findOne()` just to check if a document exists forces Mongoose to load and hydrate the full document into memory.
**Action:** Use `estimatedDocumentCount()` for O(1) unfiltered total counts based on collection metadata. Use `exists()` instead of `findOne()` for existence checks to avoid full document deserialization and reduce memory overhead.
