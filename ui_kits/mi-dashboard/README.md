# mi-dashboard · UI Kit

High-fidelity recreation of the **Personal Life Dashboard** PWA — a dark-mode,
Apple/Linear-quality bento dashboard with five sections.

## Run it
Open `index.html`. It loads the compiled design-system bundle
(`../../_ds_bundle.js`) + `../../styles.css`, then mounts the React screens.
Tap the bottom **TabBar** to move between sections (300ms fade).

## Files
| File | What |
|---|---|
| `index.html` | App shell — phone column, radial-glow canvas, fixed glass TabBar, section fade router |
| `Icons.jsx` | Self-contained Lucide-style line-icon set (`window.Icon`) |
| `AppData.jsx` | All mock state (`window.appData`) — Spanish copy |
| `Shared.jsx` | `SectionTitle` helper |
| `Overview.jsx` | Greeting (time-aware), Patrimonio with privacy toggle, Foco diario, quick mini-bars |
| `Gym.jsx` | Supplement time-blocks (tap to complete), monthly constancy grid, `<details>` routine accordion |
| `Salud.jsx` | Three biometric `ProgressRing`s + micro-metrics, Smart Water stepper (44px targets) |
| `Organizador.jsx` | RACHA scorecard (container-query clamp, gradient text), habits with click-to-reveal + slide-out delete |
| `Finanzas.jsx` | Hero net worth, accounts & transactions lists, subscription radar (danger-glow ≤3 days) |

## Composition
Every screen composes the published primitives from
`window.MiDashboardDesignSystem_1a61a0` — `BentoCard`, `StatValue`,
`ProgressBar`, `ProgressRing`, `Badge`, `Button`, `IconButton`, `Switch`,
`TabBar`. Screens never re-implement a primitive; they only arrange them and
feed `appData`.

## Notes
- Icons are an inline curated subset (offline-safe). For the full icon library,
  drop in the Lucide CDN and map names 1:1.
- This is a visual/interaction recreation — interactions are faked against
  `appData` (no persistence, no backend).
