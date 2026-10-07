export type ProjectStatus = 'main'

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  status: ProjectStatus
  stackCurrent: string[]
  stackRoadmap?: string[]
  features?: string[]
  repoUrl?: string
  demoUrl?: string
  year: number
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'budget-system',
    name: 'Budget Management System',
    tagline: 'Backend · Java',
    description:
      'Sistema backend completo para generación, cálculo y seguimiento de presupuestos, con arquitectura escalable y APIs REST documentadas. Backend en Java 21 y Spring Boot 3 con persistencia relacional.',
    status: 'main',
    stackCurrent: [
      'Java 21',
      'Spring Boot 3',
      'PostgreSQL',
      'JPA / Hibernate',
      'REST APIs',
      'Maven',
      'Git · GitHub',
      'Linux basics',
    ],
    features: [
      'Generación automática de presupuestos',
      'Cálculo dinámico de precios',
      'Persistencia en base de datos relacional',
      'APIs REST documentadas',
    ],
    repoUrl: 'https://github.com/borja8dev/quotation-system-api',
    year: 2026,
    featured: true,
  },
  {
    id: 'material-optimizer',
    name: 'Material Cutting Optimizer',
    tagline: 'Fullstack · TypeScript',
    description:
      'Calculadora full-stack para cortes personalizados de tableros de madera a partir de medidas estándar, construida para un negocio real del sector. Arquitectura hexagonal, cobertura de tests cercana al 98% en el backend y documentación lista para producción.',
    status: 'main',
    stackCurrent: [
      'React 18',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Jest',
      'Cypress',
      'Tailwind CSS',
    ],
    features: [
      'Arquitectura hexagonal (domain/application/infrastructure)',
      '131 tests (Jest + Cypress), ~98% de cobertura en el backend',
      'TypeScript estricto de punta a punta, cero "any"',
      'Documentación completa: arquitectura, decisiones técnicas, guía de migración a base de datos real',
    ],
    repoUrl: 'https://github.com/borja8dev/agloval-custom-cutter',
    year: 2026,
    featured: true,
  },
]