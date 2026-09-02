One-sentence: Small Space Mono status or category tag.

```jsx
<Badge variant="outline">Structural</Badge>
<Badge variant="teal">Civil</Badge>
<Badge variant="success" dot>Operational</Badge>
<Badge variant="warning">In review</Badge>
<Badge variant="danger">Blocked</Badge>
```

Variants: `outline` (default, quietest), `teal`, `tealDark`, `orange`, plus status `success` / `warning` / `danger`. Add `dot` for a live status indicator.

**Restraint:** prefer `outline` or `teal` for categories. Reach for `orange` only when the badge is the most important mark on the view, and use the status colors for real state (amber = needs review, red = error/blocked, green = success) — never as decoration.
