## 2024-05-18 - [Optimizing Material Symbols loading]
**Learning:** Loading `Material Symbols` directly via a `<link>` tag pointing to Google Fonts without preconnecting to the required origins slows down the initial render due to connection setup latency (DNS, TCP, TLS).
**Action:** Always add `<link rel="preconnect" href="https://fonts.googleapis.com" />` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />` when loading a stylesheet from Google Fonts in a Next.js `layout.tsx` file to speed up the font loading process.

## 2024-05-24 - [Intl.DateTimeFormat vs toLocaleTimeString]
**Learning:** Using `new Date().toLocaleTimeString()` with options implicitly instantiates a new `Intl.DateTimeFormat` object each time. When used inside a React render function or loop (like formatting a list of chat messages), this causes unnecessary overhead and can degrade performance.
**Action:** Always cache a module-level `Intl.DateTimeFormat` instance and use `formatter.format(timestamp)` instead of calling `toLocaleTimeString` with options in frequently executed code paths or render loops.
