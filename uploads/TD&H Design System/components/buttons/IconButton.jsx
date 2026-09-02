import React from 'react';

const CSS = `
.tdh-iconbtn {
  font-family: var(--font-sans);
  display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid transparent;
  border-radius: var(--radius-md, 3px);
  cursor: pointer; padding: 0;
  background: transparent; color: var(--brand-teal, #0E4E5E);
  transition: background var(--duration-fast,120ms) ease, color var(--duration-fast,120ms) ease, border-color var(--duration-fast,120ms) ease;
}
.tdh-iconbtn--sm { width: 32px; height: 32px; }
.tdh-iconbtn--md { width: 40px; height: 40px; }
.tdh-iconbtn--lg { width: 48px; height: 48px; }
.tdh-iconbtn--ghost:hover:not([disabled]) { background: var(--brand-mist, #EDF1F0); }
.tdh-iconbtn--outline { border-color: var(--brand-hairline, rgba(20,50,60,.14)); }
.tdh-iconbtn--outline:hover:not([disabled]) { background: var(--brand-mist, #EDF1F0); }
.tdh-iconbtn--solid { background: var(--brand-teal, #0E4E5E); color: #fff; }
.tdh-iconbtn--solid:hover:not([disabled]) { background: var(--brand-teal-dark, #0A3B47); }
.tdh-iconbtn:focus-visible { outline: none; box-shadow: var(--shadow-focus, 0 0 0 3px rgba(14,78,94,.25)); }
.tdh-iconbtn[disabled] { opacity: .45; cursor: not-allowed; }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-iconbutton-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-iconbutton-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Square icon-only button. Pass an SVG/icon element as children.
 * Always provide an aria-label for accessibility.
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  injectStyles();
  const cls = `tdh-iconbtn tdh-iconbtn--${variant} tdh-iconbtn--${size} ${className}`.trim();
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
