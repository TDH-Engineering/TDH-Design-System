import React from 'react';

const CSS = `
.tdh-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-mono, monospace);
  font-size: 11px; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  padding: 4px 9px; border-radius: var(--radius-sm, 2px);
  border: 1px solid transparent; line-height: 1.4;
}
.tdh-badge--teal { background: var(--brand-teal, #0E4E5E); color: #fff; }
.tdh-badge--tealDark { background: var(--brand-teal-dark, #0A3B47); color: #fff; }
.tdh-badge--orange { background: var(--brand-orange, #E1542A); color: #fff; }
.tdh-badge--outline { background: transparent; color: var(--brand-slate, #54636A); border-color: var(--brand-hairline, rgba(20,50,60,.14)); }
.tdh-badge--success { background: rgba(28,124,84,.12); color: #1C7C54; }
.tdh-badge--warning { background: rgba(245,158,11,.16); color: #9a6206; }
.tdh-badge--danger { background: rgba(211,47,47,.12); color: #C0271F; }
.tdh-badge__dot { width: 6px; height: 6px; border-radius: 999px; background: currentColor; }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-badge-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-badge-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Small status / category tag in Space Mono. Use `dot` for live statuses.
 */
export function Badge({ variant = 'outline', dot = false, className = '', children, ...props }) {
  injectStyles();
  const cls = `tdh-badge tdh-badge--${variant} ${className}`.trim();
  return (
    <span className={cls} {...props}>
      {dot && <span className="tdh-badge__dot" />}
      {children}
    </span>
  );
}
