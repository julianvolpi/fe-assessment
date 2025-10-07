import { z } from "zod";
import {
  CaseStudiesSchema,
  ClientScrollerSchema,
  CTABlockSchema,
  FooterSchema,
  HeroBlockSchema,
  ManifestoBlockSchema,
  PageSchema,
  WhatWeDoSchema,
} from "../lib/content/schema";

export type NavItem = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type HeroBlock = z.infer<typeof HeroBlockSchema>;
export type ManifestoBlock = z.infer<typeof ManifestoBlockSchema>;
export type ClientScrollerBlock = z.infer<typeof ClientScrollerSchema>;
export type CaseStudiesBlock = z.infer<typeof CaseStudiesSchema>;
export type WhatWeDoBlock = z.infer<typeof WhatWeDoSchema>;
export type CTABlock = z.infer<typeof CTABlockSchema>;
export type FooterBlock = z.infer<typeof FooterSchema>;

export type PageDocument = z.infer<typeof PageSchema>;

export type Block =
  | HeroBlock
  | ManifestoBlock
  | ClientScrollerBlock
  | CaseStudiesBlock
  | WhatWeDoBlock
  | CTABlock
  | FooterBlock;
