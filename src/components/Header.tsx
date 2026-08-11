import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { COMPANY, DEFAULT_MESSAGE, NAV_LINKS, waLink } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-white/85 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="Volver al inicio">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Logo de Alfa Materiales"
            className="h-11 w-11 object-contain drop-shadow-sm sm:h-12 sm:w-12"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold text-slate-900">Alfa Materiales</span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Corralón y Ferretería
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md sm:inline-flex"
          >
            <MessageCircle size={18} />
            Consultar por WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-slate-700 lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-6 pt-2 lg:hidden" aria-label="Menú móvil">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-gray-50 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-sm"
          >
            <MessageCircle size={18} />
            Consultar por WhatsApp
          </a>
        </nav>
      )}

      {open && (
        <button
          type="button"
          aria-hidden="true"
          className="fixed inset-0 -z-10 cursor-default"
          onClick={() => setOpen(false)}
          tabIndex={-1}
        />
      )}

      <span className="sr-only">{COMPANY.name}</span>
    </header>
  )
}