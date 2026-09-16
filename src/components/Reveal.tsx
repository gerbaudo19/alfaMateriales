import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

// js-cache-property-access + client-event-listeners: observer compartido para todas las instancias
let sharedObserver: IntersectionObserver | null = null
const observedElements = new Map<Element, () => void>()

function getSharedObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = observedElements.get(entry.target)
          if (cb) {
            cb()
            sharedObserver?.unobserve(entry.target)
            observedElements.delete(entry.target)
          }
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )
  return sharedObserver
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // si ya es visible no observar
    if (visible) return

    const observer = getSharedObserver()
    observedElements.set(node, () => setVisible(true))
    observer.observe(node)

    return () => {
      observedElements.delete(node)
      observer.unobserve(node)
    }
  }, [visible])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-[transform,opacity] duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
