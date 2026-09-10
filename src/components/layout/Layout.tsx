import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../../config/site";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { useScrollPosition } from "../../hooks";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 20;

  const navLinks = [
    { label: "Layanan", href: "#layanan" },
    { label: "Menu", href: "#produk" },
    { label: "Tentang", href: "#tentang" },
    { label: "Galeri", href: "#galeri" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-ivory/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navigasi utama"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-xl sm:text-2xl font-semibold text-charcoal hover:text-accent-dark transition-colors"
          >
            {siteConfig.business.name}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-charcoal transition-colors"
              >
                {link.label}
              </a>
            ))}
            <WhatsAppButton
              phone={siteConfig.business.whatsapp}
              label="Pesan"
              variant="primary"
              className="text-sm"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 border-t border-border"
            >
              <div className="flex flex-col gap-1 pt-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-muted hover:text-charcoal py-2.5 px-3 rounded-lg hover:bg-cream transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 px-3">
                  <WhatsAppButton
                    phone={siteConfig.business.whatsapp}
                    label="Pesan Sekarang"
                    variant="primary"
                    className="w-full text-sm"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export function Footer() {
  const { business } = siteConfig;

  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6 bg-dark text-white/70">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <a href="#" className="font-serif text-xl font-semibold text-white">
              {business.name}
            </a>
            <p className="text-sm mt-1">{business.tagline}</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#layanan" className="text-sm hover:text-white transition-colors">
              Layanan
            </a>
            <a href="#produk" className="text-sm hover:text-white transition-colors">
              Menu
            </a>
            <a href="#faq" className="text-sm hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>
        <div className="stitch-divider mt-6 mb-6 opacity-20"></div>
        <p className="text-xs text-center text-white/40">
          © {new Date().getFullYear()} {business.name}. Demo content — UMKM Web Starter.
        </p>
      </div>
    </footer>
  );
}
