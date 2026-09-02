import React from 'react';

const CSS = `
.tdh-ta-field { font-family: var(--font-sans); display: flex; flex-direction: column; gap: 7px; }
.tdh-ta-field__label {
  font-family: var(--font-mono, monospace);
  font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--brand-slate, #54636A);
}
.tdh-ta-field__req { color: var(--brand-orange, #E1542A); margin-left: 3px; }
.tdh-textarea {
  font-family: var(--font-sans); font-size: 15px; line-height: 1.55;
  color: var(--brand-ink, #13333D); background: #fff;
  border: 1px solid var(--brand-hairline, rgba(20,50,60,.14));
  border-radius: var(--radius-md, 3px);
  padding: 11px 13px; width: 100%; box-sizing: border-box; resize: vertical; min-height: 96px;
  transition: border-color var(--duration-fast,120ms) ease, box-shadow var(--duration-fast,120ms) ease;
}
.tdh-textarea::placeholder { color: #93a1a6; }
.tdh-textarea:hover:not(:disabled) { border-color: rgba(20,50,60,.30); }
.tdh-textarea:focus { outline: none; border-color: var(--brand-teal, #0E4E5E); box-shadow: var(--shadow-focus, 0 0 0 3px rgba(14,78,94,.25)); }
.tdh-textarea:disabled { background: var(--brand-mist, #EDF1F0); opacity: .7; cursor: not-allowed; }
.tdh-ta-field__hint { font-size: 12px; color: var(--brand-slate, #54636A); }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-textarea-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-textarea-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Labeled multi-line text input. */
export function Textarea({ label, required = false, hint, id, className = '', ...props }) {
  injectStyles();
  const fid = id || (label ? `tdh-ta-${String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : undefined);
  return (
    <div className="tdh-ta-field">
      {label && (
        <label className="tdh-ta-field__label" htmlFor={fid}>
          {label}{required && <span className="tdh-ta-field__req">*</span>}
        </label>
      )}
      <textarea id={fid} className={`tdh-textarea ${className}`.trim()} {...props} />
      {hint && <span className="tdh-ta-field__hint">{hint}</span>}
    </div>
  );
}
