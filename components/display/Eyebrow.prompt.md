One-sentence: The signature TD&H section label — uppercase, letter-spaced Space Mono with a tick rule — placed above headlines to open every section.

```jsx
<Eyebrow>Who we are</Eyebrow>
<Eyebrow tone="muted">Supporting detail</Eyebrow>
<Eyebrow tone="onDark" tick={false}>Est. 1965</Eyebrow>

{/* App pages number their sections; the tick drops away */}
<Eyebrow number={1}>Dashboard</Eyebrow>   {/* → 01. DASHBOARD */}
```

Tones: `teal` (default), `muted` (slate), `onDark`, and `accent` (orange) — which should be rare. The tick and the number **inherit the label's color**, so a label is never two colors. Set `tick={false}` to drop the rule. Use `number` on product views; marketing sections keep the tick. For the icon + inline-meta app pattern, use `SectionHeader` instead.
