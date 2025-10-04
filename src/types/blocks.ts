import { z } from "zod";
import { HeroBlockSchema } from "../lib/content/schema";

export type NavItem = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type HeroBlock = z.infer<typeof HeroBlockSchema>;

export type Block = HeroBlock;

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
