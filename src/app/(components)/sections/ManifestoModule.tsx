import { ManifestoBlock } from "@/types/blocks";
import React from "react";

const ManifestoModule = ({ id, paragraphs }: ManifestoBlock) => {
  return (
    <div className="flex flex-col items-center gap-[var(--spacing-padding-flex-xlarge)] pr-[var(--spacing-margins)] pl-[var(--spacing-margins)] pt-[100px] pb-[100px] relative w-full">
      <section
        id={id}
        className="w-full min-w-[342px] max-w-[1512px] flex flex-col items-start gap-9 relative rounded-xl overflow:hidden mx-auto"
      >
        {paragraphs.map((para, index) => (
          <p
            key={index}
            className="
            relative
            self-stretch
            mt-[-1.00px]
            font-display-medium
            font-[number:var(--display-medium-font-weight)]
            text-base-brand-colour-secondary-100
            text-[length:var(--display-small-font-size)]
            md:text-[length:var(--display-medium-font-size)]
            lg:text-[length:var(--display-large-h1-font-size)]
            tracking-[var(--display-medium-letter-spacing)]
            leading-[var(--display-medium-line-height)]
            [font-style:var(--display-medium-font-style)]
          "
          >
            {para}
          </p>
        ))}
      </section>
    </div>
  );
};

export default ManifestoModule;
