One-sentence: The deep-teal brand footer band — inline wordmark over the firm tagline — closing a page or an app content region.

```jsx
<SiteFooter />  {/* defaults to Engineering + the firm tagline */}

<SiteFooter division="Permitting & Reg" links={[
  { label: 'Acceptable use' }, { label: 'Support' },
]} />
```

Defaults to the firm's real tagline, **"Services Designed With You In Mind, Since 1965"** — don't rewrite it. Inside an `AppShell`, pass this to the `contentFooter` prop, which renders it as a full-bleed band directly below the content region.
