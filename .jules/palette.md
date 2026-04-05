## 2024-05-15 - [Added keyboard focus states to main CTA]
**Learning:** Found that custom buttons and links in the primary container often lack default `focus-visible` styles which hurts keyboard accessibility, specifically when relying on Tailwind without custom base styles.
**Action:** Always ensure `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` (or similar offset) is added to custom interactive elements.

## 2024-05-18 - Missing ARIA Labels and Focus States on Custom Icons/Buttons
**Learning:** In the AnonEdu app, custom icon-only buttons (like the `chat-send-btn`) and floating action buttons (like `new-discussion-mobile-btn`) frequently lack descriptive `aria-label`s and visible keyboard focus states. Since custom CSS is heavily used in this project, these elements might appear visually complete but are inaccessible to screen reader users and keyboard navigators.
**Action:** When adding or updating custom interactive elements in this app, ensure `aria-label` is explicitly provided for icon-only components, and include Tailwind's `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` classes to guarantee standard keyboard accessibility.
