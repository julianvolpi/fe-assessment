"use client";

import React, { JSX } from "react";
import { usePage } from "@/lib/hooks/usePage";
import type { Block } from "@/types/blocks";
import HeroModule from "./sections/HeroModule";
import ManifestoModule from "./sections/ManifestoModule";
import ClientScroller from "./sections/ClientScrollerModule";
import CaseStudies from "./sections/CaseStudiesModule";
import WhatWeDo from "./sections/WhatWeDoModule";
import CtaModule from "./sections/CTAModule";
import FooterModule from "./sections/FooterModule";

// TODO: analyze project with chatgpt for improvements

// TODO: generate readme file as per instructions

function LoadingPage() {
  return (
    <main className="container mx-auto py-24">
      <div className="h-8 w-48 rounded bg-muted mb-6" />
      <div className="h-5 w-3/5 rounded bg-muted mb-3" />
      <div className="h-5 w-2/5 rounded bg-muted" />
    </main>
  );
}

function ErrorPage({
  message = "Failed to load content.",
}: {
  message?: string;
}) {
  return (
    <main className="container mx-auto py-24">
      <p className="text-destructive">{message}</p>
    </main>
  );
}

/**
 * Renders a single block based on its discriminated `type`.
 */
function RenderBlock(block: Block): JSX.Element {
  switch (block.type) {
    case "hero":
      return <HeroModule {...block} />;

    case "manifesto":
      return <ManifestoModule {...block} />;

    case "client-scroller":
      return <ClientScroller {...block} />;

    case "case-studies":
      return <CaseStudies {...block} />;

    case "what-we-do":
      return <WhatWeDo {...block} />;

    case "cta":
      return <CtaModule {...block} />;

    case "footer":
      return <FooterModule {...block} />;

    default: {
      return <div>Unknown block type</div>;
    }
  }
}

export default function PageRenderer({ slug }: { slug: string }) {
  const { data, isLoading, error } = usePage(slug);

  if (isLoading) return <LoadingPage />;
  if (error || !data) return <ErrorPage />;

  return (
    <main>
      {data.blocks.map((block, idx) => (
        <React.Fragment key={block.id ?? `${block.type}-${idx}`}>
          {RenderBlock(block)}
        </React.Fragment>
      ))}
    </main>
  );
}
