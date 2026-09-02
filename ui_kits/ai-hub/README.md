# UI Kit — TD&H AI Hub

An interactive recreation of the **TD&H AI Hub**: the firm's internal portal where employee-owners reach a small suite of grounded AI tools (proposal drafting, standards lookup, calc checking, QA/QC, project knowledge, RFP triage).

This kit is the canonical surface the design tokens were extracted from (the CivAI / TD&H AI Hub landing page). It demonstrates the brand system in product context: blueprint-grid hero, Space Mono eyebrows, teal/orange, the deep-teal stat band, and tight technical cards.

## Run it
Open `index.html`. It composes the published design-system components from `_ds_bundle.js` (Button, Card, Badge, Eyebrow, Stat) plus kit-local layout components. Icons come from **Lucide** (CDN) — see ICONOGRAPHY in the root `readme.md`.

## Interactive flow
1. **Landing** — hero + six-tool grid + adoption stat band + news.
2. Click any tool card (or **Open a tool**) → opens the **Assistant** workspace.
3. In the assistant: pick a tool from the sidebar, try the suggested prompt or type your own, send (Enter), and get a canned, tool-specific grounded reply.
4. **All tools** / the wordmark returns home.

## Files
| File | Role |
|---|---|
| `index.html` | App shell + view routing (home ↔ tool) |
| `SiteHeader.jsx` | Sticky header — wordmark, nav, status, avatar |
| `Landing.jsx` | Hero, tool grid, stat band, news, footer (exports `TOOLS`) |
| `Assistant.jsx` | Tool workspace — sidebar, chat thread, composer |
| `Icon.jsx` | Lucide icon helper |

## Fidelity notes
Recreation, not production. Responses are stubbed; nav links are inert. Layout, type, color, spacing, and component usage follow the design system exactly. No real TD&H project data is used — sample content is illustrative.
