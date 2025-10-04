import { z } from "zod";

export const BaseBlockSchema = z.object({
  type: z.string(),
  id: z.string().optional(), // used for anchors (#id)
  navLabel: z.string().optional(), // if you ever auto-build the navbar
});

export const NavItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const CtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const HeroBlockSchema = BaseBlockSchema.extend({
  type: z.literal("hero"),
  logoSrc: z.string().min(1).optional(),
  nav: z.array(NavItemSchema).min(1).optional(),
  cta: CtaSchema.optional(),
  heading: z.string().min(1),
  subheading: z.string().min(1).optional(),
  mediaSrc: z.string().min(1).optional(),
  className: z.string().optional(),
});

export type HeroBlock = z.infer<typeof HeroBlockSchema>;

export const PageSchema = z.object({
  slug: z.string(),
  title: z.string(),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      openGraphImage: z.string().optional(),
    })
    .optional(),
  blocks: z.array(
    z.discriminatedUnion("type", [
      HeroBlockSchema,
      // TODO: add other block schemas here
    ])
  ),
});

export type PageDocument = z.infer<typeof PageSchema>;
