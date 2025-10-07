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

export const ClientLogoSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.string().min(1),
  height: z.string().min(1),
});

export const CaseVideoSchema = z.object({
  thumbnail: z.string().min(1),
  src: z.string().optional(),
  alt: z.string().min(1),
  width: z.number(),
  height: z.number(),
  heading: z.string().min(1),
  subheading: z.string().min(1),
});

export const ApproachItemSchema = z.object({
  number: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
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
  cards: z.array(CardSchema),
});

export const ManifestoBlockSchema = BaseBlockSchema.extend({
  type: z.literal("manifesto"),
  className: z.string().optional(),
  paragraphs: z.array(z.string()).min(1),
});

export const ClientScrollerSchema = BaseBlockSchema.extend({
  type: z.literal("client-scroller"),
  heading: z.string().min(1),
  subheading: z.string().min(1),
  storiesButtonText: z.string().min(1),
  clientLogos: z.array(ClientLogoSchema),
  className: z.string().optional(),
});

export const CaseStudiesSchema = BaseBlockSchema.extend({
  type: z.literal("case-studies"),
  heading: z.string().min(1),
  subheading: z.string().min(1),
  caseVideos: z.array(CaseVideoSchema),
  buttonLeftText: z.string().min(1),
  buttonRightText: z.string().min(1),
  className: z.string().optional(),
});

export const WhatWeDoSchema = BaseBlockSchema.extend({
  type: z.literal("what-we-do"),
  heading: z.string().min(1),
  approachItems: z.array(ApproachItemSchema).min(4),
  buttonText: z.string().min(1),
  className: z.string().optional(),
});

export const CTABlockSchema = BaseBlockSchema.extend({
  type: z.literal("cta"),
  heading: z.string().min(1),
  description: z.string().min(1),
  buttonText: z.string().min(1),
});

export const FooterSchema = BaseBlockSchema.extend({
  type: z.literal("footer"),
  logoSrc: z.string().min(1),
  navItems: z.array(NavItemSchema).min(1),
  connectItems: z.array(NavItemSchema).min(1),
  contactItems: z.array(z.string()).min(1),
  subheading: z.string().min(1),
  className: z.string().optional(),
});

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
      ManifestoBlockSchema,
      ClientScrollerSchema,
      CaseStudiesSchema,
      WhatWeDoSchema,
      CTABlockSchema,
      FooterSchema,
      // add other block schemas here
    ])
  ),
});
