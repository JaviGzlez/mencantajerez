// Fotos reales de Mencanta Jerez (public/img/fotos). Cada una tiene .jpg, .webp y -1200.webp.
// Para añadir una: copia los 3 archivos y añade una línea aquí. "wide" = ocupa doble ancho en la galería.
const F = (n: string) => `/img/fotos/${n}.jpg`;

export const fotos = {
  selfie: { src: F('01-selfie-zambomba'), alt: 'Amigas haciéndose un selfie en la zambomba de Mencanta Jerez' },
  amigasBodega: { src: F('02-amigas-bodega'), alt: 'Tres amigas con una copa de vino en el patio de bodega' },
  grupoPatio: { src: F('03-grupo-patio'), alt: 'Grupo grande celebrando la Navidad en el patio de Mencanta Jerez' },
  amigasFiesta: { src: F('04-amigas-fiesta'), alt: 'Grupo de amigas bailando y brindando en la zambomba' },
  escenario: { src: F('05-ambiente-escenario'), alt: 'Ambiente lleno frente al escenario con zambomba en directo' },
  grupoCandela: { src: F('06-grupo-candela'), alt: 'Grupo de compañeros posando delante de la pantalla con la candela' },
  cantaora: { src: F('07-cantaora'), alt: 'Cantaora de Los Quintos Mare actuando en directo' },
  baile: { src: F('08-baile'), alt: 'Invitada bailando y sonriendo durante la fiesta' },
  amigosCopas: { src: F('09-amigos-copas'), alt: 'Amigos brindando con sus copas en Mencanta Jerez' },
  amigosColumna: { src: F('10-amigos-columna'), alt: 'Grupo de amigos junto a las columnas de piedra del local' },
  cantaorPalmas: { src: F('11-cantaor-palmas'), alt: 'Cantaor tocando palmas durante los villancicos' },
  bailePatio: { src: F('12-baile-patio'), alt: 'Baile flamenco en el patio mientras el público toca palmas' },
  cantaores: { src: F('13-cantaores'), alt: 'Dos cantaores interpretando villancicos en el escenario' },
};

// Orden de la galería
export const galeria = [
  { ...fotos.bailePatio, wide: true },
  fotos.cantaora,
  fotos.selfie,
  fotos.amigasFiesta,
  { ...fotos.escenario, wide: true },
  { ...fotos.cantaores, wide: true },
  fotos.grupoCandela,
  fotos.amigasBodega,
  { ...fotos.grupoPatio, wide: true },
  fotos.cantaorPalmas,
  fotos.baile,
  fotos.amigosCopas,
  { ...fotos.amigosColumna, wide: true },
];
