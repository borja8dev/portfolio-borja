export default function Learning() {
  const roadmap = [
    { label: 'Java', status: 'done', time: '✓' },
    { label: 'Spring Boot', status: 'now', time: 'NOW' },
    { label: 'Docker', status: 'next', time: 'SOON' },
    { label: 'K8s', status: 'next', time: 'SOON' },
    { label: 'CI/CD', status: 'next', time: 'SOON' },
    { label: 'Dist. Arch', status: 'next', time: 'SOON' },
  ]

  const current = [
    { topic: 'Spring Boot avanzado', detail: 'Arquitectura de servicios, DTOs, validación, manejo de errores' },
    { topic: 'REST API design', detail: 'Buenas prácticas, versionado, documentación con OpenAPI' },
    { topic: 'SQL y JPA', detail: 'Queries optimizadas, relaciones, transacciones' },
    { topic: 'Agloval — Sistema de Presupuestos', detail: 'Proyecto real en construcción. Backend completo con Spring Boot.' },
  ]

  return (
    <section id="learning" className="learning-section" aria-labelledby="learning-title">
      <style>{`
        .learning-section {
          padding: 6rem 1.5rem;
          max-width: 900px;
          margin: 0 auto;
          border-top: 1px solid rgba(255,255,255,0.04);
        }

        .learning-label {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--acc);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .learning-label::before {
          content: '';
          display: inline-block;
          width: 18px;
          height: 1px;
          background: var(--acc);
        }

        .learning-title {
          font-family: var(--body);
          font-size: 34px;
          font-weight: 900;
          color: #fafafa;
          margin: 0 0 0.4rem;
          line-height: 1.1;
        }

        .learning-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: var(--muted);
          margin: 0 0 2.5rem;
        }

        .roadmap-wrap {
          display: flex;
          align-items: center;
          overflow-x: auto;
          padding: 0.5rem 0 1rem;
          gap: 0;
          margin-bottom: 2.5rem;
          scrollbar-width: none;
        }
        .roadmap-wrap::-webkit-scrollbar { display: none; }

        .roadmap-step {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .step-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
        }

        .step-box {
          width: 44px;
          height: 44px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--mono);
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 8px;
          text-align: center;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .step-box.done {
          background: rgba(167,139,250,0.08);
          border: 1.5px solid var(--acc3);
          color: var(--acc3);
        }
        .step-box.now {
          background: rgba(245,158,11,0.08);
          border: 1.5px solid var(--acc2);
          color: var(--acc2);
        }
        .step-box.next {
          background: var(--bg3);
          border: 1.5px solid rgba(255,255,255,0.06);
          color: var(--muted);
        }

        .step-label {
          font-family: var(--mono);
          font-size: 9px;
          color: var(--muted);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .step-label.done { color: var(--acc3); }
        .step-label.now { color: var(--acc2); }

        .step-connector {
          width: 24px;
          height: 1px;
          background: rgba(255,255,255,0.05);
          flex-shrink: 0;
          margin-bottom: 20px;
        }

        .currently-label {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .current-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .current-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem 1.25rem;
          transition: border-color 0.2s;
        }
        .current-card:hover {
          border-color: rgba(225,29,72,0.2);
        }

        .current-topic {
          font-family: var(--body);
          font-size: 14px;
          font-weight: 600;
          color: #fafafa;
          margin: 0 0 4px;
        }

        .current-detail {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.5;
          margin: 0;
        }

        .philosophy {
          font-family: var(--mono);
          font-size: 11px;
          color: rgba(82,82,91,0.8);
          padding: 1rem 1.25rem;
          background: rgba(255,255,255,0.01);
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 8px;
          line-height: 2;
          letter-spacing: 0.02em;
        }

        .philosophy-acc {
          color: rgba(225,29,72,0.5);
        }

        @media (max-width: 640px) {
          .current-grid {
            grid-template-columns: 1fr;
          }
          .learning-title {
            font-size: 26px;
          }
        }
      `}</style>

      <p className="learning-label" aria-hidden="true">Aprendiendo</p>
      <h2 className="learning-title" id="learning-title">Roadmap técnico</h2>
      <p className="learning-subtitle">Lo que sé, lo que estoy aprendiendo, hacia dónde voy.</p>

      <div className="roadmap-wrap" role="list" aria-label="Roadmap de aprendizaje">
        {roadmap.map((step, i) => (
          <div key={i} className="roadmap-step" role="listitem">
            <div className="step-inner">
              <div className={`step-box ${step.status}`}>
                {step.time}
              </div>
              <span className={`step-label ${step.status}`}>{step.label}</span>
            </div>
            {i < roadmap.length - 1 && <div className="step-connector" aria-hidden="true" />}
          </div>
        ))}
      </div>

      <p className="currently-label">Estudiando ahora</p>
      <div className="current-grid">
        {current.map((item, i) => (
          <div key={i} className="current-card">
            <p className="current-topic">{item.topic}</p>
            <p className="current-detail">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="philosophy">
        <span className="philosophy-acc">// </span>
        No sigo tutoriales pasivos. Aprendo construyendo — usando IA como herramienta de orquestación, no como muleta.<br />
        <span className="philosophy-acc">// </span>
        Cada tecnología del roadmap tiene un proyecto real asociado. Sin proyecto, no cuento como aprendido.
      </div>
    </section>
  )
}