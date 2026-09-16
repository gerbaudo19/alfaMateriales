import { ArrowUpRight } from 'lucide-react'

export default function WhatLookingFor() {
  return (
    <section className="border-y-[2.5px] border-concrete-900 bg-obra-yellow">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
          <div className="border-b-[2.5px] border-concrete-900 py-10 sm:py-12 lg:border-b-0 lg:border-r-[2.5px] lg:pr-10">
            <span className="font-mono text-[11px] font-black tracking-[0.18em] text-concrete-900">¿QUÉ ESTÁS BUSCANDO?</span>
            <h2 className="mt-2 font-display text-[38px] font-black leading-[0.9] text-concrete-900 sm:text-[46px]">
              ELEGÍ TU RUBRO
              <span className="block font-sans text-[16px] font-semibold normal-case tracking-normal text-concrete-900/70">
                y te llevamos directo al stock
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
            <a
              href="#productos"
              className="group flex flex-col justify-between border-b-[2.5px] border-concrete-900 bg-white p-6 hover:bg-concrete-900 hover:text-white sm:border-b-0 sm:border-r-[2.5px]"
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.12em] opacity-60">A — GRUESO</span>
                <h3 className="mt-2 font-display text-[24px] font-black leading-none">MATERIALES PARA OBRA</h3>
                <p className="mt-2 text-[13px] leading-5 opacity-70">Cemento, ladrillos, hierros, arena, piedra y más.</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] font-black tracking-[0.08em]">
                VER MATERIALES <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            <a href="#productos" className="group flex flex-col justify-between bg-concrete-900 p-6 text-white hover:bg-black">
              <div>
                <span className="font-mono text-[10px] tracking-[0.12em] opacity-60">B — FINO</span>
                <h3 className="mt-2 font-display text-[24px] font-black leading-none text-obra-yellow">FERRETERÍA</h3>
                <p className="mt-2 text-[13px] leading-5 text-white/70">Clavos, alambre y artículos para tus proyectos.</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] font-black tracking-[0.08em] text-obra-yellow">
                VER FERRETERÍA <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
