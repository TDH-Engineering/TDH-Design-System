import React from 'react';

const CSS = `
.tdh-crumb { display: flex; align-items: center; gap: 9px; font-family: var(--font-mono, monospace); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
.tdh-crumb a, .tdh-crumb__item { color: var(--brand-slate, #54636A); text-decoration: none; }
.tdh-crumb a:hover { color: var(--brand-teal, #0E4E5E); }
.tdh-crumb__item--current { color: var(--brand-ink, #13333D); font-weight: 700; }
.tdh-crumb__sep { color: var(--brand-slate, #54636A); opacity: .5; }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-crumb-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-crumb-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Mono uppercase breadcrumb with chevron separators — e.g. CMT › DASHBOARD.
 * Items are { label, href } or plain strings; the last is always current.
 */
export function Breadcrumb({ items = [], className = '', ...props }) {
  injectStyles();
  const norm = items.map((i) => (typeof i === 'string' ? { label: i } : i));
  return (
    <nav className={`tdh-crumb ${className}`.trim()} aria-label="Breadcrumb" {...props}>
      {norm.map((item, i) => {
        const last = i === norm.length - 1;
        return (
          <React.Fragment key={i}>
            {i > 0 && <span className="tdh-crumb__sep" aria-hidden="true">&rsaquo;</span>}
            {item.href && !last
              ? <a href={item.href}>{item.label}</a>
              : <span className={`tdh-crumb__item ${last ? 'tdh-crumb__item--current' : ''}`.trim()} aria-current={last ? 'page' : undefined}>{item.label}</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
