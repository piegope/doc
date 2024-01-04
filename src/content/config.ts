import {z, defineCollection } from "astro:content";

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    isHome: z.boolean().optional(),
    title: z.string().optional(),
    description: z.string().optional()
  })
});

export const collections = {
  docs: docsCollection
}