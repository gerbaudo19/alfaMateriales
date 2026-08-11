import { ArrowRight, Building2, Hammer } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function WhatLookingFor() {
  return (
    <section className="bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            overline="Ayudanos a ayudarte"
            title="¿Qué estás buscando?"
            text="Elegí tu rubro y te llevamos directo a lo que necesitás."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <a
              href="#productos"
              className="group flex h-full items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-white/10"
            >
              <div className="flex items-start gap-5">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                  <Building2 size={28} />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Materiales para una obra</h3>
                  <p className="mt-1 text-slate-300">
                    Cemento, ladrillos, hierros, arena, piedra y más.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-light">
                    Ver materiales
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>

          <Reveal delay={120}>
            <a
              href="#productos"
              className="group flex h-full items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-white/10"
            >
              <div className="flex items-start gap-5">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary-light">
                  <Hammer size={28} />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Productos de ferretería</h3>
                  <p className="mt-1 text-slate-300">
                    Clavos, alambre y artículos para tus proyectos y reparaciones.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-light">
                    Ver ferretería
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}