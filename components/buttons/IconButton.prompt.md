One-sentence: Square icon-only button for toolbars and compact actions; pass an icon element as children and always set an `aria-label`.

```jsx
<IconButton aria-label="Search"><SearchIcon /></IconButton>
<IconButton variant="outline" aria-label="Menu"><MenuIcon /></IconButton>
<IconButton variant="solid" size="lg" aria-label="Send"><SendIcon /></IconButton>
```

Variants: `ghost` (default), `outline`, `solid` (teal). Sizes: `sm` 32 / `md` 40 / `lg` 48.
