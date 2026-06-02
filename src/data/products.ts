export interface Product {
  id: number
  name: string
  category: 'gaming' | 'business' | 'workstation' | 'budget'
  image: string
  description: string
  shortDescription: string
  price: number
  specs: {
    cpu: string
    ram: string
    storage: string
    gpu: string
    os: string
    form?: string
  }
  badge?: string
  inStock: boolean
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Phantom X Gaming PC',
    category: 'gaming',
    image: '/placeholder.png',
    shortDescription: 'Dominate any game with this pre-built powerhouse. Intel Core i7, RTX 4070, and 32GB DDR5 RAM for buttery-smooth gameplay at 1440p and beyond.',
    description:
      'Built for serious gamers who demand performance without compromise. The Phantom X features a full tower design with exceptional airflow, RGB lighting, and enough headroom to upgrade for years to come. Every component is hand-selected and stress-tested before it leaves our workshop.',
    price: 1649,
    badge: 'Best Seller',
    inStock: true,
    specs: {
      cpu: 'Intel Core i7-13700KF',
      ram: '32GB DDR5-5600',
      storage: '1TB NVMe SSD + 2TB HDD',
      gpu: 'NVIDIA RTX 4070 12GB',
      os: 'Windows 11 Home',
      form: 'Full Tower ATX',
    },
  },
  {
    id: 2,
    name: 'ProSlate Business Laptop',
    category: 'business',
    image: '/placeholder.png',
    shortDescription: 'Slim, silent, and fast. The ProSlate is built for long workdays — 14-hour battery life, a stunning 2K display, and military-grade durability.',
    description:
      'Designed for professionals who travel light. The ProSlate features a CNC-machined aluminum chassis, MIL-STD-810H durability certification, and a 2560×1600 IPS panel that makes spreadsheets and presentations look stunning. Whisper-quiet operation in any meeting.',
    price: 1099,
    inStock: true,
    specs: {
      cpu: 'AMD Ryzen 7 7840U',
      ram: '16GB LPDDR5',
      storage: '512GB NVMe SSD',
      gpu: 'AMD Radeon 780M (integrated)',
      os: 'Windows 11 Pro',
      form: '14-inch Laptop',
    },
  },
  {
    id: 3,
    name: 'Titan Workstation Pro',
    category: 'workstation',
    image: '/placeholder.png',
    shortDescription: 'Purpose-built for 3D rendering, video production, and data-heavy workloads. Dual-channel RAM, NVMe RAID, and professional GPU make deadlines disappear.',
    description:
      'The Titan Workstation Pro is engineered for creators, engineers, and data professionals who cannot afford slowdowns. Featuring ECC memory support, a professional-grade NVIDIA RTX 4090, and a silent 850W 80+ Gold PSU, this machine handles the most demanding tasks without breaking a sweat.',
    price: 3299,
    badge: 'Professional Grade',
    inStock: true,
    specs: {
      cpu: 'AMD Ryzen 9 7950X',
      ram: '64GB DDR5-6000 ECC',
      storage: '2TB NVMe Gen4 (RAID 0)',
      gpu: 'NVIDIA RTX 4090 24GB',
      os: 'Windows 11 Pro',
      form: 'Mid Tower ATX',
    },
  },
  {
    id: 4,
    name: 'HomeBase Compact PC',
    category: 'budget',
    image: '/placeholder.png',
    shortDescription: 'Everything you need for browsing, documents, and family use — in a space-saving mini form factor that fits anywhere.',
    description:
      'Perfect for the home office, kids\' homework station, or everyday tasks. The HomeBase Compact PC delivers reliable performance in a footprint smaller than a hardback book. Includes a wireless keyboard and mouse combo to get you started immediately.',
    price: 449,
    inStock: true,
    specs: {
      cpu: 'Intel Core i5-12400',
      ram: '16GB DDR4-3200',
      storage: '500GB NVMe SSD',
      gpu: 'Intel UHD 730 (integrated)',
      os: 'Windows 11 Home',
      form: 'Mini-ITX',
    },
  },
  {
    id: 5,
    name: 'Apex Gaming Laptop',
    category: 'gaming',
    image: '/placeholder.png',
    shortDescription: 'Take your game anywhere. The Apex packs a full RTX 4060 and a blazing 165Hz QHD display into a surprisingly portable 15-inch chassis.',
    description:
      'The Apex Gaming Laptop bridges the gap between portability and raw performance. Advanced thermal design with dual-fan exhaust keeps temperatures in check even during marathon sessions. MUX switch for max GPU performance when plugged in.',
    price: 1349,
    inStock: true,
    specs: {
      cpu: 'Intel Core i7-13650HX',
      ram: '16GB DDR5-4800',
      storage: '1TB NVMe SSD',
      gpu: 'NVIDIA RTX 4060 8GB',
      os: 'Windows 11 Home',
      form: '15.6-inch Laptop',
    },
  },
  {
    id: 6,
    name: 'Office Workhorse Desktop',
    category: 'business',
    image: '/placeholder.png',
    shortDescription: 'Reliable, upgradeable, and whisper-quiet. A dependable mid-range desktop that keeps the whole office running year after year.',
    description:
      'The Office Workhorse is built for reliability first. It uses enterprise-grade components with a proven track record in professional environments. Ships with a 3-year warranty and free on-site support for the first year.',
    price: 699,
    badge: '3-Year Warranty',
    inStock: true,
    specs: {
      cpu: 'Intel Core i5-13500',
      ram: '16GB DDR4-3200',
      storage: '512GB NVMe SSD',
      gpu: 'Intel UHD 770 (integrated)',
      os: 'Windows 11 Pro',
      form: 'Micro ATX',
    },
  },
]

export default products
