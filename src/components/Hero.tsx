import { MessageCircle, ArrowRight, HardHat, Wrench } from 'lucide-react'
import { COMPANY, DEFAULT_MESSAGE, waLink } from '../data/site'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-800/60" />
        <div
          className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-32 h-[24rem] w-[24rem] rounded-full bg-slate-700/40 blur-3xl"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo de Alfa Materiales" className="h-7 w-7 object-contain" />
            <span className="text-sm font-semibold text-white">Corralón y Ferretería en La Plata</span>
          </div>

          <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Todo lo que necesitás para <span className="text-primary-light">construir</span>,{' '}
            <span className="text-primary-light">renovar</span> y{' '}
            <span className="text-primary-light">reparar</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Materiales de construcción, herramientas y productos para tus proyectos. Encontrá lo que
            necesitás y consultanos directamente.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-xl"
            >
              Ver materiales
              <ArrowRight size={20} />
            </a>
            <a
              href={waLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition-all hover:border-white/50 hover:bg-white/10"
            >
              <MessageCircle size={20} className="text-green-400" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <HardHat size={26} className="shrink-0 text-primary-light" />
            <div>
              <p className="text-sm font-bold text-white">Corralón</p>
              <p className="text-xs text-slate-400">Materiales de construcción</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <Wrench size={26} className="shrink-0 text-primary-light" />
            <div>
              <p className="text-sm font-bold text-white">Ferretería</p>
              <p className="text-xs text-slate-400">Artículos y herramientas</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <span className="shrink-0 text-xl leading-none text-primary-light">📍</span>
            <div>
              <p className="text-sm font-bold text-white">{COMPANY.address.line1}</p>
              <p className="text-xs text-slate-400">{COMPANY.address.line2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
