"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string };

export type HeroProps = {
  id?: string;
  logoSrc?: string;
  nav?: NavItem[];
  cta?: { label: string; href: string };
  heading?: string;
  subheading?: string;
  mediaSrc?: string; // video poster or image
  className?: string;
};

export default function Hero({
  id = "hero",
  logoSrc = "/BrandLogo.png", // drop your SVG here
  nav = [
    { label: "What we do", href: "/#what-we-do" },
    { label: "Case studies", href: "/#case-studies" },
    { label: "Services", href: "/#services" },
    { label: "How we partner", href: "/#how-we-partner" },
  ],
  cta = { label: "Talk to us", href: "/#contact" },
  heading = "Legal advice that fits your team and fuels your growth",
  subheading = "We give clear, decisive guidance that helps you act with confidence, even in ambiguity. Our embedded legal support avoids unnecessary complexity and keeps your legal spend under control.",
  mediaSrc = "/hero-video-poster.jpg",
  className,
}: HeroProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-nav bg-brand-secondary-90 text-brand-neutral-0 relative",
        className
      )}
    >
      <HeroHeaderBar logoSrc={logoSrc} nav={nav} cta={cta} />

      {/* Body */}
      <div className="container mx-auto grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="max-w-[720px]">
          {/* H1 — 56/68 on desktop, 56/68 on tablet, 36/44 on mobile */}
          <h1 className="font-[300] tracking-tight text-[36px] leading-[44px] md:text-[56px] md:leading-[68px] lg:text-[56px] lg:leading-[68px] font-[var(--font-serif,inherit)]">
            {heading}
          </h1>

          {/* body — 19–20/26 per CSVs */}
          <p className="mt-6 text-[19px] leading-[1.3] md:text-[20px]">
            {subheading}
          </p>
        </div>

        {/* Video card / image */}
        <div className="relative w-full max-w-[560px] justify-self-end md:justify-self-center lg:justify-self-end">
          {/* TODO: add the purple chevron shapes behind; keeping simple for now */}
          <div className="relative overflow-hidden rounded-xl md:rounded-xl aspect-[9/11]">
            <Image
              src={mediaSrc}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Header Bar ───────────────────────── */

function HeroHeaderBar({
  logoSrc,
  nav,
  cta,
}: {
  logoSrc?: string;
  nav: NavItem[];
  cta?: { label: string; href: string };
}) {
  return (
    <div
      className={cn(
        "sticky top-0 z-50 h-nav border-b border-border",
        // 95% opacity over hero like the design
        "bg-brand-secondary-90/95 backdrop-blur"
      )}
    >
      <div
        className={cn(
          "container mx-auto flex h-full items-center justify-between",
          // horizontal padding per breakpoint: 24 (sm) / 30 (md) / 36 (lg)
          "px-6 md:px-[30px] lg:px-9",
          // gap between logo and nav cluster (CSV shows 56px)
          "gap-14"
        )}
      >
        {/* Logo — 129x19 */}
        <Link href="/" className="inline-flex items-center">
          <Image
            src={logoSrc ?? "/BrandLogo.png"}
            alt="ADD.LAW"
            width={129}
            height={19}
            className="h-[19px] w-[129px]"
            priority
          />
          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop nav (hidden below lg) */}
        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors text-white/90 hover:text-white"
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui",
                fontSize: 16,
                lineHeight: "19px",
                fontWeight: 400,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA 44px tall, radius 4px */}
        <div className="hidden lg:block">
          {cta && (
            <Button
              asChild
              className="h-11 rounded-[4px] bg-white px-3 text-[#2A223F] hover:opacity-90"
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}
        </div>

        {/* Mobile/Tablet menu (Sheet) */}
        <div className="lg:hidden">
          <MobileMenu nav={nav} cta={cta} />
        </div>
      </div>
    </div>
  );
}

function MobileMenu({
  nav,
  cta,
}: {
  nav: NavItem[];
  cta?: { label: string; href: string };
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" aria-label="Open menu">
          <Menu className="h-5 w-5 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[85vw] sm:w-[360px] bg-brand-secondary-90 text-brand-neutral-0"
      >
        <div className="mt-8 flex flex-col gap-4">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-base hover:opacity-80">
              {item.label}
            </Link>
          ))}
          {cta && (
            <Button asChild className="mt-2">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
