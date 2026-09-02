One-sentence: The app-surface section header — icon + bold sans title + **inline** mono uppercase meta all on one line; use this inside product views instead of `Eyebrow`.

```jsx
<SectionHeader
  icon={<Icon name="monitor" size={17} />}
  title="At the desk"
  meta="Opens here in the hub"
/>

{/* orange icon only where field-vs-desk is a real distinction */}
<SectionHeader tone="field" icon={<Icon name="smartphone" size={17} />}
  title="In the field" meta={['Runs on your phone', 'Works without signal']} />
```

`meta` accepts a string or an array (joined with a mono middot). `tone` colors the icon — `teal` by default, `field` orange. Marketing pages keep `Eyebrow` (tick + headline beneath); app pages use this.
