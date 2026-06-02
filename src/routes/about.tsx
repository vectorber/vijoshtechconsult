import { createFileRoute } from '@tanstack/react-router'
import { generalInquiryUrl } from '@/lib/whatsapp'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="mesh-bg"
        style={{
          padding: '4rem 1.5rem 3rem',
          borderBottom: '1px solid #1a2d4a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="grid-decoration" style={{ opacity: 0.3 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="section-line" />
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              textTransform: 'uppercase',
              color: '#dde5f5',
              margin: '0 0 1rem',
              lineHeight: 0.95,
            }}
          >
            About
            <br />
            <span className="gradient-text">VIJOSH TECH CONSULTS</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div className="section-line" />
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                textTransform: 'uppercase',
                color: '#dde5f5',
                margin: '0 0 1.5rem',
              }}
            >
              Built by Technicians,<br />For Real People
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ color: '#8aa2c0', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>
                VIJOSH TECH CONSULTS was founded with a simple mission: give people access to well-built computers and honest IT services without the corporate markup or confusing sales pitches.
              </p>
              <p style={{ color: '#8aa2c0', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>
                Every machine we sell is hand-selected, tested by our technicians, and configured for the person buying it. Every service is performed by the same team you talk to on WhatsApp — no outsourcing, no surprises.
              </p>
              <p style={{ color: '#8aa2c0', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>
                We&apos;ve been doing this for 8 years, serving home users, small businesses, freelancers, students, and gamers across the region.
              </p>
            </div>
          </div>

          {/* Visual stat block */}
          <div
            style={{
              background: '#0d1424',
              border: '1px solid #1a2d4a',
              padding: '2.5rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
              }}
            >
              {[
                { n: '500+', label: 'Computers Sold', color: '#06c2d6' },
                { n: '1,200+', label: 'Repairs Done', color: '#f97316' },
                { n: '97.3%', label: 'Satisfaction Rate', color: '#22c55e' },
                { n: '8 Yrs', label: 'In Business', color: '#a855f7' },
                { n: '<1 hr', label: 'Avg WhatsApp Reply', color: '#06c2d6' },
                { n: '3-Yr', label: 'Warranty Available', color: '#f97316' },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: '1.25rem',
                    borderBottom: '1px solid #1a2d4a',
                    borderRight: '1px solid #1a2d4a',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: '1.8rem',
                      color: s.color,
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div style={{ color: '#3a5070', fontSize: '0.75rem', marginTop: '0.25rem', letterSpacing: '0.05em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          background: '#0d1424',
          borderTop: '1px solid #1a2d4a',
          borderBottom: '1px solid #1a2d4a',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
          <div className="section-line" />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              textTransform: 'uppercase',
              color: '#dde5f5',
              margin: '0 0 3rem',
            }}
          >
            How We Work
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '0',
            }}
          >
            {[
              {
                step: '01',
                title: 'You reach out',
                body: 'Contact us via WhatsApp, walk in, or browse the site. Tell us what you need.',
                color: '#06c2d6',
              },
              {
                step: '02',
                title: 'We assess & quote',
                body: 'Free assessment for repairs. Clear quotes for builds and purchases — no hidden fees.',
                color: '#f97316',
              },
              {
                step: '03',
                title: 'Work gets done',
                body: 'Certified technicians handle everything. You get updates via WhatsApp.',
                color: '#a855f7',
              },
              {
                step: '04',
                title: 'You pick up or receive',
                body: 'Collect in-store or arrange delivery. All work is backed by warranty.',
                color: '#22c55e',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: '2rem',
                  borderRight: '1px solid #1a2d4a',
                  borderBottom: '1px solid #1a2d4a',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: '3.5rem',
                    color: `${item.color}22`,
                    lineHeight: 1,
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    color: item.color,
                    margin: '0 0 0.5rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#5a7090', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team note */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '720px' }}>
          <div className="section-line" />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              textTransform: 'uppercase',
              color: '#dde5f5',
              margin: '0 0 1.5rem',
            }}
          >
            Our Team
          </h2>
          <p style={{ color: '#8aa2c0', lineHeight: 1.8, fontSize: '0.95rem', margin: '0 0 1rem' }}>
            Our team of certified IT professionals brings decades of combined experience across hardware repair, network infrastructure, and custom system builds. We&apos;re not a big-box store — we&apos;re a small team of people who genuinely love technology and take pride in every job.
          </p>
          <p style={{ color: '#8aa2c0', lineHeight: 1.8, fontSize: '0.95rem', margin: '0 0 2rem' }}>
            When you message us on WhatsApp, you&apos;re talking to the same technicians who will work on your equipment. No middleman. No scripts.
          </p>
          <a
            href={generalInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Say Hello on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
