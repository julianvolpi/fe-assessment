import { z } from "zod";

export const hero = z.object({
  type: z.literal("hero"),
  heading: z.string(),
});

export const block = z.discriminatedUnion("type", [hero]);

export const pageSchema = z.object({
  slug: z.string(),
  title: z.string(),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      openGraphImage: z.string().optional(),
    })
    .optional(),
  blocks: z.array(block),
});

export type PageDoc = z.infer<typeof pageSchema>;
