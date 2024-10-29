import Projects from '@/src/components/Projects/Projects'
import Skills from '@/src/components/Skills/Skills'
import Footer from '@/src/components/Footer/Footer'

export default function Home() {
  return (
    <div className='container'>
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
