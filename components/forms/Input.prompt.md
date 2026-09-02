One-sentence: Labeled single-line text input with mono uppercase label, hint, and error states.

```jsx
<Input label="Full name" placeholder="Jane Engineer" required />
<Input label="Email" type="email" hint="We'll only use this to reply." />
<Input label="Phone" error="Enter a valid number." />
```

Props: `label`, `required` (orange asterisk), `hint`, `error` (turns red, overrides hint). Forwards all native `<input>` attributes.
