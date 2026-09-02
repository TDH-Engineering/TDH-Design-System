import React from 'react';

const CSS = `
.tdh-sechead { display: flex; align-items: center; gap: 11px; flex-wrap: wrap; font-family: var(--font-sans); }
.tdh-sechead__icon { display: inline-flex; color: var(--tdh-sh-accent, var(--brand-teal, #0E4E5E)); line-height: 0; }
.tdh-sechead--teal { --tdh-sh-accent: var(--brand-teal, #0E4E5E); }
.tdh-sechead--desk { --tdh-sh-accent: var(--brand-teal, #0E4E5E); }
.tdh-sechead--field { --tdh-sh-accent: var(--brand-orange, #E1542A); }
.tdh-sechead__title { font-size: 19px; font-weight: 700; letter-spacing: -.01em; color: var(--brand-ink, #13333D); }
.tdh-sechead__meta {
  font-family: var(--font-mono, monospace);
  font-size: 11px; letter-spacing: .1em; text-transform: uppercase;
  color: var(--brand-slate, #54636A);
}
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-sechead-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-sechead-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * App-surface section header — icon + bold sans title + INLINE mono uppercase
 * meta on one line. Use instead of Eyebrow inside product views.
 * Meta segments are joined with a mono middot.
 */
export function SectionHeader({ icon = null, title, meta = [], tone = 'teal', className = '', ...props }) {
  injectStyles();
  const parts = Array.isArray(meta) ? meta : [meta];
  const cls = `tdh-sechead tdh-sechead--${tone} ${className}`.trim();
  return (
    <div className={cls} {...props}>
      {icon && <span className="tdh-sechead__icon">{icon}</span>}
      <span className="tdh-sechead__title">{title}</span>
      {parts.filter(Boolean).length > 0 && (
        <span className="tdh-sechead__meta">{parts.filter(Boolean).join('  ·  ')}</span>
      )}
    </div>
  );
}
