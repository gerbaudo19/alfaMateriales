import { ArrowUpRight } from 'lucide-react'

// rendering-hoist-jsx: datos estáticos fuera del render
const BENEFITS = [
  { n: '01', t: 'Variedad real', d: 'Surtido para grueso y fino. Lo que no hay, lo conseguimos.' },
  { n: '02', t: 'Un solo acopio', d: 'Levantas todo junto. Ahorrás flete y tiempo.' },
  { n: '03', t: 'Asesoramiento', d: 'Te ayudamos a calcular cantidades y elegir bien.' },
] as const

const BASE_URL = import.meta.env.BASE_URL

export default function About() {
  return (
    <section id="nosotros" className="bg-white">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="relative border-b-[2.5px] border-concrete-900 py-8 sm:py-12 lg:border-b-0 lg:border-r-[2.5px] lg:pr-10">
            <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-acer">03 — EN LA PLATA DESDE SIEMPRE</span>
            <h2 className="mt-3 max-w-[14ch] font-display text-[42px] font-black leading-[0.9] text-concrete-900 sm:text-[50px]">
              TODO LO QUE NECESITÁS, EN UN SOLO LUGAR
            </h2>
            <p className="mt-4 max-w-[48ch] text-[15px] leading-7 text-acer">
              En Alfa Materiales encontrás materiales de construcción y ferretería para tu obra, refacción o mantenimiento. Stock real, atención directa y precio claro.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3">
              {BENEFITS.map((b) => (
                <div key={b.n} className="flex gap-4 border border-concrete-200 bg-concrete-50 px-4 py-4">
                  <span className="font-display text-[28px] font-black leading-none text-concrete-200">{b.n}</span>
                  <div>
                    <div className="font-mono text-[12px] font-black tracking-[0.08em] text-concrete-900">{b.t.toUpperCase()}</div>
                    <div className="mt-1 text-[13px] leading-5 text-acer">{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-concrete-50 py-8 sm:py-12 lg:pl-10">
            <div className="relative border-[2.5px] border-concrete-900 bg-white shadow-[10px_10px_0_#1A1E22]">
              <div className="flex items-center justify-between border-b-[2.5px] border-concrete-900 bg-concrete-900 px-4 py-2 font-mono text-[11px] tracking-[0.12em] text-white">
                <span>ALFA — PLAYA DE MATERIALES</span>
                <span className="opacity-60">C.70 374</span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-concrete-100">
                <img
                  src={`${BASE_URL}products/empresa.jpg`}
                  alt="Fachada de Alfa Materiales"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={480}
                />
                <div className="absolute bottom-3 left-3 border border-concrete-900 bg-obra-yellow px-3 py-1.5 font-mono text-[11px] font-black tracking-[0.08em] text-concrete-900">
                  CONFIANZA EN CADA PROYECTO
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x-[2.5px] divide-concrete-900 border-t-[2.5px] border-concrete-900 text-center">
                <div className="bg-white px-2 py-3">
                  <div className="font-display text-[20px] font-black leading-none text-concrete-900">+15</div>
                  <div className="font-mono text-[10px] tracking-wide text-acer">MATERIALES</div>
                </div>
                <div className="bg-obra-yellow px-2 py-3">
                  <div className="font-display text-[20px] font-black leading-none text-concrete-900">70</div>
                  <div className="font-mono text-[10px] tracking-wide text-concrete-900/70">CALLE 70</div>
                </div>
                <div className="bg-white px-2 py-3">
                  <div className="font-display text-[20px] font-black leading-none text-concrete-900">LP</div>
                  <div className="font-mono text-[10px] tracking-wide text-acer">LA PLATA</div>
                </div>
              </div>
            </div>

            <a
              href="#contacto"
              className="mt-6 inline-flex items-center gap-2 border-[2px] border-concrete-900 bg-white px-5 py-3 font-mono text-[12px] font-black tracking-[0.08em] text-concrete-900 hover:bg-obra-yellow"
            >
              CÓMO LLEGAR <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
