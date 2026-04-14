## 2024-05-15 - [Added keyboard focus states to main CTA]
**Learning:** Found that custom buttons and links in the primary container often lack default `focus-visible` styles which hurts keyboard accessibility, specifically when relying on Tailwind without custom base styles.
**Action:** Always ensure `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` (or similar offset) is added to custom interactive elements.
## 2026-04-14 - [Added ARIA label and hidden text to icon-only send button]
**Learning:** Icon-only buttons using Material Symbols require an explicit `aria-label` on the button itself AND an `aria-hidden="true"` on the `<span>` element containing the icon text to prevent screen readers from reading out the literal icon name (e.g., 'send').
**Action:** Always add `aria-hidden="true"` to inner icon elements within custom icon-only buttons along with the outer button's `aria-label`.
