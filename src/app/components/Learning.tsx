export default function Learning() {
  const roadmap = [
    { label: 'Java', status: 'done', time: '' },
    { label: 'Spring Boot', status: 'now', time: '' },
    { label: 'Docker', status: 'next', time: 'Q3 26' },
    { label: 'K8s', status: 'next', time: 'Q4 26' },
    { label: 'CI/CD', status: 'next', time: 'Q4 26' },
    { label: 'Dist. Arch', status: 'next', time: 'Q1 27' },
  ]

  return (
    <section id="learning" style={{
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
      }}>03 / aprendiendo</div>

      <h2 style={{
        fontSize: '28px',
        fontWeight: 900,
        color: '#fff',
        marginBottom: '1.5rem',
        letterSpacing: '-0.02em',
        textTransform: 'uppercase' as const,
        fontFamily: 'var(--body)',
      }}>Roadmap técnico</h2>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto' as const,
        padding: '0.5rem 0',
        gap: 0,
        marginBottom: '1.5rem',
      }}>
        {roadmap.map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', minWidth: '76px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--mono)',
                fontSize: '8px',
                fontWeight: 700,
                marginBottom: '6px',
                textAlign: 'center' as const,
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
                background: step.status === 'done' ? 'rgba(167,139,250,0.08)' : step.status === 'now' ? 'rgba(245,158,11,0.08)' : 'var(--bg3)',
                border: `1.5px solid ${step.status === 'done' ? 'var(--acc3)' : step.status === 'now' ? 'var(--acc2)' : 'rgba(255,255,255,0.05)'}`,
                color: step.status === 'done' ? 'var(--acc3)' : step.status === 'now' ? 'var(--acc2)' : 'var(--muted)',
              }}>
                {step.status === 'done' ? '✓' : step.status === 'now' ? 'NOW' : step.time}
              </div>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '9px',
                color: 'var(--muted)',
                textAlign: 'center' as const,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.06em',
              }}>{step.label}</span>
            </div>
            {i < roadmap.length - 1 && (
              <div style={{
                width: '20px',
                height: '1px',
                background: 'rgba(255,255,255,0.05)',
                flexShrink: 0,
                marginBottom: '18px',
              }} />
            )}
          </div>
        ))}
      </div>

      <div style={{
        fontFamily: 'var(--mono)',
        fontSize: '10px',
        color: 'rgba(82,82,91,0.7)',
        padding: '10px 14px',
        background: 'rgba(255,255,255,0.01)',
        border: '1px solid rgba(255,255,255,0.04)',
        lineHeight: 1.8,
        letterSpacing: '0.02em',
      }}>
        <span style={{ color: 'rgba(225,29,72,0.4)' }}>// </span>
        Curso de 8h en IA para programación: orquestación, agentes, workflows — no videocoding.<br />
        <span style={{ color: 'rgba(225,29,72,0.4)' }}>// </span>
        Filosofía: construir mientras aprendo. IA como herramienta, no como muleta.
      </div>
    </section>
  )
}