import { defineCollection, z } from "astro:content";

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    client: z.string(),
    abstract: z.string(),
    skills: z.array(z.string()),
    github: z.string().optional(),
    image: z.string(),
    url: z.string(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { works };
