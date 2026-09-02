import React from 'react';

const CSS = `
.tdh-platbar {
  background: var(--brand-navy, #1C3A5C);
  padding: 12px 26px 14px;
  font-family: var(--font-sans);
  color: #fff;
}
.tdh-platbar__eyebrow {
  font-family: var(--font-mono, monospace);
  font-size: 10px; font-weight: 700;
  letter-spacing: .16em; text-transform: uppercase;
  color: #a8bdd6;
}
.tdh-platbar__title { font-size: 20px; font-weight: 700; letter-spacing: -.015em; margin-top: 4px; }
.tdh-platbar__row { display: flex; align-items: center; gap: 20px; }
.tdh-platbar__right { margin-left: auto; display: flex; align-items: center; gap: 16px; }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-platbar-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-platbar-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * The deep-navy platform rail that sits ABOVE the whole app shell — the one
 * place navy appears. Identifies the platform that owns the current module.
 */
export function PlatformBar({ eyebrow = 'TDH AI', title, right = null, className = '', ...props }) {
  injectStyles();
  return (
    <div className={`tdh-platbar ${className}`.trim()} {...props}>
      <div className="tdh-platbar__row">
        <div>
          {eyebrow && <div className="tdh-platbar__eyebrow">{eyebrow}</div>}
          {title && <div className="tdh-platbar__title">{title}</div>}
        </div>
        {right && <div className="tdh-platbar__right">{right}</div>}
      </div>
    </div>
  );
}
