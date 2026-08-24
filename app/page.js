import About from './about/page'
import Publications from './publications/page'
import Experience from './ui/Experience'
import Contact from './ui/Contact'

export default function Page() {
  return (
    <div className="space-y-16 pb-8">
      <section id="about" className="scroll-mt-8">
        <About />
      </section>

      <section id="publications" className="scroll-mt-8">
        <Publications />
      </section>

      <section id="experience" className="scroll-mt-8">
        <Experience />
      </section>

      <section id="contact" className="scroll-mt-8">
        <Contact />
      </section>
    </div>
  )
}
