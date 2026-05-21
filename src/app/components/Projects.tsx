export default function Projects() {
  return (
    <section id="projects" style={{
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
      }}>02 / proyectos</div>

      <h2 style={{
        fontSize: '28px',
        fontWeight: 900,
        color: '#fff',
        marginBottom: '1.5rem',
        letterSpacing: '-0.02em',
        textTransform: 'uppercase' as const,
        fontFamily: 'var(--body)',
      }}>Trabajo real</h2>

      <div style={{
        background: 'var(--bg2)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderTop: '2px solid var(--acc)',
        padding: '1.5rem',
        position: 'relative' as const,
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '10px',
          gap: '1rem',
        }}>
          <span style={{
            fontSize: '17px',
            fontWeight: 700,
            color: '#fff',
            fontFamily: 'var(--body)',
            letterSpacing: '-0.01em',
          }}>Agloval — Sistema de Presupuestos</span>
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '8px',
            letterSpacing: '0.1em',
            padding: '4px 8px',
            background: 'rgba(225,29,72,0.08)',
            border: '1px solid rgba(225,29,72,0.2)',
            color: 'var(--acc)',
            textTransform: 'uppercase' as const,
            flexShrink: 0,
            marginTop: '2px',
          }}>cliente real</span>
        </div>

        <p style={{
          fontSize: '13px',
          color: '#52525b',
          lineHeight: 1.7,
          marginBottom: '12px',
          fontWeight: 300,
        }}>
          Módulo backend completo para Agloval SL. Gestión de presupuestos end-to-end: generación, seguimiento y cálculo. Arquitectura backend real — no un TODO app de tutorial.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4px',
          marginBottom: '12px',
        }}>
          {[
            'Generación automática de presupuestos',
            'Cálculo dinámico de precios',
            'Persistencia en base de datos',
            'APIs REST documentadas',
          ].map((f, i) => (
            <span key={i} style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              color: '#52525b',
              letterSpacing: '0.02em',
            }}>
              <span style={{ color: 'rgba(225,29,72,0.4)' }}>// </span>{f}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' as const }}>
          {['Java', 'Spring Boot', 'REST APIs', 'SQL'].map((tag, i) => (
            <span key={i} style={{
              fontFamily: 'var(--mono)',
              fontSize: '9px',
              color: 'var(--muted)',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '4px 8px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.06em',
            }}>{tag}</span>
          ))}
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '9px',
            color: 'rgba(82,82,91,0.4)',
            padding: '4px 8px',
          }}>GitHub próximamente</span>
        </div>
      </div>
    </section>
  )
}