import React from 'react';

const CSS = `
.tdh-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-mono, monospace);
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--brand-teal, #0E4E5E);
}
.tdh-eyebrow--accent { color: var(--brand-orange, #E1542A); }
.tdh-eyebrow--muted { color: var(--brand-slate, #54636A); }
.tdh-eyebrow--onDark { color: #e6eeee; }
/* The tick and number inherit the label color — never a second color in one label. */
.tdh-eyebrow__tick { width: 22px; height: 2px; flex: none; background: currentColor; }
.tdh-eyebrow__num { color: inherit; opacity: .5; }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-eyebrow-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-eyebrow-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * The signature TD&H section label — uppercase, letter-spaced Space Mono with
 * an orange tick. Sits above headlines to mark every section. Pass `number`
 * for the app-surface numbered form (`01. DASHBOARD`), which drops the tick.
 */
export function Eyebrow({ tone = 'teal', tick = true, number = null, className = '', children, ...props }) {
  injectStyles();
  const cls = `tdh-eyebrow tdh-eyebrow--${tone} ${className}`.trim();
  const showTick = tick && number == null;
  return (
    <span className={cls} {...props}>
      {showTick && <span className="tdh-eyebrow__tick" />}
      {number != null && <span className="tdh-eyebrow__num">{String(number).padStart(2, '0')}.</span>}
      {children}
    </span>
  );
}
