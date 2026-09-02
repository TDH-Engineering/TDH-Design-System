import React from 'react';

const CSS = `
.tdh-wordmark { display: inline-flex; flex-direction: column; font-family: var(--font-sans); line-height: 1; }
.tdh-wordmark__row { display: flex; align-items: baseline; gap: 9px; }
.tdh-wordmark__word { font-weight: 800; letter-spacing: -.02em; color: var(--brand-ink, #13333D); }
.tdh-wordmark__amp { color: var(--brand-orange, #E1542A); }
.tdh-wordmark--onDark .tdh-wordmark__word { color: #fff; }
.tdh-wordmark__inline {
  font-family: var(--font-mono, monospace); font-weight: 700;
  letter-spacing: .18em; text-transform: uppercase; color: var(--brand-slate, #54636A);
}
.tdh-wordmark--onDark .tdh-wordmark__inline { color: #dbe7e7; }
.tdh-wordmark__sub {
  font-family: var(--font-mono, monospace); font-weight: 700;
  letter-spacing: .22em; text-transform: uppercase;
  color: var(--brand-slate, #54636A); margin-top: 6px;
}
.tdh-wordmark--onDark .tdh-wordmark__sub { color: #b9cbcd; }

.tdh-wordmark--sm .tdh-wordmark__word { font-size: 21px; }
.tdh-wordmark--sm .tdh-wordmark__sub, .tdh-wordmark--sm .tdh-wordmark__inline { font-size: 9px; }
.tdh-wordmark--md .tdh-wordmark__word { font-size: 28px; }
.tdh-wordmark--md .tdh-wordmark__sub, .tdh-wordmark--md .tdh-wordmark__inline { font-size: 11px; }
.tdh-wordmark--lg .tdh-wordmark__word { font-size: 40px; }
.tdh-wordmark--lg .tdh-wordmark__sub, .tdh-wordmark--lg .tdh-wordmark__inline { font-size: 13px; }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-wordmark-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-wordmark-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * The TD&H typographic wordmark — Archivo extrabold with the orange ampersand.
 * `subline` stacks a division/module label beneath (PERMITTING & REG); `inline`
 * sets it on the same baseline instead (TD&H ENGINEERING).
 */
export function Wordmark({
  subline = null,
  inline = false,
  size = 'sm',
  onDark = false,
  className = '',
  ...props
}) {
  injectStyles();
  const cls = `tdh-wordmark tdh-wordmark--${size} ${onDark ? 'tdh-wordmark--onDark' : ''} ${className}`.trim();
  return (
    <span className={cls} {...props}>
      <span className="tdh-wordmark__row">
        <span className="tdh-wordmark__word">TD<span className="tdh-wordmark__amp">&amp;</span>H</span>
        {subline && inline && <span className="tdh-wordmark__inline">{subline}</span>}
      </span>
      {subline && !inline && <span className="tdh-wordmark__sub">{subline}</span>}
    </span>
  );
}
