import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'VIJOSH TECH CONSULTS — Computers & IT Services' },
      {
        name: 'description',
        content:
          'VIJOSH TECH CONSULTS offers quality computers, custom PC builds, and professional IT services. Order online or chat with us on WhatsApp.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="noise-overlay" style={{ position: 'relative', minHeight: '100vh' }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
        <Scripts />
      </body>
    </html>
  )
}
