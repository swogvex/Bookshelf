import { defineCollection, z } from "astro:content";

const books = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),

    cover: z.string(),

    year: z.number(),

    rating: z.number(),

    genres: z.array(z.string()),

    finishedAt: z.string(),

    featured: z.boolean().optional(),
  }),
});

export const collections = {
  books,
};