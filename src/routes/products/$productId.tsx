import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { productOrderUrl, serviceInquiryUrl } from '@/lib/whatsapp'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetailPage,
  loader: async ({ params }) => {
    const product = products.find((p) => p.id === +params.productId)
    if (!product) throw new Error('Product not found')
    return product
  },
})

const categoryColors: Record<string, string> = {
  gaming: '#f97316',
  business: '#06c2d6',
  workstation: '#a855f7',
  budget: '#22c55e',
}

function ProductDetailPage() {
  const product = Route.useLoaderData()

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>
      {/* Back link */}
      <Link
        to="/products"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: '#5a7090',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: '0.82rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          marginBottom: '2rem',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#06c2d6')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7090')}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Products
      </Link>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        {/* Image */}
        <div>
          <div
            style={{
              background: '#0d1424',
              border: '1px solid #1a2d4a',
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {product.badge && (
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: '#f97316',
                  color: '#fff',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.7rem',
                  zIndex: 1,
                }}
              >
                {product.badge}
              </div>
            )}
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* In stock indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              background: 'rgba(34, 197, 94, 0.06)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                background: '#22c55e',
                borderRadius: '50%',
                boxShadow: '0 0 8px #22c55e',
              }}
            />
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#22c55e',
              }}
            >
              In Stock — Ready to Ship
            </span>
          </div>
        </div>

        {/* Details */}
        <div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.25rem 0.7rem',
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

          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              textTransform: 'uppercase',
              color: '#dde5f5',
              margin: '0 0 1.25rem',
              lineHeight: 1,
            }}
          >
            {product.name}
          </h1>

          <p style={{ color: '#8aa2c0', lineHeight: 1.8, fontSize: '0.95rem', margin: '0 0 2rem' }}>
            {product.description}
          </p>

          {/* Specs */}
          <div
            style={{
              background: '#0d1424',
              border: '1px solid #1a2d4a',
              padding: '1.25rem',
              marginBottom: '2rem',
            }}
          >
            <h3
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#06c2d6',
                margin: '0 0 1rem',
              }}
            >
              Specifications
            </h3>
            <div>
              {[
                { label: 'Processor', value: product.specs.cpu },
                { label: 'Memory', value: product.specs.ram },
                { label: 'Storage', value: product.specs.storage },
                { label: 'Graphics', value: product.specs.gpu },
                { label: 'OS', value: product.specs.os },
                ...(product.specs.form ? [{ label: 'Form Factor', value: product.specs.form }] : []),
              ].map(({ label, value }) => (
                <div key={label} className="spec-row">
                  <span className="spec-label">{label}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price & CTA */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              paddingTop: '1.5rem',
              borderTop: '1px solid #1a2d4a',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#3a5070',
                  marginBottom: '0.25rem',
                }}
              >
                Price
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                  fontSize: '2rem',
                  color: '#dde5f5',
                }}
              >
                ₦{product.price.toLocaleString()}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', flex: 1 }}>
              <a
                href={productOrderUrl(product.name, product.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ flex: '1 1 auto', justifyContent: 'center' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Order via WhatsApp
              </a>
              <a
                href={serviceInquiryUrl('Custom PC Build')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: '1 1 auto', justifyContent: 'center' }}
              >
                Ask a Question
              </a>
            </div>
          </div>

          <p
            style={{
              marginTop: '1rem',
              color: '#3a5070',
              fontSize: '0.8rem',
              lineHeight: 1.6,
            }}
          >
            Message us on WhatsApp to confirm availability, discuss delivery options, or ask about customization.
          </p>
        </div>
      </div>
    </div>
  )
}
