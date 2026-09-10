import { useState } from "react";
import { siteConfig } from "../../config/site";
import { services, products, testimonials, faqs, galleryImages, highlights, features, productCategories } from "../../data";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { SlideUp, StaggerContainer, StaggerItem, ScaleIn } from "../ui/Animations";
import { formatPrice, getProductWhatsAppMessage } from "../../lib/utils";

// ===== HERO =====
export function Hero() {
  const { hero, business } = siteConfig;

  return (
    <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <SlideUp>
            {hero.badge && (
              <div className="inline-flex items-center gap-2 bg-cream px-3 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-xs font-medium text-brown">{hero.badge}</span>
              </div>
            )}

            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              {hero.eyebrow}
            </p>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark leading-tight mb-5 whitespace-pre-line">
              {hero.headline}
            </h1>

            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton
                phone={business.whatsapp}
                label={hero.primaryCta.label}
                variant="primary"
                className="text-sm sm:text-base"
              />
              {hero.secondaryCta && (
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 border border-border hover:border-tan text-charcoal px-7 py-3.5 rounded-full font-medium transition-all text-sm sm:text-base"
                >
                  {hero.secondaryCta.label}
                </a>
              )}
            </div>
          </SlideUp>

          {/* Hero Image */}
          <ScaleIn>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={hero.image}
                  alt={`${business.name} - ${business.tagline}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-2 border-dashed border-tan rounded-xl opacity-40"></div>
              <div className="absolute -top-3 -right-3 w-12 h-12 border-2 border-dashed border-accent rounded-full opacity-30"></div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}

// ===== HIGHLIGHTS =====
export function Highlights() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item) => (
            <StaggerItem key={item.label} className="text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm font-medium text-charcoal">{item.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ===== SERVICES =====
export function Services() {
  return (
    <section id="layanan" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Layanan</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Apa yang Kami Tawarkan?
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Berbagai layanan yang bisa Anda nikmati di {siteConfig.business.name}.
          </p>
        </SlideUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="bg-surface border border-border rounded-2xl p-6 hover:shadow-md hover:border-tan transition-all duration-300 h-full">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-dark mb-2">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{service.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ===== PRODUCTS =====
export function Products() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts =
    activeCategory === "Semua"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="produk" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SlideUp className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Menu</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Menu Favorit
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Pilihan menu yang paling disukai pelanggan kami.
          </p>
        </SlideUp>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {productCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent text-white"
                  : "bg-ivory text-muted hover:text-charcoal border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-ivory border border-border rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {product.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-semibold text-dark">{product.name}</h3>
                  {product.badge && (
                    <span className="text-xs font-medium bg-accent/10 text-accent-dark px-2 py-1 rounded-full whitespace-nowrap">
                      {product.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-charcoal">
                    {product.price ? formatPrice(product.price) : "Hubungi Kami"}
                  </p>
                  <WhatsAppButton
                    phone={siteConfig.business.whatsapp}
                    message={getProductWhatsAppMessage(product.name)}
                    label="Pesan"
                    variant="secondary"
                    className="text-xs px-4 py-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== ABOUT =====
export function About() {
  const { business } = siteConfig;

  return (
    <section id="tentang" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <SlideUp>
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Tentang Kami</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
              Cerita di Balik {business.name}
            </h2>
            <p className="text-muted leading-relaxed mb-4">{business.description}</p>
            <p className="text-muted leading-relaxed">
              Kami berkomitmen untuk memberikan pengalaman terbaik bagi setiap pelanggan. Dari kopi
              hingga makanan, semuanya dibuat dengan penuh perhatian.
            </p>
          </SlideUp>

          <ScaleIn>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://image.qwenlm.ai/generated-images/a5e7d532-ca6f-4e97-8ea6-503652e53eed/_result.png"
                alt="Tentang Kedai Senja"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}

// ===== FEATURES =====
export function Features() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <SlideUp className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Keunggulan</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Kenapa Pilih Kami?
          </h2>
        </SlideUp>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="flex gap-4 bg-ivory rounded-2xl p-6 border border-border">
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-dark mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ===== GALLERY =====
export function Gallery() {
  return (
    <section id="galeri" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Galeri</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Suasana Kedai
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Intip suasana dan suasana di {siteConfig.business.name}.
          </p>
        </SlideUp>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((image, index) => (
            <ScaleIn key={index} delay={index * 0.05}>
              <div className="group relative aspect-square rounded-xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {image.label && (
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                    <span className="text-white text-xs sm:text-sm font-medium">{image.label}</span>
                  </div>
                )}
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== TESTIMONIALS =====
export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SlideUp className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Testimoni</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Kata Pelanggan
          </h2>
          <p className="text-muted text-sm max-w-lg mx-auto">
            <em>Ini adalah contoh testimoni demo. Ganti dengan testimoni pelanggan asli Anda.</em>
          </p>
        </SlideUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="bg-ivory border border-border rounded-2xl p-6">
                {testimonial.rating != null && (
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < (testimonial.rating ?? 0) ? "text-accent" : "text-border"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
                <p className="text-sm text-muted leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-dark text-sm">{testimonial.name}</p>
                  {testimonial.role && (
                    <p className="text-xs text-muted">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ===== FAQ =====
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SlideUp className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">FAQ</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </SlideUp>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-xl overflow-hidden bg-ivory">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-cream/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-dark text-sm sm:text-base pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== LOCATION =====
export function Location() {
  const { location, business } = siteConfig;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <SlideUp className="text-center">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Lokasi</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Kunjungi Kami
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-6">
            {location.address}
            <br />
            {location.city}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-full font-medium transition-all hover:shadow-lg text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Buka di Google Maps
            </a>
            <WhatsAppButton
              phone={business.whatsapp}
              label="Tanya Lokasi"
              variant="secondary"
              className="text-sm sm:text-base"
            />
          </div>
        </SlideUp>
      </div>
    </section>
  );
}

// ===== CONTACT CTA =====
export function ContactCTA() {
  const { business } = siteConfig;

  return (
    <section id="kontak" className="py-16 sm:py-24 px-4 sm:px-6 bg-cream">
      <div className="max-w-3xl mx-auto text-center">
        <SlideUp>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mb-4">
            Siap untuk Memesan?
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Hubungi kami melalui WhatsApp untuk pemesanan, reservasi, atau pertanyaan lainnya.
          </p>
          <WhatsAppButton
            phone={business.whatsapp}
            label="Pesan Sekarang"
            variant="primary"
            className="text-base"
          />
        </SlideUp>
      </div>
    </section>
  );
}
