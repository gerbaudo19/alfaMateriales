import { MessageCircle } from 'lucide-react'
import { DEFAULT_MESSAGE, waLink } from '../data/site'
import { useScrollPastThreshold } from '../hooks/useScrollPosition'

export default function FloatingWhatsApp() {
  // client-event-listeners: reutiliza el mismo listener global deduplicado
  // rerender-derived-state: solo booleano
  const visible = useScrollPastThreshold(300)

  return (
    <a
      href={waLink(DEFAULT_MESSAGE, 'floating')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      data-cta="floating"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 border-[2px] border-concrete-900 bg-[#25D366] px-4 py-3 font-mono text-[12px] font-black tracking-[0.08em] text-white shadow-[5px_5px_0_#1A1E22] transition-[transform,opacity] duration-300 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#1A1E22] supports-[padding:max(0px)]:bottom-[max(1.25rem,env(safe-area-inset-bottom))] supports-[padding:max(0px)]:right-[max(1.25rem,env(safe-area-inset-right))] ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0 sm:translate-y-0 sm:opacity-100 sm:pointer-events-auto'
      }`}
    >
      <MessageCircle size={18} aria-hidden="true" />
      WHATSAPP
    </a>
  )
}
