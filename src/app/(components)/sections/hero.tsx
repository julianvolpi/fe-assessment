import { HeroBlock } from "@/types/blocks";

// app/(components)/sections/hero.tsx
export function Hero({ heading }: HeroBlock) {
  return (
    <section id="hero" className="container mx-auto scroll-mt-nav">
      <p>{heading}</p>
    </section>
  );
}
