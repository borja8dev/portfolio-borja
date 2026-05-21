export default function About() {
  return (
    <section id="about" style={{
      padding: '2.5rem 2rem',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{
        fontFamily: 'var(--mono)',
        fontSize: '10px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase' as const,
        color: 'rgba(225,29,72,0.4)',
        marginBottom: '4px',
      }}>01 / sobre mí</div>

      <h2 style={{
        fontSize: '28px',
        fontWeight: 900,
        color: '#fff',
        marginBottom: '1.5rem',
        letterSpacing: '-0.02em',
        textTransform: 'uppercase' as const,
        fontFamily: 'var(--body)',
      }}>Por qué soy diferente</h2>

      <div className="two-col-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '2rem',
      }}>
        <div>
          {[
            { text: 'Estudié DAM online mientras aprendía backend por mi cuenta. Entendí desde el principio que la única forma de entrar al mercado tech era ', highlight: 'construir cosas reales', end: ', no acumular teoría.' },
            { text: 'Pensamiento lógico estructurado. Velocidad de aprendizaje alta. ', highlight: 'Claridad absoluta sobre hacia dónde voy', end: ': backend donde sea irremplazable. No me asustan los retos desconocidos.' },
            { text: 'Disponible ahora mismo. Dos semestres de DAM + prácticas + TFG (sept 2026 – feb 2027) en paralelo con mi primer trabajo.', highlight: '', end: '' },
          ].map((p, i) => (
            <p key={i} style={{
              fontSize: '14px',
              color: '#71717a',
              lineHeight: 1.85,
              marginBottom: '0.85rem',
              fontWeight: 300,
            }}>
              {p.text}
              {p.highlight && <strong style={{ color: '#e4e4e7', fontWeight: 600 }}>{p.highlight}</strong>}
              {p.end}
            </p>
          ))}
        </div>

        <div>
          {[
            { date: 'Feb 2026', text: 'Punto de inflexión — decisión 100% backend', active: false },
            { date: 'Feb–May 26', text: 'Java intensivo + Spring Boot + primeros proyectos reales', active: false },
            { date: 'Mayo 2026', text: '1er semestre DAM completado · Open to work', active: true },
            { date: 'Sep–Feb 27', text: 'Últimos semestres + prácticas + TFG', active: false },
            { date: 'Dic 2026', text: 'Objetivo: junior backend contratado', active: false },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', width: '40px', flexShrink: 0 }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: item.active ? 'var(--acc)' : 'transparent',
                  border: `1.5px solid ${item.active ? 'var(--acc)' : 'var(--muted)'}`,
                  flexShrink: 0,
                  marginTop: '2px',
                }} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '9px',
                  color: 'rgba(225,29,72,0.6)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  marginBottom: '2px',
                }}>{item.date}</div>
                <div style={{ fontSize: '13px', color: '#71717a', fontWeight: 300 }}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '5px' }}>
        {[
          { label: 'Java', type: 'a' },
          { label: 'Spring Boot', type: 'a' },
          { label: 'REST APIs', type: 'a' },
          { label: 'SQL', type: 'a' },
          { label: 'Git · GitHub', type: 'b' },
          { label: 'Linux basics', type: 'b' },
          { label: 'Docker →', type: 'c' },
          { label: 'Kubernetes →', type: 'c' },
          { label: 'CI/CD →', type: 'c' },
          { label: 'Testing →', type: 'c' },
          { label: 'Dist. Arch →', type: 'c' },
        ].map((sk, i) => (
          <span key={i} style={{
            fontFamily: 'var(--mono)',
            fontSize: '9px',
            padding: '5px 10px',
            borderRadius: '2px',
            border: '1px solid',
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            color: sk.type === 'a' ? 'var(--acc2)' : sk.type === 'b' ? 'var(--muted)' : 'rgba(82,82,91,0.5)',
            borderColor: sk.type === 'a' ? 'rgba(245,158,11,0.2)' : sk.type === 'b' ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
            background: sk.type === 'a' ? 'rgba(245,158,11,0.03)' : 'transparent',
          }}>{sk.label}</span>
        ))}
      </div>
    </section>
  )
}