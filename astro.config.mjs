import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carlosrendon.co',
  trailingSlash: 'always',
  server: { port: 5173 },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    // redirectToDefaultLocale is off because Astro's generated root page waits two
    // seconds before it moves. src/pages/index.astro does it instantly instead.
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-AU', es: 'es-CO' } },
    }),
  ],
});
