## 2024-05-15 - [Added keyboard focus states to main CTA]
**Learning:** Found that custom buttons and links in the primary container often lack default `focus-visible` styles which hurts keyboard accessibility, specifically when relying on Tailwind without custom base styles.
**Action:** Always ensure `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` (or similar offset) is added to custom interactive elements.

## 2024-04-12 - Icon-Only Button Accessibility in Chat Interfaces
**Learning:** For custom icon-only button components (like `chat-send-btn`) that lack standard button styling, it's critical to provide both `title` (for mouse users) and `aria-label` (for screen reader users), and explicitly add `focus-visible` states since custom CSS often overrides default browser focus rings.
**Action:** Always verify that icon-only interactive elements in chat/messaging interfaces have both an `aria-label` and explicit `focus-visible:ring-*` Tailwind classes to ensure they are fully usable by all input modalities.
