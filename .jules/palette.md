## 2024-05-15 - [Added keyboard focus states to main CTA]
**Learning:** Found that custom buttons and links in the primary container often lack default `focus-visible` styles which hurts keyboard accessibility, specifically when relying on Tailwind without custom base styles.
**Action:** Always ensure `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` (or similar offset) is added to custom interactive elements.

## 2024-05-18 - Missing ARIA Labels on Icon-Only Controls
**Learning:** This app frequently uses Material Symbols for custom icon-only interactive elements (like `.chat-send-btn` and mobile FABs in dashboards) but consistently forgets to include `aria-label`s and proper keyboard focus states. Relying on title attributes alone is insufficient for robust accessibility and keyboard navigability.
**Action:** When working on new components or reviewing existing ones, always check `.material-symbols-outlined` usage within `<button>` or `<Link>` tags without text. Ensure they have descriptive `aria-label`s and Tailwind focus classes (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`).
