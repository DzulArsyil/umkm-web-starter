import { useState, useEffect, useRef } from 'react';

// Business Configuration
const BUSINESS = {
  name: 'Mba Jahit',
  tagline: 'Jasa menjahit yang datang ke rumah',
  phone: '6281234567890',
  serviceArea: 'Area sekitar dan sekitarnya',
  hours: 'Senin - Sabtu, 08.00 - 17.00',
};

// WhatsApp helper
function getWhatsAppLink(message?: string) {
  const defaultMsg = `Halo Mba, saya ingin bertanya tentang jasa jahit.\n\nKebutuhan saya:\n[Nama layanan / jenis pakaian]\n\nLokasi saya:\n[Lokasi pelanggan]\n\nMohon informasinya. Terima kasih.`;
  const msg = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${BUSINESS.phone}?text=${msg}`;
}

// Intersection Observer hook for animations
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// ===== NAVBAR =====
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ivory/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navigasi utama"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="#" className="font-serif text-xl sm:text-2xl font-semibold text-charcoal hover:text-accent-dark transition-colors">
            Mba Jahit
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
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-md"
            >
              Hubungi
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
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
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
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
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-full text-sm font-medium text-center transition-all"
              >
                Hubungi Mba Jahit
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ===== HERO =====
function Hero() {
  return (
    <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-cream px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-xs font-medium text-brown">Jasa Jahit Panggilan</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark leading-tight mb-5">
              Jahitan Rapi,<br />
              <span className="text-accent-dark">Langsung di Rumah.</span>
            </h1>
            
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Punya baju yang perlu diperbaiki, dikecilkan, atau dijahit baru? 
              Tidak perlu repot datang ke tempat jahit. Hubungi Mba Jahit, 
              nanti kami atur kunjungan ke rumah Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-full font-medium transition-all hover:shadow-lg text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hubungi Mba Jahit
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-tan text-charcoal px-7 py-3.5 rounded-full font-medium transition-all text-sm sm:text-base"
              >
                Lihat Layanan
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://image.qwenlm.ai/generated-images/644af013-a9ff-44a8-b14c-5760875eb3eb/_result.png"
                  alt="Ruang kerja menjahit Mba Jahit dengan mesin jahit, kain, dan alat jahit"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Decorative stitch element */}
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-2 border-dashed border-tan rounded-xl opacity-40"></div>
              <div className="absolute -top-3 -right-3 w-12 h-12 border-2 border-dashed border-accent rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== SERVICES =====
function Services() {
  const { ref, isInView } = useInView();

  const services = [
    {
      icon: '✂️',
      title: 'Permak Pakaian',
      description: 'Penyesuaian ukuran pakaian agar lebih nyaman digunakan. Kebesaran? Kekecilan? Bisa diatur.',
    },
    {
      icon: '🪡',
      title: 'Perbaikan Jahitan',
      description: 'Memperbaiki bagian pakaian yang rusak, lepas, atau perlu dijahit ulang.',
    },
    {
      icon: '🔗',
      title: 'Ganti Resleting',
      description: 'Penggantian resleting pada pakaian, tas, atau barang lainnya sesuai kebutuhan.',
    },
    {
      icon: '📐',
      title: 'Jahit Sesuai Kebutuhan',
      description: 'Diskusikan kebutuhan jahitan langsung dengan Mba Jahit. Konsultasi dulu, baru dikerjakan.',
    },
  ];

  return (
    <section id="layanan" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Layanan</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Apa yang Bisa Mba Jahit Bantu?
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Beberapa layanan yang tersedia. Jika kebutuhan Anda tidak ada di sini, tetap bisa ditanyakan lewat WhatsApp.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-ivory border border-border rounded-2xl p-6 hover:shadow-md hover:border-tan transition-all duration-300 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-serif text-lg font-semibold text-dark mb-2">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{service.description}</p>
              <a
                href={getWhatsAppLink(`Halo Mba, saya ingin bertanya tentang layanan ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent-dark hover:text-accent transition-colors"
              >
                Tanyakan Layanan
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Price Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted">
            Harga menyesuaikan jenis jahitan.{' '}
            <a
              href={getWhatsAppLink('Halo Mba, saya ingin bertanya tentang harga jasa jahit.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-dark font-medium hover:underline"
            >
              Tanya harga via WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ===== HOW IT WORKS =====
function HowItWorks() {
  const { ref, isInView } = useInView();

  const steps = [
    {
      number: '01',
      title: 'Hubungi',
      description: 'Ceritakan pakaian atau kebutuhan jahitanmu melalui WhatsApp.',
    },
    {
      number: '02',
      title: 'Kirim Lokasi',
      description: 'Kirim lokasi rumahmu agar bisa dipastikan area layanan.',
    },
    {
      number: '03',
      title: 'Mba Jahit Datang',
      description: 'Atur waktu kunjungan. Mba Jahit datang ke rumah Anda.',
    },
    {
      number: '04',
      title: 'Konsultasi & Jahit',
      description: 'Bahas kebutuhan, ukuran, dan pengerjaan langsung di tempat.',
    },
  ];

  return (
    <section id="cara-kerja" className="py-16 sm:py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Cara Kerja</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Bagaimana Prosesnya?
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Simple saja. Tidak perlu datang ke toko — Mba Jahit yang datang ke rumah.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative text-center ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] stitch-divider"></div>
              )}
              
              <div className="relative inline-flex items-center justify-center w-16 h-16 bg-cream border-2 border-border rounded-full mb-4">
                <span className="font-serif text-xl font-bold text-accent-dark">{step.number}</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-dark mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-full font-medium transition-all hover:shadow-lg text-sm sm:text-base"
          >
            Mulai Sekarang — Hubungi Mba Jahit
          </a>
        </div>
      </div>
    </section>
  );
}

// ===== WHY MBA JAHIT =====
function WhyMbaJahit() {
  const { ref, isInView } = useInView();

  const reasons = [
    {
      icon: '🏠',
      title: 'Datang ke Rumah',
      description: 'Tidak perlu repot mencari toko jahit atau antre. Mba Jahit yang datang ke tempat Anda.',
    },
    {
      icon: '💬',
      title: 'Lebih Personal',
      description: 'Kebutuhan jahitan bisa dibicarakan langsung. Tidak lewat perantara.',
    },
    {
      icon: '📱',
      title: 'Praktis',
      description: 'Cukup hubungi lewat WhatsApp. Atur waktu, kirim lokasi, selesai.',
    },
    {
      icon: '🧵',
      title: 'Fokus pada Kerapian',
      description: 'Setiap kebutuhan dibicarakan dulu sebelum pengerjaan agar hasilnya sesuai.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Keunggulan</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Kenapa Pilih Mba Jahit?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`flex gap-4 bg-ivory rounded-2xl p-6 border border-border ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl flex-shrink-0">{reason.icon}</div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-dark mb-1">{reason.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== GALLERY =====
function Gallery() {
  const { ref, isInView } = useInView();

  const images = [
    {
      src: 'https://image.qwenlm.ai/generated-images/d5d4dcdd-8968-4455-ac5a-fdea39d77688/_result.png',
      alt: 'Proses menjahit detail pada kain',
      label: 'Detail jahitan',
    },
    {
      src: 'https://image.qwenlm.ai/generated-images/3ed6806b-fed4-41ff-accd-3334f22663a8/_result.png',
      alt: 'Kain-kain yang siap dijahit',
      label: 'Kain pilihan',
    },
    {
      src: 'https://image.qwenlm.ai/generated-images/fc9619a4-82e0-49c8-8649-961013b93bd9/_result.png',
      alt: 'Alat ukur dan perlengkapan menjahit',
      label: 'Alat menjahit',
    },
    {
      src: 'https://image.qwenlm.ai/generated-images/644af013-a9ff-44a8-b14c-5760875eb3eb/_result.png',
      alt: 'Ruang kerja menjahit',
      label: 'Ruang kerja',
    },
  ];

  return (
    <section id="galeri" className="py-16 sm:py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Galeri</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Sekilas Pekerjaan
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Beberapa foto suasana kerja dan hasil jahitan.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-square rounded-xl overflow-hidden ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <span className="text-white text-xs sm:text-sm font-medium">{image.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== SERVICE AREA =====
function ServiceArea() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Area Layanan</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Mba Jahit Datang ke Rumah
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-6">
            Melayani area <strong className="text-charcoal">{BUSINESS.serviceArea}</strong> dan sekitarnya. 
            Kirim lokasi rumahmu melalui WhatsApp untuk memastikan apakah termasuk area layanan.
          </p>

          <div className="inline-flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppLink('Halo Mba, saya ingin mengecek apakah lokasi saya termasuk area layanan.\n\nLokasi saya:\n[Alamat lengkap]')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-full font-medium transition-all hover:shadow-lg text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Cek Area Layanan
            </a>
            <a
              href={getWhatsAppLink('Halo Mba, saya ingin mengirim lokasi rumah saya.\n\nLokasi:\n[Alamat lengkap / share location]')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border hover:border-tan text-charcoal px-7 py-3.5 rounded-full font-medium transition-all text-sm sm:text-base"
            >
              Kirim Lokasi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FAQ =====
function FAQ() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Apakah Mba Jahit bisa datang ke rumah?',
      answer: 'Ya, betul. Layanan Mba Jahit adalah jasa menjahit yang datang ke rumah pelanggan. Tidak perlu datang ke tempat kami.',
    },
    {
      question: 'Bagaimana cara memesan jasa jahit?',
      answer: 'Cukup hubungi Mba Jahit melalui WhatsApp. Ceritakan kebutuhan jahitan Anda, kirim lokasi, lalu atur waktu kunjungan.',
    },
    {
      question: 'Apakah harus mengirim lokasi?',
      answer: 'Ya, kirim lokasi rumah agar bisa dipastikan apakah termasuk area layanan. Bisa menggunakan fitur share location di WhatsApp.',
    },
    {
      question: 'Apakah bisa konsultasi terlebih dahulu?',
      answer: 'Tentu bisa, malah disarankan. Diskusikan dulu kebutuhan jahitan sebelum mengatur jadwal kunjungan agar semuanya jelas.',
    },
    {
      question: 'Berapa harga jasa jahit?',
      answer: 'Harga menyesuaikan jenis jahitan, tingkat kesulitan, dan bahan. Silakan hubungi Mba Jahit melalui WhatsApp untuk estimasi harga.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">FAQ</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-border rounded-xl overflow-hidden bg-ivory ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-cream/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-dark text-sm sm:text-base pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
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

// ===== FINAL CTA =====
function FinalCTA() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-cream" ref={ref}>
      <div className={`max-w-3xl mx-auto text-center ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mb-4">
          Punya Pakaian yang Perlu Diperbaiki?
        </h2>
        <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Tidak perlu repot datang ke tempat jahit. Hubungi Mba Jahit dan atur kunjungan ke rumahmu.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hubungi Mba Jahit
          </a>
          <a
            href={getWhatsAppLink('Halo Mba, saya ingin mengirim lokasi rumah saya.\n\nLokasi:\n[Alamat lengkap / share location]')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border hover:border-tan text-charcoal px-8 py-4 rounded-full font-medium transition-all text-base"
          >
            Kirim Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}

// ===== CONTACT =====
function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="kontak" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Kontak</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mt-2 mb-8">
            Hubungi Mba Jahit
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-sm text-muted mb-1">WhatsApp</p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-charcoal hover:text-accent-dark transition-colors"
              >
                {BUSINESS.phone.replace(/(\d{2})(\d{4})(\d{4})(\d{4})/, '+$1 $2-$3-$4')}
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-sm text-muted mb-1">Area Layanan</p>
              <p className="text-sm font-medium text-charcoal">{BUSINESS.serviceArea}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-muted mb-1">Jam Operasional</p>
              <p className="text-sm font-medium text-charcoal">{BUSINESS.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FOOTER =====
function Footer() {
  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6 bg-dark text-white/70">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <a href="#" className="font-serif text-xl font-semibold text-white">
              Mba Jahit
            </a>
            <p className="text-sm mt-1">Jasa menjahit yang datang ke rumah.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#layanan" className="text-sm hover:text-white transition-colors">Layanan</a>
            <a href="#cara-kerja" className="text-sm hover:text-white transition-colors">Cara Kerja</a>
            <a href="#faq" className="text-sm hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
        <div className="stitch-divider mt-6 mb-6 opacity-20"></div>
        <p className="text-xs text-center text-white/40">
          © {new Date().getFullYear()} Mba Jahit. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}

// ===== MOBILE STICKY CTA =====
function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-ivory/95 backdrop-blur-sm border-t border-border p-3 safe-area-bottom">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 rounded-full font-medium transition-all text-sm"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        💬 Hubungi Mba Jahit
      </a>
    </div>
  );
}

// ===== MAIN APP =====
export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyMbaJahit />
        <Gallery />
        <ServiceArea />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
      {/* Spacer for mobile CTA */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
}
