import { Link } from '@tanstack/react-router'
import { generalInquiryUrl } from '@/lib/whatsapp'

export function Footer() {
  return (
    <footer
      style={{
        background: '#0d1424',
        borderTop: '1px solid #1a2d4a',
        marginTop: '6rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem 2rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: '1.5rem',
                letterSpacing: '0.05em',
                color: '#dde5f5',
                marginBottom: '0.25rem',
              }}
            >
              VIJOSH TECH
              <span style={{ color: '#06c2d6' }}> CONSULTS</span>
            </div>
            <p style={{ color: '#5a7090', fontSize: '0.9rem', lineHeight: 1.7, margin: '1rem 0' }}>
              Your trusted local source for quality computers and professional IT services. Built to last, priced fairly.
            </p>
            <a
              href={generalInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#25d366',
                fontSize: '0.85rem',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Products */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#06c2d6',
                marginBottom: '1.25rem',
              }}
            >
              Products
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Gaming PCs', 'Business Laptops', 'Workstations', 'Budget PCs', 'Gaming Laptops'].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    style={{ color: '#5a7090', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#dde5f5')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7090')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#06c2d6',
                marginBottom: '1.25rem',
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Computer Repair', 'Data Recovery', 'Custom PC Build', 'Network Setup', 'IT Consultation'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    style={{ color: '#5a7090', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#dde5f5')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7090')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#06c2d6',
                marginBottom: '1.25rem',
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: '#5a7090', fontSize: '0.9rem' }}>Mon–Fri: 9am – 6pm</li>
              <li style={{ color: '#5a7090', fontSize: '0.9rem' }}>Sat: 10am – 4pm</li>
              <li>
                <a
                  href={generalInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#25d366', fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/tech_satire"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#5a7090', fontSize: '0.9rem', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#dde5f5')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7090')}
                >
                  Twitter: @tech_satire
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/vijosh_tech_consults"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#5a7090', fontSize: '0.9rem', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#dde5f5')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7090')}
                >
                  Instagram: @vijosh_tech_consults
                </a>
              </li>
              <li>
                <a
                  href="https://snapchat.com/add/ex3libur"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#5a7090', fontSize: '0.9rem', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#dde5f5')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#5a7090')}
                >
                  Snapchat: @ex3libur
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {/* WhatsApp */}
          <a
            href="https://wa.me/2347031647276"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', background: '#1a2d4a', color: '#25d366', transition: 'background 0.2s', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#25d366')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#1a2d4a')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          {/* Twitter / X */}
          <a
            href="https://twitter.com/tech_satire"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter @tech_satire"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', background: '#1a2d4a', color: '#dde5f5', transition: 'background 0.2s', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#000')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#1a2d4a')}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/vijosh_tech_consults"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram @vijosh_tech_consults"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', background: '#1a2d4a', color: '#dde5f5', transition: 'background 0.2s', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#e1306c')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#1a2d4a')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          {/* Snapchat */}
          <a
            href="https://snapchat.com/add/ex3libur"
            target="_blank"
            rel="noopener noreferrer"
            title="Snapchat @ex3libur"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', background: '#1a2d4a', color: '#dde5f5', transition: 'background 0.2s', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#FFFC00')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#1a2d4a')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.166.006c.332-.004.663 0 .993.013 1.19.047 2.31.404 3.248 1.073 1.34.951 2.152 2.408 2.333 4.044.057.517.048 1.04.038 1.554l-.003.259c0 .068.02.12.064.168.121.131.35.193.555.248.104.027.202.053.288.084.466.17.768.575.768 1.032 0 .38-.197.725-.528.923-.097.057-.214.104-.348.141-.403.111-.573.22-.64.319-.04.06-.046.137-.016.232.178.55.519 1.038.99 1.41.217.17.445.318.687.44.245.122.46.187.657.199.132.008.26-.01.38-.052l.03-.01c.117-.04.228-.06.334-.06.2 0 .387.063.538.183.236.184.373.467.373.773 0 .504-.375.93-.896 1.003-.058.008-.117.016-.178.026-.3.047-.577.096-.832.183-.246.083-.449.196-.583.373-.148.196-.154.446-.016.743.013.027.025.054.037.08.195.44.437.826.745 1.185.358.416.773.728 1.274.956.21.095.371.173.467.252.159.13.248.318.248.517 0 .325-.228.622-.558.73-.354.116-.717.166-1.089.166-.29 0-.573-.034-.854-.082-.163-.028-.325-.06-.488-.093-.323-.064-.638-.13-.951-.13-.22 0-.435.033-.644.1-.317.1-.618.267-.924.437-.518.287-1.087.574-1.85.667a4.47 4.47 0 0 1-.53.031c-.18 0-.354-.01-.53-.031-.763-.093-1.332-.38-1.85-.667-.306-.17-.607-.337-.924-.437-.21-.067-.424-.1-.644-.1-.313 0-.628.066-.951.13-.163.033-.325.065-.488.093-.281.048-.564.082-.854.082-.372 0-.735-.05-1.089-.166-.33-.108-.558-.405-.558-.73 0-.199.089-.387.248-.517.096-.079.257-.157.467-.252.501-.228.916-.54 1.274-.956.308-.359.55-.745.745-1.185.012-.026.024-.053.037-.08.138-.297.132-.547-.016-.743-.134-.177-.337-.29-.583-.373-.255-.087-.532-.136-.832-.183-.061-.01-.12-.018-.178-.026-.52-.074-.896-.499-.896-1.003 0-.306.137-.589.373-.773a.768.768 0 0 1 .538-.183c.106 0 .217.02.334.06l.03.01c.12.042.248.06.38.052.197-.012.412-.077.657-.2.242-.121.47-.27.687-.44.471-.371.812-.86.99-1.41.03-.095.024-.172-.016-.232-.067-.098-.237-.208-.64-.319-.134-.037-.251-.084-.348-.141-.331-.198-.528-.543-.528-.923 0-.457.302-.862.768-1.032.086-.031.184-.057.288-.084.205-.055.434-.117.555-.248.044-.048.064-.1.064-.168l-.003-.26c-.01-.513-.019-1.036.038-1.553.18-1.636.993-3.093 2.333-4.044C9.856.41 10.976.053 12.166.006Z" />
            </svg>
          </a>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #1a2d4a',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ color: '#3a5070', fontSize: '0.8rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} VIJOSH TECH CONSULTS. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy', 'Terms'].map((item) => (
              <span
                key={item}
                style={{ color: '#3a5070', fontSize: '0.8rem', cursor: 'pointer' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
