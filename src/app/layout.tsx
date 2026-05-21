import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Borja Rodríguez — Backend Developer',
  description: 'Junior Backend Developer especializado en Java y Spring Boot. Disponible para trabajar.',
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