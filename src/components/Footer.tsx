import { COMPANY, DEFAULT_MESSAGE, NAV_LINKS, waLink } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-concrete-900 text-white">
      <div className="h-[8px] w-full hazard-stripe" aria-hidden="true" />
      <div className="mx-auto max-w-[1320px] px-4 py-10 sm:px-6">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center border border-white bg-white p-1.5">
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="Logo de Alfa Materiales"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                  width={44}
                  height={44}
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[22px] font-black tracking-wide">ALFA</span>
                <span className="font-mono text-[10px] tracking-[0.16em] opacity-60">MATERIALES — C.70 374</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs font-mono text-[12px] leading-5 text-white/60">
              Corralón y ferretería en La Plata. Materiales para obra gruesa y fina, todo en un solo acopio.
            </p>
            <div className="mt-4 inline-flex border border-obra-yellow bg-obra-yellow px-3 py-1.5 font-mono text-[11px] font-black tracking-[0.08em] text-concrete-900">
              LUN–VIE 08–17:30 · SÁB 08–13
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-black tracking-[0.14em] text-obra-yellow">NAVEGACIÓN</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label + link.href}>
                  <a href={link.href} className="font-mono text-[13px] tracking-wide text-white/70 hover:text-white">
                    — {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-black tracking-[0.14em] text-obra-yellow">CONTACTO</h3>
            <ul className="mt-4 space-y-2 font-mono text-[13px] text-white/70">
              <li>
                <a href={waLink(DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {COMPANY.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {COMPANY.instagramHandle}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="break-all hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-black tracking-[0.14em] text-obra-yellow">DIRECCIÓN</h3>
            <div className="mt-4 font-mono text-[13px] leading-5 text-white/70">
              {COMPANY.address.line1}
              <br />
              {COMPANY.address.line2}
              <br />
              <span className="text-white/40">{COMPANY.address.cp} · Argentina</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-[0.08em] text-white/40">© 2026 ALFA MATERIALES — HECHO EN LA PLATA</p>
          <p className="font-mono text-[11px] tracking-wide text-white/40">Corralón y Ferretería · C.70 entre 2 y 3</p>
        </div>
      </div>
    </footer>
  )
}
