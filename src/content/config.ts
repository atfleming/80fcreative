import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    excerpt: z.string().optional(),
    heroImage: z.string().optional(),
    client: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = { 'case-studies': caseStudies };
