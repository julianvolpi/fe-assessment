import { Block } from "@/types/blocks";
import Navbar from "./(components)/navbar";
import { Hero } from "./(components)/sections/hero";
import { JSX } from "react";

// TODO: solve scrolling offset issue

// app/(components)/sections/index.ts

type BlockComponents = {
  [K in Block as K["type"]]: (props: K) => JSX.Element
}

export const blockComponents: BlockComponents = {
  hero: Hero,
}

const data: { slug: string, title: string, blocks: Block[] } = {
  slug: "home",
  title: "Home",
  blocks: [
    { type: "hero", heading: "Build better, faster" },
  ]
}



export default function Page() {
  return (
    <>
      <Navbar />
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
    </>
  );
}
