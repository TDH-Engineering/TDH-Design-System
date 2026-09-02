One-sentence: The TD&H typographic wordmark — Archivo extrabold with the orange ampersand — used in the app sidebar, the brand footer, and anywhere the mark appears.

```jsx
<Wordmark subline="Permitting & Reg" />              {/* sidebar: stacked subline */}
<Wordmark subline="Engineering" inline size="md" onDark /> {/* footer: inline */}
<Wordmark size="lg" />                                {/* mark alone */}
```

`subline` is the division or module (`Engineering`, `Construction`, `Permitting & Reg`, `AI Hub`); `inline` puts it on the wordmark's baseline rather than stacking it. Sizes `sm` / `md` / `lg`. `onDark` inverts for the navy and teal surfaces.

The **ampersand is always orange** inside the wordmark. Note the subline's own `&` (as in "Permitting & Reg") stays in the subline color — only the mark's ampersand is orange.
