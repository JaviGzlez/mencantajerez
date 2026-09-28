// ─────────────────────────────────────────────────────────────
//  Datos del negocio. Lo que pone TODO está pendiente de confirmar.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Mencanta Jerez',
  tagline: 'Vive la Zambomba Jerezana',
  description:
    'Zambombas en directo todos los días y menús de Navidad en pleno centro de Jerez, en la Plaza Silos. Entrada gratuita a las actuaciones. Reserva tu comida o cena.',

  // WhatsApp de reservas (formato internacional, sin "+" ni espacios)
  // TODO: confirmar cuál de los dos teléfonos tiene WhatsApp
  whatsapp: '34686963422',
  whatsappDefaultMessage: 'Hola, me gustaría información para reservar en Mencanta Jerez.',
  phones: ['686 963 422', '663 598 345'],
  email: '', // TODO: email de contacto, si lo hay

  address: {
    street: 'Plaza Silos, 7',
    city: 'Jerez de la Frontera',
    region: 'Cádiz',
    postalCode: '', // TODO
    country: 'ES',
  },
  mapEmbed: 'https://www.google.com/maps?q=Plaza+Silos+7,+Jerez+de+la+Frontera&output=embed',
  mapLink: 'https://maps.google.com/?q=Plaza+Silos+7,+Jerez+de+la+Frontera',

  band: 'Los Quintos Mare', // grupo que actúa todos los días
  season: 'Navidad 2026', // TODO: fechas exactas de apertura y cierre
  hours: [] as { days: string; time: string }[], // TODO: horarios
  drinkPromo: 'Primera copa anticipada a 6 € (marcas promocionales, no servidas en mesa)',

  sponsors: ['Brugal', 'Fuzetea', 'Croft Twist', 'La Rústika', 'Gaboral'],

  social: {
    instagram: 'https://www.instagram.com/mencanta_jerez_navidad/',
    facebook: 'https://www.facebook.com/mencantajerezz',
  },
};

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/menus', label: 'Menús' },
  { href: '/empresas-y-grupos', label: 'Empresas y grupos' },
  { href: '/la-zambomba', label: 'La zambomba' },
  { href: '/galeria', label: 'Galería' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
];

/** Enlace de WhatsApp con el mensaje ya escrito */
export function waLink(message: string = site.whatsappDefaultMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Enlace tel: a partir de "686 963 422" */
export const telLink = (p: string) => `tel:+34${p.replace(/\s/g, '')}`;
