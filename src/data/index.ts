import type { Service, Product, Testimonial, FAQ, GalleryImage } from "../types";

// ===== SERVICES =====
export const services: Service[] = [
  {
    title: "Dine In",
    description: "Nikmati makanan dan kopi di tempat yang nyaman dengan suasana hangat.",
    icon: "🍽️",
    featured: true,
  },
  {
    title: "Take Away",
    description: "Pesanan bisa dibawa pulang. Cepat, rapi, dan tetap hangat.",
    icon: "🥡",
  },
  {
    title: "Catering",
    description: "Layanan catering untuk acara kantor, keluarga, atau gathering.",
    icon: "📦",
  },
  {
    title: "Reservasi",
    description: "Pesan tempat untuk acara spesial, meeting, atau nongkrong bareng.",
    icon: "📅",
  },
];

// ===== PRODUCTS =====
export const products: Product[] = [
  {
    id: "kopi-senja",
    name: "Kopi Senja",
    description: "Signature blend dengan notes cokelat dan caramel.",
    price: 25000,
    category: "Kopi",
    badge: "Best Seller",
    featured: true,
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "Single origin, bold dan rich.",
    price: 18000,
    category: "Kopi",
  },
  {
    id: "latte",
    name: "Caffe Latte",
    description: "Espresso dengan susu segar dan foam lembut.",
    price: 28000,
    category: "Kopi",
  },
  {
    id: "nasi-goreng",
    name: "Nasi Goreng Senja",
    description: "Nasi goreng spesial dengan telur dan ayam.",
    price: 30000,
    category: "Makanan",
    badge: "Favorit",
    featured: true,
  },
  {
    id: "mie-ayam",
    name: "Mie Ayam Jamur",
    description: "Mie ayam dengan topping jamur dan pangsit.",
    price: 25000,
    category: "Makanan",
  },
  {
    id: "roti-bakar",
    name: "Roti Bakar Cokelat",
    description: "Roti bakar dengan selai cokelat homemade.",
    price: 20000,
    category: "Snack",
  },
  {
    id: "teh-tarik",
    name: "Teh Tarik",
    description: "Teh tarik creamy dengan gula aren.",
    price: 18000,
    category: "Minuman",
  },
  {
    id: "jus-alpukat",
    name: "Jus Alpukat",
    description: "Jus alpukat segar dengan susu dan madu.",
    price: 22000,
    category: "Minuman",
  },
];

export const productCategories = ["Semua", "Kopi", "Makanan", "Minuman", "Snack"];

// ===== TESTIMONIALS =====
export const testimonials: Testimonial[] = [
  {
    name: "Rina S.",
    text: "Tempatnya nyaman banget buat kerja. Kopinya enak, WiFi kencang, dan pelayanannya ramah.",
    role: "Freelancer",
    rating: 5,
  },
  {
    name: "Budi P.",
    text: "Nasi gorengnya juara! Sudah jadi langganan setiap weekend sama keluarga.",
    role: "Pelanggan Tetap",
    rating: 5,
  },
  {
    name: "Dian M.",
    text: "Suasananya homey, cocok buat ngobrol santai. Harga juga bersahabat.",
    role: "Mahasiswa",
    rating: 4,
  },
];

// ===== FAQ =====
export const faqs: FAQ[] = [
  {
    question: "Apakah harus reservasi dulu?",
    answer:
      "Untuk dine in biasa tidak perlu reservasi. Tapi kalau untuk acara atau rombongan besar, silakan hubungi kami dulu ya.",
  },
  {
    question: "Apakah bisa pesan antar?",
    answer:
      "Saat ini kami melayani take away. Untuk pesan antar, silakan hubungi via WhatsApp untuk ketersediaan.",
  },
  {
    question: "Apakah ada WiFi?",
    answer: "Tentu ada! WiFi gratis untuk semua pengunjung. Cocok buat kerja atau belajar.",
  },
  {
    question: "Jam bukanya sampai kapan?",
    answer: "Kami buka setiap hari dari jam 08.00 sampai 22.00.",
  },
  {
    question: "Apakah bisa untuk acara?",
    answer:
      "Bisa! Kami menyediakan layanan catering dan reservasi tempat. Hubungi kami untuk detail dan harga.",
  },
];

// ===== GALLERY =====
export const galleryImages: GalleryImage[] = [
  {
    src: "https://image.qwenlm.ai/generated-images/ea05145a-c839-4e67-a2ac-e9dc754be426/_result.png",
    alt: "Suasana interior Kedai Senja",
    label: "Interior",
  },
  {
    src: "https://image.qwenlm.ai/generated-images/a5e7d532-ca6f-4e97-8ea6-503652e53eed/_result.png",
    alt: "Hidangan khas Kedai Senja",
    label: "Menu",
  },
  {
    src: "https://image.qwenlm.ai/generated-images/644af013-a9ff-44a8-b14c-5760875eb3eb/_result.png",
    alt: "Area kerja yang nyaman",
    label: "Work Space",
  },
  {
    src: "https://image.qwenlm.ai/generated-images/d5d4dcdd-8968-4455-ac5a-fdea39d77688/_result.png",
    alt: "Detail hidangan",
    label: "Detail",
  },
  {
    src: "https://image.qwenlm.ai/generated-images/3ed6806b-fed4-41ff-accd-3334f22663a8/_result.png",
    alt: "Bahan pilihan berkualitas",
    label: "Bahan",
  },
  {
    src: "https://image.qwenlm.ai/generated-images/fc9619a4-82e0-49c8-8649-961013b93bd9/_result.png",
    alt: "Suasana sore hari",
    label: "Sore Hari",
  },
];

// ===== HIGHLIGHTS =====
export const highlights = [
  { icon: "☕", label: "Kopi Pilihan" },
  { icon: "🍳", label: "Masakan Rumahan" },
  { icon: "📶", label: "WiFi Gratis" },
  { icon: "🕐", label: "Buka Tiap Hari" },
];

// ===== FEATURES =====
export const features = [
  {
    icon: "🌿",
    title: "Bahan Segar",
    description: "Kami menggunakan bahan-bahan segar yang dipilih setiap hari.",
  },
  {
    icon: "👨‍🍳",
    title: "Dimasak dengan Hati",
    description: "Setiap hidangan dimasak dengan penuh perhatian dan cinta.",
  },
  {
    icon: "💰",
    title: "Harga Bersahabat",
    description: "Kualitas terbaik dengan harga yang ramah di kantong.",
  },
  {
    icon: "🏡",
    title: "Suasana Nyaman",
    description: "Tempat yang homey untuk bekerja, ngobrol, atau bersantai.",
  },
];
