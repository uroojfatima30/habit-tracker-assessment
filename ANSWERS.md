# Assessment Answers

### 1. How to run
Open `index.html` directly in any web browser, or launch it locally using the VS Code "Live Server" extension to inspect asset rendering on simulated viewports.

### 2. Stack & design choices
- **Stack chosen:** Vanilla HTML5, CSS3, and modern standard JavaScript (ES6+).
- **Why:** Choosing a lightweight vanilla architecture guarantees near-instant rendering speeds without forcing external code overhead, compilation runtimes, or node package vulnerabilities on the reviewer's test machine.
- **Visual/Interaction Decision 1:** I isolated layout visibility toggles cleanly. If the array data length evaluates to zero, a custom `.empty-state` container wrapper breaks into context. This alerts the user explicitly on how to initiate state.
- **Visual/Interaction Decision 2:** High priority was given to the current day visibility context. An independent `.today-highlight` background hue is applied to the active viewport date grid array to instantly flag today's timeline loop.

### 3. Responsive & accessibility
- **Responsive behavior (360px vs 1440px):** On full-screen laptop resolutions, the table extends to read across the entire container. For mobile viewports (360px), squeezing columns causes bad typography text clipping, so I encapsulated the tracker inside an `.grid-scroll-wrapper` container with `overflow-x: auto`. This keeps data stable while letting touch displays scroll left or right fluidly.
- **Accessibility consideration handled:** Form components use native elements like explicit submit actions and form labels. Form fields contain active HTML parameters like `autocomplete="off"` to prevent native input fields from breaking user data entry visually.
- **Accessibility consideration skipped & why:** Due to time management boundaries, I avoided customizing fully isolated screen-reader announcements (`aria-live`) for real-time calculation shifts inside the streak badge calculations.

### 4. AI usage
- **Tools used:** Gemini
- **Prompts & Outputs:** I requested reference patterns for tracking local calendars, generating a dynamic array loop containing 7 relative timestamp values based on a single mutable day index baseline, and an explicit strategy to prevent back-to-back loop failures when parsing historical checked variables.
- **What I tweaked and why:** The core script templates provided initially did not reconcile target class name definitions between my actual table container classes and script event query listeners. I refactored the generated script loop hooks to target my own document object model IDs (`#grid-body`, `#week-range-text`), built functional window-level array handlers, and manually applied the CSS highlighting layers.

### 5. Honest gap
- **What isn't polished enough:** The habit item renaming interaction option wasn't fully completed. While adding and dropping records functions correctly, editing a text row directly inline without triggering page flow shifts requires a secondary input toggle loop.
- **What I would do to fix it with another day:** I would swap raw habit labels into interactive dynamic state blocks, allowing users to switch back and forth between read-only headers and direct inputs whenever a row undergoes click target updates.