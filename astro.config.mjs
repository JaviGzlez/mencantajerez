// @ts-check
import { defineConfig } from 'astro/config';

// Dominio principal. zambombajerez.com y zambombajerez.es redirigen aquí desde Vercel.
// El sitemap se genera en src/pages/sitemap.xml.ts
export default defineConfig({
  site: 'https://www.zambombajerez.com',
  trailingSlash: 'ignore',
});
