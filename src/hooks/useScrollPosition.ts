import { useEffect, useState, useRef } from 'react'

// client-event-listeners: single scroll listener shared via ref counting
// client-passive-event-listeners: passive:true
// rerender-use-ref-transient-values + rerender-transitions pattern
type ScrollCallback = (y: number) => void
const callbacks = new Set<ScrollCallback>()
let ticking = false
let lastY = 0

function onScroll() {
  lastY = window.scrollY
  if (!ticking) {
    ticking = true
    requestAnimationFrame(() => {
      // js-cache-property-access: cache callbacks iteration
      for (const cb of callbacks) cb(lastY)
      ticking = false
    })
  }
}

let listenerCount = 0
function ensureListener() {
  if (listenerCount === 0) {
    window.addEventListener('scroll', onScroll, { passive: true })
  }
  listenerCount++
}
function removeListener() {
  listenerCount--
  if (listenerCount === 0) {
    window.removeEventListener('scroll', onScroll)
  }
}

/**
 * useScrollPastThreshold - derivado booleano (rerender-derived-state)
 * Solo re-renderiza cuando cruza el threshold, no en cada pixel
 * @see rendering-optimization: Subscribe to Derived State
 */
export function useScrollPastThreshold(threshold = 12): boolean {
  const [past, setPast] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.scrollY > threshold
  })

  useEffect(() => {
    const cb: ScrollCallback = (y) => {
      // rerender-derived-state: compara derivado antes de setState
      const next = y > threshold
      setPast((prev) => (prev !== next ? next : prev))
    }
    // sync check on mount
    cb(window.scrollY)
    callbacks.add(cb)
    ensureListener()
    return () => {
      callbacks.delete(cb)
      removeListener()
    }
  }, [threshold])

  return past
}

/**
 * useScrollY - para casos que necesitan el valor crudo (evitar si podés usar threshold)
 */
export function useScrollY(): number {
  const [y, setY] = useState(() => (typeof window === 'undefined' ? 0 : window.scrollY))
  const yRef = useRef(y)
  yRef.current = y

  useEffect(() => {
    const cb: ScrollCallback = (val) => setY(val)
    callbacks.add(cb)
    ensureListener()
    return () => {
      callbacks.delete(cb)
      removeListener()
    }
  }, [])

  return y
}
