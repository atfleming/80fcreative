import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  server: { host: true },
  redirects: {
    '/outdoor-photography': '/photography/outdoor',
    '/musician-photography': '/photography/musician',
    '/music-photography': '/photography/musician',
    '/projects': '/work',
    '/video-projects': '/work',
  }
});
