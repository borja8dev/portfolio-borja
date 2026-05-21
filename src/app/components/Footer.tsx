export default function Footer() {
  return (
    <footer className="footer-mobile" style={{
      padding: '1.5rem 2rem',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '1rem',
    }}>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '9px',
        color: 'var(--muted)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
      }}>© 2026 Borja Rodríguez · Alaquas, Valencia</span>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '9px',
        color: 'rgba(225,29,72,0.3)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
      }}>open to work · may 26 – dic 26</span>
    </footer>
  )
}