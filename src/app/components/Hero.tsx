'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
 <section style={{
  padding: isMobile ? '2rem 1.5rem' : '4rem 2rem 3rem',
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row' as const,
  alignItems: 'flex-start',
  gap: isMobile ? '1rem' : '4rem',
}}>
      <div style={{ maxWidth: '520px', flexShrink: 0, width: '100%' }}>
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
          <span style={{ color: 'var(--acc)' }}>SOFTWARE ENGINEER.</span>
          <span style={{
            fontSize: '20px',
            fontWeight: 300,
            display: 'block',
            color: '#3f3f46',
            textTransform: 'none' as const,
            letterSpacing: '-0.01em',
            marginTop: '10px',
          }}>
            Rigorous Architecture &amp; Security-First
          </span>
        </h1>

        {!isMobile && (
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
              { text: 'Hexagonal Architecture', hi: false },
              { text: '~98% test coverage', hi: true },
              { text: 'AI-augmented', hi: false },
              { text: 'Fullstack capable', hi: true },
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
        )}

        <p style={{
          fontSize: '16px',
          color: '#71717a',
          maxWidth: '560px',
          lineHeight: 1.8,
          marginBottom: '2rem',
          fontWeight: 300,
        }}>
          Backend engineer construyendo sistemas production-grade.{' '}
          <strong style={{ color: '#e4e4e7', fontWeight: 600 }}>
            Arquitectura rigurosa, testing exhaustivo, security-first.
          </strong>{' '}
          Uso IA como herramienta de orquestación: el engineer lidera, sin atajos.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '5px', marginBottom: '2rem' }}>
          {['Java', 'Spring Boot', 'React 18', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'Jest', 'Cypress'].map((tech) => (
            <span key={tech} style={{
              fontFamily: 'var(--mono)',
              fontSize: '9px',
              padding: '5px 10px',
              borderRadius: '2px',
              border: '1px solid rgba(245,158,11,0.2)',
              background: 'rgba(245,158,11,0.03)',
              color: 'var(--acc2)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
            }}>{tech}</span>
          ))}
        </div>

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
          <a href="/Borja_Rodriguez_CV_2026.pdf" target="_blank" rel="noopener noreferrer" style={{
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

      {!isMobile && (
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
              { cmd: '❯ nombre', out: 'Borja Rodríguez · Backend Software Engineer' },
              { cmd: '❯ ubicacion', out: 'Alaquas, Valencia, España' },
              { cmd: '❯ estado', out: '● OPEN TO WORK' },
              { cmd: '❯ stack', out: 'Java · Spring Boot · TypeScript · Node.js · React' },
              { cmd: '❯ enfoque', out: 'Hexagonal · Testing · Security-first' },
              { cmd: '❯ formacion', out: 'DAM + construcción de proyectos reales' },
              { cmd: '❯ contacto', out: 'borja8.dev@gmail.com' },
            ].map((line, i) => (
              <div key={i} style={{ marginBottom: '10px' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--acc2)', letterSpacing: '0.04em' }}>{line.cmd}</div>
                <div style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '11px',
                  color: line.cmd === '❯ estado' ? 'var(--acc)' : 'var(--muted)',
                  paddingLeft: '12px',
                  letterSpacing: '0.04em',
                }}>{line.out}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}