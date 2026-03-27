# Meoflow - Endüstriyel Ölçüm ve Kontrol Ekipmanları E-Ticaret Sitesi

## Proje Hakkında
Meoflow, endüstriyel ölçüm ve kontrol ekipmanları satan bir e-ticaret web sitesidir. Elektromanyetik debimetreler, manyetik bypass seviye göstergeleri, basınç transmitterleri, sıcaklık sensörleri, seviye sensörleri, proses kontrol cihazları ve aktüatörler/vanalar kategorilerinde ürünler sunar.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **State Management:** React Context API (CartContext)
- **Deployment:** Vercel (recommended)
- **Node Version:** 20.x

## Proje Yapısı
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header, Footer, CartProvider)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind
│   ├── urunler/            # Products
│   │   ├── page.tsx        # All products listing
│   │   ├── [slug]/         # Product detail
│   │   └── kategori/[category]/ # Category filter
│   ├── sepet/              # Cart / Checkout
│   ├── blog/               # Blog listing + detail
│   ├── hakkimizda/         # About page
│   ├── iletisim/           # Contact page
│   └── kargo-takip/        # Cargo tracking
├── components/             # Reusable components
│   ├── Header.tsx          # Sticky header with nav + cart icon
│   ├── Footer.tsx          # Site footer
│   ├── CartDrawer.tsx      # Slide-in cart panel
│   └── ProductCard.tsx     # Product card for grids
├── context/
│   └── CartContext.tsx      # Shopping cart state + exchange rate
├── data/
│   ├── products.ts         # All product data (25+ products)
│   ├── categories.ts       # Product categories (7 categories)
│   └── blogs.ts            # Blog post content (6 SEO articles)
├── types/
│   └── index.ts            # TypeScript interfaces
└── lib/                    # Utility functions
```

## Key Features
1. **Dynamic Pricing:** Prices are in USD base, converted to TRY using a simulated exchange rate that increases daily
2. **Shopping Cart:** Full cart with add/remove/quantity, persistent via localStorage
3. **SEO:** Meta tags, JSON-LD structured data, semantic HTML, blog content
4. **Blog:** 6 original SEO-optimized technical articles about industrial measurement
5. **Cargo Tracking:** Mock tracking system with timeline UI
6. **Responsive:** Mobile-first responsive design

## Design System
- **Primary Color:** Blue (primary-50 to primary-950)
- **Accent Color:** Sky blue (accent-400 to accent-600)
- **Font:** Inter (Google Fonts)
- **Theme:** Professional, vibrant, industrial

## Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Pricing Logic
- Products have `basePrice` in USD
- Exchange rate is calculated dynamically with a daily increment
- Base rate: 38.5 TL/USD, with ~1.5% monthly increase simulation
- Prices displayed in TL with USD reference
- Free shipping over 50,000 TL

## Adding New Products
Add to `src/data/products.ts` following the Product interface:
- `id`: Unique string (e.g., "emd-006")
- `slug`: URL-friendly name
- `categorySlug`: Must match a category slug from categories.ts
- `basePrice`: Price in USD
- All other fields as per the Product type

## Notes
- Cart state persists in localStorage
- Exchange rate updates daily (simulated)
- Blog content is static, stored in blogs.ts
- No backend/database - fully static site with client-side cart
- Images use SVG placeholder icons (replace with real product images for production)
