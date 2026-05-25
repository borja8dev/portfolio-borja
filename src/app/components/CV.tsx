export default function CV() {
  return (
    <section id="cv" style={{
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
      }}>04 / curriculum</div>

      <h2 style={{
        fontSize: '28px',
        fontWeight: 900,
        color: '#fff',
        marginBottom: '0.5rem',
        letterSpacing: '-0.02em',
        textTransform: 'uppercase' as const,
        fontFamily: 'var(--body)',
      }}>Currículum</h2>

      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '11px',
        color: 'rgba(82,82,91,0.7)',
        marginBottom: '1.5rem',
        letterSpacing: '0.02em',
      }}>
        <span style={{ color: 'rgba(225,29,72,0.4)' }}>// </span>
        Descarga mi CV actualizado — mayo 2026.
      </p>

      <style>{`
        .cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--acc);
          color: #fff;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 2px;
          transition: opacity 0.2s;
        }
        .cv-btn:hover { opacity: 0.85; }
      `}</style>

      <a href="/Borja_Rodriguez_CV_2026.pdf" target="_blank" rel="noopener noreferrer" className="cv-btn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Descargar CV
      </a>
    </section>
  )
}