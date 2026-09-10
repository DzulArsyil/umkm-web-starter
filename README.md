# UMKM Web Starter

⚡ Build your UMKM website in minutes.

A modern, reusable, production-ready website starter for Indonesian UMKM businesses. Perfect for restaurants, cafes, tailors, barbershops, beauty services, rental businesses, and more.

## ✨ Features

- **React + TypeScript** — Type-safe and maintainable
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **Framer Motion** — Smooth, subtle animations
- **Responsive Design** — Mobile-first, works on all devices
- **SEO Ready** — Meta tags, Open Graph, Schema.org structured data
- **Accessibility** — WCAG 2.2 AA compliant where practical
- **WhatsApp Integration** — First-class WhatsApp CTA
- **Google Maps** — Location section with map link
- **Config-Driven** — Change business info without touching components
- **Reusable Components** — Modular, composable architecture
- **Performance Optimized** — Fast loading, minimal bundle size

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/umkm-web-starter.git
cd umkm-web-starter

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your site.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, Services, Products, etc.
│   └── ui/              # Reusable UI components
├── config/
│   └── site.ts          # Business configuration
├── data/
│   └── index.ts         # Services, products, testimonials, FAQ
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles and design tokens
```

## 🎨 Customization Guide

### 1. Change Business Information

Edit `src/config/site.ts`:

```typescript
export const siteConfig: SiteConfig = {
  business: {
    name: "Nama Bisnis Anda",
    tagline: "Tagline bisnis Anda",
    description: "Deskripsi lengkap bisnis",
    category: "restaurant", // or cafe, tailor, etc.
    phone: "628xxxxxxxxxx",
    whatsapp: "628xxxxxxxxxx",
    email: "hello@example.com",
    address: "Alamat lengkap",
    city: "Kota",
    province: "Provinsi",
    mapsUrl: "https://maps.google.com/...",
    instagram: "https://instagram.com/username",
  },
  // ... more config
};
```

### 2. Change Services

Edit `src/data/index.ts`:

```typescript
export const services: Service[] = [
  {
    title: "Nama Layanan",
    description: "Deskripsi layanan",
    icon: "🍽️",
  },
  // ... more services
];
```

### 3. Change Products/Menu

Edit `src/data/index.ts`:

```typescript
export const products: Product[] = [
  {
    id: "product-id",
    name: "Nama Produk",
    description: "Deskripsi produk",
    price: 25000,
    category: "Kategori",
    image: "/images/product.jpg",
  },
  // ... more products
];
```

### 4. Change Images

Replace images in `public/images/` or update URLs in `src/data/index.ts` and `src/config/site.ts`.

### 5. Change Colors

Edit `src/index.css`:

```css
@theme {
  --color-accent: #C4956A;
  --color-accent-dark: #A67B52;
  // ... more colors
}
```

### 6. Change WhatsApp Number

Edit `src/config/site.ts`:

```typescript
business: {
  whatsapp: "628xxxxxxxxxx", // Your WhatsApp number
}
```

### 7. Enable/Disable Sections

Edit `src/config/site.ts`:

```typescript
sections: {
  hero: true,
  services: true,
  products: true,
  about: true,
  gallery: true,
  testimonials: true,
  faq: true,
  location: true,
  contact: true,
}
```

## 🏗️ Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## 👀 Preview Production Build

```bash
npm run preview
```

## 🚢 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Upload dist/ to gh-pages branch
```

### Static Hosting

Upload the contents of `dist/` to any static hosting provider (cPanel, shared hosting, etc.).

## 📱 WhatsApp Integration

The starter includes a reusable `WhatsAppButton` component:

```tsx
<WhatsAppButton
  phone="6281234567890"
  message="Halo, saya ingin bertanya..."
  label="Hubungi Kami"
  variant="primary" // primary | secondary | floating
/>
```

## 🗺️ Google Maps

Add your Google Maps URL in `src/config/site.ts`:

```typescript
location: {
  address: "Alamat lengkap",
  city: "Kota, Provinsi",
  mapsUrl: "https://maps.google.com/?q=Your+Location",
}
```

## 🎯 SEO

Update SEO metadata in `src/config/site.ts`:

```typescript
seo: {
  title: "Judul Website",
  description: "Deskripsi untuk SEO",
  keywords: ["keyword1", "keyword2"],
}
```

Schema.org structured data is included in `index.html`.

## 🎨 Design System

The starter uses a warm, professional design system:

- **Colors**: Warm neutrals (ivory, cream, beige, charcoal)
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Spacing**: Consistent spacing scale
- **Components**: Reusable, accessible components

## 📝 License

MIT License - feel free to use this starter for your projects.

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 💡 Tips

- Replace demo content with your real business information
- Use high-quality images for better visual impact
- Test on multiple devices before launching
- Optimize images for web (WebP format recommended)
- Update social media links
- Add Google Analytics if needed

## 🙏 Credits

Built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

**Made with ❤️ for Indonesian UMKM**
