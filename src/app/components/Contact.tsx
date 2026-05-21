export default function Contact() {
  return (
    <section id="contact" style={{
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
      }}>04 / contacto</div>

      <h2 style={{
        fontSize: '28px',
        fontWeight: 900,
        color: '#fff',
        marginBottom: '0.5rem',
        letterSpacing: '-0.02em',
        textTransform: 'uppercase' as const,
        fontFamily: 'var(--body)',
      }}>¿Proyecto interesante?</h2>

      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '11px',
        color: 'rgba(82,82,91,0.7)',
        marginBottom: '1.25rem',
        letterSpacing: '0.02em',
      }}>
        <span style={{ color: 'rgba(225,29,72,0.4)' }}>// </span>
        Escríbeme. Respondo rápido.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
        {[
          { key: '@', text: 'borja8.dev@gmail.com', href: 'mailto:borja8.dev@gmail.com' },
          { key: 'GH', text: 'github.com/borja8dev', href: 'https://github.com/borja8dev' },
          { key: 'in', text: 'linkedin.com/in/borja-rodríguez-castillo', href: 'https://linkedin.com/in/borja-rodríguez-castillo-9606bb398' },
        ].map((item, i) => (
          <a key={i} href={item.href} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#52525b',
            fontSize: '13px',
            padding: '10px 14px',
            border: '1px solid rgba(255,255,255,0.04)',
            borderRadius: '2px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--acc2)'
            e.currentTarget.style.borderColor = 'rgba(245,158,11,0.15)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#52525b'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
          }}>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '9px',
              color: 'var(--muted)',
              width: '24px',
              textAlign: 'right' as const,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
            }}>{item.key}</span>
            {item.text}
          </a>
        ))}
      </div>
    </section>
  )
}