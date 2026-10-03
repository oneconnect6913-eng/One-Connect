/**
 * Central Configuration for ONE CONNECT
 * All primary brand, contact, and regional configurations are managed here.
 */

export const COMPANY_NAME = "ONE CONNECT";

export const BRAND_TAGLINE = "One Call. Every Work. One Complete Solution.";

export const POSITIONING = "Your Complete Project Partner.";

// Contact Details (configured for active communication; editable anytime)
export const PHONE_NUMBER = "+91 88798 70685";
export const PHONE_NUMBER_RAW = "+918879870685";

export const WHATSAPP_NUMBER = "918879870685";

export const EMAIL = "oneconnect6913@gmail.com";

export const ADDRESS = "Sakivihar Road, Andheri East, Mumbai, Maharashtra 400072";

export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Sakivihar+Road,+Andheri+East,+Mumbai,+Maharashtra";

export const WORKING_HOURS = "Monday – Saturday: 9:00 AM – 7:30 PM";

export const INSTAGRAM_URL = "https://instagram.com/oneconnect.projects";

export const FACEBOOK_URL = "https://facebook.com/oneconnect.projects";

export const SERVICE_AREAS = [
  "Mumbai",
  "Andheri",
  "Sakinaka",
  "Kurla",
  "Powai",
  "Ghatkopar",
  "Vikhroli",
  "Bhandup",
  "Mulund",
  "Bandra",
  "Thane",
  "Navi Mumbai",
  "Other Nearby Areas",
] as const;

/**
 * Builds a direct WhatsApp chat link with an appropriately formatted pre-filled message
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultMsg =
    "Hello ONE CONNECT, I have a project requirement and would like to discuss the work and get a quotation.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/**
 * Builds a click-to-call tel: link
 */
export function getPhoneLink(): string {
  return `tel:${PHONE_NUMBER_RAW}`;
}
