import { MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import { DEFAULT_MESSAGE, waLink } from '../data/site'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
      <div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary-dark/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary-dark/50 blur-3xl"
        aria-hidden="true"
      />
      <Reveal>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            ¿Estás buscando materiales para tu próximo proyecto?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Consultanos por los productos que necesitás y te ayudamos a encontrar la mejor opción.
          </p>
          <a
            href={waLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <MessageCircle size={20} />
            Consultar por WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  )
}