// data source; could be DB later
import { PageDocument } from "@/types/blocks";

export const homePage: PageDocument = {
  slug: "home",
  title: "Home",
  seo: {
    // TODO: fill up later
    title: "Add Law - Home",
    description: "Short SEO description",
    openGraphImage: "/og/home.png",
  },
  blocks: [
    {
      type: "hero",
      heading: "Legal advice that fits your team and fuels your growth",
      subheading:
        "We give clear, decisive guidance that helps you act with confidence...",
      logoSrc: "/BrandLogo.png",
      mediaSrc: "/hero-video-poster.jpg",
      nav: [
        { label: "What we do", href: "/#what-we-do" },
        { label: "Case studies", href: "/#case-studies" },
        { label: "Services", href: "/#services" },
        { label: "How we partner", href: "/#how-we-partner" },
      ],
      cta: { label: "Talk to us", href: "/#contact" },
    },
  ],
};
