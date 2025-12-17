import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://example.com',
  server: { host: true },
  integrations: [react()],
  redirects: {
    '/outdoor-photography': '/photography/outdoor',
    '/musician-photography': '/photography/musician',
    '/music-photography': '/photography/musician',
    '/projects': '/work',
    '/video-projects': '/work',
  }
});
