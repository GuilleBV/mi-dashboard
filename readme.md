# mi-dashboard · Design System

A dark-mode, **Apple/Linear-quality** design system for **mi-dashboard** — a
*Personal Life Dashboard* PWA that unifies wealth, training, biometrics, habits
and finances into one bento interface. Spanish-language product.

> **Sources.** This system was authored from a written product specification
> (no external codebase or Figma was provided). The spec defined the
> "Canvas Neutral" dark theme, the electric-blue/green/danger accent system,
> glassmorphism + glow effects, the system-font stack, and the five product
> sections (Overview · Gym & Suplementos · Salud · Organizador · Finanzas).
> If you have the original app codebase or a Figma file, attach it via the
> Import menu and we can reconcile pixel-level details.

---

## What's inside
- **Tokens** (`styles.css` → `tokens/*.css`) — the full Canvas Neutral palette,
  type scale, spacing, radii, and the shadow/glow/glass effect system.
- **Components** (`components/<group>/`) — Button, IconButton, Switch, BentoCard,
  ProgressBar, ProgressRing, StatValue, Badge, TabBar.
- **UI kit** (`ui_kits/mi-dashboard/`) — the full interactive PWA across all five
  sections.
- **Specimen cards** (`guidelines/*.card.html`) — foundation swatches shown in the
  Design System tab.

---

## CONTENT FUNDAMENTALS

**Language.** Spanish (España), informal second person (**tú**). The product
talks *to* the user, warmly but without flattery: "Buenos días, Mateo",
"Toma creatina antes de entrenar", "Faltan 4.240 pasos".

**Tone.** Calm, precise, encouraging — a quiet coach, not a hype app. Short
declaratives. No exclamation marks in chrome. Motivation comes from *data made
legible* (a streak number, a recovery %, a glowing ring), never from cheerleading
copy.

**Casing.**
- Section & card titles: **Sentence case** ("Foco diario", "Radar de suscripciones").
- Eyebrows / micro-labels: **UPPERCASE**, 0.05em tracking ("PATRIMONIO PRIVADO",
  "ESTE MES", "HIDRATACIÓN").
- Buttons: Sentence case ("Añadir", "Posponer").

**Numbers & units.** Spanish locale formatting — `.` for thousands
(`€48.250`), `,` for decimals (`7,4h`, `+2,4%`, `1,4 / 2,5 L`). Currency symbol
leads (`€`). Always tabular figures. Negative amounts use a real minus `−` and
render muted or danger-red.

**Vocabulary.** Domain-specific but plain: *Patrimonio, Racha, Foco diario,
Recuperación, Esfuerzo, Constancia, Suplementos, Movimientos*. Mixes fitness,
biometric and personal-finance language naturally.

**Emoji.** Avoided in production chrome. Status and priority are expressed with
**colored dots and line icons**, not emoji. (The original spec sketched emoji
like 👁️/🔴; we replaced them with the icon + dot system for an Apple-grade
finish — see ICONOGRAPHY.)

**Privacy voice.** Financial figures are user-private by default-capable: a single
eye toggle masks any amount to `••••••`. Copy never shames spending.

---

## VISUAL FOUNDATIONS

**Overall vibe.** "Canvas Neutral" — a near-black zinc canvas where content floats
on softly top-lit bento tiles. Depth comes from **hairlines and accent glows**,
not heavy drop shadows. Think Linear's restraint + the Apple Fitness rings'
clarity, at night.

**Color.**
- *Canvas:* pure dark `#09090b` base; surfaces step up `#18181b → #27272a`.
- *Ink:* white primary, zinc-400 `#a1a1aa` muted, zinc-500 faint.
- *Accents are rationed.* Electric blue `#3b82f6` (+ cyan `#00f0ff` for glow) is
  the only brand chroma; green `#10b981` = success/recovery, amber `#f59e0b` =
  warning, red `#ef4444` = danger/expense. A screen is ~90% neutral, ~10% accent.

**Type.** System-first stack (`system-ui, -apple-system, BlinkMacSystemFont,
Inter…`) so it reads as native SF Pro on Apple devices; **Inter** is loaded as a
cross-platform fallback. Tight negative tracking on large figures
(`-0.02em`). Heavy 800 weight reserved for ring centers and hero numbers.
Uppercase 11px eyebrows label everything.

**Backgrounds.** No photography, no illustration. The canvas is flat zinc with
**two faint radial accent glows** bleeding from the top corners (blue + cyan).
Cards carry a 160° `#27272a→#18181b` gradient that simulates top lighting.

**Borders & cards.** Every card: `1px solid rgba(255,255,255,0.08)` hairline,
`20px` radius, an inset top highlight (`inset 0 1px 0 rgba(255,255,255,0.06)`),
and a soft `shadow-md`. Active/alert cards swap the border for a colored glow
ring (blue / green / danger).

**Shadows & glows.** Two systems: (1) subtle black elevation shadows for float;
(2) **accent glows** — `0 0 15px rgba(0,240,255,0.3)` on active controls,
colored 1px-ring + blur on alert cards. Glow = "this is live/important".

**Transparency & blur.** Glassmorphism is used sparingly and purposefully: the
floating TabBar and any sheet use `backdrop-filter: blur(12px) saturate(140%)`
over a `rgba(24,24,27,0.72)` fill. Inset wells (progress tracks, toggle troughs)
use `rgba(0,0,0,0.3)` + inner shadow.

**Corner radii.** Controls 14px · bento cards 20px · sheets 28px · bars/dots/chips
fully pill (999px). Nothing is sharp-cornered.

**Hover / press states.** Hover lifts opacity / lightens fill subtly. Press is
expressed by the spring-knob on Switch and the active glow on selection — not by
shrinking. The active TabBar item fills `blue-15` and gains the cyan glow.

**Animation.** Restrained and functional. Standard easing
`cubic-bezier(0.4,0,0.2,1)`; durations 150/250/300ms. Section changes
**fade-in-up 300ms**. Progress bars/rings animate their fill width/dash. The
signature motion is the **slide-out delete** (400ms collapse of height + opacity)
on resolved habits, and the spring knob on Switch. No infinite/decorative loops;
`prefers-reduced-motion` disables all of it.

**Layout.** Mobile-first single column, max-width **440px**, generous 20px
content padding, 16px card rhythm. Bento grids (1- and 2-up) inside sections. The
TabBar is the only fixed element (floating, bottom, glass).

---

## ICONOGRAPHY

- **Style:** Lucide-style **line icons** — 24px grid, 2px stroke, round caps/joins.
  This matches the Apple/Linear aesthetic far better than emoji or filled glyphs.
- **Delivery:** a curated, **inline-SVG set** ships in
  `ui_kits/mi-dashboard/Icons.jsx` (`window.Icon` — names like `grid`, `dumbbell`,
  `heart`, `wallet`, `eye`, `flame`, `droplet`, `bell`…). It's offline-safe and
  has no CDN dependency. For the *full* library, add the
  [Lucide](https://lucide.dev) CDN and map names 1:1 — geometry is compatible.
  *(Substitution flag: this is a Lucide-compatible hand-rolled subset, not the
  official package — swap in real Lucide if you want the complete set.)*
- **Status semantics:** priority and state use **colored dots**
  (red/amber/green) and tinted `Badge`s — never emoji. Privacy uses `eye` /
  `eye-off`.
- **Sizing:** 18–22px inside controls and list rows; 21–22px in the TabBar.
  Icons inherit `currentColor`, so tone follows the surrounding text/accent color.
- **Emoji / Unicode:** not used as UI. The only non-glyph marks are the
  mathematical minus `−` in negative amounts and `••••••` for masked values.

---

## VISUAL MOTIFS — quick reference
| Motif | Token / value |
|---|---|
| Canvas | `--bg-base` `#09090b` + dual top radial glows |
| Card | `--gradient-card`, `--border-subtle`, `--radius-lg` (20px), inset top hairline |
| Active glow | `--glow-active` `0 0 15px rgba(0,240,255,.3)` |
| Accent | `--accent` `#3b82f6` / glow `#00f0ff` |
| Mini bar | `--bar-h` 4px, pill, accent fill |
| Ring | SVG `stroke-dasharray`, 10px stroke, heavy center |
| Glass | `--bg-glass` + `--blur-glass` |
| Motion | `--ease-standard`, fade-in-up 300ms, slide-out 400ms |

---

## INDEX (manifest)

**Root**
- `styles.css` — design-system entry (link this one file).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for Claude Code.

**Tokens** (`tokens/`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`

**Components** (`components/`)
- `forms/` — Button, IconButton, Switch
- `data/` — ProgressBar, ProgressRing, StatValue
- `layout/` — BentoCard
- `feedback/` — Badge
- `navigation/` — TabBar

Each directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a
`*.card.html` specimen.

**Guidelines / specimen cards** (`guidelines/`)
- Colors: neutrals · accents · semantic · fills
- Type: display · body · numeric
- Spacing: scale · radii
- Effects: shadows · glass

**UI kit** (`ui_kits/mi-dashboard/`)
- `index.html` (interactive) + `Overview/Gym/Salud/Organizador/Finanzas.jsx` —
  see its own `README.md`.

**Namespace:** components are exposed at
`window.MiDashboardDesignSystem_1a61a0.<Name>` after loading `_ds_bundle.js`.
