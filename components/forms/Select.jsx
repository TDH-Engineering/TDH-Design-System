import React from 'react';

const CSS = `
.tdh-sel-field { font-family: var(--font-sans); display: flex; flex-direction: column; gap: 7px; }
.tdh-sel-field__label {
  font-family: var(--font-mono, monospace);
  font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--brand-slate, #54636A);
}
.tdh-sel-wrap { position: relative; }
.tdh-select {
  font-family: var(--font-sans); font-size: 15px;
  color: var(--brand-ink, #13333D); background: #fff;
  border: 1px solid var(--brand-hairline, rgba(20,50,60,.14));
  border-radius: var(--radius-md, 3px);
  padding: 10px 38px 10px 13px; width: 100%; box-sizing: border-box;
  appearance: none; -webkit-appearance: none; cursor: pointer;
  transition: border-color var(--duration-fast,120ms) ease, box-shadow var(--duration-fast,120ms) ease;
}
.tdh-select:hover:not(:disabled) { border-color: rgba(20,50,60,.30); }
.tdh-select:focus { outline: none; border-color: var(--brand-teal, #0E4E5E); box-shadow: var(--shadow-focus, 0 0 0 3px rgba(14,78,94,.25)); }
.tdh-select:disabled { background: var(--brand-mist, #EDF1F0); opacity: .7; cursor: not-allowed; }
.tdh-sel-caret {
  position: absolute; right: 13px; top: 50%; transform: translateY(-50%);
  width: 8px; height: 8px; border-right: 2px solid var(--brand-slate, #54636A);
  border-bottom: 2px solid var(--brand-slate, #54636A);
  transform: translateY(-65%) rotate(45deg); pointer-events: none;
}
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tdh-select-styles')) return;
  const el = document.createElement('style');
  el.id = 'tdh-select-styles';
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Labeled native select with a custom caret. Pass <option>s as children. */
export function Select({ label, id, className = '', children, ...props }) {
  injectStyles();
  const fid = id || (label ? `tdh-sel-${String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : undefined);
  return (
    <div className="tdh-sel-field">
      {label && <label className="tdh-sel-field__label" htmlFor={fid}>{label}</label>}
      <div className="tdh-sel-wrap">
        <select id={fid} className={`tdh-select ${className}`.trim()} {...props}>{children}</select>
        <span className="tdh-sel-caret" />
      </div>
    </div>
  );
}
