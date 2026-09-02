import React from 'react';

const CSS = `
.tdh-stat { font-family: var(--font-sans); }
.tdh-stat__value {
  font-family: var(--font-mono, monospace);
  font-weight: 700; letter-spacing: -0.01em; line-height: 1;
  color: var(--brand-teal, #0E4E5E);
  display: flex; align-items: baseline; gap: 4px;
}
.tdh-stat__value--lg { font-size: 56px; }
.tdh-stat__value--md { font-size: 40px; }
.tdh-stat__value--sm { font-size: 28px; }
.tdh-stat__suffix { font-size: 0.45em; color: inherit; opacity: .5; font-weight: 700; }
.tdh-stat__label {
  font-family: var(--font-mono, monospace);
  font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--brand-slate, #54636A); margin-top: 10px;
}
.tdh-stat--onDark .tdh-stat__value { color: #fff; }
.tdh-stat--onDark .tdh-stat__label { color: #b9cbcd; }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-stat-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-stat-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Big metric for stat bands — mono numerals, orange suffix, mono caption.
 */
export function Stat({ value, suffix = '', label, size = 'lg', onDark = false, className = '', ...props }) {
  injectStyles();
  const cls = `tdh-stat ${onDark ? 'tdh-stat--onDark' : ''} ${className}`.trim();
  return (
    <div className={cls} {...props}>
      <div className={`tdh-stat__value tdh-stat__value--${size}`}>
        <span>{value}</span>
        {suffix && <span className="tdh-stat__suffix">{suffix}</span>}
      </div>
      {label && <div className="tdh-stat__label">{label}</div>}
    </div>
  );
}
