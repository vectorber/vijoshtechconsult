import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import { BUSINESS_NAME, generalInquiryUrl } from '@/lib/whatsapp'

const LogoIcon = () => (
  <img src="/logo.png" alt="VIJOSH TECH CONSULTS logo" width={40} height={40} style={{ objectFit: 'contain' }} />
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(7, 11, 18, 0.92)',
        borderBottom: '1px solid #1a2d4a',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <nav
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
        >
          <LogoIcon />
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#dde5f5',
              lineHeight: 1,
            }}
          >
            VIJOSH TECH
            <span style={{ color: '#06c2d6', display: 'block', fontSize: '0.65rem', letterSpacing: '0.15em', fontWeight: 600 }}>
              CONSULTS
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${currentPath === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href={generalInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp hidden-mobile"
            style={{ fontSize: '0.8rem', padding: '0.55rem 1.1rem' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#dde5f5',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'none',
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: '#0d1424',
            borderTop: '1px solid #1a2d4a',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '1.2rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: currentPath === link.to ? '#06c2d6' : '#dde5f5',
                textDecoration: 'none',
                padding: '0.5rem 0',
                borderBottom: '1px solid #1a2d4a',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={generalInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ marginTop: '0.5rem', textAlign: 'center', justifyContent: 'center' }}
          >
            Chat on WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  )
}
