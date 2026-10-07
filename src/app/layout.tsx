import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Borja Rodríguez — Backend Software Engineer | Rigorous Architecture & Security-First',
  description: 'Backend Software Engineer: arquitectura hexagonal, testing exhaustivo y diseño security-first con Java, Spring Boot y TypeScript. IA como herramienta de orquestación. Alaquas, Valencia.',
  keywords: ['backend software engineer', 'java', 'spring boot', 'typescript', 'hexagonal architecture', 'valencia', 'spain'],
  authors: [{ name: 'Borja Rodríguez' }],
  openGraph: {
    title: 'Borja Rodríguez — Backend Software Engineer',
    description: 'Backend Software Engineer con arquitectura rigurosa y enfoque security-first. Disponible ahora mismo.',
    url: 'https://portfolio-borja-ten.vercel.app',
    siteName: 'Borja.dev',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borja Rodríguez — Backend Software Engineer',
    description: 'Backend Software Engineer con arquitectura rigurosa y enfoque security-first. Disponible ahora mismo.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}