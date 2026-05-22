# Developer Assessment — Weekly Habit Tracker

## 1. How to Run
To execute this utility locally:
1. Extract the project workspace to your local folder environment.
2. Launch the application immediately by opening the `index.html` file in any modern internet browser (Chrome, Edge, Safari, or Firefox).
3. *Alternative:* If using VS Code, use the **Live Server** extension to host the files locally at `http://127.0.0.1:5500` for seamless hot-reloading.

No package installations, external dependencies, or build compilations are needed.

---

## 2. Stack & Design Choices
 **Frontend Architecture:** I built this using native, vanilla HTML5, CSS3, and JavaScript (ES6+). For a lightweight tracker centered around browser persistence, skipping heavy web frameworks minimized the initial bundle size and eliminated complex build pipelines.
 **Design Decision 1 (Flexbox Columns):** I selected a dynamic flexible layout flow to arrange the habits seamlessly vertically alongside an automated 7-day responsive grid pattern spanning left-to-right. This configuration maintains pixel-perfect alignment as habits scale up from 3 items to 15.
 **Design Decision 2 (Interactive Visual States):** The active weekday column features a custom translucent highlight overlay to pinpoint the current day. Furthermore, checked habits transition dynamically into vivid, highly visible states, whereas future tracking periods are set to a lower opacity to communicate a disabled state.

---

## 3. Responsive & Accessibility
 **Viewport Scaling:** The user interface displays a comprehensive, side-by-side dashboard matrix on a standard 1440px desktop screen. For 360px mobile viewports, the columns adapt via smart media queries, transforming into a stacked, scrollable setup to protect layout text from collapsing.
 **Accessibility Practices:** Interactive controls use native semantic tags and explicit descriptive text parameters to remain easily identifiable by accessibility software. Distinct visual focus parameters (`:focus`) are mapped across buttons to ensure smooth keyboard-only operation.
 **Known Skip:** Custom ARIA-live audio announcements calculating real-time streak updates with every mouse click were skipped due to the tight completion deadline.

---

## 4. AI Usage
 **Tool:** Gemini AI
 **Prompt:** "Provide standard responsive grid boilerplates and local storage state handler functions for a single-page tracking utility."
 **Output:** A structural layout pattern coupled with primary local array handlers.
 **Modifications:** The generated layout relied on static tables that broke on mobile. I completely replaced the engine with an auto-fit CSS Grid structure to accommodate variable screen sizes. I also refactored the local storage syncing logic entirely to handle accurate cross-week data persistence safely.

---

## 5. Honest Gap
Given an extra day, I would implement an interactive onboarding guide within the dashboard's empty state. When no habits exist, a basic prompt appears; adding a detailed guide with dummy placeholders would offer a warmer experience for first-time users.

