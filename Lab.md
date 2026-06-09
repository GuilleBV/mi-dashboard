 Build me a single self-contained HTML file called NAME-lab.html — a visual playground in the same spirit as a "graph animation lab."

Before you write any code, grill me with questions until you fully understand what I want. Ask about: what THE THING is and why I'm building this lab, who'll use it, the specific styles/variants I want to compare, which controls belong in the top bar, the vibe/brand (colors, fonts, mood), how many cards to start with, and anything you're unsure about. Ask follow-ups, push back on vague answers, and only start building once you have a clear picture. Then summarize what you'll build and wait for my go-ahead.

Requirements:
- One file, no build step, no dependencies (vanilla HTML/CSS/JS, all inline). Fonts via a Google Fonts <link> only.
- Dark, minimal "rowan4" look: black background, white text, a mint accent (#6EE7B7), Instrument Serif for headings (italic), Inter for UI text, JetBrains Mono for tags. Subtle radial-gradient glows, a glassmorphic sticky top bar with backdrop-filter:blur, rounded cards with hairline borders.
- A sticky control bar at the top with shared options that apply to every card at once (color theme swatches + a custom color picker, an animation/style dropdown, a content/dataset selector, a slider or two, and a few toggle checkboxes).
- A responsive grid of cards (repeat(auto-fill,minmax(420px,1fr))), where each card = one distinct STYLE/variant of THE THING. Each card has a mono label tag in a corner, a "replay" affordance, and a "copy" affordance. Cards re-render live when the top-bar controls change.
- Self-documenting: put a comment block at the top explaining the concept and the workflow: open in a browser, tell Claude "card N, do X", Claude edits this file, you refresh.
- Polished and animated (smooth easing cubic-bezier(.16,1,.3,1)). Keep all styles in one <style> block and all logic in one <script>.

Start with several cards covering meaningfully different takes on THE THING.

--- FILL THIS IN (or leave blank and let Claude ask) ---
- THE THING this lab explores: 
- File name (NAME-lab.html): 
- Top-bar controls I want (the knobs that affect all cards): 
- Number of starter cards: 
- Accent color / fonts (leave blank to keep mint + the default fonts): 
- Match an existing page's style? (point Claude at one of my other .html files): 
