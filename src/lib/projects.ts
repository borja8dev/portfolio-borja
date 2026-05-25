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
    id: 'agloval',
    name: 'Agloval · Sistema de Presupuestos',
    tagline: 'Proyecto principal',
    description:
      'Módulo backend completo para Agloval SL. Gestión de presupuestos con generación automática, cálculo dinámico de precios y APIs REST documentadas.',
    status: 'main',
    stackCurrent: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'JPA / Hibernate', 'Maven'],
    stackRoadmap: ['Docker', 'Testing', 'CI/CD'],
    features: [
      'Generación automática de presupuestos',
      'Cálculo dinámico de precios',
      'Persistencia en base de datos',
      'APIs REST documentadas',
    ],
    repoUrl: 'https://github.com/borja8dev', // actualiza cuando esté listo
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
]