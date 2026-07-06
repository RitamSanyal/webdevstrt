# Project Rules: Portfolio Ritam Sanyal

This file outlines the rules, tech stack details, and development conventions for this static portfolio web application. Antigravity agents working on this workspace must adhere to these guidelines.

## 1. Tech Stack & Environment
- **Core Frontend:** HTML5 (semantic markup), CSS3 (Vanilla), JavaScript (ES6+)
- **Fonts:** [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts.
- **Icons:** [FontAwesome 6.4.0](https://fontawesome.com/)
- **Assets:** Resumes, PDFs, and images are stored inside the `assets/` directory.

## 2. Coding Conventions

### CSS Styling
- **Variables:** Always use custom CSS variables defined in `:root` (e.g. `--accent-color`, `--bg-color`) to maintain consistent themes.
- **Animations:** Scroll animations must be triggered via class toggle (`.reveal.active`).
- **Responsive Layout:** Keep styling responsive using the established breakpoints at the bottom of the stylesheets (992px and 768px).

### JavaScript
- **Event Listeners:** All initialization logic should be wrapped inside a `DOMContentLoaded` event listener.
- **IntersectionObserver:** Use the `IntersectionObserver` API for viewport-based scroll reveals.
- **Scroll Handling:** Maintain JavaScript-controlled smooth scrolling to respect fixed header offsets.

## 3. Contribution Workflow
- **Surgical Updates:** Only modify the HTML structure in a targeted, semantic manner. Do not rebuild elements unnecessarily.
- **Asset Integrity:** Place new certificates, resumes, or profile images inside `assets/`.
- **Testing:** Always verify interactive features (scroll reveals, mobile navigation toggle, links) and cross-browser consistency before completing a task.
