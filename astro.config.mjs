// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: cambiar por el dominio definitivo antes de publicar
export default defineConfig({
  site: 'https://www.mencantajerez.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
