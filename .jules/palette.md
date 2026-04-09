## 2024-05-15 - [Added keyboard focus states to main CTA]
**Learning:** Found that custom buttons and links in the primary container often lack default `focus-visible` styles which hurts keyboard accessibility, specifically when relying on Tailwind without custom base styles.
**Action:** Always ensure `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` (or similar offset) is added to custom interactive elements.
## 2024-05-15 - [Added aria-labels to icon-only buttons]
**Learning:** Verified that multiple icon-only interactive elements in the application (such as the chat send button and the mobile FAB on the dashboard) lacked both `aria-label` attributes for screen readers and `focus-visible` styles for keyboard navigation. This confirms the pattern noted in previous learnings.
**Action:** Always inspect custom icon-only buttons and links (`<button>` and `<Link>`) for `aria-label` and `focus-visible` classes, specifically using the offset ring pattern `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.
