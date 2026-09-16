import { useCallback, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { COMPANY, DEFAULT_MESSAGE, NAV_LINKS, waLink } from '../data/site'
import { useScrollPastThreshold } from '../hooks/useScrollPosition'

export default function Header() {
  const [open, setOpen] = useState(false)
  // client-event-listeners + rerender-derived-state: hook compartido, solo booleano
  const scrolled = useScrollPastThreshold(12)

  // rerender-functional-setstate: callback estable
  const toggleMenu = useCallback(() => setOpen((v) => !v), [])
  const closeMenu = useCallback(() => setOpen(false), [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${scrolled ? 'shadow-[0_2px_0_#1A1E22]' : ''}`}>
      <div className="h-[8px] w-full hazard-stripe" aria-hidden="true" />
      <div className={`border-b-[2.5px] border-concrete-900 bg-concrete-50 ${scrolled ? 'bg-concrete-50/95 backdrop-blur' : ''}`}>
        {/* top info bar - desktop only */}
        <div className="hidden border-b border-concrete-200 bg-white lg:block">
          <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-[7px] font-mono text-[11px] tracking-wide text-concrete-800">
            <span className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                C. 70 374 — La Plata, Buenos Aires
              </span>
              <span className="h-3 w-px bg-concrete-200" />
              <span>Lun–Vie 08:00–17:30 · Sáb 08:00–13:00</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="opacity-60">PEDIDOS</span>
              <a                href={waLink(DEFAULT_MESSAGE, 'header-top')} data-cta="header-top" className="font-bold hover:text-primary">
                {COMPANY.whatsappDisplay}
              </a>
            </span>
          </div>
        </div>

        <div className="mx-auto flex h-[68px] max-w-[1320px] items-center justify-between px-4 sm:px-6">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Volver al inicio">
            <span className="flex h-10 w-10 items-center justify-center border-[2px] border-concrete-900 bg-white p-1.5 shadow-[3px_3px_0_#1A1E22]">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Alfa Materiales — Corralón y Ferretería en La Plata"
                width={40}
                height={40}
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[22px] font-black tracking-[0.02em] text-concrete-900">ALFA</span>
              <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-acer">MATERIALES</span>
            </span>
            <span className="ml-2 hidden h-8 w-px bg-concrete-200 sm:block" />
            <span className="hidden flex-col pl-2 leading-tight sm:flex">
              <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-concrete-900">CORRALÓN</span>
              <span className="font-mono text-[10px] tracking-[0.14em] text-acer">Y FERRETERÍA</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label + link.href}
                href={link.href}
                className="font-mono text-[12px] font-bold tracking-[0.12em] text-concrete-900 underline-offset-4 hover:underline decoration-[2px] decoration-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink(DEFAULT_MESSAGE, 'header-cta')}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="header-cta"
              className="hidden items-center gap-2 border-[2px] border-concrete-900 bg-primary px-5 py-[11px] font-mono text-[12px] font-bold tracking-[0.08em] text-white shadow-[4px_4px_0_#1A1E22] transition-[transform,box-shadow] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#1A1E22] sm:inline-flex"
            >
              PEDIR POR WHATSAPP
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex h-11 w-11 items-center justify-center border-[2px] border-concrete-900 bg-white text-concrete-900 shadow-[3px_3px_0_#1A1E22] lg:hidden active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#1A1E22]"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
            >
              {/* rendering-hoist-jsx: iconos estáticos, evitar recreación condicional compleja */}
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* rendering-conditional-render: ternario explícito en lugar de && para evitar render de 0/false */}
      {/* rendering-activity alternativa: se mantiene montado pero hidden para preservar estado si se desea; aquí usamos ternary por ser menú móvil */}
      {open ? (
        <nav className="border-b-[2.5px] border-concrete-900 bg-white px-4 pb-6 pt-2 lg:hidden" aria-label="Menú móvil">
          <ul className="mt-2 flex flex-col divide-y divide-concrete-100">
            {NAV_LINKS.map((link) => (
              <li key={link.label + link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-4 font-mono text-[13px] font-bold tracking-[0.12em] text-concrete-900"
                >
                  {link.label}
                  <span className="text-acer">—</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink(DEFAULT_MESSAGE, 'header-mobile')}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="header-mobile"
            className="mt-4 flex w-full items-center justify-center gap-2 border-[2px] border-concrete-900 bg-primary py-3.5 font-mono text-sm font-bold tracking-wide text-white shadow-[4px_4px_0_#1A1E22]"
          >
            PEDIR POR WHATSAPP <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <p className="mt-3 text-center font-mono text-[11px] tracking-wide text-acer">
            C. 70 374 · Lun–Vie 08–17:30 · Sáb 08–13
          </p>
        </nav>
      ) : null}
    </header>
  )
}
