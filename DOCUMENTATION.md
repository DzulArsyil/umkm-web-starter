# UMKM Web Starter - Project Documentation

## 🎯 Overview

UMKM Web Starter is a production-ready, reusable website template designed specifically for Indonesian small businesses (UMKM). It provides a complete, modern web presence that can be customized for any type of local business.

## 🏗️ Architecture

### Core Principles

1. **Config-Driven**: Business information is separated from UI components
2. **Reusable Components**: Modular architecture for easy customization
3. **Type-Safe**: Full TypeScript support with strict mode
4. **Performance-First**: Optimized for Indonesian mobile users
5. **Accessible**: WCAG 2.2 AA compliant where practical

### File Organization

```
src/
├── components/
│   ├── layout/           # Structural components (Navbar, Footer)
│   ├── sections/         # Page sections (Hero, Services, Products, etc.)
│   └── ui/              # Reusable UI primitives (Buttons, Animations)
├── config/
│   └── site.ts          # Business configuration (name, contact, etc.)
├── data/
│   └── index.ts         # Content data (services, products, testimonials)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
├── App.tsx              # Main application component
├── main.tsx             # Entry point
└── index.css            # Design tokens and global styles
```

## 🎨 Design System

### Colors

The design uses a warm, professional palette:

- **Primary**: Ivory (#FDFBF7), Cream (#F5F0E8)
- **Accent**: Warm brown (#C4956A)
- **Text**: Charcoal (#3D3530), Dark (#2A2420)
- **Muted**: (#7A6F64)
- **Borders**: (#E0D8CC)

### Typography

- **Headings**: Playfair Display (serif) - elegant, editorial
- **Body**: Inter (sans-serif) - clean, readable

### Spacing

Consistent spacing scale using Tailwind's default system (4px base unit).

## 🔧 Configuration

### Business Information

Located in `src/config/site.ts`:

```typescript
{
  business: {
    name: string;           // Business name
    tagline: string;        // Short tagline
    description: string;    // Full description
    category: string;       // Business type
    phone: string;          // Phone number
    whatsapp: string;       // WhatsApp number (with country code)
    email: string;          // Email address
    address: string;        // Full address
    city: string;           // City
    province: string;       // Province
    mapsUrl: string;        // Google Maps URL
    instagram?: string;     // Instagram URL
    facebook?: string;      // Facebook URL
    openingHours?: string;  // Operating hours
  }
}
```

### Section Visibility

Control which sections appear on the page:

```typescript
{
  sections: {
    hero: boolean;
    highlights: boolean;
    services: boolean;
    products: boolean;
    about: boolean;
    features: boolean;
    gallery: boolean;
    testimonials: boolean;
    faq: boolean;
    location: boolean;
    contact: boolean;
  }
}
```

### Content Data

Located in `src/data/index.ts`:

- **Services**: Array of service offerings
- **Products**: Array of products/menu items with filtering
- **Testimonials**: Customer reviews (marked as demo)
- **FAQ**: Frequently asked questions
- **Gallery**: Image gallery
- **Highlights**: Key selling points
- **Features**: Business features/benefits

## 🧩 Components

### Layout Components

#### Navbar
- Sticky navigation
- Mobile-responsive with hamburger menu
- Smooth scroll to sections
- WhatsApp CTA button

#### Footer
- Business information
- Navigation links
- Copyright notice

### Section Components

#### Hero
- Large headline with eyebrow text
- Hero image with decorative elements
- Primary and secondary CTAs
- Optional badge

#### Highlights
- Grid of key selling points
- Icon + label format
- Stagger animation

#### Services
- Service offerings grid
- Icon + title + description
- Hover effects

#### Products
- Product/menu grid
- Category filtering
- Price display (or "Hubungi Kami")
- WhatsApp order button per product
- Badge support

#### About
- Business story section
- Image + text layout
- Responsive grid

#### Features
- Benefits/features grid
- Icon + title + description
- Stagger animation

#### Gallery
- Image grid
- Hover effects with labels
- Lazy loading
- Responsive layout

#### Testimonials
- Customer review cards
- Star ratings
- Name and role
- Demo content notice

#### FAQ
- Accordion-style
- One item open at a time
- Smooth animations
- Accessible

#### Location
- Address display
- Google Maps link
- WhatsApp CTA

#### Contact CTA
- Final call-to-action
- WhatsApp button
- Centered layout

### UI Components

#### WhatsAppButton
```typescript
interface WhatsAppButtonProps {
  phone: string;           // WhatsApp number
  message?: string;        // Pre-filled message
  label?: string;          // Button text
  variant?: "primary" | "secondary" | "floating";
  className?: string;      // Additional classes
  icon?: boolean;          // Show WhatsApp icon
}
```

Generates WhatsApp URL with pre-filled message.

#### Animations
- `FadeIn`: Simple fade animation
- `SlideUp`: Fade + slide up
- `ScaleIn`: Scale from 95% to 100%
- `StaggerContainer`: Container for staggered children
- `StaggerItem`: Item within stagger container

All animations respect `prefers-reduced-motion`.

## 📱 Responsive Design

### Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Mobile-First Approach

- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly buttons (min 44px)
- Optimized navigation
- Floating WhatsApp button on mobile

## 🚀 Performance

### Optimizations

- Code splitting via Vite
- Lazy loading images
- Minimal JavaScript bundle
- Optimized CSS with Tailwind
- Font preloading
- Image optimization ready

### Target Metrics

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle Size: < 300KB (gzipped)

## 🔍 SEO

### Implemented Features

- Semantic HTML structure
- Meta tags (title, description, keywords)
- Open Graph tags
- Twitter Card tags
- Schema.org structured data (LocalBusiness)
- Canonical URL
- Proper heading hierarchy
- Alt text for images
- robots.txt ready

### Schema.org

```json
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "...",
  "address": "...",
  "telephone": "...",
  "openingHours": "...",
  "priceRange": "$$"
}
```

## ♿ Accessibility

### Features

- Semantic HTML landmarks
- ARIA labels where needed
- Keyboard navigation
- Focus-visible states
- Color contrast (WCAG AA)
- Reduced motion support
- Touch-friendly controls
- Screen reader friendly

## 💬 WhatsApp Integration

### Dynamic Messages

```typescript
// Product-specific message
getProductWhatsAppMessage("Nasi Goreng")
// → "Halo, saya ingin menanyakan ketersediaan Nasi Goreng..."

// Service-specific message
getServiceWhatsAppMessage("Catering")
// → "Halo, saya ingin bertanya tentang layanan Catering..."

// Custom message
getWhatsAppUrl(phone, "Custom message here")
```

### Button Variants

- **Primary**: Filled accent color
- **Secondary**: Outlined
- **Floating**: Green WhatsApp brand color

## 🎭 Animations

### Framer Motion Patterns

- **Fade In**: Opacity 0 → 1
- **Slide Up**: Opacity + translateY
- **Scale In**: Opacity + scale
- **Stagger**: Sequential child animations

### Performance

- `whileInView` for viewport-triggered animations
- `viewport.once` to animate only once
- Respects `prefers-reduced-motion`
- GPU-accelerated transforms

## 🎨 Customization Workflow

### 1. Clone & Install
```bash
git clone ...
npm install
```

### 2. Configure Business
Edit `src/config/site.ts` with your business information.

### 3. Update Content
Edit `src/data/index.ts` with your services, products, etc.

### 4. Replace Images
Add images to `public/images/` or update URLs in config.

### 5. Adjust Colors (Optional)
Edit `src/index.css` design tokens.

### 6. Build & Deploy
```bash
npm run build
# Deploy dist/ folder
```

## 📦 Dependencies

### Core
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

### Development
- TypeScript ESLint
- PostCSS
- Autoprefixer

No heavy UI libraries - everything is custom-built for maximum control.

## 🔄 Business Types

The template supports various business categories:

- Restaurant
- Cafe
- Food & Beverage
- Tailor
- Barbershop
- Beauty Services
- Rental Services
- Local Services
- Other

Each category can use the same components with different content.

## 📝 Demo Content

The starter includes demo content for "Kedai Senja" (a fictional cafe):

- 4 services
- 8 products with categories
- 3 testimonials (marked as demo)
- 5 FAQ items
- 6 gallery images
- 4 highlights
- 4 features

All demo content is clearly marked and should be replaced with real business data.

## 🐛 Troubleshooting

### Build Errors

- Check TypeScript errors in terminal
- Verify all imports are correct
- Ensure all required config fields are present

### Images Not Loading

- Check image paths (relative to public/)
- Verify image URLs are accessible
- Use WebP format for better performance

### WhatsApp Not Working

- Verify phone number format (with country code, no + or spaces)
- Example: `6281234567890` (not `+62 812-3456-7890`)

### Animations Not Working

- Check browser console for errors
- Verify Framer Motion is installed
- Test with `prefers-reduced-motion` disabled

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Vite Guide](https://vitejs.dev/guide)

## 🤝 Support

For issues and questions:
- Open a GitHub Issue
- Check existing documentation
- Review demo code in `src/`

## 📄 License

MIT License - Free to use for personal and commercial projects.

---

**Built with ❤️ for Indonesian UMKM**
