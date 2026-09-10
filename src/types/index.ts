// Business Types
export type BusinessCategory =
  | "restaurant"
  | "cafe"
  | "food"
  | "tailor"
  | "barbershop"
  | "beauty"
  | "rental"
  | "local-service"
  | "other";

export interface Business {
  name: string;
  tagline: string;
  description: string;
  category: BusinessCategory;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  province: string;
  mapsUrl: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  openingHours?: string;
}

export interface Hero {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  image: string;
  badge?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  image?: string;
  featured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  priceLabel?: string;
  category: string;
  image?: string;
  badge?: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  text: string;
  role?: string;
  avatar?: string;
  rating?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
}

export interface Location {
  address: string;
  city: string;
  mapsUrl: string;
  embedUrl?: string;
}

export interface SectionConfig {
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

export interface SiteConfig {
  business: Business;
  hero: Hero;
  location: Location;
  sections: SectionConfig;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}
