import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'
import { productOrderUrl } from '@/lib/whatsapp'

export const Route = createFileRoute('/products/')({
  component: ProductsPage,
})

const categoryLabels: Record<string, string> = {
  all: 'All Computers',
  gaming: 'Gaming',
  business: 'Business',
  workstation: 'Workstation',
  budget: 'Budget',
}

const categoryColors: Record<string, string> = {
  gaming: '#f97316',
  business: '#06c2d6',
  workstation: '#a855f7',
  budget: '#22c55e',
}

function ProductsPage() {
  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <div className="section-line" />
        <h1
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            textTransform: 'uppercase',
            color: '#dde5f5',
            margin: '0 0 0.75rem',
          }}
        >
          Our Computers
        </h1>
        <p style={{ color: '#5a7090', fontSize: '1rem', maxWidth: '520px', lineHeight: 1.7, margin: 0 }}>
          Hand-picked, tested, and ready to ship. Every machine is optimized for its intended use.
        </p>
      </div>

      {/* Category filter — visual labels only */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
        {Object.entries(categoryLabels).map(([key, label]) => (
          <span
            key={key}
            style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: key === 'all' ? '#070b12' : categoryColors[key] || '#06c2d6',
              background: key === 'all' ? '#06c2d6' : `${categoryColors[key] || '#06c2d6'}18`,
              border: `1px solid ${key === 'all' ? '#06c2d6' : (categoryColors[key] || '#06c2d6') + '40'}`,
              cursor: 'default',
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Products grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <Link
              to="/products/$productId"
              params={{ productId: product.id.toString() }}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  aspectRatio: '16/9',
                  background: '#0d1424',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                />
                {product.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      background: '#f97316',
                      color: '#fff',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.6rem',
                    }}
                  >
                    {product.badge}
                  </div>
                )}
              </div>

              <div style={{ padding: '1.25rem', paddingBottom: '1rem' }}>
                <div style={{ marginBottom: '0.6rem' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.6rem',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: categoryColors[product.category] || '#06c2d6',
                      border: `1px solid ${(categoryColors[product.category] || '#06c2d6')}40`,
                      background: `${categoryColors[product.category] || '#06c2d6'}12`,
                    }}
                  >
                    {product.category}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    color: '#dde5f5',
                    margin: '0 0 0.5rem',
                  }}
                >
                  {product.name}
                </h2>
                <p style={{ color: '#5a7090', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                  {product.shortDescription}
                </p>

                {/* Quick specs */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.25rem',
                    marginTop: '0.9rem',
                  }}
                >
                  {[
                    { k: 'CPU', v: product.specs.cpu.split(' ').slice(0, 3).join(' ') },
                    { k: 'RAM', v: product.specs.ram },
                    { k: 'GPU', v: product.specs.gpu.split(' ').slice(0, 3).join(' ') },
                    { k: 'Storage', v: product.specs.storage.split('+')[0].trim() },
                  ].map(({ k, v }) => (
                    <div key={k} style={{ fontSize: '0.75rem' }}>
                      <span style={{ color: '#3a5070', fontFamily: "'JetBrains Mono', monospace" }}>{k}: </span>
                      <span style={{ color: '#8aa2c0' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>

            <div
              style={{
                padding: '0 1.25rem 1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                marginTop: 'auto',
                borderTop: '1px solid #1a2d4a',
                paddingTop: '1rem',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                  fontSize: '1.4rem',
                  color: '#dde5f5',
                }}
              >
                ₦{product.price.toLocaleString()}
              </span>
              <a
                href={productOrderUrl(product.name, product.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ fontSize: '0.78rem', padding: '0.55rem 1rem' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Order via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
