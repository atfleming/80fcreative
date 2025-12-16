# 80F Creative — Astro Portfolio

Clean, simplified Astro portfolio for 80F Creative featuring Montserrat typography and white/navy corporate branding.

## Tech Stack

- **Astro** v4.16+ — Static site generator
- **TypeScript** — Type safety
- **Content Collections** — Structured case study content
- **CSS Variables** — Custom design tokens

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── content/
│   ├── case-studies/       # Markdown case studies
│   └── config.ts            # Collection schema
├── layouts/
│   └── BaseLayout.astro     # Site-wide layout
├── pages/
│   ├── index.astro          # Home
│   ├── about.astro          # About
│   ├── contact.astro        # Contact form
│   ├── services/
│   └── projects/            # Projects list + dynamic [slug]
└── styles/
    └── global.css           # Tokens + utilities
```

## Brand Tokens

- **Typography**: Montserrat (all weights)
- **Colors**: White (#FFFFFF), Navy (#0B2545)
- **Spacing**: Consistent rhythm via CSS variables
- **Shadows**: Subtle elevation (`var(--shadow)`)

## Deployment

Static output in `dist/` — deploy to Vercel, Netlify, Cloudflare Pages, or any static host.
