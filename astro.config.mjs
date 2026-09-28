// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio principal. zambombajerez.com y zambombajerez.es redirigen aquí desde Vercel
export default defineConfig({
  site: 'https://www.zambombajerez.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
