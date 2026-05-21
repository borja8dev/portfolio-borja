import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Learning from './components/Learning'

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Learning />
    </main>
  )
}