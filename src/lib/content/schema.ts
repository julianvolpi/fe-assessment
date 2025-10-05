import { z } from "zod";

export const BaseBlockSchema = z.object({
  type: z.string(),
  id: z.string(), // used for anchors (#id)
});

export const NavItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const CardSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const CtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const HeroBlockSchema = BaseBlockSchema.extend({
  type: z.literal("hero"),
  logoSrc: z.string().min(1),
  navItems: z.array(NavItemSchema).min(1),
  cta: CtaSchema,
  heading: z.string().min(1),
  subheading: z.string().min(1),
  mediaSrc: z.string().min(1),
  className: z.string().optional(),
  cards: z.array(CardSchema).min(1),
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
