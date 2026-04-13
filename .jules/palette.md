## 2024-05-15 - [Added keyboard focus states to main CTA]
**Learning:** Found that custom buttons and links in the primary container often lack default `focus-visible` styles which hurts keyboard accessibility, specifically when relying on Tailwind without custom base styles.
**Action:** Always ensure `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` (or similar offset) is added to custom interactive elements.

## 2024-05-16 - [Add aria-hidden to decorative icons]
**Learning:** Found that material-symbols-outlined icons inside icon-only buttons can cause redundant or confusing readouts for screen readers if they are not explicitly hidden, even when the parent button has an `aria-label`.
**Action:** Always add `aria-hidden="true"` to `<span className="material-symbols-outlined">` elements when they are used inside buttons or links that already have an accessible label.
