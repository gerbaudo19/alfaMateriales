import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Rubros from './components/Rubros'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

// bundle-dynamic-imports: componentes por debajo del fold cargados bajo demanda
// async-suspense-boundaries: Suspense permite paint inmediato de Hero/Rubros
const Products = lazy(() => import('./components/Products'))
const WhatLookingFor = lazy(() => import('./components/WhatLookingFor'))
const About = lazy(() => import('./components/About'))
const CTA = lazy(() => import('./components/CTA'))
const Contact = lazy(() => import('./components/Contact'))
const InstagramSection = lazy(() => import('./components/InstagramSection'))

// rendering-hoist-jsx: fallback estático reutilizable
const sectionFallback = (
  <div className="mx-auto max-w-[1320px] px-4 sm:px-6 py-10">
    <div className="h-32 animate-pulse border-[2px] border-concrete-200 bg-concrete-50" />
  </div>
)

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border-2 focus:border-concrete-900 focus:bg-obra-yellow focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-bold">
        Saltar al contenido
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Rubros />
        {/* Primer Suspense: catálogo crítico pero diferido */}
        <Suspense fallback={sectionFallback}>
          <Products />
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <WhatLookingFor />
          <About />
          <CTA />
        </Suspense>
        {/* bundle-defer-third-party: mapa/iframe pesado al final */}
        <Suspense fallback={sectionFallback}>
          <Contact />
          <InstagramSection />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
