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
      id: "hero",
      type: "hero",
      heading: "Legal advice that fits your team and fuels your growth",
      subheading:
        "We give clear, decisive guidance that helps you act with confidence, even in ambiguity. Our embedded legal support avoids unnecessary complexity and keeps your legal spend under control.",
      logoSrc: "/BrandLogo.png",
      mediaSrc:
        "https://player.vimeo.com/video/1124516461?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1",
      navItems: [
        { label: "What we do", href: "/#what-we-do" },
        { label: "Case studies", href: "/#case-studies" },
        { label: "Services", href: "/#services" },
        { label: "How we partner", href: "/#how-we-partner" },
      ],
      cta: { label: "Talk to us", href: "/#contact" },
      cards: [
        {
          title: "Add speed and clarity",
          description:
            "We deliver practical answers in plain language. No long memos, no delays. Clear, actionable advice for the right solution at the right time so legal never holds up momentum. When you need to move, we're already moving with you.",
        },
        {
          title: "Add expertise and trust",
          description:
            "We work as part of your team, not outside it. With experience working with, leading and starting high-growth businesses, we understand your goals, pressures and priorities. Sharper advice, more responsibility and support that is in-house from day one.",
        },
        {
          title: "Add large company legal capability",
          description:
            "All large companies have in-house legal teams to protect the business from the inside. Now your business can too at a fraction of the cost. Our experts provide this when you need, without the hassle of a full-time hire.",
        },
      ],
    },
  ],
};
