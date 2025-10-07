import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React, { JSX } from "react";
import { CaseStudiesBlock } from "@/types/blocks";
import Image from "next/image";
import PlayVideoLargeSvg from "../../../../public/PlayVideoLarge.svg";

const CaseStudies = ({
  id,
  heading,
  subheading,
  caseVideos,
  buttonLeftText,
  buttonRightText,
}: CaseStudiesBlock): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-[var(--spacing-padding-flex-xlarge)] pr-[var(--spacing-margins)] pl-[var(--spacing-margins)] pt-[100px] pb-[100px] relative w-full">
      <section
        id={id}
        className="flex flex-col items-start w-full max-w-[1512px] gap-[var(--spacing-padding-flex-large)] relative mx-auto"
      >
        <header className="flex flex-col items-start gap-[var(--spacing-padding-small)] pt-[var(--spacing-padding-medium)] pb-[var(--spacing-padding-medium)] px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#d9d9d9]">
          <h1 className="relative self-stretch mt-[-1.00px] font-display-large font-[number:var(--display-large-font-weight)] text-[#201a2f] text-[length:var(--display-medium-h1-font-size)] md:text-[length:var(--display-large-font-size)] tracking-[var(--display-large-letter-spacing)] leading-[var(--display-large-line-height)] [font-style:var(--display-large-font-style)]">
            {heading}
          </h1>

          <p className="relative self-stretch font-body-large font-[number:var(--body-large-font-weight)] text-[#201a2f] text-[length:var(--body-medium-font-size)] md:text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
            {subheading}
          </p>
        </header>

        <div className="flex-wrap gap-[var(--spacing-padding-medium)] self-stretch w-full flex-[0_0_auto] flex items-start relative">
          {caseVideos.map((caseStudy, index) => (
            <Card
              key={index}
              className="flex-col min-w-[260px] gap-[var(--spacing-padding-medium)] flex-1 grow flex items-start relative border-0 shadow-none bg-transparent"
            >
              <CardContent className="p-0 w-full">
                <div className="flex flex-col gap-[var(--spacing-padding-medium)] w-full">
                  <div className="rounded-xl overflow-hidden aspect-[1.45] flex flex-col items-start relative self-stretch w-full">
                    <Image
                      className="relative self-stretch w-full aspect-[1.45] object-cover z-0"
                      alt={caseStudy.heading}
                      src={caseStudy.thumbnail}
                      fill={false}
                      width={caseStudy.width}
                      height={caseStudy.height}
                    />

                    <div className="absolute left-[23px] bottom-[25px] w-20 h-20 opacity-30 z-10">
                      <div className="absolute w-[70.00%] h-[70.00%] top-[8.31%] left-[8.75%] aspect-[1] flex items-center justify-center">
                        <Image
                          alt="Play icon"
                          src={PlayVideoLargeSvg}
                          fill={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="gap-[var(--spacing-padding-xsmall)] flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full">
                    <h2 className="relative self-stretch mt-[-1.00px] font-heading-medium font-[number:var(--heading-medium-font-weight)] text-[#201a2f] text-[length:var(--heading-medium-font-size)] tracking-[var(--heading-medium-letter-spacing)] leading-[var(--heading-medium-line-height)] [font-style:var(--heading-medium-font-style)]">
                      {caseStudy.heading}
                    </h2>

                    <p className="relative self-stretch font-body-large font-[number:var(--body-large-font-weight)] text-[#201a2f] text-[length:var(--body-medium-font-size)] md:text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
                      {caseStudy.subheading}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="inline-flex items-start gap-3.5 relative flex-[0_0_auto]">
          <Button
            variant="outline"
            className="h-11 pt-[var(--spacing-padding-xsmall)] pr-[var(--spacing-padding-xsmall)] pb-[var(--spacing-padding-xsmall)] pl-[var(--spacing-padding-xsmall)] border-[#2a223f] font-body-link font-[number:var(--body-link-font-weight)] text-[#2a223f] text-[length:var(--body-link-font-size)] tracking-[var(--body-link-letter-spacing)] leading-[var(--body-link-line-height)] [font-style:var(--body-link-font-style)] hover:bg-transparent hover:text-[#2a223f]"
          >
            {buttonLeftText}
          </Button>

          <Button className="h-11 pt-[var(--spacing-padding-xsmall)] pr-[var(--spacing-padding-xsmall)] pb-[var(--spacing-padding-xsmall)] pl-[var(--spacing-padding-xsmall)] bg-[#201a2f] font-body-link font-[number:var(--body-link-font-weight)] text-text-staticoncolour text-[length:var(--body-link-font-size)] tracking-[var(--body-link-letter-spacing)] leading-[var(--body-link-line-height)] [font-style:var(--body-link-font-style)] hover:bg-[#201a2f]/90">
            {buttonRightText}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
