import { ArrowUpRight, PackageCheck, Truck, Clock3 } from 'lucide-react'
import { DEFAULT_MESSAGE, waLink } from '../data/site'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-concrete-50 blueprint pt-[76px]">
      {/* subtle top coordinate */}
      <div className="pointer-events-none absolute left-6 top-[92px] hidden font-mono text-[10px] tracking-[0.18em] text-acer/60 lg:block">
        34°55′ S — 57°57′ W — LA PLATA
      </div>
      <div className="pointer-events-none absolute right-6 top-[92px] hidden font-mono text-[10px] tracking-[0.18em] text-acer/60 lg:block">
        STOCK ACTUAL · 15+ MATERIALES
      </div>

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border border-concrete-900 bg-white px-3 py-1.5 shadow-[3px_3px_0_#1A1E22]">
              <span className="h-2 w-2 bg-obra-yellow ring-1 ring-concrete-900" />
              <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-concrete-900">
                CORRALÓN Y FERRETERÍA — LA PLATA
              </span>
              <span className="ml-2 hidden font-mono text-[11px] tracking-wide text-acer sm:inline">C. 70 374</span>
            </div>

            <h1 className="mt-6 text-balance font-display text-[54px] font-black leading-[0.85] tracking-[-0.02em] text-concrete-900 sm:text-[72px] lg:text-[84px]">
              <span className="block">MATERIALES</span>
              <span className="block flex items-center gap-3">
                PARA
                <span className="relative inline-flex border-[2.5px] border-concrete-900 bg-obra-yellow px-3 py-1 text-concrete-900 shadow-[5px_5px_0_#1A1E22] -rotate-[1.2deg] sm:px-4">
                  CONSTRUIR
                  <span className="pointer-events-none absolute -right-1 -top-1 h-2 w-2 bg-white ring-1 ring-concrete-900" />
                  <span className="pointer-events-none absolute -left-1 -bottom-1 h-2 w-2 bg-white ring-1 ring-concrete-900" />
                </span>
              </span>
              <span className="mt-1 block text-[42px] font-extrabold leading-none tracking-[-0.015em] text-white sm:text-[54px]" style={{ WebkitTextStroke: '1.8px #1A1E22', paintOrder: 'stroke fill' }}>
                RENOVAR Y REPARAR.
              </span>
            </h1>

            <p className="mt-6 max-w-[48ch] border-l-[3px] border-obra-yellow pl-4 font-sans text-[17px] leading-7 text-acer sm:text-[18px]">
              Acopiás todo en un solo lugar. Cemento, hierros, áridos y ferretería. Armá tu pedido y cotizá por WhatsApp en el día — sin vueltas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(DEFAULT_MESSAGE, 'hero-primary')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero-primary"
                className="inline-flex items-center justify-center gap-2 border-[2.5px] border-concrete-900 bg-primary px-7 py-[15px] font-mono text-[13px] font-black tracking-[0.1em] text-white shadow-[5px_5px_0_#1A1E22] transition-[transform,box-shadow] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#1A1E22]"
              >
                COTIZAR POR WHATSAPP
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#productos"
                className="inline-flex items-center justify-center gap-2 border-[2.5px] border-concrete-900 bg-white px-7 py-[15px] font-mono text-[13px] font-bold tracking-[0.1em] text-concrete-900 shadow-[5px_5px_0_#D8D2C7] transition-[transform,box-shadow] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#D8D2C7]"
              >
                VER STOCK DISPONIBLE
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <p className="mt-3 font-mono text-[11px] tracking-wide text-acer">Respuesta hoy · Lun–Sáb 08:00–17:30 · Sin formularios</p>

            <div className="mt-10 grid max-w-[520px] grid-cols-3 gap-3">
              {[
                { k: '15+', l: 'materiales', sub: 'en stock' },
                { k: 'C.70', l: 'La Plata', sub: 'retiro en obra' },
                { k: 'Lun–Sáb', l: '08:00–17:30', sub: 'atención directa' },
              ].map((s) => (
                <div key={s.k} className="border border-concrete-200 bg-white px-3 py-3">
                  <div className="font-display text-[20px] font-black leading-none text-concrete-900">{s.k}</div>
                  <div className="font-mono text-[11px] font-bold tracking-[0.08em] text-concrete-900">{s.l}</div>
                  <div className="font-mono text-[10px] tracking-wide text-acer">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right - remito */}
          <div className="relative lg:col-span-5 lg:pt-4">
            {/* blueprint corner marks */}
            <div className="absolute -left-2 -top-2 hidden h-6 w-6 border-l-2 border-t-2 border-concrete-900/30 lg:block" />
            <div className="absolute -right-2 -top-2 hidden h-6 w-6 border-r-2 border-t-2 border-concrete-900/30 lg:block" />

            <div className="relative border-[2.5px] border-concrete-900 bg-white shadow-[10px_10px_0_#1A1E22]">
              <div className="flex items-center justify-between border-b-[2.5px] border-concrete-900 bg-concrete-900 px-4 py-3 text-white">
                <span className="font-mono text-[11px] font-bold tracking-[0.18em]">REMITO — ALFA / HOJA DE PEDIDO</span>
                <span className="rounded bg-obra-yellow px-2 py-1 font-mono text-[10px] font-black tracking-wide text-concrete-900">EN EL DÍA</span>
              </div>

              <div className="border-b border-dashed border-concrete-300 bg-concrete-50 px-4 py-3">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="tracking-[0.14em] text-acer">Nº 00374 · C. 70 e/ 2 y 3</span>
                  <span className="font-bold text-concrete-900">LA PLATA</span>
                </div>
              </div>

              <div className="px-4 pb-4 pt-4">
                <div className="space-y-2.5 font-mono text-[13px]">
                  {[
                    { q: '12×', name: 'Cemento', note: 'bolsa 50kg' },
                    { q: '8×', name: 'Hierros Ø 8', note: 'barra 12m' },
                    { q: '2 m³', name: 'Arena fina', note: 'a granel' },
                    { q: '1×', name: 'Chapas', note: 'acanalada 1,10' },
                  ].map((row) => (
                    <div key={row.name} className="flex items-center gap-3 border-b border-concrete-100 py-2.5 last:border-0">
                      <span className="inline-flex h-5 w-5 items-center justify-center border border-concrete-900 bg-obra-yellow text-[11px] font-black text-concrete-900">
                        ✓
                      </span>
                      <span className="w-10 shrink-0 font-bold text-concrete-900">{row.q}</span>
                      <span className="flex-1 font-bold tracking-wide text-concrete-900">{row.name}</span>
                      <span className="text-[11px] tracking-wide text-acer">{row.note}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-y-[2px] border-concrete-900 bg-concrete-50 px-3 py-3">
                  <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-concrete-900">TOTAL ESTIMADO</span>
                  <span className="font-mono text-[11px] tracking-wide text-acer">a confirmar por WhatsApp ———</span>
                </div>

                <a
                  href={waLink('Hola, quiero armar un pedido con varios materiales. ¿Me pasan cotización?', 'hero-remito')}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="hero-remito"
                  className="mt-4 flex w-full items-center justify-center gap-2 bg-primary px-4 py-3.5 font-mono text-[13px] font-black tracking-[0.1em] text-white transition-colors hover:bg-primary-dark"
                >
                  ENVIAR HOJA POR WHATSAPP
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>

                <p className="mt-3 text-center font-mono text-[10px] tracking-wide text-acer">
                  Copiamos tu pedido tal cual lo ves. Sin formularios.
                </p>
              </div>

              {/* perforation */}
              <div className="flex items-center gap-1 border-t border-dashed border-concrete-300 px-2 py-2">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-concrete-200" />
                ))}
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-4 -left-2 hidden items-center gap-2 border-[2px] border-concrete-900 bg-white px-3 py-2 shadow-[4px_4px_0_#1A1E22] sm:flex lg:-left-6">
              <span className="flex h-8 w-8 items-center justify-center bg-concrete-900 text-white">
                <Truck size={16} aria-hidden="true" />
              </span>
              <div className="pr-2 leading-tight">
                <div className="font-mono text-[11px] font-black tracking-[0.08em] text-concrete-900">ENTREGA EN OBRA</div>
                <div className="font-mono text-[10px] tracking-wide text-acer">Coordiná por WhatsApp</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 pb-6 sm:grid-cols-3">
          {[
            { icon: PackageCheck, title: 'Stock visible', text: 'Foto real del material. Lo que ves es lo que retirás.' },
            { icon: Truck, title: 'Acopiás todo junto', text: 'Corralón + ferretería en un solo viaje.' },
            { icon: Clock3, title: 'Respuesta en el día', text: 'Cotización por WhatsApp sin demora.' },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-3 border border-concrete-200 bg-white px-4 py-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-concrete-900 bg-concrete-900 text-white">
                <f.icon size={18} aria-hidden="true" />
              </span>
              <div>
                <div className="font-mono text-[12px] font-bold tracking-[0.1em] text-concrete-900">{f.title.toUpperCase()}</div>
                <div className="mt-1 text-[13px] leading-5 text-acer">{f.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[10px] w-full hazard-stripe" aria-hidden="true" />
    </section>
  )
}
