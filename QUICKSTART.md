# UMKM Web Starter - Quick Start Guide

## ✅ What You Got

A complete, production-ready website starter for Indonesian UMKM businesses with:

### 🎨 Design
- Modern, warm design system
- Responsive (mobile-first)
- Professional typography (Playfair Display + Inter)
- Smooth animations with Framer Motion
- Accessible (WCAG 2.2 AA)

### 🏗️ Architecture
- React + TypeScript + Vite
- Tailwind CSS with custom design tokens
- Config-driven content (no hardcoding)
- Reusable components
- Type-safe throughout

### 📱 Features
- ✅ Responsive navigation with mobile menu
- ✅ Hero section with CTA
- ✅ Services grid
- ✅ Products with category filtering
- ✅ About section
- ✅ Features/benefits
- ✅ Image gallery
- ✅ Testimonials (marked as demo)
- ✅ FAQ accordion
- ✅ Location with Google Maps
- ✅ Contact CTA
- ✅ WhatsApp integration
- ✅ SEO optimized
- ✅ Schema.org structured data

### 📦 Demo Content
Complete demo for "Kedai Senja" (fictional cafe):
- 4 services
- 8 products with filtering
- 3 testimonials
- 5 FAQs
- 6 gallery images
- Business info, location, contact

## 🚀 How to Use

### 1. Start Development
```bash
npm run dev
```
Open http://localhost:5173

### 2. Customize Your Business

**Edit Business Info:**
```bash
# Open src/config/site.ts
# Change: name, tagline, description, contact, location, etc.
```

**Edit Services:**
```bash
# Open src/data/index.ts
# Update the services array
```

**Edit Products:**
```bash
# Open src/data/index.ts
# Update the products array
```

**Replace Images:**
```bash
# Add your images to public/images/
# Update image URLs in src/config/site.ts and src/data/index.ts
```

**Change Colors:**
```bash
# Open src/index.css
# Modify the @theme colors
```

### 3. Build for Production
```bash
npm run build
```
Output: `dist/` folder

### 4. Deploy
Upload `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

## 📁 Key Files to Edit

| What to Change | File |
|----------------|------|
| Business name, contact, location | `src/config/site.ts` |
| Services | `src/data/index.ts` |
| Products/Menu | `src/data/index.ts` |
| Testimonials | `src/data/index.ts` |
| FAQ | `src/data/index.ts` |
| Gallery images | `src/data/index.ts` |
| Colors | `src/index.css` |
| SEO metadata | `src/config/site.ts` + `index.html` |
| Enable/disable sections | `src/config/site.ts` (sections object) |

## 🎯 Quick Customization Checklist

- [ ] Update business name and tagline
- [ ] Add your WhatsApp number
- [ ] Update address and Google Maps URL
- [ ] Replace demo services with your services
- [ ] Replace demo products with your products
- [ ] Add your product images
- [ ] Update testimonials (remove demo notice)
- [ ] Update FAQ with your actual FAQs
- [ ] Replace gallery images
- [ ] Update social media links
- [ ] Update SEO title and description
- [ ] Test on mobile and desktop
- [ ] Build and deploy

## 💡 Tips

### WhatsApp Integration
The WhatsApp button automatically generates messages. Just update the phone number in `src/config/site.ts`.

### Product Filtering
Products support category filtering out of the box. Just add categories to your products.

### Images
- Use WebP format for better performance
- Optimize images before adding (TinyPNG, Squoosh)
- Use consistent aspect ratios in gallery

### Sections
Enable/disable sections in `src/config/site.ts`:
```typescript
sections: {
  hero: true,        // Show hero
  services: true,    // Show services
  products: false,   // Hide products
  // ...
}
```

## 🎨 Design Tokens

Colors are defined in `src/index.css`:

```css
--color-ivory: #FDFBF7;      /* Background */
--color-cream: #F5F0E8;      /* Surface */
--color-accent: #C4956A;     /* Primary accent */
--color-charcoal: #3D3530;   /* Text */
```

Change these to rebrand the entire site.

## 📱 Mobile Experience

- Floating WhatsApp button (bottom-right)
- Hamburger menu
- Touch-friendly buttons
- Optimized spacing
- Fast loading

## 🔍 SEO Checklist

- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Schema.org structured data
- [x] Semantic HTML
- [x] Proper heading hierarchy
- [x] Alt text for images
- [x] Canonical URL
- [ ] Add to Google Search Console
- [ ] Submit sitemap
- [ ] Set up Google Analytics (optional)

## 🐛 Common Issues

**WhatsApp button not working?**
- Check phone format: `6281234567890` (no + or spaces)

**Images not showing?**
- Check paths are correct
- Verify URLs are accessible
- Use absolute paths from public/

**Build errors?**
- Run `npm install` to ensure all dependencies
- Check TypeScript errors in terminal
- Verify all imports are correct

## 📚 Documentation

- `README.md` - Overview and features
- `DOCUMENTATION.md` - Detailed technical documentation
- `CONTRIBUTING.md` - How to contribute
- `CHANGELOG.md` - Version history

## 🎉 You're Ready!

Your UMKM website starter is complete and ready to customize. Just update the business information and content, then deploy!

**Happy building! 🚀**
