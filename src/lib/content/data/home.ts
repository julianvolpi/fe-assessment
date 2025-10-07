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
        "https://player.vimeo.com/video/1125004860?background=1&amp;muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1",
      fullscreenMediaSrc:
        "https://player.vimeo.com/video/1124516461?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp",
      navItems: [
        { label: "What we do", href: "/#what-we-do" },
        { label: "Case studies", href: "/#case-studies" },
        { label: "Services", href: "/#cta" },
        { label: "How we partner", href: "/#client-scroller" },
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
    {
      id: "manifesto",
      type: "manifesto",
      paragraphs: [
        "We've helped companies like Stripe, Monzo, and Talentful grow with expert legal advice embedded into their business. We've also helped single-founder companies to give them the benefits of an in-house team to accelerate their growth.",
        "Our approach means we know your world inside out. You get fast, practical guidance without worrying that every question comes at a high cost. Legal support as a driver of growth, not a barrier.",
        "And because we understand commercial realities, we help you capture opportunities and keep moving forward.",
      ],
    },
    {
      id: "client-scroller",
      type: "client-scroller",
      heading: "Experienced with forward thinking businesses",
      subheading:
        "We are trusted by a wide range of successful businesses, each with unique challenges and needs.",
      storiesButtonText: "Watch our client stories",
      clientLogos: [
        {
          src: "/Group.svg",
          alt: "Client logo 1",
          width: "w-[140px]",
          height: "h-[33.36px]",
        },
        {
          src: "/Group.svg",
          alt: "Client logo 2",
          width: "w-[140px]",
          height: "h-[33.36px]",
        },
        {
          src: "/Group.svg",
          alt: "Client logo 3",
          width: "w-[140px]",
          height: "h-[33.36px]",
        },
        {
          src: "/Group.svg",
          alt: "Client logo 4",
          width: "w-[140px]",
          height: "h-[33.36px]",
        },
        {
          src: "/Group.svg",
          alt: "Client logo 5",
          width: "w-[140px]",
          height: "h-[33.36px]",
        },
        {
          src: "/Group.svg",
          alt: "Client logo 6",
          width: "w-[140px]",
          height: "h-[33.36px]",
        },
        {
          src: "/Group.svg",
          alt: "Client logo 7",
          width: "w-[140px]",
          height: "h-[33.36px]",
        },
        {
          src: "/Group.svg",
          alt: "Client logo 8",
          width: "w-10",
          height: "h-[33.36px]",
        },
      ],
    },
    {
      id: "case-studies",
      type: "case-studies",
      heading: "Flexible, focused and built around you.",
      subheading:
        "Real stories from clients who value clear thinking, fast answers and legal solutions that fit their business.",
      caseVideos: [
        {
          thumbnail: "/case1.png",
          alt: "Case study 1",
          width: 714,
          height: 491,
          heading: "A Business Partner First",
          subheading:
            "We're much more business focused than a typical law firm.",
        },
        {
          thumbnail: "/case2.png",
          alt: "Case study 2",
          width: 714,
          height: 491,
          heading: "A Growth Partner",
          subheading:
            "We work with companies to drive their growth as a speciality.",
        },
      ],
      buttonLeftText: "All Client Stories",
      buttonRightText: "Talk to us",
    },
    {
      id: "what-we-do",
      type: "what-we-do",
      heading: "Our approach, built for business",
      approachItems: [
        {
          number: "1",
          title: "Beyond legal advice, truly commercial guidance",
          description:
            "Legal is never a stand-alone function,  it's integrated into the whole firm",
        },
        {
          number: "2",
          title: "Expertise that's embedded in your business",
          description: "Trusted people, trusted advice, trusted solutions",
        },
        {
          number: "3",
          title: "An efficient and effective legal approach",
          description:
            "Big company legal capabilities without the huge expense",
        },
        {
          number: "4",
          title: "A rapid response to every challenge at every step",
          description: "Direct involvement in your business",
        },
      ],
      buttonText: "Discover what we do",
    },
    {
      id: "cta",
      type: "cta",
      heading: "Whatever your challenge,\ntalk to us.",
      description:
        "If you're facing a legal question or simply want to explore how we can support your business, we offer a free strategy call to learn more about your goals. It's a chance to talk things through and see how we can help you move forward with confidence.",
      buttonText: "Talk to us",
    },
    {
      id: "footer",
      type: "footer",
      navItems: [
        { label: "What we do", href: "/#what-we-do" },
        { label: "Testimonials", href: "/#case-studies" },
        { label: "Services", href: "/#cta" },
        { label: "Work with us", href: "/#footer" },
      ],
      connectItems: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/add-law/",
        },
      ],
      contactItems: [
        "contact@add.law",
        "London:\n+44 (0)808 5022 401",
        "Toronto:\n+1 647 6960645",
        "NYC:\n+1 646 6063886",
      ],
      logoSrc: "/BrandLogo.png",
      subheading: "Specialists in law for growing businesses",
    },
  ],
};
