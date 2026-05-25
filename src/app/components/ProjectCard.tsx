import type { Project } from '@/lib/projects'

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const statusConfig = {
  main: { label: 'Proyecto principal', className: 'badge-red', dot: true },
  wip: { label: 'En construcción', className: 'badge-amber', dot: false },
  learning: { label: 'Aprendizaje activo', className: 'badge-violet', dot: false },
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const status = statusConfig[project.status]

  if (featured) {
    return (
      <article className="card-featured">
        <span className={`badge ${status.className}`}>
          {status.dot && <span className="dot-live" aria-hidden="true" />}
          {status.label}
        </span>

        <h3 className="card-name">{project.name}</h3>
        <p className="card-desc">{project.description}</p>

        <p className="stack-label">Stack actual</p>
        <div className="stack-row">
          {project.stackCurrent.map((tag) => (
            <span key={tag} className="tag tag-acc">{tag}</span>
          ))}
        </div>

        {project.stackRoadmap && project.stackRoadmap.length > 0 && (
          <>
            <p className="stack-label">En roadmap</p>
            <div className="stack-row" style={{ marginBottom: '1.4rem' }}>
              {project.stackRoadmap.map((tag) => (
                <span key={tag} className="tag tag-future">{tag}</span>
              ))}
            </div>
          </>
        )}

        {project.features && (
          <ul className="features" aria-label="Funcionalidades">
            {project.features.map((f) => (
              <li key={f} className="feat">
                <span className="feat-icon"><CheckIcon /></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="card-actions">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <GithubIcon /> Ver código
            </a>
          )}
          <span className="card-meta">
            <CalendarIcon /> {project.year}
          </span>
        </div>
      </article>
    )
  }

  return (
    <article className="card">
      <span className={`badge ${status.className}`}>
        {status.label}
      </span>

      <h3 className="card-name">{project.name}</h3>
      <p className="card-desc">{project.description}</p>

      <div className="stack-row">
        {project.stackCurrent.map((tag) => (
          <span key={tag} className="tag tag-acc">{tag}</span>
        ))}
      </div>

      <div className="divider" aria-hidden="true" />

      <div className="card-actions">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <GithubIcon /> GitHub
          </a>
        )}
      </div>
    </article>
  )
}