// AI Hub — assistant / tool workspace view. Sidebar + chat thread + composer.
function Assistant({ toolId, onHome }) {
  const { Button, Badge, Eyebrow } = window[Object.keys(window).find(k => /^(TDH)?DesignSystem_/.test(k))];
  const Icon = window.Icon;
  const TOOLS = window.TOOLS;
  const tool = TOOLS.find((t) => t.id === toolId) || TOOLS[0];

  const seed = {
    proposal: 'Draft a scope-of-work section for a municipal water main replacement, ~4,200 LF, including survey, design, and construction admin.',
    specs: 'What sidewalk cross-slope does PROWAG require, and how does it differ from the prior ADAAG guidance?',
    calc: 'Check the shear in a simply supported W18x35 beam, 24 ft span, 1.6 k/ft factored load.',
    qaqc: 'Review this drawing set for missing detail callouts and sheet-reference mismatches.',
    knowledge: 'Have we designed a fish-passage culvert replacement on a USFS project before? Summarize lessons learned.',
    rfp: 'Summarize this RFP and tell me which TD&H service lines it maps to.',
  }[tool.id] || '';

  const reply = {
    proposal: 'Here is a draft scope section, grounded in three comparable TD&H projects (Great Falls 2021, Helena 2019, Spokane 2022):\n\n1. SURVEY & MAPPING — Topographic survey of the 4,200 LF corridor, utility locates, and base mapping at 1"=20\'.\n2. PRELIMINARY DESIGN — Alignment alternatives, hydraulic modeling, and a 30% submittal with opinion of probable cost.\n3. FINAL DESIGN — Plans, specifications, and bid documents to agency standards.\n4. CONSTRUCTION ADMINISTRATION — Submittal review, RFIs, and periodic site observation.',
    specs: 'Per PROWAG R304.2, sidewalk cross-slope shall not exceed 2.0%. This is functionally the same maximum as the prior ADAAG, but PROWAG applies it explicitly to the pedestrian access route and adds running-slope provisions tied to the roadway grade [cited: PROWAG R304].',
    calc: 'For a W18x35, Fy = 50 ksi:\nVu = wL/2 = (1.6 k/ft × 24 ft)/2 = 19.2 kips.\nϕVn = 1.0 × 0.6 × 50 × (17.7 × 0.300) = 159 kips.\nVu / ϕVn = 0.12 — shear governs well below capacity. ✓',
    qaqc: 'Scan complete. 3 items to resolve before issue:\n• Sheet C-301 references Detail 4/C-501 — detail not found on C-501.\n• Callout "MATCH LINE A" on C-101 has no corresponding match line on C-102.\n• Keynote 12 used on C-401 is undefined in the keynote legend.',
    knowledge: 'Yes — 4 USFS fish-passage projects since 2016. Closest precedent: the Nez Perce / USFS box-culvert replacement (pipe-arch, completed within the fish window). Key lessons: schedule construction inside the in-water window, coordinate the larger-span hydraulic opening early, and budget for tribal and agency review cycles.',
    rfp: 'RFP summary: regional transportation agency, on-call roadway & drainage design, 3-year term. Maps to TD&H service lines: Transportation (lead), Civil/Land Development, and Environmental (stormwater). Recommended lead office: Spokane.',
  }[tool.id] || 'Here is a grounded answer drawn from TD&H precedents and cited standards.';

  const [messages, setMessages] = React.useState([
    { role: 'assistant', text: `You're in **${tool.name}**. ${tool.desc} Ask me anything, or try the suggested prompt below.` },
  ]);
  const [draft, setDraft] = React.useState('');
  const [thinking, setThinking] = React.useState(false);
  const threadRef = React.useRef(null);

  React.useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [messages, thinking]);

  function send(text) {
    const t = (text != null ? text : draft).trim();
    if (!t || thinking) return;
    setMessages((m) => [...m, { role: 'user', text: t }]);
    setDraft('');
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setMessages((m) => [...m, { role: 'assistant', text: reply }]);
    }, 850);
  }

  return (
    <div style={as.shell}>
      {/* Sidebar */}
      <aside style={as.side}>
        <button onClick={onHome} style={as.back}><Icon name="arrow-left" size={15} /> All tools</button>
        <div style={as.sideList}>
          {TOOLS.map((t) => (
            <button key={t.id} onClick={() => window.__navTool && window.__navTool(t.id)} style={{ ...as.sideItem, ...(t.id === tool.id ? as.sideItemActive : {}) }}>
              <Icon name={t.icon} size={17} stroke={1.9} />
              <span>{t.name}</span>
            </button>
          ))}
        </div>
        <div style={as.sideFoot}>
          <span style={as.sideStatus}><span style={as.sdot} />Grounded · in-firm data</span>
        </div>
      </aside>

      {/* Conversation */}
      <main style={as.main}>
        <header style={as.head}>
          <span style={as.headIcon}><Icon name={tool.icon} size={20} stroke={1.9} /></span>
          <div>
            <div style={as.headName}>{tool.name}</div>
            <div style={as.headSub}>{tool.desc}</div>
          </div>
          <span style={{ marginLeft: 'auto' }}><Badge variant="success" dot>Online</Badge></span>
        </header>

        <div ref={threadRef} style={as.thread}>
          {messages.map((m, i) => (
            <div key={i} style={{ ...as.row, justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
              {m.role === 'assistant' && <span style={as.botAvatar}>AI</span>}
              <div style={m.role === 'user' ? as.userBubble : as.botBubble}>
                {m.text.split('\n').map((line, j) => <div key={j} style={{ marginTop: j ? 4 : 0 }}>{renderLine(line)}</div>)}
              </div>
            </div>
          ))}
          {thinking && (
            <div style={as.row}>
              <span style={as.botAvatar}>AI</span>
              <div style={as.botBubble}><span style={as.typing}><i style={as.tdot} /><i style={{ ...as.tdot, animationDelay: '.15s' }} /><i style={{ ...as.tdot, animationDelay: '.3s' }} /></span></div>
            </div>
          )}
        </div>

        <div style={as.composerWrap}>
          {messages.length <= 1 && (
            <div style={as.suggest}>
              <span style={as.suggestLabel}>Try</span>
              <button style={as.chip} onClick={() => send(seed)}>{seed.length > 64 ? seed.slice(0, 64) + '…' : seed}</button>
            </div>
          )}
          <div style={as.composer}>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder={`Message ${tool.name}…`}
              rows={1}
              style={as.input}
            />
            <Button variant="accent" onClick={() => send()} iconRight={<Icon name="arrow-up" size={16} />}>Send</Button>
          </div>
          <div style={as.disclaimer}>Answers cite firm standards and project history. Verify against sealed documents before use.</div>
        </div>
      </main>
    </div>
  );
}

function renderLine(line) {
  // light **bold** support
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => p.startsWith('**') && p.endsWith('**')
    ? <strong key={i} style={{ color: 'var(--brand-ink)' }}>{p.slice(2, -2)}</strong>
    : <React.Fragment key={i}>{p}</React.Fragment>);
}

const as = {
  shell: { display: 'flex', height: 'calc(100vh - 64px)', minHeight: 520, background: '#F7F9F9' },
  side: { width: 256, flex: 'none', borderRight: '1px solid var(--brand-hairline)', background: '#fff', display: 'flex', flexDirection: 'column', padding: 16 },
  back: { display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 0, cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--brand-slate)', padding: '6px 4px', marginBottom: 10 },
  sideList: { display: 'flex', flexDirection: 'column', gap: 2 },
  sideItem: { display: 'flex', alignItems: 'center', gap: 11, padding: '10px 11px', border: 0, borderRadius: 3, background: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--brand-slate)' },
  sideItemActive: { background: 'var(--brand-mist)', color: 'var(--brand-ink)', fontWeight: 600 },
  sideFoot: { marginTop: 'auto', paddingTop: 12 },
  sideStatus: { display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--brand-slate)' },
  sdot: { width: 7, height: 7, borderRadius: 999, background: '#1C7C54' },

  main: { flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 },
  head: { display: 'flex', alignItems: 'center', gap: 14, padding: '18px 28px', borderBottom: '1px solid var(--brand-hairline)', background: '#fff' },
  headIcon: { width: 42, height: 42, borderRadius: 4, background: 'var(--brand-mist)', color: 'var(--brand-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' },
  headName: { fontSize: 17, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--brand-ink)' },
  headSub: { fontSize: 13, color: 'var(--brand-slate)', marginTop: 2, maxWidth: 560 },

  thread: { flex: 1, overflowY: 'auto', padding: '26px 28px', display: 'flex', flexDirection: 'column', gap: 16 },
  row: { display: 'flex', gap: 12, alignItems: 'flex-start' },
  botAvatar: { width: 30, height: 30, flex: 'none', borderRadius: 4, background: 'var(--brand-teal)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  botBubble: { maxWidth: 620, background: '#fff', border: '1px solid var(--brand-hairline)', borderRadius: '3px 10px 10px 10px', padding: '13px 16px', fontSize: 14.5, lineHeight: 1.55, color: '#23383f', boxShadow: 'var(--shadow-card)' },
  userBubble: { maxWidth: 560, background: 'var(--brand-teal)', color: '#eef5f4', borderRadius: '10px 3px 10px 10px', padding: '13px 16px', fontSize: 14.5, lineHeight: 1.55 },

  composerWrap: { borderTop: '1px solid var(--brand-hairline)', background: '#fff', padding: '14px 28px 18px' },
  suggest: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 },
  suggestLabel: { fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--brand-slate)' },
  chip: { fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--brand-ink)', background: 'var(--brand-mist)', border: '1px solid var(--brand-hairline)', borderRadius: 3, padding: '8px 12px', cursor: 'pointer', textAlign: 'left' },
  composer: { display: 'flex', gap: 12, alignItems: 'flex-end' },
  input: { flex: 1, resize: 'none', fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.5, color: 'var(--brand-ink)', border: '1px solid var(--brand-hairline)', borderRadius: 4, padding: '12px 14px', minHeight: 46, maxHeight: 140, outline: 'none' },
  disclaimer: { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--brand-slate)', marginTop: 10 },

  typing: { display: 'inline-flex', gap: 4, alignItems: 'center', padding: '2px 0' },
  tdot: { width: 6, height: 6, borderRadius: 999, background: 'var(--brand-taupe)', display: 'inline-block', animation: 'tdhTyping 1s infinite ease-in-out' },
};
window.Assistant = Assistant;
