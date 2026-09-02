One-sentence: Surface container with a hairline border, near-square 2px corners, and **no resting shadow** — the base for tool cards, project tiles, and panels.

```jsx
{/* Default app card — teal left rule, action + mono meta in the footer */}
<Card accent="left" interactive
      footer={<Button variant="primary" size="sm">Open</Button>}
      meta="In the hub">
  <IconChip><FolderOpen /></IconChip>
  <h3>Inspection Report Compiler</h3>
  <p>Assembles a period of reports into the owner's format.</p>
</Card>

{/* Dark teal callout panel, card-sized */}
<Card dark>
  <Eyebrow tone="onDark" tick={false}>The field app</Eyebrow>
  <h3>Install once</h3>
</Card>

{/* Marketing surface — top rule + resting shadow */}
<Card accent="top" raised>…</Card>
```

**Accent:** `left` for app surfaces, `top` for marketing. **Tone** defaults to `teal`. The `field` (orange) / `desk` (teal) pair exists only for views that genuinely split field/phone work from desk/in-hub work — don't reach for orange just for variety. Cards are **flat at rest**; pass `raised` for the marketing shadow, `interactive` for hover lift. `footer` + `meta` build the action-left / label-right footer row.
