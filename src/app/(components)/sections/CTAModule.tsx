import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTABlock } from "@/types/blocks";
import React from "react";

export default function CtaModule({
  id,
  heading,
  description,
  buttonText,
}: CTABlock) {
  return (
    <div className="flex flex-col items-center gap-[var(--spacing-padding-flex-xlarge)] pr-[var(--spacing-margins)] pl-[var(--spacing-margins)] pt-[100px] pb-[100px] relative w-full">
      <Card
        id={id}
        className="
        bg-[#2a223f]
        rounded-xl
        overflow-hidden
        border-0
        mx-auto
        w-full
        max-w-page
        min-w-page
        pt-[var(--spacing-padding-flex-xlarge2)]
        pr-[var(--spacing-padding-small)]
        pb-[var(--spacing-padding-flex-xlarge2)]
        pl-[var(--spacing-padding-small)]
        md:pt-[var(--spacing-padding-flex-xlarge1)]
        md:pr-[var(--spacing-padding-flex-large1)]
        md:pb-[var(--spacing-padding-flex-xlarge1)]
        md:pl-[var(--spacing-padding-flex-large1)]
        lg:pt-[var(--spacing-padding-flex-xlarge)]
        lg:pr-[var(--spacing-padding-flex-large)]
        lg:pb-[var(--spacing-padding-flex-xlarge)]
        lg:pl-[var(--spacing-padding-flex-large)]
        "
      >
        <CardContent className="flex flex-col items-start justify-center gap-2.5  relative p-0">
          <div className="flex-col lg:flex-row flex-wrap gap-[var(--spacing-padding-flex-large)] self-stretch w-full flex-[0_0_auto] flex items-start relative">
            <h2 className="whitespace-pre-line relative flex-1 mt-[-1.00px] font-display-large font-[number:var(--display-large-font-weight)] text-text-staticoncolour text-[length:var(--display-medium-h1-font-size)] md:text-[length:var(--display-large-font-size)] tracking-[var(--display-large-letter-spacing)] leading-[var(--display-large-line-height)] [font-style:var(--display-large-font-style)]">
              {heading}
            </h2>

            <div className="flex-col  gap-9 flex-1 grow flex items-start relative">
              <p className="relative self-stretch mt-[-1.00px] font-body-regular font-[number:var(--body-regular-font-weight)] text-text-staticoncolour text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                {description}
              </p>

              <Button
                variant="outline"
                className="h-11 pt-[var(--spacing-padding-xsmall)] pr-[var(--spacing-padding-xsmall)] pb-[var(--spacing-padding-xsmall)] pl-[var(--spacing-padding-xsmall)] rounded border border-solid border-white bg-transparent hover:bg-white/10"
              >
                <span className="font-body-link font-[number:var(--body-link-font-weight)] text-white text-[length:var(--body-link-font-size)] text-center tracking-[var(--body-link-letter-spacing)] leading-[var(--body-link-line-height)] [font-style:var(--body-link-font-style)]">
                  {buttonText}
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
