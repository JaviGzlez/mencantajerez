// ─────────────────────────────────────────────────────────────
//  Datos del negocio. Todo lo que ponga TODO hay que rellenarlo
//  con la información real antes de publicar.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Mencanta Jerez',
  tagline: 'Vive la Zambomba Jerezana',
  description:
    'Comidas y cenas de Navidad con zambomba en Jerez de la Frontera. Menús para grupos y empresas, villancicos flamencos y ambiente alrededor de la candela.',

  // TODO: número real en formato internacional, sin espacios ni "+"
  whatsapp: '34600000000',
  whatsappDefaultMessage: 'Hola, me gustaría información sobre las comidas de Navidad con zambomba.',
  // TODO
  phone: '+34 600 000 000',
  email: 'info@zambombajerez.com', // TODO

  address: {
    street: 'Calle Ejemplo, 1', // TODO
    city: 'Jerez de la Frontera',
    region: 'Cádiz',
    postalCode: '11400', // TODO
    country: 'ES',
  },
  // TODO: pegar la URL "insertar mapa" de Google Maps
  mapEmbed:
    'https://www.google.com/maps?q=Jerez+de+la+Frontera&output=embed',
  mapLink: 'https://maps.google.com/?q=Jerez+de+la+Frontera', // TODO

  season: 'Del 20 de noviembre al 5 de enero', // TODO
  hours: [
    { days: 'Comidas', time: '13:30 – 18:00' }, // TODO
    { days: 'Cenas', time: '20:30 – 01:00' }, // TODO
  ],
  groups: 'Grupos de 10 a 150 personas', // TODO

  social: {
    instagram: 'https://instagram.com/', // TODO
    facebook: 'https://facebook.com/', // TODO
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
