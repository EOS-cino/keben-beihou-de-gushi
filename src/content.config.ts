import { defineCollection, z } from "astro:content";

const lessons = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    grade: z.string(),
    volume: z.string(),
    author: z.string(),
    theme: z.string(),
    era: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    chainImage: z.string(),
    chainImageAlt: z.string(),
    chainCaption: z.string(),
    summary: z.string(),
    funFact: z.string(),
    questions: z.array(z.string()),
    takeaways: z.array(z.string()),
    glossary: z.array(
      z.object({
        term: z.string(),
        pinyin: z.string(),
        meaning: z.string(),
      }),
    ),
    sources: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      }),
    ),
    featured: z.boolean().default(false),
  }),
});

export const collections = { lessons };
