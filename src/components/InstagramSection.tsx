import { ArrowUpRight, Instagram } from 'lucide-react'
import { COMPANY } from '../data/site'

export default function InstagramSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 border-x-[2.5px] border-b-[2.5px] border-concrete-900 bg-concrete-50 px-6 py-8 sm:flex-row sm:px-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center border-[2px] border-concrete-900 bg-concrete-900 text-white">
              <Instagram size={22} />
            </span>
            <div>
              <div className="font-display text-[22px] font-black leading-none text-concrete-900">SEGUINOS EN INSTAGRAM</div>
              <div className="font-mono text-[12px] tracking-wide text-acer">Novedades, productos y obra en curso · {COMPANY.instagramHandle}</div>
            </div>
          </div>
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-[2px] border-concrete-900 bg-white px-6 py-3 font-mono text-[12px] font-black tracking-[0.08em] text-concrete-900 shadow-[4px_4px_0_#1A1E22] hover:bg-obra-yellow"
          >
            <Instagram size={16} /> {COMPANY.instagramHandle} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
