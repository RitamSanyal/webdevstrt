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
  - Backgrounds: `--bg-color: #0f172a`, `--card-bg: #1e293b`, `--nav-bg: rgba(15, 23, 42, 0.8)`
  - Text colors: `--text-primary: #f8fafc`, `--text-secondary: #94a3b8`
  - Accents: `--accent-color: #38bdf8`, `--accent-hover: #0ea5e9`
  - Transitions: `--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Animations:** Scroll animations must be triggered via class toggle (`.reveal.active`).
  - `.reveal`: Initial state `opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out;`
  - `.reveal.active`: Final state `opacity: 1; transform: translateY(0);`
  - **Profile Morph:** Hero image morph uses `animation: morph 8s ease-in-out infinite;` altering `border-radius` from `30% 70% 70% 30% / 30% 30% 70% 70%` to `70% 30% 30% 70% / 70% 70% 30% 30%`.
  - **Infinite Scroll Track:** The certificates horizontal scroll uses `.certificates-track` with `animation: scroll 30s linear infinite;` translation of `-25%` (supporting 3 sets of cloned elements). It must pause on hover/active states.
- **Layout & Cards:**
  - Use `.grid-2` (columns auto-fit, minmax 250px) and `.card-container` (columns auto-fit, minmax 300px).
  - Cards use background `var(--card-bg)`, border `1px solid rgba(255, 255, 255, 0.05)`, and transition `var(--transition)`.
  - On hover, cards transition with `transform: translateY(-10px); background-color: #24324d; border-color: rgba(56, 189, 248, 0.3); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);`.
- **Responsive Layout:** Keep styling responsive using the established breakpoints at the bottom of the stylesheets (992px and 768px).
  - **992px Breakpoint:** Swap hero content direction (`flex-direction: column-reverse`), center text, shrink profile image to `250px`.
  - **768px Breakpoint:** Hide desktop `.nav-links`, reduce padding for container/hero, stack `.education-card` in a column.

### JavaScript
- **Event Listeners:** All initialization logic should be wrapped inside a `DOMContentLoaded` event listener.
- **IntersectionObserver:** Use the `IntersectionObserver` API for viewport-based scroll reveals.
  - Target threshold: `0.15` (15% visible).
  - Call `observer.unobserve(entry.target)` after revealing to animate exactly once.
- **Scroll Handling:** Maintain JavaScript-controlled smooth scrolling to respect fixed header offsets.
  - Smooth scroll handler on nav links must offset targets by `- 70` px to clear the navbar height.
  - Active section tracker updates `.nav-links a` with class `.active-nav` based on current offset threshold (`offsetTop - 150`).
  - Navbar scroll effect triggers when `window.scrollY > 50` (adjusts padding, darkens background, applies box-shadow).
- **Infinite Scroll Cloner:** If `.certificates-track` is present, clone its child elements 3 times via script to ensure a continuous layout.
- **PDF Modal Event Delegation:** Use event delegation for all elements with a `data-pdf` attribute. Setting the PDF path to `#pdf-viewer` source, displaying the `#cert-modal`, and toggling body overflow (`hidden`/`auto`) is required.

## 3. Contribution Workflow
- **Surgical Updates:** Only modify the HTML structure in a targeted, semantic manner. Do not rebuild elements unnecessarily.
- **Asset Integrity:** Place new certificates, resumes, or profile images inside `assets/`.
- **Testing:** Always verify interactive features (scroll reveals, mobile navigation toggle, links) and cross-browser consistency before completing a task.
