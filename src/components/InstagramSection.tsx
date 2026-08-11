import { Instagram, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { COMPANY } from '../data/site'

export default function InstagramSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Reveal>
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white shadow-lg">
            <Instagram size={32} />
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900">Seguinos en Instagram</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            Enterate de novedades, productos y promociones de Alfa Materiales.
          </p>
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-7 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
          >
            <Instagram size={20} />
            {COMPANY.instagramHandle}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  )
}