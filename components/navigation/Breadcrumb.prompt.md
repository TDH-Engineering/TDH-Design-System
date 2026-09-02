One-sentence: Mono uppercase breadcrumb trail with chevron separators, sitting in the app shell's top bar.

```jsx
<Breadcrumb items={['CMT', 'Dashboard']} />
<Breadcrumb items={[{ label: 'CMT', href: '/cmt' }, 'Testing', 'Concrete Test Log']} />
```

Items are strings or `{ label, href }`. The last item always renders as current (ink, bold); earlier items are slate links.
