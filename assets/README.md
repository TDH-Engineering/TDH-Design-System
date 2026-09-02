# Assets

No proprietary brand assets (official logo files, project photography, custom icon set) were provided with this design system. This folder documents the intended asset strategy so the real files can drop in cleanly.

## Logo / wordmark
- **Current:** a typographic wordmark built from the brand fonts — `TD&H` in Archivo extrabold with an orange ampersand, with an optional spaced Space Mono lockup (`ENGINEERING` / `AI HUB`). Reference implementation: `../guidelines/brand-wordmark.html`.
- **Needed:** the official TD&H logo as SVG (preferred) and PNG, in light and dark variants. Drop them here as `logo-light.svg`, `logo-dark.svg`, etc., and replace the wordmark in `ui_kits/ai-hub/SiteHeader.jsx` and `Landing.jsx`.

## Icons
- **Current:** [Lucide](https://lucide.dev) line icons loaded from CDN (`lucide@0.460.0`) — a deliberate substitution for the original Font Awesome. No files stored locally.
- If the firm licenses a specific icon set, add the SVGs/font here and update the `Icon` helper in `ui_kits/ai-hub/Icon.jsx`.

## Imagery
- **Current:** none — the system uses the blueprint-grid motif in place of photography.
- **Needed:** real, cool/documentary project photography (water & wastewater plants, bridges, roadways, structures). Store originals here and reference from kits.

## Fonts
- Archivo + Space Mono load from Google Fonts (`tokens/fonts.css`) and match the spec exactly. To self-host, add `.woff2` files under `assets/fonts/` and convert `tokens/fonts.css` to `@font-face` rules.
