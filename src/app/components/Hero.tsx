'use client'

export default function Hero() {
  return (
    <section style={{
      padding: '4rem 2rem 3rem',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '4rem',
    }}>
      <div style={{ maxWidth: '520px', flexShrink: 0 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '2rem',
        }}>
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            padding: '4px 10px',
            borderRadius: '2px',
            background: 'rgba(225,29,72,0.08)',
            border: '1px solid rgba(225,29,72,0.2)',
            color: 'var(--acc)',
            textTransform: 'uppercase' as const,
          }}>● Open to work</span>
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            color: 'var(--muted)',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.1em',
          }}>Alaquas, Valencia</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--body)',
          fontSize: '52px',
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          color: '#fff',
          marginBottom: '1.25rem',
          textTransform: 'uppercase' as const,
        }}>
          BACKEND<br />
          <span style={{ color: 'var(--acc)' }}>DEVELOPER.</span>
          <span style={{
            fontSize: '20px',
            fontWeight: 300,
            display: 'block',
            color: '#3f3f46',
            textTransform: 'none' as const,
            letterSpacing: '-0.01em',
            marginTop: '10px',
          }}>
            Java · Spring Boot · REST APIs · SQL
          </span>
        </h1>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '3px',
          overflow: 'hidden',
          marginBottom: '1.75rem',
          maxWidth: '520px',
        }}>
          {[
            { text: '24 años', hi: false },
            { text: 'DAM en progreso', hi: true },
            { text: 'Feb 2026 → ahora', hi: false },
            { text: '3-4 meses · proyectos reales', hi: true },
          ].map((item, i) => (
            <span key={i} style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              color: item.hi ? 'var(--acc2)' : 'var(--muted)',
              padding: '7px 14px',
              letterSpacing: '0.08em',
              borderRight: '1px solid rgba(255,255,255,0.05)',
              background: item.hi ? 'rgba(245,158,11,0.04)' : 'transparent',
            }}>
              {item.text}
            </span>
          ))}
        </div>

        <p style={{
          fontSize: '16px',
          color: '#71717a',
          maxWidth: '560px',
          lineHeight: 1.8,
          marginBottom: '2rem',
          fontWeight: 300,
        }}>
          En febrero de 2026 tomé una decisión: backend developer.{' '}
          <strong style={{ color: '#e4e4e7', fontWeight: 600 }}>
            Una decisión. Cero dudas.
          </strong>{' '}
          En 3-4 meses pasé de cero a proyectos reales en producción. No soy un junior de manual — tengo mentalidad, velocidad y arquitectura real que lo demuestra.
        </p>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' as const }}>
          <a href="#projects" style={{
            background: 'var(--acc)',
            color: '#fff',
            border: 'none',
            padding: '11px 24px',
            borderRadius: '2px',
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            cursor: 'pointer',
            textDecoration: 'none',
            textTransform: 'uppercase' as const,
          }}>Ver proyectos</a>
          <a href="/cv" style={{
            background: 'transparent',
            color: 'var(--muted)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '11px 24px',
            borderRadius: '2px',
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            textDecoration: 'none',
            textTransform: 'uppercase' as const,
          }}>Descargar CV</a>
        </div>
      </div>

      <div style={{
        flex: 1,
        background: 'var(--bg2)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '4px',
        overflow: 'hidden',
        marginTop: '1rem',
      }}>
        <div style={{
          background: 'var(--bg3)',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(225,29,72,0.5)' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(245,158,11,0.3)' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(0,212,170,0.3)' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', marginLeft: '8px' }}>borja@dev ❯ </span>
        </div>
        <div style={{ padding: '1.25rem' }}>
          {[
            { cmd: '❯ nombre', out: 'Borja Rodríguez · Junior Backend Dev' },
{ cmd: '❯ ubicacion', out: 'Alaquas, Valencia, España' },
{ cmd: '❯ estado', out: '● OPEN TO WORK' },
{ cmd: '❯ stack', out: 'Java · Spring Boot · REST APIs · SQL' },
{ cmd: '❯ formacion', out: 'DAM + Backend autodidacta' },
{ cmd: '❯ objetivo', out: 'Junior Backend contratado · dic 2026' },
{ cmd: '❯ contacto', out: 'borja8.dev@gmail.com' },
          ].map((line, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--acc2)', letterSpacing: '0.04em' }}>{line.cmd}</div>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: line.cmd === '$ status' ? 'var(--acc)' : 'var(--muted)',
                paddingLeft: '12px',
                letterSpacing: '0.04em',
              }}>{line.out}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}