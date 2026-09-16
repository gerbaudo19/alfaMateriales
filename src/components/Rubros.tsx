import { ArrowUpRight } from 'lucide-react'

const corralonItems = ['Cemento', 'Ladrillos', 'Isoblock', 'Hierros', 'Arena', 'Piedra', 'Chapas', 'Viguetas']
const ferreteriaItems = ['Clavos', 'Alambre', 'Herramientas', 'Accesorios', 'Art. ferretería']

export default function Rubros() {
  return (
    <section id="rubros" className="border-b-[2.5px] border-concrete-900 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          {/* left - intro + list */}
          <div className="border-b-[2.5px] border-concrete-900 py-10 sm:py-14 lg:border-b-0 lg:border-r-[2.5px] lg:pr-10">
            <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-acer">01 — DOS SECTORES / UN SOLO ACOPIO</span>
            <h2 className="mt-3 font-display text-[42px] font-black leading-[0.9] text-concrete-900 sm:text-[50px]">
              CORRALÓN
              <span className="block text-acer">+ FERRETERÍA</span>
            </h2>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-7 text-acer">
              No hagas dos viajes. Levantás grueso y fino en el mismo lugar: de la bolsa de cemento al clavo. Stock a la vista, fotos reales.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border-[2px] border-concrete-900 bg-concrete-50">
                <div className="flex items-center justify-between border-b-[2px] border-concrete-900 bg-concrete-900 px-4 py-2.5 text-white">
                  <span className="font-mono text-[12px] font-black tracking-[0.12em]">A — CORRALÓN</span>
                  <span className="font-mono text-[10px] tracking-[0.12em] opacity-70">08 ITEMS</span>
                </div>
                <ul className="grid grid-cols-2 gap-0 divide-x divide-y divide-concrete-200 bg-concrete-200">
                  {corralonItems.map((item) => (
                    <li key={item} className="bg-white px-3 py-2.5 font-mono text-[12px] font-bold tracking-wide text-concrete-900">
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 bg-primary align-middle" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#productos"
                  className="flex items-center justify-between border-t-[2px] border-concrete-900 bg-white px-4 py-3 font-mono text-[12px] font-black tracking-[0.1em] text-concrete-900 hover:bg-obra-yellow"
                >
                  VER CORRALÓN <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="border-[2px] border-concrete-900 bg-white">
                <div className="flex items-center justify-between border-b-[2px] border-concrete-900 bg-obra-yellow px-4 py-2.5">
                  <span className="font-mono text-[12px] font-black tracking-[0.12em] text-concrete-900">B — FERRETERÍA</span>
                  <span className="font-mono text-[10px] font-bold tracking-[0.12em] text-concrete-900/60">05 ITEMS</span>
                </div>
                <ul className="divide-y divide-concrete-200">
                  {ferreteriaItems.map((item) => (
                    <li key={item} className="flex items-center justify-between px-3 py-2.5 font-mono text-[12px] font-semibold text-concrete-900">
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-concrete-900" />
                        {item}
                      </span>
                      <span className="font-mono text-[11px] text-acer">stock</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#productos"
                  className="flex items-center justify-between border-t-[2px] border-concrete-900 bg-concrete-900 px-4 py-3 font-mono text-[12px] font-black tracking-[0.1em] text-white hover:bg-black"
                >
                  VER FERRETERÍA <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* right - specs */}
          <div className="py-10 sm:py-14 lg:pl-10">
            <div className="border-[2px] border-concrete-900 shadow-[8px_8px_0_#1A1E22]">
              <div className="bg-concrete-900 px-5 py-4 text-white">
                <div className="font-mono text-[11px] tracking-[0.16em] opacity-70">CÓMO TRABAJAMOS</div>
                <div className="mt-1 font-display text-[28px] font-black leading-none">PEDÍ · COTIZÁ · RETIRÁ</div>
              </div>
              <ol className="divide-y-[2px] divide-concrete-900">
                {[
                  { n: '01', t: 'Elegís del stock', d: 'Fotos reales, categorías filtradas. Sin catálogo de fantasía.' },
                  { n: '02', t: 'Cotizás por WhatsApp', d: 'Tocás “Consultar” y armamos precio en el día con entrega.' },
                  { n: '03', t: 'Retirás en C.70', d: 'Te esperamos en 70 e/ 2 y 3. O coordinás envío a obra.' },
                ].map((s) => (
                  <li key={s.n} className="flex gap-4 bg-white px-5 py-5">
                    <span className="font-display text-[28px] font-black leading-none text-concrete-200">{s.n}</span>
                    <div>
                      <div className="font-mono text-[13px] font-black tracking-[0.08em] text-concrete-900">{s.t.toUpperCase()}</div>
                      <div className="mt-1 text-[13px] leading-5 text-acer">{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="h-2 w-full hazard-stripe" />
            </div>

            <div className="mt-6 flex items-center gap-3 border border-concrete-200 bg-concrete-50 px-4 py-3 font-mono text-[11px] tracking-wide text-acer">
              <span className="h-2 w-2 bg-green-500 ring-1 ring-concrete-900" />
              Horario confirmado: Lun–Vie 08–17:30 · Sáb 08–13 · Dom cerrado
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
