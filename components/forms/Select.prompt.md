One-sentence: Labeled native select with a custom caret; pass `<option>` elements as children.

```jsx
<Select label="Service" defaultValue="">
  <option value="" disabled>Choose…</option>
  <option>Civil</option>
  <option>Structural</option>
  <option>Environmental</option>
</Select>
```

Props: `label` plus native `<select>` attributes.
