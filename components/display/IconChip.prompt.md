One-sentence: Small tinted square that holds a Lucide icon.

```jsx
<IconChip><FolderSearch /></IconChip>              {/* mist/teal — the default */}
<IconChip size="lg"><Calculator /></IconChip>       {/* 46px marketing tile */}
<IconChip tone="field"><Clipboard /></IconChip>     {/* orange — field-vs-desk views only */}
```

Tones: `teal` (default), `desk` (same mist/teal), `field` (orange wash), `onDark`. Sizes: `sm` 24 / `md` 28 (app cards) / `lg` 46 (marketing tiles). Match the chip's tone to its card's accent.
