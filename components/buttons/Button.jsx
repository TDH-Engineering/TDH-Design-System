import React from 'react';

const CSS = `
.tdh-btn {
  font-family: var(--font-sans);
  font-weight: 600;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5em;
  border: 1px solid transparent;
  border-radius: var(--radius-md, 3px);
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: background var(--duration-fast,120ms) var(--ease-standard, ease),
              color var(--duration-fast,120ms) var(--ease-standard, ease),
              border-color var(--duration-fast,120ms) var(--ease-standard, ease),
              transform var(--duration-fast,120ms) var(--ease-standard, ease);
}
.tdh-btn:active { transform: translateY(1px); }
.tdh-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus, 0 0 0 3px rgba(14,78,94,.25)); }
.tdh-btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; }

.tdh-btn--sm { font-size: 13px; padding: 7px 13px; }
.tdh-btn--md { font-size: 14px; padding: 10px 18px; }
.tdh-btn--lg { font-size: 16px; padding: 13px 24px; }

.tdh-btn--primary { background: var(--brand-teal, #0E4E5E); color: #fff; }
.tdh-btn--primary:hover:not([disabled]) { background: var(--brand-teal-dark, #0A3B47); }

.tdh-btn--accent { background: var(--brand-orange, #E1542A); color: #fff; }
.tdh-btn--accent:hover:not([disabled]) { background: var(--brand-orange-dark, #C7461F); }

.tdh-btn--secondary { background: var(--brand-teal-dark, #0A3B47); color: #fff; }
.tdh-btn--secondary:hover:not([disabled]) { background: var(--brand-teal-deep, #093039); }

.tdh-btn--outline { background: transparent; color: var(--brand-teal, #0E4E5E); border-color: var(--brand-teal, #0E4E5E); }
.tdh-btn--outline:hover:not([disabled]) { background: var(--brand-teal, #0E4E5E); color: #fff; }

.tdh-btn--ghost { background: transparent; color: var(--brand-teal, #0E4E5E); }
.tdh-btn--ghost:hover:not([disabled]) { background: var(--brand-mist, #EDF1F0); }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-button-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-button-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * TD&H primary action button. Teal by default; orange accent for the single
 * most important call-to-action on a view.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  iconLeft = null,
  iconRight = null,
  className = '',
  children,
  ...props
}) {
  injectStyles();
  const Tag = as;
  const cls = `tdh-btn tdh-btn--${variant} tdh-btn--${size} ${className}`.trim();
  return (
    <Tag className={cls} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
