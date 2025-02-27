import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const workCollection = defineCollection({
  // loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: ({ image }) => z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    title: z.string(),
    cover: image(),
    coverAlt: z.string(),
    intro: z.string(),
    introPreheading: z.string(),
    skills: z.array(z.string()),
    takeawaysPreheading: z.string(),
    takeaways: z.array(
      z.object({
        title: z.string(),
        number: z.number(),
        moreLink: z.string(),
      })
    ),
  }),
});

export const collections = {
  work: workCollection,
};
