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
      }}>Cómo trabajo</h2>

      <div className="two-col-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '2rem',
      }}>
        <div>
          {[
            { text: 'Backend engineer construyendo sistemas production-grade. ', highlight: 'Rigor: cada decisión documentada, cada capa testeada.', end: ' Arquitectura hexagonal para separar dominio, aplicación e infraestructura, y seguridad pensada desde el diseño, no añadida al final.' },
            { text: 'Uso IA como herramienta de orquestación para mejorar la calidad, no como sustituto: ', highlight: 'el engineer lidera, sin atajos.', end: ' Reviso, cuestiono y valido cada resultado antes de que llegue al código.' },
            { text: 'La prueba está en los números: ', highlight: '~98% de cobertura de tests', end: ' en el backend de Material Cutting Optimizer. No sigo tutoriales pasivos — construyo proyectos reales. Cursando DAM en paralelo y disponible ahora mismo.' },
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
            { date: 'Feb 2026', text: 'Enfoque backend: Java, Spring Boot y primeros proyectos reales', active: false },
            { date: 'Mayo 2026', text: 'Budget Management System · 1er semestre DAM completado', active: false },
            { date: 'Ago 2026', text: 'Material Cutting Optimizer: fullstack, hexagonal, ~98% coverage', active: false },
            { date: 'Ahora', text: 'Kubernetes, CI/CD y arquitectura distribuida — aprendidos construyendo', active: true },
            { date: 'Sep–Feb 27', text: 'Últimos semestres DAM + prácticas + TFG', active: false },
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
          { label: 'React 18', type: 'a' },
          { label: 'TypeScript', type: 'a' },
          { label: 'Node.js', type: 'a' },
          { label: 'Express', type: 'a' },
          { label: 'Prisma', type: 'a' },
          { label: 'Jest', type: 'a' },
          { label: 'Cypress', type: 'a' },
          { label: 'Git · GitHub', type: 'b' },
          { label: 'Linux basics', type: 'b' },
          { label: 'Docker', type: 'b' },
          { label: 'Kubernetes →', type: 'c' },
          { label: 'CI/CD →', type: 'c' },
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