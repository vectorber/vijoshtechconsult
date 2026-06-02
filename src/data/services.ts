export interface Service {
  id: string
  name: string
  icon: string
  shortDescription: string
  description: string
  price: string
  duration: string
  features: string[]
}

const services: Array<Service> = [
  {
    id: 'repair',
    name: 'Computer Repair',
    icon: 'wrench',
    shortDescription: 'Fast diagnosis and repair for desktops, laptops, and all-in-ones. Most repairs completed same day.',
    description:
      'From screen replacements and keyboard repairs to motherboard-level diagnostics, our certified technicians fix it right the first time. We carry an extensive inventory of spare parts to minimize turnaround time.',
    price: 'From ₦75,000',
    duration: 'Same Day',
    features: [
      'Free diagnostic assessment',
      'Screen & display repairs',
      'Keyboard & trackpad replacement',
      'Power supply & charging port repairs',
      'Motherboard-level component repair',
      '90-day repair warranty',
    ],
  },
  {
    id: 'data-recovery',
    name: 'Data Recovery',
    icon: 'database',
    shortDescription: 'Recover lost files from failed hard drives, corrupted SSDs, and accidentally formatted storage.',
    description:
      'Losing important data is stressful. Our data recovery lab uses professional-grade tools to recover files from mechanically failed drives, corrupted partitions, RAID arrays, and even fire or water-damaged storage.',
    price: 'From ₦150,000',
    duration: '1–3 Days',
    features: [
      'No data — no charge policy',
      'HDD, SSD, USB, and SD card recovery',
      'RAID array reconstruction',
      'Deleted file recovery',
      'Encrypted drive support',
      'Secure transfer to new media',
    ],
  },
  {
    id: 'custom-build',
    name: 'Custom PC Build',
    icon: 'cpu',
    shortDescription: 'Spec and build the exact machine you need. Our builders optimize every component selection for your workload and budget.',
    description:
      'Skip the shelf products. Tell us what you need — gaming at 4K, video editing, CAD, or just a reliable home machine — and we design a system optimized for your budget. Includes full burn-in testing and OS setup.',
    price: 'From ₦200,000 (labor)',
    duration: '3–5 Days',
    features: [
      'Free consultation and parts selection',
      'Component sourcing at wholesale pricing',
      'Professional cable management',
      '24-hour stress test & burn-in',
      'Windows activation & driver setup',
      '1-year labor warranty',
    ],
  },
  {
    id: 'network',
    name: 'Network & WiFi Setup',
    icon: 'wifi',
    shortDescription: 'Home or office network design, router configuration, and reliable WiFi coverage — done right the first time.',
    description:
      'Slow WiFi and dropped connections kill productivity. We design and install wired and wireless networks for homes and small businesses, including mesh systems, VLANs, and secure remote access.',
    price: 'From ₦120,000',
    duration: 'Half Day',
    features: [
      'Site survey and coverage planning',
      'Router & switch configuration',
      'Mesh WiFi installation',
      'Network security hardening',
      'VPN setup for remote work',
      'Network documentation provided',
    ],
  },
  {
    id: 'software',
    name: 'Software & OS Setup',
    icon: 'monitor',
    shortDescription: 'Fresh Windows or macOS installation, driver setup, and all the software you need — ready to use out of the box.',
    description:
      'Whether you\'re getting a fresh start with a clean OS install or setting up a new machine for the first time, we handle every detail: drivers, updates, essential apps, and data migration from your old system.',
    price: 'From ₦60,000',
    duration: 'Same Day',
    features: [
      'Clean Windows 10/11 installation',
      'Driver installation & updates',
      'Essential software setup',
      'Data migration from old device',
      'Antivirus & security configuration',
      'User account and preference setup',
    ],
  },
  {
    id: 'it-support',
    name: 'IT Consultation & Support',
    icon: 'headset',
    shortDescription: 'Ongoing technical guidance for small businesses — from purchase decisions to cybersecurity strategy.',
    description:
      'Get expert advice without hiring a full-time IT department. We provide scheduled and on-demand support for small and medium businesses, covering everything from hardware procurement to security audits.',
    price: '₦80,000/hour',
    duration: 'Ongoing',
    features: [
      'Hardware & software purchasing advice',
      'Cybersecurity assessment',
      'Backup strategy design',
      'Staff IT training sessions',
      'Remote desktop support',
      'Priority response times for retainers',
    ],
  },
]

export default services
