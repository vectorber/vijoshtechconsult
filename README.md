# TechCore Systems — Computer Sales & IT Services Website

A full-featured business website for a computer sales and IT services company. Built with TanStack Start (React), Tailwind CSS v4, and deployed on Netlify.

## What it includes

- **Homepage** — Hero section, featured products, services overview, trust signals, and WhatsApp CTA
- **Products catalog** (`/products`) — All computers with specs, pricing, and order-via-WhatsApp buttons
- **Product detail pages** (`/products/:id`) — Full specs, description, and direct WhatsApp order button
- **Services page** (`/services`) — Full list of IT services with pricing, features, and WhatsApp booking
- **About page** (`/about`) — Company story, stats, team info, and how-it-works flow
- **WhatsApp integration** — Floating button + pre-filled message links throughout the site
- **Stripe checkout** — Optional card payment (requires `STRIPE_SECRET_KEY` env variable)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) (React SSR) |
| Styling | Tailwind CSS v4 + custom CSS |
| Fonts | Barlow Condensed, Barlow, JetBrains Mono (Google Fonts) |
| Payments | Stripe Checkout (optional) |
| Hosting | Netlify (with `@netlify/vite-plugin-tanstack-start`) |

## Running locally

```bash
npm install
npm run dev       # starts on http://localhost:3000
```

Via Netlify CLI (recommended for testing functions):
```bash
netlify dev       # starts on http://localhost:8888
```

## Configuration

### WhatsApp number
Edit `src/lib/whatsapp.ts` and replace the placeholder number:
```ts
export const WHATSAPP_NUMBER = '15550000000'  // ← your number, no + or spaces
```

### Stripe payments (optional)
Set the `STRIPE_SECRET_KEY` and `SITE_URL` environment variables in Netlify dashboard or a `.env` file:
```
STRIPE_SECRET_KEY=sk_live_...
SITE_URL=https://yourdomain.com
```

Without Stripe configured, the site still works fully — all ordering goes through WhatsApp.

## Customizing content

- **Products**: Edit `src/data/products.ts`
- **Services**: Edit `src/data/services.ts`
- **Business name/branding**: Update `src/lib/whatsapp.ts` and `src/components/Navbar.tsx`
