// AI Hub — landing view. Hero, tool grid, stat band, news, footer.
const TOOLS = [
  { id: 'proposal', icon: 'file-pen-line', name: 'Proposal Drafter', desc: 'Generate scoped proposal sections from a project brief and past TD&H precedents.', tag: 'Most used' },
  { id: 'specs', icon: 'book-open-text', name: 'Spec & Standards Lookup', desc: 'Search MUTCD, AASHTO, IBC and agency standards with cited answers.', tag: null },
  { id: 'calc', icon: 'calculator', name: 'Calc Assistant', desc: 'Draft and check structural and hydraulic calculations with shown work.', tag: null },
  { id: 'qaqc', icon: 'list-checks', name: 'QA / QC Reviewer', desc: 'Flag drawing inconsistencies and missing details before issue.', tag: 'New' },
  { id: 'knowledge', icon: 'folder-search', name: 'Project Knowledge', desc: 'Ask across 60 years of TD&H project archives and lessons learned.', tag: null },
  { id: 'rfp', icon: 'mail-search', name: 'RFP Scanner', desc: 'Summarize incoming RFPs and match them to the right service lines.', tag: null },
];

function Landing({ onOpenTool }) {
  const { Button, Eyebrow, Card, Badge, Stat } = window[Object.keys(window).find(k => /^(TDH)?DesignSystem_/.test(k))];
  const Icon = window.Icon;
  return (
    <div>
      {/* Hero */}
      <section style={ld.hero}>
        <div style={ld.heroInner}>
          <Eyebrow>Internal · Employee-owners only</Eyebrow>
          <h1 style={ld.h1}>AI that understands<br /><span style={{ color: 'var(--brand-teal)' }}>how TD&amp;H engineers.</span></h1>
          <p style={ld.lead}>One hub for the AI tools that draft proposals, check calcs, search standards, and surface six decades of project knowledge — grounded in our own work.</p>
          <div style={ld.heroCtas}>
            <Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={17} />} onClick={() => onOpenTool('proposal')}>Open a tool</Button>
            <Button variant="outline" size="lg">Watch the 2-min tour</Button>
          </div>
          <div style={ld.heroMeta}>
            <span><span style={ld.dot} />Connected to ProjectWise &amp; Deltek</span>
            <span>SOC 2 · data stays in-firm</span>
          </div>
        </div>
      </section>

      {/* Tool grid */}
      <section style={ld.section}>
        <div style={ld.sectionHead}>
          <Eyebrow>The toolkit</Eyebrow>
          <h2 style={ld.h2}>Six assistants, one login</h2>
        </div>
        <div style={ld.toolGrid}>
          {TOOLS.map((t) => (
            <Card key={t.id} interactive onClick={() => onOpenTool(t.id)} style={{ cursor: 'pointer' }}>
              <div style={ld.toolTop}>
                <span style={ld.toolIcon}><Icon name={t.icon} size={22} stroke={1.8} /></span>
                {t.tag && <Badge variant={t.tag === 'New' ? 'orange' : 'outline'}>{t.tag}</Badge>}
              </div>
              <h3 style={ld.toolName}>{t.name}</h3>
              <p style={ld.toolDesc}>{t.desc}</p>
              <span style={ld.toolLink}>Open <Icon name="arrow-up-right" size={14} /></span>
            </Card>
          ))}
        </div>
      </section>

      {/* Stat band */}
      <section style={ld.band}>
        <div style={ld.bandInner}>
          <div style={{ maxWidth: 320 }}>
            <Eyebrow tone="onDark">Adoption</Eyebrow>
            <p style={ld.bandText}>Built by the firm, for the firm — measured the way we measure projects: by results.</p>
          </div>
          <div style={ld.stats}>
            <Stat value="6" suffix="tools" label="In production" onDark size="md" />
            <Stat value="540" suffix="+" label="Active employee-owners" onDark size="md" />
            <Stat value="9" suffix="hrs" label="Saved / person / week" onDark size="md" />
            <Stat value="5" suffix="states" label="Offices connected" onDark size="md" />
          </div>
        </div>
      </section>

      {/* News */}
      <section style={ld.section}>
        <div style={ld.sectionHead}>
          <Eyebrow tone="accent">News &amp; insight</Eyebrow>
          <h2 style={ld.h2}>From the AI working group</h2>
        </div>
        <div style={ld.newsGrid}>
          {[
            { tag: 'Release', date: '06 / 12', title: 'QA/QC Reviewer enters firm-wide beta', body: 'Drawing-set consistency checks now available to all structural teams.' },
            { tag: 'Guide', date: '05 / 28', title: 'Writing prompts that cite our standards', body: 'A field guide to grounding answers in MUTCD and AASHTO references.' },
            { tag: 'Policy', date: '05 / 09', title: 'What stays in-firm — data handling FAQ', body: 'Where prompts go, what is retained, and how client data is protected.' },
          ].map((n) => (
            <Card key={n.title} interactive flat style={{ cursor: 'pointer', borderColor: 'var(--brand-hairline)' }}>
              <div style={ld.newsTop}><Badge variant="teal">{n.tag}</Badge><span style={ld.newsDate}>{n.date}</span></div>
              <h3 style={ld.newsTitle}>{n.title}</h3>
              <p style={ld.toolDesc}>{n.body}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={ld.footer}>
        <div style={ld.footerInner}>
          <div>
            <div style={ld.fWord}>TD<span style={{ color: 'var(--brand-orange)' }}>&amp;</span>H <span style={ld.fHub}>AI HUB</span></div>
            <p style={ld.fNote}>Thomas Dean &amp; Hoskins, Inc. · Employee-owned since 1972 · Great Falls, MT</p>
          </div>
          <div style={ld.fLinks}>
            <a href="#" style={ld.fLink} onClick={(e)=>e.preventDefault()}>Acceptable use</a>
            <a href="#" style={ld.fLink} onClick={(e)=>e.preventDefault()}>Request a tool</a>
            <a href="#" style={ld.fLink} onClick={(e)=>e.preventDefault()}>Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const ld = {
  hero: { position: 'relative', backgroundImage: 'linear-gradient(var(--brand-grid) 1px, transparent 1px), linear-gradient(90deg, var(--brand-grid) 1px, transparent 1px)', backgroundSize: 'var(--grid-cell) var(--grid-cell)' },
  heroInner: { maxWidth: 1200, margin: '0 auto', padding: '88px 28px 76px' },
  h1: { fontFamily: 'var(--font-sans)', fontSize: 60, fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.02, color: 'var(--brand-ink)', margin: '18px 0 0' },
  lead: { fontSize: 19, lineHeight: 1.55, color: '#2c454d', maxWidth: 620, margin: '22px 0 0' },
  heroCtas: { display: 'flex', gap: 14, marginTop: 32 },
  heroMeta: { display: 'flex', gap: 26, marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--brand-slate)' },
  dot: { display: 'inline-block', width: 7, height: 7, borderRadius: 999, background: '#1C7C54', marginRight: 8 },

  section: { maxWidth: 1200, margin: '0 auto', padding: '72px 28px' },
  sectionHead: { marginBottom: 32 },
  h2: { fontFamily: 'var(--font-sans)', fontSize: 34, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--brand-ink)', margin: '12px 0 0' },

  toolGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 },
  toolTop: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 },
  toolIcon: { width: 46, height: 46, borderRadius: 4, background: 'var(--brand-mist)', color: 'var(--brand-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  toolName: { fontSize: 19, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--brand-ink)', margin: '0 0 7px' },
  toolDesc: { fontSize: 14, lineHeight: 1.5, color: 'var(--brand-slate)', margin: 0 },
  toolLink: { display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--brand-orange)' },

  band: { background: 'var(--brand-teal)' },
  bandInner: { maxWidth: 1200, margin: '0 auto', padding: '56px 28px', display: 'flex', gap: 48, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' },
  bandText: { color: '#dbe7e7', fontSize: 16, lineHeight: 1.55, margin: '12px 0 0' },
  stats: { display: 'flex', gap: 44, flexWrap: 'wrap' },

  newsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 },
  newsTop: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
  newsDate: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--brand-slate)' },
  newsTitle: { fontSize: 18, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--brand-ink)', margin: '0 0 7px', lineHeight: 1.2 },

  footer: { borderTop: '1px solid var(--brand-hairline)', background: '#fff' },
  footerInner: { maxWidth: 1200, margin: '0 auto', padding: '40px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 },
  fWord: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 20, letterSpacing: '-.02em', color: 'var(--brand-ink)' },
  fHub: { fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', color: 'var(--brand-teal)', marginLeft: 4 },
  fNote: { fontSize: 13, color: 'var(--brand-slate)', margin: '8px 0 0' },
  fLinks: { display: 'flex', gap: 26 },
  fLink: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.04em', color: 'var(--brand-slate)', textDecoration: 'none' },
};
window.Landing = Landing;
window.TOOLS = TOOLS;
