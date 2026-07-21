export type ProjectStatus = 'main' | 'wip' | 'learning'

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
    tagline: 'Proyecto principal',
    description:
      'Sistema backend completo para generación, cálculo y seguimiento de presupuestos, con arquitectura escalable y APIs REST documentadas.',
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
    repoUrl: 'https://github.com/borja8dev/budget-management-system',
    year: 2026,
    featured: true,
  },
  {
    id: 'spring-practice',
    name: 'Práctica Spring Boot',
    tagline: 'En construcción',
    description:
      'Patrones de arquitectura backend: servicios REST, DTOs, validación, manejo de errores.',
    status: 'wip',
    stackCurrent: ['Spring Boot', 'REST', 'DTOs'],
    repoUrl: 'https://github.com/borja8dev',
    year: 2026,
  },
  {
    id: 'exploration',
    name: 'Exploración y lógica',
    tagline: 'Aprendizaje activo',
    description:
      'Pruebas de concepto y algoritmos. Aprendo construyendo, usando IA como herramienta de orquestación.',
    status: 'learning',
    stackCurrent: ['Java', 'Algoritmos', 'IA tools'],
    repoUrl: 'https://github.com/borja8dev',
    year: 2026,
  },
  {
    id: 'material-optimizer',
    name: 'Material Cutting Optimizer',
    tagline: 'Prototipo en desarrollo',
    description:
      'Prototipo full-stack que optimiza automáticamente cortes de materiales (tableros, telas, acero, vidrio) minimizando desperdicio y costos, con arquitectura hexagonal y tests desde el día 1.',
    status: 'wip',
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
      'shadcn/ui',
    ],
    features: [
      'Arquitectura hexagonal (domain/application/infrastructure)',
      'Tests unitarios (Jest) y E2E (Cypress) desde el inicio',
      'Schema de base de datos preparado para producción',
      'Algoritmo de optimización de cortes (problema NP-hard)',
    ],
    repoUrl: 'https://github.com/borja8dev/material-optimizer',
    year: 2026,
    featured: true,
  },
]