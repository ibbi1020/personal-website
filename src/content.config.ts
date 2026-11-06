import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const works = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/works" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string().optional(),
      year: z.string(),
      services: z.array(z.string()),
      credits: z.string().optional(),
      summary: z.string(),
      order: z.number(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      span: z.number().optional(),
      link: z.string().url().optional(),
      linkLabel: z.string().optional(),
      cover: image().optional(),
      video: z
        .string()
        .regex(/^(\/|https?:\/\/).+\.(mp4|webm)$/i, "Use an MP4 or WebM path")
        .optional(),
    }),
});

export const collections = { works };
