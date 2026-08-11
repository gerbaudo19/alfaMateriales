import { useState } from 'react'
import { MessageCircle, Search } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { CATALOG_FILTERS, PRODUCTS, waLink, type CatalogFilter, type Product } from '../data/site'

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`}
          alt={product.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
        <p className="mt-1 text-sm text-slate-500 line-clamp-2">{product.description}</p>
        <div className="mt-5 flex flex-1 items-end">
          <a
            href={waLink(product.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            <MessageCircle size={16} />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Products() {
  const [active, setActive] = useState<CatalogFilter>('Todos')

  const filtered = active === 'Todos' ? PRODUCTS : PRODUCTS.filter((p) => p.filter === active)

  return (
    <section id="productos" className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            overline="Catálogo"
            title="Conocé nuestros materiales"
            text="Encontrá materiales para construcción y productos de ferretería. Consultanos por disponibilidad y precios."
          />
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {CATALOG_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active === filter
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'bg-white text-slate-600 ring-1 ring-gray-200 hover:ring-primary hover:text-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product, i) => (
            <Reveal key={product.name} delay={(i % 4) * 80} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <a
              href="https://wa.me/5492215585881?text=Hola%2C%20quer%C3%ADa%20realizar%20una%20consulta%20sobre%20los%20productos%20de%20Alfa%20Materiales."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition-colors hover:border-primary hover:text-primary"
            >
              <Search size={18} />
              ¿No encontrás lo que buscás? Consultanos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}