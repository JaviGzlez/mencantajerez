// Sitemap único en /sitemap.xml con todas las páginas públicas y los artículos del blog.
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

const staticPages = ['/', '/menus/', '/empresas-y-grupos/', '/la-zambomba/', '/galeria/', '/blog/', '/contacto/'];

export async function GET({ site }: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const urls = [
    ...staticPages.map((p) => ({ loc: new URL(p, site).href })),
    ...posts.map((p) => ({
      loc: new URL(`/blog/${p.id}/`, site).href,
      lastmod: (p.data.updatedDate ?? p.data.pubDate).toISOString().slice(0, 10),
    })),
  ];
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${u.loc}</loc>${'lastmod' in u ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
