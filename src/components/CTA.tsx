import { ArrowUpRight } from 'lucide-react'
import { DEFAULT_MESSAGE, waLink } from '../data/site'

export default function CTA() {
  return (
    <section className="border-y-[2.5px] border-concrete-900 bg-concrete-900 text-white">
      <div className="h-[8px] w-full hazard-stripe" aria-hidden="true" />
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[11px] font-bold tracking-[0.14em] text-obra-yellow">
              ¿LISTO PARA CARGAR?
            </span>
            <h2 className="mt-3 text-balance font-display text-[38px] font-black leading-[0.9] sm:text-[46px]">
              ¿BUSCÁS MATERIALES <span className="text-obra-yellow">PARA TU PRÓXIMO</span> PROYECTO?
            </h2>
            <p className="mt-4 max-w-[48ch] text-[16px] leading-7 text-white/70">
              Mandanos lista, foto o audio. Te cotizamos en el día y armamos el acopio.
            </p>
          </div>

          <div className="border-[2px] border-white bg-white p-4 text-concrete-900 shadow-[8px_8px_0_#FFD400] sm:p-6">
            <div className="font-mono text-[11px] font-bold tracking-[0.16em] text-acer">COTIZACIÓN RÁPIDA</div>
            <div className="mt-2 font-mono text-[11px] leading-5 text-acer">
              Decinos: <span className="font-bold text-concrete-900">material · cantidad · zona de entrega</span>
              <br />
              Ej: “12 cemento + 3m arena — envío a Gonnet”
            </div>
            <a
              href={waLink(DEFAULT_MESSAGE, 'cta-section')}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="cta-section"
              className="mt-4 flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 font-mono text-[13px] font-black tracking-[0.08em] text-white hover:bg-primary-dark"
            >
              ENVIAR LISTA POR WHATSAPP <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="mt-3 text-center font-mono text-[11px] tracking-wide text-acer">Respuesta en el día · Lun–Sáb</div>
          </div>
        </div>
      </div>
    </section>
  )
}
