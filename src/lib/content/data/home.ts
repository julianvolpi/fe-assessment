// ata source; could be DB later
import { PageDocument } from "@/types/blocks";

export const homePage: PageDocument = {
  slug: "home",
  title: "Add Law",
  seo: {
    // TODO: fill up later
    title: "Add Law - Home",
    description: "Short SEO description",
    openGraphImage: "/og/home.png",
  },
  blocks: [{ type: "hero", heading: "Build better, faster" }],
};
