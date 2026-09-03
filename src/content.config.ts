import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const workCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: ({ image }) => z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    sortOrder: z.number(),
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

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/pages" }),
  schema: ({image}) => z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    title: z.string(),
    intro: z.string(),
    updated: z.string(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = {
  work: workCollection,
  pages: pagesCollection,
};
