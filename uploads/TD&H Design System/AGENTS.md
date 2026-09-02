# AGENTS.md — TD&H Design System

**Version:** 2026-09-02
**Summary:** Machine-readable build rules for TD&H Engineering interfaces. Teal-primary, white-ground, sparing orange. Consume `styles.css` for tokens, `_ds_bundle.js` for components. Use listed values only.

---

## 0. Setup

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

```js
// Portable: resolves the namespace whatever project id it carries.
const DS = window[Object.keys(window).find(k => /^TDHDesignSystem/.test(k))];
const { Button, Card, Eyebrow, AppShell } = DS;
```

The compiler names the global `TDHDesignSystem_<projectId>`, so the exact key changes if this system is recreated in another workspace or account. Resolve it by prefix as above — never hard-code the suffix.

- Token values live in `styles.css` and the files it imports (`tokens/*.css`). That is the single source of truth — the tables below mirror it.
- Never edit `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`. Generated.
- Icons: Lucide `0.460.0` via CDN. No other icon set. No emoji. No hand-drawn SVG icons.

---

## 1. Color tokens

### Brand
| Token | Value | Use |
|---|---|---|
| `--brand-teal` | `#0E4E5E` | primary |
| `--brand-teal-dark` | `#0A3B47` | teal hover/pressed |
| `--brand-teal-deep` | `#093039` | darkest band |
| `--brand-orange` | `#E1542A` | accent — sparing |
| `--brand-orange-dark` | `#C7461F` | orange hover/pressed |
| `--brand-navy` | `#1C3A5C` | `PlatformBar` ONLY |
| `--brand-navy-dark` | `#16304C` | navy hover/pressed |
| `--brand-ink` | `#13333D` | headings |
| `--brand-slate` | `#54636A` | captions, low-emphasis text |
| `--brand-paper` | `#FFFFFF` | page + cards |
| `--brand-mist` | `#EDF1F0` | soft fills, icon chips |
| `--brand-taupe` | `#A89C87` | RARE — print/editorial, not UI |
| `--brand-taupe-light` | `#C9BCA6` | RARE |
| `--brand-grid` | `rgba(20,50,60,0.05)` | blueprint grid line |
| `--brand-hairline` | `rgba(20,50,60,0.14)` | border on white |

### Semantic — the only permitted extra hues, state only
| Token | Value |
|---|---|
| `--success` | `#1C7C54` (`158 64% 30%`) |
| `--warning` | `#F59E0B` (`38 92% 50%`) |
| `--destructive` | `#D32F2F` (`0 72% 48%`) |

### shadcn channels — consume as `hsl(var(--token))`
`--background: 0 0% 100%` · `--foreground: 196 30% 15%` · `--card: 0 0% 100%` · `--card-foreground: 194 52% 16%` · `--popover: 0 0% 100%` · `--popover-foreground: 196 30% 15%` · `--primary: 192 74% 21%` · `--primary-foreground: 0 0% 100%` · `--accent: 14 75% 52%` · `--accent-foreground: 0 0% 100%` · `--secondary: 192 74% 15%` · `--secondary-foreground: 0 0% 100%` · `--muted: 168 16% 94%` · `--muted-foreground: 199 12% 37%` · `--border: 200 14% 88%` · `--input: 200 14% 88%` · `--ring: 192 74% 21%`

### `.dark` (deep-teal surface — orange leads)
`--background: 192 74% 21%` · `--foreground: 180 30% 95%` · `--primary: 14 75% 52%` · `--secondary: 192 30% 72%` · `--muted: 192 50% 26%` · `--muted-foreground: 192 14% 72%` · `--border: 0 0% 100% / 0.16` · `--ring: 14 75% 52%`

### Charts — teal ramp
`--chart-1: 192 74% 21%` · `--chart-2: 192 60% 34%` · `--chart-3: 192 40% 52%` · `--chart-4: 199 12% 37%` · `--chart-5: 14 75% 52%` (highlight series only)

---

## 2. Spacing — 8px grid, 4px half-step

`--space-0: 0` · `--space-1: 4` · `--space-2: 8` · `--space-3: 12` · `--space-4: 16` · `--space-5: 24` · `--space-6: 32` · `--space-7: 40` · `--space-8: 48` · `--space-9: 64` · `--space-10: 80` · `--space-12: 96` · `--space-16: 128`

Layout: `--container-max: 1200px` · `--container-wide: 1320px` · `--gutter: 1.5rem` · `--section-y: 6rem` · `--grid-cell: 96px` · `--sidebar-w: 214px` · `--sidebar-w-collapsed: 64px`

---

## 3a. Grid specification

**One grid, one pitch: 96px × 96px, universally.** There is exactly one grid token, `--grid-cell: 96px`. Do not introduce a second pitch, a finer "texture" grid, or a per-surface variant. If a design appears to call for a different pitch, that is a mistake — use 96px or use no grid.

### The recipe

Two 1px `linear-gradient` lines, one horizontal and one vertical, tiled via `background-size`. Colored by `--brand-grid`, `rgba(20, 50, 60, 0.05)`.

```css
background-image:
  linear-gradient(var(--brand-grid) 1px, transparent 1px),
  linear-gradient(90deg, var(--brand-grid) 1px, transparent 1px);
background-size: var(--grid-cell) var(--grid-cell);
```

### Where it goes — page surfaces only

The grid is a **page-level ground**. It belongs to the page or app content region and nowhere else.

**Never put the grid inside:**
- cards, of any variant, including their header bands
- banners, stat bands, callout panels, or the teal `.dark` surface
- sidebars, top bars, footers, or any app chrome
- buttons, chips, inputs, or any control
- any nested surface that sits on top of another surface

A nested surface is a flat fill. Teal bands and card headers are solid teal with no texture.

---

## 3b. Grid knockout rule

Grid lines running behind body text are distracting and hurt legibility. Content sitting on the page grid **must occlude the grid behind itself.**

### Mechanism — opaque background, not a border

Use an opaque `background` on the content container, matching the page surface color. **A transparent border does not work.** It reserves space but occludes nothing; the grid shows straight through it. This is the most likely way to get this wrong, because "invisible border" is the natural way to describe the intent in words and the wrong way to build it.

### Scope — one continuous container

Apply the knockout to the content column as **one continuous container running the full height of the content.** Do not apply it per section, per card, or per text element — individual knockouts produce a patchwork of overlapping rectangles that reads worse than the exposed grid.

Correct result: grid visible in the outer page margins, stopping cleanly at the edge of the content column, with the column itself clear top to bottom.

### Clearance — one full grid cell minimum

The knocked-out column must be meaningfully wider than the text it contains, with visible breathing room on both sides before the grid resumes. Minimum clearance is **one full grid cell (96px)** left and right. Tighter than that and the cleared area reads as a cropping mistake rather than a deliberate surface. Express the padding with a spacing token — `--space-12` (96px) is exactly one cell. Never a literal.

```jsx
// CORRECT — opaque column, one grid cell of clearance each side,
// grid visible in the margins only
<div style={{
  backgroundImage: 'linear-gradient(var(--brand-grid) 1px, transparent 1px),'
    + 'linear-gradient(90deg, var(--brand-grid) 1px, transparent 1px)',
  backgroundSize: 'var(--grid-cell) var(--grid-cell)',
}}>
  <div style={{
    background: 'var(--brand-paper)',      // opaque — occludes the grid
    paddingLeft: 'var(--space-12)',        // 96px — exactly one cell
    paddingRight: 'var(--space-12)',
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
  }}>
    {/* every section and card lives inside this ONE container */}
  </div>
</div>

// INCORRECT — transparent border reserves space but occludes nothing;
// the grid runs straight through the text
<div style={{
  border: 'var(--space-12) solid transparent',
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
}}>
  {/* grid still visible behind this text */}
</div>

// INCORRECT — per-element knockout produces a patchwork of rectangles
<div>
  <h2 style={{ background: 'var(--brand-paper)' }}>Heading</h2>
  <p style={{ background: 'var(--brand-paper)' }}>Body copy</p>
  <Card>…</Card>
</div>
```

---

## 3. Type

Families: `--font-sans` / `--font-display` = `'Archivo', system-ui, -apple-system, sans-serif` · `--font-mono` = `'Space Mono', ui-monospace, 'SFMono-Regular', monospace`

Weights: `300 400 500 600 700 800`

Scale (px): `xs 12` · `sm 14` · `base 16` · `md 18` · `lg 22` · `xl 28` · `2xl 36` · `3xl 48` · `4xl 64` · `5xl 80`

Leading: `tight 1.05` · `snug 1.18` · `normal 1.5` · `relaxed 1.65`
Tracking: `tight -0.02em` (display) · `normal 0` · `wide 0.1em` (labels) · `wider 0.16em` (mono micro-labels)

Roles: display=`4xl` · h1=`3xl` · h2=`2xl` · h3=`xl` · h4=`lg` · body=`base` · caption=`sm` · eyebrow=`xs`

Rules: headlines sentence case, Archivo 800, tracking `-0.02em`. UPPERCASE only for letter-spaced Space Mono labels. Never uppercase a headline or body sentence.

---

## 4. Radius / border / shadow / motion

Radius (px): `sm 2` · `md 3` (controls) · `lg 2` (cards) · `image 6` (photography ONLY) · `xl 10` (large panels) · `pill 999` (true pills/avatars only)

Border: `--border-width: 1px` · `--border-width-thick: 2px` · `--border-accent: 3px` (left accent rule)

Shadow: `--shadow-none: none` (app card rest) · `--shadow-card: 0 1px 3px rgba(20,50,60,0.08)` (marketing rest, opt-in) · `--shadow-raised: 0 4px 14px -6px rgba(20,50,60,0.18)` (hover) · `--shadow-float: 0 24px 60px -28px rgba(14,78,94,0.45)` (overlays) · `--shadow-focus: 0 0 0 3px rgba(14,78,94,0.25)`

Motion: `--ease-standard: cubic-bezier(0.4,0,0.2,1)` · `--ease-out: cubic-bezier(0.16,1,0.3,1)` · `--duration-fast: 120ms` · `--duration-base: 200ms` · `--duration-slow: 320ms`. Hover darkens fill. Press `translateY(1px)`. No bounce, no spring, no decorative loops.

---

## 5. Component patterns

### Use the component, not raw markup

```jsx
// DON'T
<button style={{ background: '#0E4E5E', color: '#fff', borderRadius: 6, padding: '10px 18px' }}>Save</button>

// DO
<Button variant="primary">Save</Button>
```

### Cards rest flat; accent rule is on the LEFT

```jsx
// DON'T — 6px radius, resting shadow, top rule
<div style={{ borderRadius: 6, boxShadow: '0 1px 3px rgba(0,0,0,.1)', borderTop: '3px solid #E1542A' }}>…</div>

// DO
<Card accent="left" tone="field"
      footer={<Button variant="accent" size="sm">Open on phone</Button>}
      meta="Field app">
  <IconChip tone="field"><Icon name="clipboard-list" /></IconChip>
  <h3>Daily Inspection</h3>
</Card>
```

`accent`: `left` (app) | `top` (marketing). `tone`: `field` orange | `desk` teal | `taupe`. `dark` for the teal panel. `raised` opts into the marketing shadow. `interactive` for hover lift.

### Section labels: marketing vs app

```jsx
// Marketing — ticked eyebrow above the headline
<Eyebrow>Who we are</Eyebrow>
<h2>A full-service consulting engineering firm</h2>

// App — numbered eyebrow, then icon + inline mono meta
<Eyebrow number={1}>Dashboard</Eyebrow>
<SectionHeader icon={<Icon name="smartphone" />} title="In the field"
               meta={['Runs on your phone', 'Works without signal']} />
```

### App frame

```jsx
// DON'T hand-roll a sidebar, top bar, or footer band.
// DO
<AppShell
  platformBar={<PlatformBar eyebrow="TDH AI" title="TDH AI Platform" />}
  product="Permitting & Reg"
  nav={[{ id: 'overview', label: 'Overview', icon: <Icon name="layout-grid" /> }]}
  activeId="overview"
  onNavigate={setView}
  cta={<Button variant="accent" iconLeft={<Icon name="plus" />}>New Review</Button>}
  sidebarMeta={<>TDH AI Platform<br />P&amp;R Module · Internal use</>}
  breadcrumb={<Breadcrumb items={['P&R', 'Permitting & Regulatory']} />}
  contentFooter={<SiteFooter division="Engineering" />}
>…</AppShell>
```

### Wordmark

```jsx
// DON'T hand-color the mark
<span>TD<span style={{ color: '#E1542A' }}>&amp;</span>H</span>

// DO
<Wordmark subline="Permitting & Reg" />
<Wordmark subline="Engineering" inline size="md" onDark />
```

### Orange ampersand — display headlines only

```jsx
// DO — large display headline
<h2>Permitting <span style={{ color: 'var(--brand-orange)' }}>&amp;</span> Regulatory</h2>

// DON'T — mono labels, breadcrumbs, sublines, body copy keep the surrounding color
<Breadcrumb items={['P&R']} />   {/* ampersand stays slate */}
```

### Icons

```jsx
// DON'T
<span>📋</span>
<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/></svg>   // hand-drawn

// DO — Lucide, in a tinted chip on cards
<IconChip tone="desk"><Icon name="folder-open" size={16} /></IconChip>
```

### Forms

```jsx
// DO
<Input label="Full name" required />
<Input label="Phone" error="Enter a valid phone number." />
<Select label="Service line"><option>Civil</option></Select>
<Textarea label="Project description" rows={3} />
```

---

## 6. Rules

### Do not invent values
- **Colors:** use only §1. No new hex, no `oklch`, no gradients as decoration, no glow. Extra hues are `--success` / `--warning` / `--destructive` and only for real state.
- **Spacing:** use only the `--space-*` scale. No `padding: 15px`, no `margin: 22px`.
- **Type sizes:** use only the scale in §3. No `font-size: 17px`.
- **Radii:** use only §4. Cards are `2px`, controls `3px`, `6px` only on photography.
- **Shadows:** use only the five in §4. Do not author new `box-shadow` values.

### Token usage constraints
Each of these tokens is restricted to one job. Using it elsewhere is a defect.

| Token | Permitted use | Do not |
|---|---|---|
| `--brand-navy`, `--brand-navy-dark` | The `PlatformBar` rail only | Any other surface, text, border, or fill |
| `--brand-taupe`, `--brand-taupe-light` | Print / editorial artifacts | UI chrome of any kind — no buttons, borders, fills, or labels |
| `--brand-orange`, `--brand-orange-dark` | Buttons and select text; the active nav rule and the pinned sidebar CTA | Large fills, backgrounds, body copy, or a second unrelated element on the same view |
| `--radius-image` (6px) | Photography and media | Cards, controls, panels, or any non-image element |
| `--radius-pill` | True pills and avatars | Buttons, cards, inputs |
| `--radius-lg` (2px) | Cards | Controls (use `--radius-md`) |
| `--radius-md` (3px) | Buttons, inputs, chips, controls | Cards |
| `--radius-xl` (10px) | Large panels | Cards or controls |
| `--shadow-none` | App card resting state | — |
| `--shadow-card` | Marketing card resting state, opt in via `raised` | App cards — they rest flat |
| `--shadow-raised` | Hover state | Resting state |
| `--shadow-float` | Overlays, popovers, dialogs | Cards or inline content |
| `--shadow-focus` | Focus ring | Decoration |
| `--border-accent` (3px) | The left accent rule on app cards | General borders — use `--border-width` |
| `--grid-cell` (96px) | THE grid pitch — page and app content surfaces | A second pitch anywhere; cards, banners, header bands, chrome, controls, or any nested surface |
| `--brand-grid` | The blueprint grid line | Borders — use `--brand-hairline` |
| `--brand-hairline` | Borders on white | Text or fills |
| `--brand-mist` | Soft fills, icon chips | Text |
| `--brand-ink` | Headings | Large fills |
| `--brand-slate` | Captions, low-emphasis text | Headings or fills |
| `--brand-teal-deep` | The darkest band | Text |
| `--success`, `--warning`, `--destructive` | Real state only — success, caution, error | Categories, decoration, or variety |
| `--chart-5` (orange) | One highlight series | Multiple series — the rest of the ramp is teal |
| `--tracking-tight` | Large display type | Body or labels |
| `--tracking-wide`, `--tracking-wider` | Uppercase mono labels | Sentence-case text |

### Color discipline
- White ground. Teal carries the system. Orange is sparing.
- Never two colors inside one label, one figure, or one piece of text. An eyebrow's tick and number inherit the label color. A stat's suffix is a dimmed numeral, not a second hue.
- Max two brand colors per view.
- Orange budget on app surfaces: the active nav rule plus the pinned sidebar CTA. Two unrelated orange elements on one view is a defect.
- Navy is `PlatformBar` and nothing else.
- Taupe is not UI chrome.

### Structure
- Compose the published components. Do not reimplement `Button`, `Card`, or the app frame.
- The blueprint grid is one pitch, `96px`, on page and app content surfaces only. Never inside cards, banners, header bands, chrome, or controls. See §3a.
- Content on the page grid gets a single continuous opaque knockout column with at least one grid cell (96px) of clearance per side. See §3b. Never a transparent border; never per-element.
- Lay out sibling groups with flex/grid + `gap`. Not margins on each child, not source whitespace.
- Define `a` and `a:hover` colors from the palette in every document.

### Copy
- Sentence case. First person plural for the firm ("we"), second for the client ("you").
- No emoji anywhere.
- UPPERCASE only for letter-spaced mono labels.
- Tagline is verbatim: "Services Designed With You In Mind, Since 1965". Do not paraphrase.
- Ground claims in specifics (1965, five states, named projects). No marketing adjectives.

### Accessibility
- Focus ring is `--shadow-focus`. Never remove it without a replacement.
- `IconButton` requires `aria-label`.
- Minimum 44px hit targets on touch surfaces.
- Respect `prefers-reduced-motion`.

---

## 7. Repository conventions

### Paths are frozen
After the first push, these paths are **fixed forever**. Consuming projects and agents resolve them by literal path.

- `AGENTS.md`
- `styles.css`
- `tokens/` and everything in it

**Never rename, move, split, or reorganize them.** To change structure, **add new files** and leave the existing paths in place. If a token file grows unwieldy, add `tokens/<new>.css` and `@import` it from `styles.css` — do not rename the existing files.

### Built output is committed
`_ds_bundle.js`, `_ds_manifest.json`, and `_adherence.oxlintrc.json` **are committed**, not gitignored — consumers load the bundle directly from the repo. Do not add them to `.gitignore`. Do not hand-edit them either: they are regenerated from source, so commit the regenerated output alongside the source change that produced it.

### Branch and merge
- Single `main` branch. No long-lived develop or release branches.
- Squash merges only — one commit per change on `main`.
- Plain-English commit messages. No Conventional Commits, no prefixes, no ticket tags.
  - Good: `Use one 96px grid pitch everywhere`
  - Good: `Remove the grid from the teal stat band`
  - Bad: `feat(tokens): consolidate grid pitch` / `fix: DS-412`

---

## 8. When something is not covered here

Stop and ask. Do not improvise a token, a component variant, or a layout pattern that is not in this file. Specifically ask before: introducing any color not in §1, adding a component, changing the app frame's structure, applying a visual treatment (gradient, blur, texture, animation) not described here, or moving any frozen path in §7. A short question is cheaper than a change that has to be reverted.
