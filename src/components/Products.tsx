import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { CATALOG_FILTERS, PRODUCTS, waLink, type CatalogFilter, type Product } from '../data/site'

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col border-[1.5px] border-concrete-900 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden border-b-[1.5px] border-concrete-900 bg-concrete-100">
        <img
          src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`}
          alt={product.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-2 top-2 border border-concrete-900 bg-obra-yellow px-2 py-1 font-mono text-[10px] font-black tracking-[0.08em] text-concrete-900">
          {product.category.toUpperCase()}
        </span>
        <span className="absolute right-2 top-2 h-2 w-2 border border-concrete-900 bg-white" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-[18px] font-black leading-none tracking-wide text-concrete-900">{product.name.toUpperCase()}</h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-5 text-acer">{product.description}</p>
        <div className="mt-4 flex items-center gap-2">
          <a
            href={waLink(product.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 border-[1.5px] border-concrete-900 bg-concrete-900 px-3 py-2.5 font-mono text-[11px] font-black tracking-[0.08em] text-white hover:bg-black"
          >
            CONSULTAR
            <ArrowUpRight size={12} />
          </a>
          <span className="font-mono text-[10px] tracking-wide text-acer">stock</span>
        </div>
      </div>
    </article>
  )
}

export default function Products() {
  const [active, setActive] = useState<CatalogFilter>('Todos')

  const filtered = active === 'Todos' ? PRODUCTS : PRODUCTS.filter((p) => p.filter === active)

  return (
    <section id="productos" className="bg-concrete-50 blueprint">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="flex flex-col gap-6 border-b-[2px] border-concrete-900 py-8 sm:flex-row sm:items-end sm:justify-between sm:py-10">
          <div>
            <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-acer">02 — STOCK REAL · FOTO DE PLAYA</span>
            <h2 className="mt-2 font-display text-[40px] font-black leading-[0.9] text-concrete-900 sm:text-[54px]">
              CATÁLOGO <span className="text-white" style={{ WebkitTextStroke: '1.5px #1A1E22' }}>DE OBRA</span>
            </h2>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-6 text-acer">
              Filtrá por rubro y tocá consultar. Te pasamos precio y disponibilidad por WhatsApp — sin carrito fantasma.
            </p>
          </div>
          <div className="shrink-0 border border-concrete-900 bg-white px-3 py-2 font-mono text-[11px] tracking-wide text-acer">
            <span className="font-black text-concrete-900">{filtered.length}</span> ÍTEMS · <span className="font-black text-concrete-900">{PRODUCTS.length}</span> TOTAL
          </div>
        </div>

        <div className="sticky top-[76px] z-20 -mx-4 border-b-[2.5px] border-concrete-900 bg-concrete-50 px-4 py-3 sm:mx-0 sm:px-0">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATALOG_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`whitespace-nowrap border-[1.5px] px-4 py-2 font-mono text-[12px] font-black tracking-[0.08em] transition ${
                  active === filter
                    ? 'border-concrete-900 bg-concrete-900 text-white'
                    : 'border-concrete-900 bg-white text-concrete-900 hover:bg-obra-yellow'
                }`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 border-x border-concrete-900 bg-concrete-900 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <div key={product.name} className="bg-concrete-900 p-[1px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-x border-b border-concrete-900 bg-white px-4 py-5 sm:flex-row sm:px-6">
          <span className="font-mono text-[12px] tracking-wide text-acer">
            ¿No encontrás lo que buscás? <span className="font-bold text-concrete-900">Mandanos foto o medida y lo cotizamos.</span>
          </span>
          <a
            href="https://wa.me/5492215585881?text=Hola%2C%20quer%C3%ADa%20realizar%20una%20consulta%20sobre%20los%20productos%20de%20Alfa%20Materiales."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-[1.5px] border-concrete-900 bg-white px-5 py-3 font-mono text-[12px] font-black tracking-[0.08em] text-concrete-900 hover:bg-obra-yellow"
          >
            CONSULTAR POR OTRO MATERIAL <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="h-6" />
      </div>
    </section>
  )
}
