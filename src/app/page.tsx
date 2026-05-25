import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Learning from './components/Learning'
import CV from './components/CV'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Learning />
      <CV />
      <Contact />
      <Footer />
    </main>
  )
}