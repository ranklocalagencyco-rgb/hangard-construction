import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    pubDate: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    readTime: z.string(),
    author: z.string().default("Hangard Construction"),
    /** filename within src/assets/projects/ */
    heroImage: z.string(),
    heroImageAlt: z.string(),
    featured: z.boolean().default(false),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog };
