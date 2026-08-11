import { Package, Boxes, HeadphonesIcon } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const benefits = [
  {
    icon: Package,
    title: 'Variedad de productos',
    text: 'Amplio surtido para construcción y ferretería.',
  },
  {
    icon: Boxes,
    title: 'Materiales para construcción y ferretería',
    text: 'Todo lo que necesitás en un solo lugar.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Atención y asesoramiento',
    text: 'Te ayudamos a elegir la mejor opción para tu proyecto.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={`${import.meta.env.BASE_URL}products/empresa.jpg`}
                  alt="Fachada de Alfa Materiales"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary px-6 py-5 text-white shadow-xl sm:block">
                <p className="text-sm font-bold uppercase tracking-wide">Alfa Materiales</p>
                <p className="text-xs text-primary-light">Confianza en cada proyecto</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                align="left"
                overline="Nosotros"
                title="Todo lo que necesitás, en un solo lugar"
                text="En Alfa Materiales encontrás materiales de construcción y productos de ferretería para llevar adelante tus proyectos."
              />
            </Reveal>

            <div className="mt-8 space-y-5">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 100}>
                  <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5 transition-colors hover:border-primary/30 hover:bg-gray-50">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <b.icon size={24} />
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900">{b.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{b.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}