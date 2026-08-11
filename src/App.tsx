import Header from './components/Header'
import Hero from './components/Hero'
import Rubros from './components/Rubros'
import Products from './components/Products'
import WhatLookingFor from './components/WhatLookingFor'
import About from './components/About'
import CTA from './components/CTA'
import Contact from './components/Contact'
import InstagramSection from './components/InstagramSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Rubros />
        <Products />
        <WhatLookingFor />
        <About />
        <CTA />
        <Contact />
        <InstagramSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}