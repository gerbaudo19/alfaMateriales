import { MessageCircle, Mail, Phone, MapPin, Instagram, Clock } from 'lucide-react'
import { COMPANY, DEFAULT_MESSAGE, NAV_LINKS, waLink } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Logo de Alfa Materiales"
                className="h-12 w-12 object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-extrabold text-white">Alfa Materiales</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Corralón y Ferretería
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              Materiales de construcción y productos de ferretería en La Plata. Todo para tus
              proyectos.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navegación</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 transition-colors hover:text-primary-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={waLink(DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 transition-colors hover:text-primary-light"
                >
                  <WhatsIcon /> {COMPANY.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 transition-colors hover:text-primary-light"
                >
                  <Instagram size={18} className="shrink-0" /> {COMPANY.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-slate-400 transition-colors hover:text-primary-light"
                >
                  <Mail size={18} className="shrink-0" /> {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Dirección</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.line2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <span>Lunes a viernes: 08:00 a 17:30 hs</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0" />
                <span>Sábados: 08:00 a 13:00 hs · Domingos: Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">© 2026 Alfa Materiales</p>
          <p className="text-sm text-slate-500">Corralón y Ferretería en La Plata.</p>
        </div>
      </div>
    </footer>
  )
}

function WhatsIcon() {
  return <MessageCircle size={18} className="shrink-0" />
}