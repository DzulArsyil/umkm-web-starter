import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  business: {
    name: "Kedai Senja",
    tagline: "Kopi, makanan, dan suasana hangat di setiap sudut.",
    description:
      "Kedai Senja adalah tempat nongkrong favorit di Karawang. Kami menyajikan kopi pilihan, makanan rumahan, dan suasana yang nyaman untuk bekerja, ngobrol, atau sekadar bersantai.",
    category: "cafe",
    phone: "6281234567890",
    whatsapp: "6281234567890",
    email: "halo@kedaissenja.example",
    address: "Jl. Raya Demo No. 123, Karawang",
    city: "Karawang",
    province: "Jawa Barat",
    mapsUrl: "https://maps.google.com/?q=Karawang",
    instagram: "https://instagram.com/kedaissenja",
    facebook: "https://facebook.com/kedaissenja",
    openingHours: "Senin - Minggu, 08.00 - 22.00",
  },
  hero: {
    eyebrow: "Kopi & Makanan",
    headline: "Ngopi Santai,\nMakan Enak.",
    description:
      "Nikmati kopi pilihan dan makanan rumahan di tempat yang nyaman. Cocok untuk kerja, ngobrol, atau me-time.",
    primaryCta: {
      label: "Pesan Sekarang",
      href: "#produk",
    },
    secondaryCta: {
      label: "Lihat Menu",
      href: "#layanan",
    },
    image: "https://image.qwenlm.ai/generated-images/ea05145a-c839-4e67-a2ac-e9dc754be426/_result.png",
    badge: "Buka Setiap Hari",
  },
  location: {
    address: "Jl. Raya Demo No. 123, Karawang",
    city: "Karawang, Jawa Barat",
    mapsUrl: "https://maps.google.com/?q=Karawang",
  },
  sections: {
    hero: true,
    highlights: true,
    services: true,
    products: true,
    about: true,
    features: true,
    gallery: true,
    testimonials: true,
    faq: true,
    location: true,
    contact: true,
  },
  seo: {
    title: "Kedai Senja — Kopi & Makanan Rumahan di Karawang",
    description:
      "Kedai Senja menyajikan kopi pilihan dan makanan rumahan di Karawang. Tempat nyaman untuk ngopi, kerja, dan ngobrol. Buka setiap hari.",
    keywords: [
      "kedai kopi karawang",
      "kafe karawang",
      "tempat ngopi karawang",
      "makanan enak karawang",
      "kedai senja",
    ],
  },
};
