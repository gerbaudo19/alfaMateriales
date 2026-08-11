import { MapPin, MessageCircle, Mail, Clock, Navigation } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { COMPANY, DEFAULT_MESSAGE, waLink } from '../data/site'

export default function Contact() {
  return (
    <section id="contacto" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            overline="Contacto"
            title="Encontranos"
            text="Visitános, escribinos o recorré la zona para conocer nuestra ubicación."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">Dirección</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {COMPANY.address.line1}
                    <br />
                    {COMPANY.address.line2}
                    <br />
                    {COMPANY.address.cp}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                  <MessageCircle size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">WhatsApp</h3>
                  <a
                    href={waLink(DEFAULT_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
                  >
                    {COMPANY.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                  <Mail size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">Correo electrónico</h3>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-1 block text-sm font-semibold text-slate-600 break-all transition-colors hover:text-primary"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                  <Clock size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">Horarios</h3>
                  <ul className="mt-1 space-y-0.5 text-sm text-slate-600">
                    {COMPANY.hours.map((h) => (
                      <li key={h.days}>
                        <span className="font-semibold text-slate-700">{h.days}:</span> {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a
                  href={COMPANY.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
                >
                  <Navigation size={18} />
                  Cómo llegar
                </a>
                <a
                  href={waLink(DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-green-500 hover:text-green-600"
                >
                  <MessageCircle size={18} />
                  Contactar por WhatsApp
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600"
                >
                  <Mail size={18} />
                  Enviar email
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="relative h-full min-h-[24rem] overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <iframe
                src={COMPANY.mapsEmbed}
                title="Mapa de ubicación de Alfa Materiales"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={COMPANY.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-primary"
              >
                <Navigation size={18} />
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}