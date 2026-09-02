One-sentence: The persistent TD&H product frame — optional navy platform rail, white sidebar (wordmark + division subline, icon nav, pinned CTA, mono footer meta), and a content region that carries the coarse blueprint grid.

```jsx
<AppShell
  platformBar={<PlatformBar eyebrow="TDH AI" title="TDH AI Platform" />}
  product="Permitting & Reg"
  nav={[
    { id: 'overview', label: 'Overview', icon: <Icon name="layout-grid" /> },
    { id: 'guided', label: 'Guided Review', icon: <Icon name="clipboard-list" /> },
    { id: 'saved', label: 'Saved Reviews', icon: <Icon name="folder" /> },
  ]}
  activeId="overview"
  onNavigate={setView}
  cta={<Button variant="accent" iconLeft={<Icon name="plus" />}>New Review</Button>}
  sidebarMeta={<>TDH AI Platform<br />P&amp;R Module · Internal use</>}
  breadcrumb={<Breadcrumb items={['P&R', 'Permitting & Regulatory']} />}
  contentFooter={<SiteFooter division="Engineering" />}
>
  …page content…
</AppShell>
```

The sidebar is **always plain white** — the grid belongs to the content region only (pass `grid={false}` to drop it). The active nav item takes the orange left rule; the sidebar CTA is the one orange action. `collapsible` shows the collapse toggle, which hides the nav labels and the wordmark subline. `contentFooter` renders as a full-bleed band directly below the content region, so it needs no padding compensation.
