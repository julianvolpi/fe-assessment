"use client";

import { Block } from "@/types/blocks";
import { Hero } from "./sections/hero";
import { JSX } from "react";
import { usePage } from "@/lib/hooks/usePage";

// TODO: solve scrolling offset issue

type BlockComponents = {
  [K in Block as K["type"]]: (props: K) => JSX.Element
}

export const blockComponents: BlockComponents = {
  hero: Hero,
}

export default function PageRenderer({ slug }: { slug: string }) {
  const { data, isLoading, error } = usePage(slug);

  if (isLoading) return <div className="container mx-auto py-24">Loading…</div>;
  if (error || !data) return <div className="container mx-auto py-24">Failed to load.</div>;

  return (
    <main>
      {data.blocks.map((block, i) => {
        const BlockComponent = blockComponents[block.type]; 
        return (
          <section
            key={i}
            id={block.type}
            className="container mx-auto scroll-mt-nav py-24"
          >
            <BlockComponent {...block} />
          </section>
        )
      })}

    </main>
  );
}
