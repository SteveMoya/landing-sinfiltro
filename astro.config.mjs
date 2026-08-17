// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Sitio 100 % estático (SSG): Cloudflare Pages sirve `dist/` directamente.
export default defineConfig({
  site: 'https://sinfiltro.stevemoya.me',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // scripts pequeños (<4KB) se inlinean por defecto y la CSP 'self' los
      // bloquea → contenido invisible. Forzamos scripts externos siempre.
      assetsInlineLimit: 0,
    },
  },
  security: {
    checkOrigin: true,
  },
});