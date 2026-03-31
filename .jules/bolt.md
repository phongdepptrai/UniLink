## 2024-05-18 - [Optimizing Material Symbols loading]
**Learning:** Loading `Material Symbols` directly via a `<link>` tag pointing to Google Fonts without preconnecting to the required origins slows down the initial render due to connection setup latency (DNS, TCP, TLS).
**Action:** Always add `<link rel="preconnect" href="https://fonts.googleapis.com" />` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />` when loading a stylesheet from Google Fonts in a Next.js `layout.tsx` file to speed up the font loading process.
