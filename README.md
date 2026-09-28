# Mencanta Jerez

Web de comidas y cenas de Navidad con zambomba en Jerez. Hecha con [Astro](https://astro.build): estática, rápida y preparada para SEO.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

## Qué hay que rellenar antes de publicar

1. **`src/data/site.ts`**: número de WhatsApp, teléfono, email, dirección, mapa, horarios, temporada, redes. Todo lo que pone `TODO`.
2. **`astro.config.mjs`** y **`public/robots.txt`**: el dominio definitivo.
3. **Menús** en `src/content/menus/`. Los tres actuales son **de ejemplo**.
4. **Fotos** en `public/img/` (ver lista abajo).
5. **Textos legales** en `src/pages/aviso-legal.astro`, `privacidad.astro` y `cookies.astro`.
6. **FAQ** en `src/data/faqs.ts`: revisar con el cliente.
7. Logo real en `src/components/Logo.astro` (ahora es un logo en texto).

## Fotos

Mientras una foto no existe, la web muestra un hueco con su ruta. Basta con copiar la foto con ese nombre y se muestra sola.
Formato recomendado: JPG o WebP de unos 1600–2000 px de ancho y menos de 300 KB.

| Archivo | Dónde sale |
|---|---|
| `hero.jpg` | Portada, imagen principal (la más importante) |
| `intro.jpg` | Portada, "Una tradición que se siente" |
| `pilar-zambomba.jpg`, `pilar-cocina.jpg`, `pilar-patio.jpg` | Portada, las 3 tarjetas |
| `empresas.jpg` | Portada, bloque de empresas |
| `cta-bodega.jpg` | Banda final "Vive la zambomba" (todas las páginas) |
| `galeria/01.jpg` … `galeria/09.jpg` | Galería (las 5 primeras también en portada) |
| `menus-hero.jpg` | Cabecera de Menús |
| `empresas-hero.jpg`, `empresas-mesa.jpg` | Página de Empresas |
| `zambomba-hero.jpg`, `zambomba-1/2/3.jpg` | Página La zambomba |
| `galeria-hero.jpg`, `contacto-hero.jpg` | Cabeceras de Galería y Contacto |
| `og.jpg` | Imagen al compartir en WhatsApp/redes (1200×630) |
| `blog/<slug>.jpg` | Portada de cada artículo (mismo nombre que el `.md`) |

## Añadir un menú

Crear `src/content/menus/nombre.md` copiando uno existente. Campos:
`name`, `price`, `order` (orden), `featured` (destacado), `tag` (etiqueta tipo "El más pedido"),
`summary`, `minGuests`, `courses` (bloques con platos), `drinks`, `includes`, `active` (false = oculto).

El botón "Reservar este menú" abre WhatsApp con el nombre y el precio del menú ya escritos.

## Escribir un artículo del blog

Crear `src/content/blog/url-del-articulo.md`:

```md
---
title: 'Título con la palabra clave'
description: 'Meta description de 140–160 caracteres.'
pubDate: 2026-10-15
category: Zambombas
draft: false
---

Texto en Markdown...
```

- `draft: true` = no se publica.
- La foto de portada va en `public/img/blog/url-del-articulo.jpg`.
- Hay 3 borradores listos para escribir: calendario de zambombas 2026, villancicos y gastronomía.

## SEO incluido

- Title, description, canonical y Open Graph en todas las páginas.
- Datos estructurados: `Restaurant`, `Menu` con precios, `FAQPage` y `BlogPosting`.
- `sitemap-index.xml`, `robots.txt` y `rss.xml` automáticos.
- HTML estático, sin frameworks en el cliente.

## Publicar

Conectar el repositorio de GitHub a Netlify, Vercel o Cloudflare Pages:
- Comando de build: `npm run build`
- Carpeta de salida: `dist`

Cada `git push` republica la web automáticamente.

## Novedades

- **Logo oficial** en `public/img/logo-blanco.webp` / `.png` (versión blanca para fondos oscuros). Favicon e imagen para compartir (`og.jpg`) generados a partir del logo.
- **Carteles de los menús** en `public/img/menus/`. Cada menú los enlaza con el campo `poster:`.
- **Formulario de reserva** (`src/components/ReservaForm.astro`), en Menús y Contacto. Genera un mensaje de WhatsApp con plantilla fija: nombre, teléfono, fecha, turno, personas, menús con cantidades y total estimado.
- **Aviso de cookies** (`src/components/CookieBanner.astro`). La web no usa analítica; el mapa de Google solo se carga si el usuario acepta. Tipografías alojadas en la propia web (sin Google Fonts).
- Redes sociales en `src/data/site.ts`.
