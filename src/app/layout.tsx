import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Borja Rodríguez — Junior Backend Developer | Java · Spring Boot',
  description: 'Desarrollador backend junior especializado en Java y Spring Boot. Proyectos reales, mentalidad estratégica y disponible para trabajar. Alaquas, Valencia.',
  keywords: ['backend developer', 'java', 'spring boot', 'junior developer', 'valencia', 'spain'],
  authors: [{ name: 'Borja Rodríguez' }],
  openGraph: {
    title: 'Borja Rodríguez — Junior Backend Developer',
    description: 'Desarrollador backend junior especializado en Java y Spring Boot. Disponible ahora mismo.',
    url: 'https://portfolio-borja.vercel.app',
    siteName: 'Borja.dev',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borja Rodríguez — Junior Backend Developer',
    description: 'Desarrollador backend junior especializado en Java y Spring Boot. Disponible ahora mismo.',
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
      <body>{children}</body>
    </html>
  )
}