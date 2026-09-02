import React from 'react';

const CSS = `
.tdh-card {
  position: relative;
  background: #fff;
  border: 1px solid var(--brand-hairline, rgba(20,50,60,.14));
  border-radius: var(--radius-lg, 2px);
  box-shadow: none;
  transition: box-shadow var(--duration-base,200ms) var(--ease-standard, ease),
              transform var(--duration-base,200ms) var(--ease-standard, ease),
              border-color var(--duration-base,200ms) var(--ease-standard, ease);
}
.tdh-card--raised { box-shadow: var(--shadow-card, 0 1px 3px rgba(20,50,60,.08)); }
.tdh-card--interactive { cursor: pointer; }
.tdh-card--interactive:hover { box-shadow: var(--shadow-raised, 0 4px 14px -6px rgba(20,50,60,.18)); transform: translateY(-2px); border-color: rgba(20,50,60,.22); }

/* Accent rule — LEFT is the app-surface default. Teal unless the view has a
   genuine field-vs-desk distinction to carry; orange is opt-in. */
.tdh-card--accent-left { border-left: var(--border-accent, 3px) solid var(--tdh-accent, var(--brand-teal, #0E4E5E)); }
.tdh-card--accent-top { border-top: var(--border-accent, 3px) solid var(--tdh-accent, var(--brand-teal, #0E4E5E)); }
.tdh-card--field { --tdh-accent: var(--brand-orange, #E1542A); }
.tdh-card--desk { --tdh-accent: var(--brand-teal, #0E4E5E); }
.tdh-card--teal { --tdh-accent: var(--brand-teal, #0E4E5E); }

/* Dark teal panel — card-sized, not a full-bleed band. */
.tdh-card--dark { background: var(--brand-teal, #0E4E5E); border-color: rgba(255,255,255,.14); color: #eaf1f1; }
.tdh-card--dark .tdh-card__meta { color: #a9c0c3; }

.tdh-card__body { padding: var(--space-5, 24px); }
.tdh-card__meta {
  font-family: var(--font-mono, monospace);
  font-size: 10px; font-weight: 400;
  letter-spacing: .1em; text-transform: uppercase;
  color: var(--brand-slate, #54636A);
}
.tdh-card__footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: var(--space-4, 16px); }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-card-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-card-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Surface container — hairline border, near-square 2px corners, FLAT at rest.
 * `accent="left"` adds the app-surface accent rule, teal by default. Only set
 * `tone="field"` (orange) where a view genuinely distinguishes field from desk.
 * `dark` renders the teal panel.
 */
export function Card({
  accent = null,
  tone = 'teal',
  dark = false,
  interactive = false,
  raised = false,
  padded = true,
  meta = null,
  footer = null,
  className = '',
  children,
  ...props
}) {
  injectStyles();
  const cls = [
    'tdh-card',
    accent === 'left' && 'tdh-card--accent-left',
    accent === 'top' && 'tdh-card--accent-top',
    accent && `tdh-card--${tone}`,
    dark && 'tdh-card--dark',
    interactive && 'tdh-card--interactive',
    raised && 'tdh-card--raised',
    className,
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {children}
      {(footer || meta) && (
        <div className="tdh-card__footer">
          <span>{footer}</span>
          {meta && <span className="tdh-card__meta">{meta}</span>}
        </div>
      )}
    </>
  );

  return (
    <div className={cls} {...props}>
      {padded ? <div className="tdh-card__body">{inner}</div> : inner}
    </div>
  );
}
