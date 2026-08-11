export const COMPANY = {
  name: 'Alfa Materiales',
  slogan: 'Corralón y Ferretería',
  whatsappNumber: '5492215585881',
  whatsappDisplay: '+54 9 221 558-5881',
  whatsappLink: 'https://wa.me/5492215585881',
  email: 'materialesalfa.lp@gmail.com',
  instagram: 'https://www.instagram.com/alfamateriales/',
  instagramHandle: '@alfamateriales',
  address: {
    line1: 'C. 70 374',
    line2: 'La Plata, Buenos Aires',
    cp: 'CP 1900',
    full: 'C. 70 374, La Plata, Buenos Aires, Argentina, CP 1900',
  },
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=C.+70+374,+La+Plata,+Buenos+Aires,+Argentina',
  mapsEmbed:
    'https://www.google.com/maps?q=C.+70+374,+La+Plata,+Buenos+Aires,+Argentina&output=embed',
  hours: [
    { days: 'Lunes a viernes', time: '08:00 a 17:30 hs' },
    { days: 'Sábados', time: '08:00 a 13:00 hs' },
    { days: 'Domingos', time: 'Cerrado' },
  ],
} as const

export function waLink(message: string): string {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_MESSAGE = 'Hola, quería realizar una consulta sobre los productos de Alfa Materiales.'

export type ProductCategory =
  | 'Construcción'
  | 'Áridos'
  | 'Hierros'
  | 'Cubiertas'
  | 'Impermeabilización'
  | 'Ferretería'

export type CatalogFilter =
  | 'Todos'
  | 'Construcción'
  | 'Áridos'
  | 'Hierros'
  | 'Cubiertas y aislantes'
  | 'Ferretería'

export interface Product {
  name: string
  category: ProductCategory
  filter: CatalogFilter
  description: string
  image: string
  imageAlt: string
  message: string
}

export const PRODUCTS: Product[] = [
  {
    name: 'Cemento',
    category: 'Construcción',
    filter: 'Construcción',
    description: 'Cemento de calidad para tus obras.',
    image: '/products/cemento.jpg',
    imageAlt: 'Bolsa de cemento de Alfa Materiales',
    message: 'Hola, quería consultar por el precio del Cemento.',
  },
  {
    name: 'Ladrillos',
    category: 'Construcción',
    filter: 'Construcción',
    description: 'Ladrillos comunes y de uso general.',
    image: '/products/ladrillos.jpg',
    imageAlt: 'Apilado de ladrillos de construcción',
    message: 'Hola, quería consultar por el precio de los Ladrillos.',
  },
  {
    name: 'Isoblock',
    category: 'Construcción',
    filter: 'Construcción',
    description: 'Bloques para construir rápido y seguro.',
    image: '/products/isoblock.jpg',
    imageAlt: 'Bloques Isoblock de hormigón',
    message: 'Hola, quería consultar por el precio del Isoblock.',
  },
  {
    name: 'Hierros',
    category: 'Hierros',
    filter: 'Hierros',
    description: 'Hierros y acero para estructuras.',
    image: '/products/Hierros.jpg',
    imageAlt: 'Barras de hierro para construcción',
    message: 'Hola, quería consultar por el precio de los Hierros.',
  },
  {
    name: 'Viguetas',
    category: 'Construcción',
    filter: 'Construcción',
    description: 'Viguetas pretensadas para entrepisos.',
    image: '/products/Viguetas.jpg',
    imageAlt: 'Viguetas pretensadas para construcción',
    message: 'Hola, quería consultar por el precio de las Viguetas.',
  },
  {
    name: 'Cal',
    category: 'Construcción',
    filter: 'Construcción',
    description: 'Cal para mezclas y revoques.',
    image: '/products/Cal.jpg',
    imageAlt: 'Bolsa de cal para construcción',
    message: 'Hola, quería consultar por el precio de la Cal.',
  },
  {
    name: 'Arena',
    category: 'Áridos',
    filter: 'Áridos',
    description: 'Arena fina y gruesa para obras.',
    image: '/products/Arena.jpg',
    imageAlt: 'Montículo de arena para construcción',
    message: 'Hola, quería consultar por el precio de la Arena.',
  },
  {
    name: 'Piedra',
    category: 'Áridos',
    filter: 'Áridos',
    description: 'Piedra partida y granítica.',
    image: '/products/Piedra.jpg',
    imageAlt: 'Piedra partida para construcción',
    message: 'Hola, quería consultar por el precio de la Piedra.',
  },
  {
    name: 'Escombros',
    category: 'Áridos',
    filter: 'Áridos',
    description: 'Escombros para nivelación y rellenos.',
    image: '/products/Escombros.jpg',
    imageAlt: 'Montículo de escombros de obra',
    message: 'Hola, quería consultar por el precio de los Escombros.',
  },
  {
    name: 'Tierra',
    category: 'Áridos',
    filter: 'Áridos',
    description: 'Tierra para jardines y rellenos.',
    image: '/products/Tierra.jpg',
    imageAlt: 'Tierra negra preparada para jardín',
    message: 'Hola, quería consultar por el precio de la Tierra.',
  },
  {
    name: 'Chapas',
    category: 'Cubiertas',
    filter: 'Cubiertas y aislantes',
    description: 'Chapas para techos y cubiertas.',
    image: '/products/Chapas.jpg',
    imageAlt: 'Chapas de zinc para techos',
    message: 'Hola, quería consultar por el precio de las Chapas.',
  },
  {
    name: 'Cerecita',
    category: 'Impermeabilización',
    filter: 'Cubiertas y aislantes',
    description: 'Membrana y productos para impermeabilizar.',
    image: '/products/Cerecita.jpg',
    imageAlt: 'Producto de impermeabilización Cerecita',
    message: 'Hola, quería consultar por el precio de la Cerecita.',
  },
  {
    name: 'Clavos',
    category: 'Ferretería',
    filter: 'Ferretería',
    description: 'Clavos de distintos tamaños y usos.',
    image: '/products/Clavos.jpg',
    imageAlt: 'Clavos de ferretería de distintos tamaños',
    message: 'Hola, quería consultar por el precio de los Clavos.',
  },
  {
    name: 'Alambre',
    category: 'Ferretería',
    filter: 'Ferretería',
    description: 'Alambre de atar y galvanizado.',
    image: '/products/Alambre.jpg',
    imageAlt: 'Rollos de alambre de ferretería',
    message: 'Hola, quería consultar por el precio del Alambre.',
  },
  {
    name: 'Artículos de ferretería',
    category: 'Ferretería',
    filter: 'Ferretería',
    description: 'Herramientas, accesorios y productos de ferretería.',
    image: '/products/Art%C3%ADculos%20de%20ferreter%C3%ADa.jpg',
    imageAlt: 'Herramientas y artículos de ferretería',
    message: 'Hola, quería consultar por los artículos de ferretería.',
  },
]

export const CATALOG_FILTERS: CatalogFilter[] = [
  'Todos',
  'Construcción',
  'Áridos',
  'Hierros',
  'Cubiertas y aislantes',
  'Ferretería',
]

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Corralón', href: '#rubros' },
  { label: 'Ferretería', href: '#rubros' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]
