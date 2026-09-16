import { MapPin, MessageCircle, Mail, Clock, Navigation, ArrowUpRight } from 'lucide-react'
import { COMPANY, DEFAULT_MESSAGE, waLink } from '../data/site'

export default function Contact() {
  return (
    <section id="contacto" className="bg-concrete-50">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="border-x-[2.5px] border-concrete-900 bg-white">
          <div className="grid gap-0 lg:grid-cols-5">
            <div className="border-b-[2.5px] border-concrete-900 p-6 sm:p-8 lg:col-span-2 lg:border-b-0 lg:border-r-[2.5px]">
              <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-acer">04 — ENCONTRANOS</span>
              <h2 className="mt-2 font-display text-[36px] font-black leading-[0.9] text-concrete-900">EN OBRA Y EN EL MAPA</h2>
              <p className="mt-3 text-[14px] leading-6 text-acer">Visitános, escribinos o coordiná retiro y entrega.</p>

              <div className="mt-6 space-y-3">
                <div className="flex gap-3 border border-concrete-200 bg-concrete-50 p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-concrete-900 bg-concrete-900 text-white">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] font-black tracking-[0.1em] text-concrete-900">DIRECCIÓN</div>
                    <div className="mt-1 font-mono text-[13px] leading-5 text-acer">
                      {COMPANY.address.line1}
                      <br />
                      {COMPANY.address.line2}
                      <br />
                      {COMPANY.address.cp}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 border border-concrete-200 bg-white p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-concrete-900 bg-obra-yellow text-concrete-900">
                    <MessageCircle size={18} />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] font-black tracking-[0.1em] text-concrete-900">WHATSAPP</div>
                    <a href={waLink(DEFAULT_MESSAGE)} className="mt-1 font-mono text-[13px] font-bold text-concrete-900 hover:text-primary">
                      {COMPANY.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 border border-concrete-200 bg-white p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-concrete-900 bg-white text-concrete-900">
                    <Mail size={18} />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] font-black tracking-[0.1em] text-concrete-900">EMAIL</div>
                    <a href={`mailto:${COMPANY.email}`} className="mt-1 block break-all font-mono text-[12px] font-semibold text-acer hover:text-concrete-900">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 border border-concrete-200 bg-white p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-concrete-900 bg-concrete-900 text-white">
                    <Clock size={18} />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] font-black tracking-[0.1em] text-concrete-900">HORARIOS</div>
                    <ul className="mt-1 space-y-0.5 font-mono text-[12px] text-acer">
                      {COMPANY.hours.map((h) => (
                        <li key={h.days}>
                          <span className="font-bold text-concrete-900">{h.days}:</span> {h.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <a
                  href={COMPANY.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-[1.5px] border-concrete-900 bg-concrete-900 px-3 py-3 font-mono text-[11px] font-black tracking-[0.08em] text-white hover:bg-black"
                >
                  <Navigation size={14} /> CÓMO LLEGAR
                </a>
                <a
                  href={waLink(DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-[1.5px] border-concrete-900 bg-obra-yellow px-3 py-3 font-mono text-[11px] font-black tracking-[0.08em] text-concrete-900 hover:bg-yellow-400"
                >
                  <MessageCircle size={14} /> WHATSAPP
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center justify-center gap-2 border-[1.5px] border-concrete-900 bg-white px-3 py-3 font-mono text-[11px] font-black tracking-[0.08em] text-concrete-900 hover:bg-concrete-50"
                >
                  <Mail size={14} /> EMAIL
                </a>
              </div>
            </div>

            <div className="relative min-h-[380px] bg-concrete-100 lg:col-span-3">
              <iframe
                src={COMPANY.mapsEmbed}
                title="Mapa de ubicación de Alfa Materiales"
                className="absolute inset-0 h-full w-full grayscale-[0.15] contrast-[1.05]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 border-[6px] border-white/60" />
              <a
                href={COMPANY.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 border-[2px] border-concrete-900 bg-concrete-900 px-4 py-3 font-mono text-[12px] font-black tracking-[0.08em] text-white shadow-[4px_4px_0_#FFD400] hover:bg-black"
              >
                ABRIR EN GOOGLE MAPS <ArrowUpRight size={14} />
              </a>
              <div className="absolute right-4 top-4 hidden border border-concrete-900 bg-white px-3 py-2 font-mono text-[11px] tracking-wide text-acer shadow-[4px_4px_0_#1A1E22] sm:block">
                <span className="font-black text-concrete-900">C.70 374</span> · ENTRE 2 Y 3 · LA PLATA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
