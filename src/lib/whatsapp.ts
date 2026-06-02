// WhatsApp phone number — no + or spaces
export const WHATSAPP_NUMBER = '2347031647276'
export const BUSINESS_NAME = 'VIJOSH TECH CONSULTS'

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function productOrderUrl(productName: string, price: number) {
  const msg = `Hi! I'd like to order the ${productName} (₦${price.toLocaleString()}). Could you help me with availability and delivery?`
  return buildWhatsAppUrl(msg)
}

export function serviceInquiryUrl(serviceName: string) {
  const msg = `Hi! I'm interested in your ${serviceName} service. Could you give me more details?`
  return buildWhatsAppUrl(msg)
}

export function generalInquiryUrl() {
  const msg = `Hi! I found your website and I'd like to get more information about your computers and services.`
  return buildWhatsAppUrl(msg)
}
