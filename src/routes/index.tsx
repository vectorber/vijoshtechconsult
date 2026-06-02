import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'
import services from '@/data/services'
import { generalInquiryUrl } from '@/lib/whatsapp'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    gaming: '#f97316',
    business: '#06c2d6',
    workstation: '#a855f7',
    budget: '#22c55e',
  }
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.2rem 0.6rem',
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 600,
        fontSize: '0.65rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: colors[category] || '#06c2d6',
        border: `1px solid ${colors[category] || '#06c2d6'}40`,
        background: `${colors[category] || '#06c2d6'}12`,
      }}
    >
      {category}
    </span>
  )
}

const serviceIcons: Record<string, JSX.Element> = {
  wrench: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06c2d6" strokeWidth="1.5">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  database: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06c2d6" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  cpu: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06c2d6" strokeWidth="1.5">
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 9h3l1-1V4l-1-1h-4l-1 1v3M9 9H6L5 8V4l1-1h4l1 1v3M15 15h3l1 1v4l-1 1h-4l-1-1v-3M9 15H6l-1 1v4l1 1h4l1-1v-3" />
    </svg>
  ),
  wifi: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06c2d6" strokeWidth="1.5">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  ),
  monitor: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06c2d6" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  headset: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06c2d6" strokeWidth="1.5">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
}

function HomePage() {
  const featuredProducts = products.slice(0, 3)
  const featuredServices = services.slice(0, 4)

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="mesh-bg"
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '6rem 1.5rem 5rem',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="grid-decoration" style={{ opacity: 0.5 }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.9rem',
                background: 'rgba(6, 194, 214, 0.08)',
                border: '1px solid rgba(6, 194, 214, 0.2)',
                marginBottom: '2rem',
              }}
            >
              <div style={{ width: 8, height: 8, background: '#06c2d6', borderRadius: '50%' }} />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#06c2d6',
                }}
              >
                Quality Computers &amp; IT Services
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                lineHeight: 0.95,
                color: '#dde5f5',
                margin: '0 0 1.5rem',
                textTransform: 'uppercase',
              }}
            >
              Power Built
              <br />
              <span className="gradient-text">For You</span>
            </h1>

            <p
              style={{
                color: '#8aa2c0',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                margin: '0 0 2.5rem',
                maxWidth: '520px',
              }}
            >
              From off-the-shelf gaming rigs to custom workstations and expert repairs — VIJOSH TECH CONSULTS has
              everything your home or business needs.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Link to="/products" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Shop Computers
              </Link>
              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
              <a
                href={generalInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              marginTop: '4rem',
              paddingTop: '3rem',
              borderTop: '1px solid #1a2d4a',
            }}
          >
            {[
              { number: '500+', label: 'Computers Sold' },
              { number: '1,200+', label: 'Repairs Completed' },
              { number: '97.3%', label: 'Customer Satisfaction' },
              { number: '8 Yrs', label: 'In Business' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: '2.2rem',
                    color: '#06c2d6',
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ color: '#5a7090', fontSize: '0.82rem', marginTop: '0.25rem', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-line" />
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                textTransform: 'uppercase',
                color: '#dde5f5',
                margin: 0,
              }}
            >
              Featured Computers
            </h2>
          </div>
          <Link
            to="/products"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#06c2d6',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to="/products/$productId"
              params={{ productId: product.id.toString() }}
              style={{ textDecoration: 'none' }}
            >
              <div className="product-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    aspectRatio: '16/9',
                    background: '#0d1424',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                  />
                </div>
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <CategoryBadge category={product.category} />
                    {product.badge && (
                      <span className="badge badge-orange">{product.badge}</span>
                    )}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: '#dde5f5',
                      margin: 0,
                    }}
                  >
                    {product.name}
                  </h3>
                  <p style={{ color: '#5a7090', fontSize: '0.875rem', lineHeight: 1.6, margin: 0, flex: 1 }}>
                    {product.shortDescription}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600,
                        fontSize: '1.35rem',
                        color: '#dde5f5',
                      }}
                    >
                      ₦{product.price.toLocaleString()}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#06c2d6',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      Details
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────── */}
      <section
        style={{
          background: '#0d1424',
          borderTop: '1px solid #1a2d4a',
          borderBottom: '1px solid #1a2d4a',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-line" />
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                textTransform: 'uppercase',
                color: '#dde5f5',
                margin: '0 0 0.75rem',
              }}
            >
              What We Do
            </h2>
            <p style={{ color: '#5a7090', fontSize: '1rem', maxWidth: '480px', lineHeight: 1.7 }}>
              Expert IT services from trusted local technicians. No corporate runaround — just real help, fast.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {featuredServices.map((service) => (
              <div key={service.id} className="service-card">
                <div style={{ marginBottom: '1rem' }}>
                  {serviceIcons[service.icon]}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: '#dde5f5',
                    margin: '0 0 0.5rem',
                  }}
                >
                  {service.name}
                </h3>
                <p style={{ color: '#5a7090', fontSize: '0.875rem', lineHeight: 1.6, margin: '0 0 1rem' }}>
                  {service.shortDescription}
                </p>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: '#06c2d6',
                  }}
                >
                  {service.price}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/services" className="btn-secondary">
              All Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-line" />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              textTransform: 'uppercase',
              color: '#dde5f5',
              margin: 0,
            }}
          >
            Why VIJOSH TECH CONSULTS?
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '2rem',
          }}
        >
          {[
            {
              title: 'Tested & Certified',
              body: 'Every machine goes through a 24-hour burn-in test before it reaches your hands.',
              color: '#06c2d6',
            },
            {
              title: 'Local & Accountable',
              body: 'Walk in, talk to a real technician. No call centers, no ticket queues.',
              color: '#f97316',
            },
            {
              title: 'Fair Pricing',
              body: 'Wholesale parts sourcing means you get better components at lower prices than big-box stores.',
              color: '#a855f7',
            },
            {
              title: 'WhatsApp Support',
              body: 'Got a question? Message us directly on WhatsApp and get a real answer within the hour.',
              color: '#25d366',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                borderLeft: `3px solid ${item.color}`,
                paddingLeft: '1.25rem',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: '#dde5f5',
                  margin: '0 0 0.5rem',
                  textTransform: 'uppercase',
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: '#5a7090', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #06c2d615 0%, #0d1424 50%, #f9731608 100%)',
          border: '1px solid #1a2d4a',
          margin: '0 1.5rem 5rem',
          padding: '3rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              textTransform: 'uppercase',
              color: '#dde5f5',
              margin: '0 0 0.5rem',
            }}
          >
            Not sure what you need?
          </h2>
          <p style={{ color: '#5a7090', margin: 0, fontSize: '0.95rem' }}>
            Chat with us on WhatsApp and we&apos;ll help you find the right solution.
          </p>
        </div>
        <a
          href={generalInquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Chat on WhatsApp
        </a>
      </section>
    </div>
  )
}
