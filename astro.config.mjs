import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nobeparcmiami.com',
  compressHTML: true,
  integrations: [sitemap()],
});
