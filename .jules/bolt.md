## 2024-05-18 - [Optimizing Material Symbols loading]
**Learning:** Loading `Material Symbols` directly via a `<link>` tag pointing to Google Fonts without preconnecting to the required origins slows down the initial render due to connection setup latency (DNS, TCP, TLS).
**Action:** Always add `<link rel="preconnect" href="https://fonts.googleapis.com" />` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />` when loading a stylesheet from Google Fonts in a Next.js `layout.tsx` file to speed up the font loading process.
## 2024-05-18 - [Optimizing Date Formatting in React Renders]
**Learning:** Using `new Date().toLocaleTimeString([], { options })` inside a render function or loop is highly inefficient because it implicitly instantiates a new `Intl.DateTimeFormat` object each time. This can cause rendering jank when rendering lists of items with formatted dates (like chat messages).
**Action:** Always extract `new Intl.DateTimeFormat([], { options })` to a module-level constant and use `formatter.format(timestamp)` to avoid costly instantiations during rendering.
