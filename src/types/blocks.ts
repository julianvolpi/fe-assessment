import { z } from "zod";
import {
  CaseStudiesSchema,
  ClientScrollerSchema,
  HeroBlockSchema,
  ManifestoBlockSchema,
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

export type Block =
  | HeroBlock
  | ManifestoBlock
  | ClientScrollerBlock
  | CaseStudiesBlock;

export type PageDocument = {
  slug: string;
  title: string;
  seo?: {
    title?: string;
    description?: string;
    openGraphImage?: string;
  };
  blocks: Block[];
};
