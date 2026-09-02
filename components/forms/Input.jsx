import React from 'react';

const CSS = `
.tdh-field { font-family: var(--font-sans); display: flex; flex-direction: column; gap: 7px; }
.tdh-field__label {
  font-family: var(--font-mono, monospace);
  font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--brand-slate, #54636A);
}
.tdh-field__req { color: var(--brand-orange, #E1542A); margin-left: 3px; }
.tdh-input {
  font-family: var(--font-sans); font-size: 15px;
  color: var(--brand-ink, #13333D);
  background: #fff;
  border: 1px solid var(--brand-hairline, rgba(20,50,60,.14));
  border-radius: var(--radius-md, 3px);
  padding: 10px 13px; width: 100%; box-sizing: border-box;
  transition: border-color var(--duration-fast,120ms) ease, box-shadow var(--duration-fast,120ms) ease;
}
.tdh-input::placeholder { color: #93a1a6; }
.tdh-input:hover:not(:disabled) { border-color: rgba(20,50,60,.30); }
.tdh-input:focus { outline: none; border-color: var(--brand-teal, #0E4E5E); box-shadow: var(--shadow-focus, 0 0 0 3px rgba(14,78,94,.25)); }
.tdh-input:disabled { background: var(--brand-mist, #EDF1F0); opacity: .7; cursor: not-allowed; }
.tdh-input--invalid { border-color: #D32F2F; }
.tdh-input--invalid:focus { box-shadow: 0 0 0 3px rgba(211,47,47,.22); }
.tdh-field__hint { font-size: 12px; color: var(--brand-slate, #54636A); }
.tdh-field__hint--error { color: #C0271F; }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-input-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-input-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Labeled text input. Mono uppercase label, 3px field, teal focus ring.
 */
export function Input({ label, required = false, hint, error, id, className = '', ...props }) {
  injectStyles();
  const fid = id || (label ? `tdh-${String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : undefined);
  const inputCls = `tdh-input ${error ? 'tdh-input--invalid' : ''} ${className}`.trim();
  return (
    <div className="tdh-field">
      {label && (
        <label className="tdh-field__label" htmlFor={fid}>
          {label}{required && <span className="tdh-field__req">*</span>}
        </label>
      )}
      <input id={fid} className={inputCls} aria-invalid={!!error} {...props} />
      {(hint || error) && (
        <span className={`tdh-field__hint ${error ? 'tdh-field__hint--error' : ''}`.trim()}>{error || hint}</span>
      )}
    </div>
  );
}
