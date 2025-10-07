import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React, { JSX } from "react";
import Image from "next/image";
import { ClientScrollerBlock } from "@/types/blocks";

export default function ClientScroller({
  id,
  heading,
  subheading,
  storiesButtonText,
  storiesButtonLink,
  clientLogos,
}: ClientScrollerBlock): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-[var(--spacing-padding-flex-xlarge)] pr-[var(--spacing-margins)] pl-[var(--spacing-margins)] pt-[100px] pb-[100px] relative w-full">
      <section
        id={id}
        className="flex flex-col items-start gap-2.5 w-full max-w-page min-w-page mx-auto"
      >
        <div className="flex items-start gap-10 pt-[var(--spacing-padding-small)] pb-[var(--spacing-padding-small)] px-0 w-full min-w-0 border-t border-solid border-[#d9d9d9]">
          <div className="flex-col items-start gap-[var(--spacing-padding-flex-large)] flex-1 flex min-w-0">
            <div className="flex-col items-start gap-[var(--spacing-padding-flex-xsmall)] w-full flex min-w-0">
              <div className="flex-col max-w-[606px] items-start gap-[var(--spacing-padding-xsmall)] w-full flex min-w-0">
                <h2 className=" mt-[-1.00px] font-heading-medium font-[number:var(--heading-medium-font-weight)] text-[#201a2f] text-[length:var(--heading-medium-font-size)] tracking-[var(--heading-medium-letter-spacing)] leading-[var(--heading-medium-line-height)] [font-style:var(--heading-medium-font-style)] break-words">
                  {heading}
                </h2>

                <p className="self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-[#201a2f] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)] break-words">
                  {subheading}
                </p>
              </div>

              <Button
                variant="outline"
                className="h-11 pt-[var(--spacing-padding-xsmall)] pr-[var(--spacing-padding-xsmall)] pb-[var(--spacing-padding-xsmall)] pl-[var(--spacing-padding-xsmall)] rounded border border-solid border-[#2a223f] font-body-link font-[number:var(--body-link-font-weight)] text-[#2a223f] text-[length:var(--body-link-font-size)] tracking-[var(--body-link-letter-spacing)] leading-[var(--body-link-line-height)] [font-style:var(--body-link-font-style)]"
              >
                <a href={storiesButtonLink}>{storiesButtonText}</a>
              </Button>
            </div>

            <div className="flex-col h-[150px] items-start gap-2.5 w-full flex">
              <ScrollArea className="w-full">
                <div className="flex items-center gap-3 w-full">
                  {clientLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="inline-flex flex-col items-start justify-center gap-2.5 p-6 bg-[#f1efea] rounded-lg overflow-hidden flex-shrink-0"
                    >
                      <Image
                        className={`${logo.width} ${logo.height}`}
                        alt={logo.alt}
                        src={logo.src}
                        width={140}
                        height={34}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
