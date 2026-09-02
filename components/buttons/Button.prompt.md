One-sentence: TD&H action button — teal `primary` for nearly everything; orange `accent` reserved for the one action class a view most wants clicked.

```jsx
<Button variant="primary">Request a proposal</Button>
<Button variant="accent" size="lg">Open on phone</Button>
<Button variant="secondary">Deep teal</Button>
<Button variant="outline" iconRight={<Arrow />}>Learn more</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` (teal), `accent` (orange — sparingly), `secondary` (deep teal), `outline`, `ghost`. Sizes: `sm` / `md` / `lg`. Hover darkens the fill; active nudges down 1px; focus shows the teal ring. Set `as="a"` + `href` for link buttons.

**Restraint:** most buttons on a view should be teal or outline. Orange marks one action class — a row of identical "Open on phone" buttons is one class; two unrelated orange buttons is a mistake.
