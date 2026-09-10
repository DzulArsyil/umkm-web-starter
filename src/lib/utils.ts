/**
 * Generate WhatsApp URL with pre-filled message
 */
export function getWhatsAppUrl(phone: string, message?: string): string {
  const defaultMsg = `Halo, saya ingin bertanya mengenai produk/layanan Anda.\n\nNama:\nKebutuhan:`;
  const msg = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${phone}?text=${msg}`;
}

/**
 * Format price to Indonesian Rupiah
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Generate contextual WhatsApp message for product
 */
export function getProductWhatsAppMessage(productName: string): string {
  return `Halo, saya ingin menanyakan ketersediaan ${productName}.\n\nMohon informasinya. Terima kasih.`;
}

/**
 * Generate contextual WhatsApp message for service
 */
export function getServiceWhatsAppMessage(serviceName: string): string {
  return `Halo, saya ingin bertanya tentang layanan ${serviceName}.\n\nMohon informasinya. Terima kasih.`;
}

/**
 * Check if image URL is valid (basic check)
 */
export function isValidImage(src?: string): boolean {
  if (!src) return false;
  return src.startsWith("http") || src.startsWith("/") || src.startsWith("data:");
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
