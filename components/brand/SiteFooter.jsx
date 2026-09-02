import React from 'react';
import { Wordmark } from '../brand/Wordmark.jsx';

const CSS = `
.tdh-sitefooter {
  background: var(--brand-teal, #0E4E5E);
  padding: 30px 32px;
  font-family: var(--font-sans);
  color: #dbe7e7;
}
.tdh-sitefooter__tagline { font-size: 14px; line-height: 1.55; margin-top: 12px; }
.tdh-sitefooter__row { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.tdh-sitefooter__links { display: flex; gap: 24px; }
.tdh-sitefooter__links a {
  font-family: var(--font-mono, monospace); font-size: 11px;
  letter-spacing: .08em; text-transform: uppercase;
  color: #b9cbcd; text-decoration: none;
}
.tdh-sitefooter__links a:hover { color: #fff; }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-sitefooter-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-sitefooter-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * The deep-teal brand footer band — inline wordmark over the firm tagline.
 * Sits flush to the content region's edges (outside its padding).
 */
export function SiteFooter({
  division = 'Engineering',
  tagline = 'Services Designed With You In Mind, Since 1965',
  links = [],
  className = '',
  ...props
}) {
  injectStyles();
  return (
    <footer className={`tdh-sitefooter ${className}`.trim()} {...props}>
      <div className="tdh-sitefooter__row">
        <div>
          <Wordmark subline={division} inline size="md" onDark />
          {tagline && <div className="tdh-sitefooter__tagline">{tagline}</div>}
        </div>
        {links.length > 0 && (
          <div className="tdh-sitefooter__links">
            {links.map((l, i) => <a key={i} href={l.href || '#'}>{l.label}</a>)}
          </div>
        )}
      </div>
    </footer>
  );
}
