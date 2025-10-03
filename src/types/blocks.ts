export type HeroBlock = {
  type: "hero";
  heading: string;
};

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
