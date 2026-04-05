## 2024-05-18 - [Optimizing Material Symbols loading]
**Learning:** Loading `Material Symbols` directly via a `<link>` tag pointing to Google Fonts without preconnecting to the required origins slows down the initial render due to connection setup latency (DNS, TCP, TLS).
**Action:** Always add `<link rel="preconnect" href="https://fonts.googleapis.com" />` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />` when loading a stylesheet from Google Fonts in a Next.js `layout.tsx` file to speed up the font loading process.

## 2024-05-19 - [DateTimeFormat Instantiation in Render Loops]
**Learning:** Using `new Date().toLocaleTimeString()` with options implicitly instantiates a new `Intl.DateTimeFormat` object. If this is done inside a React render function or within a loop (such as rendering a list of chat messages), it incurs significant performance overhead due to the costly object instantiation on every re-render.
**Action:** Always cache a module-level `Intl.DateTimeFormat` instance and use `formatter.format(timestamp)` instead of repeatedly calling `toLocaleTimeString()` with formatting options within render paths or loops.
