import { z, defineCollection } from "astro:content";

const comicCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    author: z.string().default("Alex Wilkins"),
    publishDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  comics: comicCollection,
};
