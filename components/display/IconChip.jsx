import React from 'react';

const CSS = `
.tdh-chip {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-md, 3px); flex: none;
}
.tdh-chip--sm { width: 24px; height: 24px; }
.tdh-chip--md { width: 28px; height: 28px; }
.tdh-chip--lg { width: 46px; height: 46px; border-radius: var(--radius-lg, 2px); }
.tdh-chip--teal { background: var(--brand-mist, #EDF1F0); color: var(--brand-teal, #0E4E5E); }
.tdh-chip--desk { background: var(--brand-mist, #EDF1F0); color: var(--brand-teal, #0E4E5E); }
.tdh-chip--field { background: rgba(225,84,42,.10); color: var(--brand-orange, #E1542A); }
.tdh-chip--onDark { background: rgba(255,255,255,.10); color: #fff; }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-chip-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-chip-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Small tinted square that holds a Lucide icon. Mist/teal by default; the
 * orange `field` tint is reserved for views that distinguish field from desk.
 */
export function IconChip({ tone = 'teal', size = 'md', className = '', children, ...props }) {
  injectStyles();
  const cls = `tdh-chip tdh-chip--${tone} tdh-chip--${size} ${className}`.trim();
  return <span className={cls} {...props}>{children}</span>;
}
