'use client'
export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.85rem 2rem',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg)',
    }}>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '13px',
        color: 'var(--acc)',
        letterSpacing: '0.08em',
        fontWeight: 700,
      }}>
        BORJA.DEV
      </span>

      <ul className="nav-links-mobile" style={{
        display: 'flex',
        gap: '1.5rem',
        listStyle: 'none',
      }}>
        {['about', 'projects', 'learning', 'cv', 'contact'].map((item) => (
          <li key={item}>
            <a href={`#${item}`} style={{
              color: 'var(--muted)',
              textDecoration: 'none',
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--txt)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}