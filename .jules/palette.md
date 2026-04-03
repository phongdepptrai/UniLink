## 2024-05-15 - [Added keyboard focus states to main CTA]
**Learning:** Found that custom buttons and links in the primary container often lack default `focus-visible` styles which hurts keyboard accessibility, specifically when relying on Tailwind without custom base styles.
**Action:** Always ensure `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` (or similar offset) is added to custom interactive elements.
## 2024-04-03 - Accessible Icon-Only Elements
**Learning:** Adding accessible focus states and screen reader labels (`aria-label`) for interactive, icon-only components across Next.js apps significantly improves navigation, specifically leveraging the `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` utility pattern from Tailwind CSS alongside semantic `aria-label`s.
**Action:** Always include this specific `focus-visible` pattern and a descriptive `aria-label` when implementing any button or link that uses only an icon.
