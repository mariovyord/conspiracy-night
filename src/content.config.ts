import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const topics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/topics' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum([
      'urban-planning',
      'health',
      'money',
      'culture',
      'media',
      'surveillance',
      'paranoia',
    ]),
    summary: z.string(),
    dangerLevel: z.number().min(1).max(5),
    absurdityMeter: z.number().min(1).max(5),
    rabbitHoleScore: z.number().min(1).max(5),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  topics,
};
