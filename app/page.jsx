import Projects from '@/src/components/Projects/Projects'
import Skills from '@/src/components/Skills/Skills'
import Footer from '@/src/components/Footer/Footer'
import { LinksComponent } from '@/src/components/Footer/Footer'
import Hero from '@/src/components/Hero/Hero'

export default function Home() {
  return (
    <main className='main-container'>
      <header className='container header'>
        <LinksComponent />
      </header>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}
