// AI Hub — site header. Wordmark + nav + account.
function SiteHeader({ onHome }) {
  const { Button } = window[Object.keys(window).find(k => /^(TDH)?DesignSystem_/.test(k))];
  const nav = ['Tools', 'Knowledge', 'Projects', 'Guides'];
  return (
    <header style={sh.bar}>
      <div style={sh.inner}>
        <button onClick={onHome} style={sh.brand} aria-label="TD&H AI Hub home">
          <span style={sh.word}>TD<span style={{ color: 'var(--brand-orange)' }}>&amp;</span>H</span>
          <span style={sh.div} />
          <span style={sh.hub}>AI&nbsp;HUB</span>
        </button>
        <nav style={sh.nav}>
          {nav.map((n, i) => (
            <a key={n} href="#" style={{ ...sh.link, ...(i === 0 ? sh.linkActive : {}) }} onClick={(e) => e.preventDefault()}>{n}</a>
          ))}
        </nav>
        <div style={sh.right}>
          <span style={sh.status}><span style={sh.dot} />All systems operational</span>
          <span style={sh.avatar}>JE</span>
        </div>
      </div>
    </header>
  );
}

const sh = {
  bar: { position: 'sticky', top: 0, zIndex: 20, background: 'rgba(255,255,255,.86)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--brand-hairline)' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', gap: 28 },
  brand: { display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 0, cursor: 'pointer', padding: 0 },
  word: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 22, letterSpacing: '-.02em', color: 'var(--brand-ink)' },
  div: { width: 1, height: 22, background: 'var(--brand-hairline)' },
  hub: { fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.18em', color: 'var(--brand-teal)' },
  nav: { display: 'flex', gap: 26, marginLeft: 8 },
  link: { fontFamily: 'var(--font-sans)', fontSize: 14.5, fontWeight: 500, color: 'var(--brand-slate)', textDecoration: 'none' },
  linkActive: { color: 'var(--brand-ink)' },
  right: { marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 18 },
  status: { display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.04em', color: 'var(--brand-slate)' },
  dot: { width: 7, height: 7, borderRadius: 999, background: '#1C7C54' },
  avatar: { width: 34, height: 34, borderRadius: 999, background: 'var(--brand-teal)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' },
};
window.SiteHeader = SiteHeader;
