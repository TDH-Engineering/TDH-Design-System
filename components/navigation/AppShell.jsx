import React from 'react';
import { Wordmark } from '../brand/Wordmark.jsx';

const CSS = `
.tdh-shellwrap { display: flex; flex-direction: column; min-height: 100vh; }
.tdh-shell { display: flex; flex: 1; min-height: 0; font-family: var(--font-sans); background: #fff; color: var(--brand-ink, #13333D); }

/* ---- Sidebar: pure white, no grid ---- */
.tdh-shell__side {
  width: var(--sidebar-w, 214px); flex: none;
  border-right: 1px solid var(--brand-hairline, rgba(20,50,60,.14));
  background: #fff; display: flex; flex-direction: column;
  transition: width var(--duration-base,200ms) var(--ease-standard, ease);
}
.tdh-shell--collapsed .tdh-shell__side { width: var(--sidebar-w-collapsed, 64px); }
.tdh-shell__brand { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; padding: 18px 16px 22px; }
.tdh-shell__toggle {
  width: 26px; height: 26px; flex: none; display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid var(--brand-hairline, rgba(20,50,60,.14)); border-radius: var(--radius-md, 3px);
  background: #fff; color: var(--brand-slate, #54636A); cursor: pointer; padding: 0;
}
.tdh-shell__toggle:hover { background: var(--brand-mist, #EDF1F0); }

.tdh-shell__nav { display: flex; flex-direction: column; }
.tdh-shell__item {
  display: flex; align-items: center; gap: 13px;
  padding: 11px 16px; border: 0; border-left: 3px solid transparent;
  background: none; cursor: pointer; text-align: left; width: 100%;
  font-family: var(--font-sans); font-size: 14.5px; font-weight: 500;
  color: var(--brand-ink, #13333D); white-space: nowrap; overflow: hidden;
  transition: background var(--duration-fast,120ms) ease, color var(--duration-fast,120ms) ease;
}
.tdh-shell__item:hover { background: var(--brand-mist, #EDF1F0); }
.tdh-shell__item--active { border-left-color: var(--brand-orange, #E1542A); color: var(--brand-teal, #0E4E5E); font-weight: 600; }
.tdh-shell__icon { display: inline-flex; line-height: 0; flex: none; color: currentColor; }
.tdh-shell--collapsed .tdh-shell__label, .tdh-shell--collapsed .tdh-wordmark__sub { display: none; }

.tdh-shell__sidefoot { margin-top: auto; padding: 16px; display: flex; flex-direction: column; gap: 14px; }
.tdh-shell__meta { font-family: var(--font-mono, monospace); font-size: 10px; line-height: 1.7; letter-spacing: .06em; color: var(--brand-slate, #54636A); }

/* ---- Content: coarse blueprint grid lives HERE only ---- */
.tdh-shell__main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.tdh-shell__topbar {
  display: flex; align-items: center; gap: 16px;
  padding: 0 26px; height: 54px; flex: none;
  border-bottom: 1px solid var(--brand-hairline, rgba(20,50,60,.14)); background: #fff;
}
.tdh-shell__topright { margin-left: auto; display: flex; align-items: center; gap: 16px; }
.tdh-shell__status { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .06em; color: var(--brand-slate, #54636A); }
.tdh-shell__dot { width: 7px; height: 7px; border-radius: 999px; background: #1C7C54; }
.tdh-shell__avatar { width: 30px; height: 30px; border-radius: 999px; background: var(--brand-teal, #0E4E5E); color: #fff; font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
.tdh-shell__content {
  flex: 1; padding: 30px 26px 56px;
  background-image: linear-gradient(var(--brand-grid, rgba(20,50,60,.05)) 1px, transparent 1px),
                    linear-gradient(90deg, var(--brand-grid, rgba(20,50,60,.05)) 1px, transparent 1px);
  background-size: var(--grid-cell, 96px) var(--grid-cell, 96px);
}
.tdh-shell__content--plain { background-image: none; }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-shell-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-shell-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

const PanelIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M15 3v18" />
  </svg>
);

/**
 * Persistent app frame — an optional navy `PlatformBar` above, then the white
 * sidebar (wordmark + division subline, icon nav with an orange active rule,
 * pinned CTA, mono footer meta) plus a content region carrying the coarse
 * blueprint grid. The sidebar never gets the grid.
 */
export function AppShell({
  product = 'CONSTRUCTION',
  platformBar = null,
  contentFooter = null,
  nav = [],
  activeId = null,
  onNavigate = () => {},
  cta = null,
  sidebarMeta = null,
  breadcrumb = null,
  status = null,
  initials = 'TD',
  collapsible = true,
  grid = true,
  children,
  className = '',
  ...props
}) {
  injectStyles();
  const [collapsed, setCollapsed] = React.useState(false);
  const cls = `tdh-shell ${collapsed ? 'tdh-shell--collapsed' : ''} ${className}`.trim();

  const shell = (
    <div className={cls} {...props}>
      <aside className="tdh-shell__side">
        <div className="tdh-shell__brand">
          <Wordmark subline={collapsed ? null : product} size="sm" />
          {collapsible && (
            <button className="tdh-shell__toggle" onClick={() => setCollapsed((c) => !c)} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
              <PanelIcon />
            </button>
          )}
        </div>

        <nav className="tdh-shell__nav">
          {nav.map((item) => (
            <button
              key={item.id}
              className={`tdh-shell__item ${item.id === activeId ? 'tdh-shell__item--active' : ''}`.trim()}
              onClick={() => onNavigate(item.id)}
              title={item.label}
            >
              {item.icon && <span className="tdh-shell__icon">{item.icon}</span>}
              <span className="tdh-shell__label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="tdh-shell__sidefoot">
          {cta}
          {sidebarMeta && <div className="tdh-shell__meta">{sidebarMeta}</div>}
        </div>
      </aside>

      <div className="tdh-shell__main">
        <header className="tdh-shell__topbar">
          {breadcrumb}
          <div className="tdh-shell__topright">
            {status && <span className="tdh-shell__status"><span className="tdh-shell__dot" />{status}</span>}
            <span className="tdh-shell__avatar">{initials}</span>
          </div>
        </header>
        <div className={`tdh-shell__content ${grid ? '' : 'tdh-shell__content--plain'}`.trim()}>
          {children}
        </div>
        {contentFooter}
      </div>
    </div>
  );

  if (!platformBar) return shell;
  return (
    <div className="tdh-shellwrap">
      {platformBar}
      {shell}
    </div>
  );
}
