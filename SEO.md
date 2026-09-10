# SEO Guide

UMKM Web Starter is designed to be SEO-ready, but search visibility still depends on the actual business content, domain, technical quality, indexing, and authority of the deployed site.

## SEO Checklist

### 1. Business Metadata

Update the SEO configuration in `src/config/site.ts`:

```typescript
seo: {
  title: "Nama Bisnis | Produk & Layanan di Kota",
  description: "Deskripsi singkat dan natural tentang bisnis, produk, layanan, dan lokasi.",
  keywords: ["nama bisnis", "kategori bisnis", "kota"],
}
```

Keep the title descriptive and avoid keyword stuffing.

### 2. Local SEO

For a real business, make sure these values are accurate and consistent:

- business name
- address
- city/province
- phone/WhatsApp
- opening hours
- Google Maps URL
- social profiles

Use the same business information across the website and public business profiles.

### 3. Structured Data

The starter includes Schema.org structured data in `index.html`. Keep the schema aligned with the actual business type and never publish fabricated reviews, ratings, prices, or contact information.

### 4. Images

Use descriptive filenames and meaningful `alt` text. Prefer modern formats such as WebP where appropriate and compress images before deployment.

### 5. Open Graph

Set the social preview title, description, and image so shared links look intentional on messaging and social platforms.

### 6. Crawlability

Before launch, verify:

- `robots.txt` is available when needed
- canonical URL points to the preferred production URL
- important pages are reachable through internal links
- there are no accidental `noindex` directives
- production URLs are correct

### 7. Search Console

After deploying a real business site:

1. Verify the domain in Google Search Console.
2. Submit the sitemap when available.
3. Inspect important URLs.
4. Monitor indexing and search performance.
5. Fix coverage and mobile usability issues.

## SEO ≠ README

The GitHub README helps developers discover and understand the open-source project. It does not directly make the deployed UMKM website rank in Google.

For the deployed website, prioritize:

```text
Useful content
     ↓
Technical SEO
     ↓
Local business signals
     ↓
Good UX + performance
     ↓
Indexing
     ↓
Ongoing content/authority
```

## Recommended Production Checks

- [ ] Real business information replaces demo placeholders
- [ ] Page title is unique and descriptive
- [ ] Meta description is useful and natural
- [ ] Canonical URL is correct
- [ ] Open Graph image exists
- [ ] Structured data matches the business
- [ ] Images have useful alt text
- [ ] Mobile layout works correctly
- [ ] Core pages load quickly
- [ ] Google Search Console is configured
