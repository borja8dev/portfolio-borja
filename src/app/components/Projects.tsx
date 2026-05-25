import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <style>{`
        /* ─── Section layout ─── */
        .projects-section {
          padding: 6rem 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        /* ─── Header ─── */
        .projects-label {
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
        .projects-label::before {
          content: '';
          display: inline-block;
          width: 18px;
          height: 1px;
          background: var(--acc);
        }

        .projects-title {
          font-family: var(--body);
          font-size: 34px;
          font-weight: 900;
          color: #fafafa;
          margin: 0 0 0.4rem;
          line-height: 1.1;
        }

        .projects-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: var(--muted);
          margin: 0 0 2.5rem;
        }

        /* ─── Grid ─── */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* ─── Featured card ─── */
        .card-featured {
          grid-column: 1 / -1;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.75rem;
          position: relative;
          transition: border-color 0.25s;
        }
        .card-featured::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          border-radius: 12px 12px 0 0;
          background: linear-gradient(90deg, transparent, var(--acc), transparent);
        }
        .card-featured:hover {
          border-color: rgba(225, 29, 72, 0.25);
        }

        /* ─── Small card ─── */
        .card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          position: relative;
          transition: border-color 0.25s;
        }
        .card:hover {
          border-color: rgba(225, 29, 72, 0.25);
        }

        /* ─── Badges ─── */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--mono);
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 4px;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }
        .badge-red {
          background: rgba(225, 29, 72, 0.08);
          color: var(--acc);
          border: 1px solid rgba(225, 29, 72, 0.2);
        }
        .badge-amber {
          background: rgba(245, 158, 11, 0.08);
          color: var(--acc2);
          border: 1px solid rgba(245, 158, 11, 0.2);
        }
        .badge-violet {
          background: rgba(167, 139, 250, 0.08);
          color: var(--acc3);
          border: 1px solid rgba(167, 139, 250, 0.2);
        }

        /* ─── Live dot ─── */
        .dot-live {
          width: 6px;
          height: 6px;
          background: var(--acc);
          border-radius: 50%;
          animation: blink 2s ease-in-out infinite;
          display: inline-block;
          flex-shrink: 0;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* ─── Card content ─── */
        .card-name {
          font-family: var(--body);
          font-size: 20px;
          font-weight: 700;
          color: #fafafa;
          margin: 0 0 0.35rem;
        }
        .card .card-name {
          font-size: 16px;
        }

        .card-desc {
          font-size: 14px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.65;
          margin: 0 0 1.25rem;
        }
        .card .card-desc {
          font-size: 13px;
          margin-bottom: 1rem;
        }

        /* ─── Stack labels ─── */
        .stack-label {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        /* ─── Tags ─── */
        .stack-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 1.25rem;
        }
        .card .stack-row {
          margin-bottom: 1rem;
        }

        .tag {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--muted);
          background: var(--bg3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.03em;
        }
        .tag-acc {
          color: var(--acc);
          background: rgba(225, 29, 72, 0.06);
          border-color: rgba(225, 29, 72, 0.15);
        }
        .tag-future {
          color: var(--muted);
          background: transparent;
          border: 1px dashed rgba(255, 255, 255, 0.08);
          opacity: 0.7;
        }

        /* ─── Features grid ─── */
        .features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px;
          margin-bottom: 1.4rem;
          padding: 1rem 1.25rem;
          background: var(--bg3);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          list-style: none;
        }
        .feat {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13px;
          color: var(--muted);
          font-weight: 300;
        }
        .feat-icon {
          color: var(--acc);
          margin-top: 1px;
          flex-shrink: 0;
        }

        /* ─── Divider ─── */
        .divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.04);
          margin-bottom: 1.25rem;
        }

        /* ─── Actions ─── */
        .card-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--acc);
          color: #fff;
          font-family: var(--mono);
          font-size: 11px;
          padding: 7px 16px;
          border-radius: 6px;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: opacity 0.2s;
        }
        .btn-primary:hover {
          opacity: 0.85;
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          color: var(--muted);
          font-family: var(--mono);
          font-size: 11px;
          padding: 7px 14px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.2s, border-color 0.2s;
        }
        .btn-ghost:hover {
          color: var(--txt);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .card-meta {
          margin-left: auto;
          font-family: var(--mono);
          font-size: 10px;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 4px;
          letter-spacing: 0.05em;
        }

        /* ─── Responsive ─── */
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .features {
            grid-template-columns: 1fr;
          }
          .projects-title {
            font-size: 26px;
          }
        }
      `}</style>

      <p className="projects-label" aria-hidden="true">Proyectos</p>
      <h2 className="projects-title" id="projects-title">Lo que estoy construyendo</h2>
      <p className="projects-subtitle">Proyectos reales — no TODOs, no ejercicios de tutorial.</p>

      <div className="projects-grid">
        {featured && <ProjectCard project={featured} featured />}
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}