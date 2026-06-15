---
name: mi-dashboard-design
description: Use this skill to generate well-branded interfaces and assets for mi-dashboard, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a dark-mode, Apple/Linear-quality Personal Life Dashboard (Spanish-language PWA).
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. Link `styles.css`
for tokens; for components either compose `window.MiDashboardDesignSystem_1a61a0.*`
after loading `_ds_bundle.js`, or copy the relevant `ui_kits/mi-dashboard/*.jsx`
patterns. If working on production code, copy assets and read the rules here to
become an expert in designing with this brand.

Key facts to internalize first:
- **Theme:** dark "Canvas Neutral" — `#09090b` canvas, zinc surfaces, ~90%
  neutral / ~10% accent. Electric blue `#3b82f6` (+ cyan `#00f0ff` glow) is the
  only brand chroma; green = success, amber = warning, red = danger.
- **Type:** system-first stack (Inter fallback); heavy 800 figures, uppercase
  11px eyebrows, Spanish number formatting (`€48.250`, `7,4h`, `+2,4%`).
- **Surfaces:** 20px bento cards, hairline borders + inset top highlight, accent
  glows for active/alert states, sparing glassmorphism on the floating TabBar.
- **Icons:** Lucide-style line icons (see `ui_kits/mi-dashboard/Icons.jsx`); no
  emoji — status uses colored dots + tinted badges.
- **Voice:** Spanish, informal *tú*, calm precise coach tone, sentence-case.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.
