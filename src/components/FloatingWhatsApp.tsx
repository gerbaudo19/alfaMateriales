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
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/40 transition-all duration-300 hover:scale-110 hover:bg-green-600 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-16 opacity-0'
      }`}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500/50" aria-hidden="true" />
      <MessageCircle className="relative" size={28} />
    </a>
  )
}