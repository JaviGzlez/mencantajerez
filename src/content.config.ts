import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada menú es un archivo .md en src/content/menus
const menus = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/menus' }),
  schema: z.object({
    name: z.string(),
    price: z.number(), // € por persona, IVA incluido
    order: z.number().default(0), // orden en la página
    featured: z.boolean().default(false), // aparece destacado
    tag: z.string().optional(), // ej. "El más pedido"
    summary: z.string(),
    minGuests: z.number().optional(),
    service: z.enum(['comida', 'cena', 'comida y cena']).default('comida y cena'),
    courses: z.array(
      z.object({
        title: z.string(), // "Entrantes para compartir"
        items: z.array(z.string()),
      }),
    ),
    drinks: z.string().optional(),
    includes: z.array(z.string()).default([]),
    image: z.string().optional(), // ruta en /public, ej. /img/menus/tradicion.jpg
    active: z.boolean().default(true),
  }),
});

// Cada artículo es un archivo .md en src/content/blog
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // meta description, 140–160 caracteres
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.string().default('Zambombas'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { menus, blog };
