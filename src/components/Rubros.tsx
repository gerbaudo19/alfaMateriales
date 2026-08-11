import { ArrowRight, BrickWall, Wrench } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const corralonItems = [
  'Cemento',
  'Ladrillos',
  'Isoblock',
  'Hierros',
  'Arena',
  'Piedra',
  'Chapas',
  'Viguetas',
]

const ferreteriaItems = [
  'Clavos',
  'Alambre',
  'Artículos de ferretería',
  'Herramientas',
  'Accesorios',
]

export default function Rubros() {
  return (
    <section id="rubros" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            overline="Alfa Materiales"
            title="Todo para tus proyectos, en un solo lugar"
            text="Dos rubros, una sola confianza: materiales para la construcción y todo lo que necesitás en ferretería."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-b from-slate-50 to-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="border-b border-gray-100 bg-slate-100 p-8 sm:p-10">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BrickWall size={30} />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold text-slate-900">Corralón</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-primary">
                  Materiales para construcción
                </p>
                <p className="mt-3 text-slate-600">Materiales para cada etapa de tu obra.</p>
              </div>
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <ul className="grid grid-cols-2 gap-3">
                  {corralonItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-gray-100"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex-1" />
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-bold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
                >
                  Ver materiales
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-b from-slate-900 to-slate-850 text-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="border-b border-white/10 p-8 sm:p-10">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-primary-light">
                  <Wrench size={30} />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold">Ferretería</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-primary-light">
                  Todo para reparar y construir
                </p>
                <p className="mt-3 text-slate-300">
                  Productos y artículos para tus proyectos y reparaciones.
                </p>
              </div>
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <ul className="grid grid-cols-2 gap-3">
                  {ferreteriaItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-sm font-medium text-slate-200 ring-1 ring-white/10"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-primary-light" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex-1" />
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-100 hover:shadow-md"
                >
                  Ver ferretería
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}