import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { DEFAULT_MESSAGE, waLink } from '../data/site'

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={waLink(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 border-[2px] border-concrete-900 bg-[#25D366] px-4 py-3 font-mono text-[12px] font-black tracking-[0.08em] text-white shadow-[5px_5px_0_#1A1E22] transition-all duration-300 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#1A1E22] ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
      }`}
    >
      <MessageCircle size={18} />
      WHATSAPP
    </a>
  )
}
