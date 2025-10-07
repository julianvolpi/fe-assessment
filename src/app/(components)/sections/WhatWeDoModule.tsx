import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatWeDoBlock } from "@/types/blocks";
import React, { JSX } from "react";

const WhatWeDo = ({
  id,
  heading,
  approachItems,
  buttonText,
}: WhatWeDoBlock): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-[var(--spacing-padding-flex-xlarge)] pr-[var(--spacing-margins)] pl-[var(--spacing-margins)] pt-[100px] pb-[100px] relative w-full">
      <section
        id={id}
        className="flex flex-col max-w-page min-w-page items-start gap-[var(--spacing-padding-flex-large)] mx-auto w-full"
      >
        <header className="flex flex-col items-start gap-[var(--spacing-padding-small)] pt-[var(--spacing-padding-medium)] pb-[var(--spacing-padding-medium)] px-0 self-stretch w-full border-t border-solid border-[#d9d9d9]">
          <h1 className="self-stretch mt-[-1.00px] font-display-large font-[number:var(--display-large-font-weight)] text-[#201a2f] text-[length:var(--display-large-font-size)] tracking-[var(--display-large-letter-spacing)] leading-[var(--display-large-line-height)] [font-style:var(--display-large-font-style)]">
            {heading}
          </h1>
        </header>

        <div className="flex flex-col items-start gap-[var(--spacing-padding-flex-xsmall)] self-stretch w-full">
          <div className="flex flex-col items-start gap-[var(--spacing-padding-medium)] self-stretch w-full">
            <div className="flex flex-col md:flex-row flex-wrap items-stretch gap-[var(--spacing-padding-medium)] self-stretch w-full">
              {approachItems.slice(0, 2).map((item) => (
                <Card
                  key={item.number}
                  className="flex min-w-[200px] lg:min-h-40 items-stretch gap-[var(--spacing-padding-medium)] flex-1 grow bg-[#f1efea] rounded-xl border-0 p-[var(--spacing-padding-flex-xsmall)] w-full"
                >
                  <CardContent className="flex flex-col lg:flex-row items-start gap-[var(--spacing-padding-medium)] pt-[var(--spacing-padding-flex-xsmall)] pr-[var(--spacing-padding-flex-xsmall)] pb-[var(--spacing-padding-flex-xsmall)] pl-[var(--spacing-padding-flex-xsmall)] p-0 w-full">
                    <div className="inline-flex flex-col items-start gap-3 pt-1 pb-0 px-0 flex-[0_0_auto]">
                      <div className="w-fit mt-[-1.00px] [font-family:'Tiempos_Headline-Light',Helvetica] font-light text-[#201a2f] text-[64px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {item.number}
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-[var(--spacing-padding-xsmall)] flex-1 grow">
                      <h3 className="self-stretch mt-[-1.00px] font-heading-medium font-[number:var(--heading-medium-font-weight)] text-[#201a2f] text-[length:var(--heading-small-font-size)] lg:text-[length:var(--heading-medium-font-size)] tracking-[var(--heading-medium-letter-spacing)] leading-[var(--heading-medium-line-height)] [font-style:var(--heading-medium-font-style)]">
                        {item.title}
                      </h3>

                      <p className="self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-[#201a2f] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col md:flex-row flex-wrap items-stretch gap-[var(--spacing-padding-medium)] self-stretch w-full">
              {approachItems.slice(2, 4).map((item) => (
                <Card
                  key={item.number}
                  className="flex min-w-[200px] lg:min-h-40 items-stretch gap-[var(--spacing-padding-medium)] flex-1 grow bg-[#f1efea] rounded-xl border-0 p-[var(--spacing-padding-flex-xsmall)] w-full"
                >
                  <CardContent className="flex flex-col lg:flex-row items-start gap-[var(--spacing-padding-medium)] pt-[var(--spacing-padding-flex-xsmall)] pr-[var(--spacing-padding-flex-xsmall)] pb-[var(--spacing-padding-flex-xsmall)] pl-[var(--spacing-padding-flex-xsmall)] p-0 w-full">
                    <div className="inline-flex flex-col items-start gap-3 pt-1 pb-0 px-0 flex-[0_0_auto]">
                      <div className="w-fit mt-[-1.00px] [font-family:'Tiempos_Headline-Light',Helvetica] font-light text-[#201a2f] text-[64px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {item.number}
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-[var(--spacing-padding-xsmall)] flex-1 grow">
                      <h3 className="self-stretch mt-[-1.00px] font-heading-medium font-[number:var(--heading-medium-font-weight)] text-[#201a2f] text-[length:var(--heading-small-font-size)] lg:text-[length:var(--heading-medium-font-size)] tracking-[var(--heading-medium-letter-spacing)] leading-[var(--heading-medium-line-height)] [font-style:var(--heading-medium-font-style)]">
                        {item.title}
                      </h3>

                      <p className="self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-[#201a2f] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="inline-flex items-center gap-3.5 flex-[0_0_auto]">
            <Button
              variant="outline"
              className="h-11 pt-[var(--spacing-padding-xsmall)] pr-[var(--spacing-padding-xsmall)] pb-[var(--spacing-padding-xsmall)] pl-[var(--spacing-padding-xsmall)] rounded border border-solid border-[#2a223f] bg-transparent hover:bg-transparent"
            >
              <span className="w-fit mt-[-0.50px] font-body-link font-[number:var(--body-link-font-weight)] text-[#2a223f] text-[length:var(--body-link-font-size)] text-center tracking-[var(--body-link-letter-spacing)] leading-[var(--body-link-line-height)] whitespace-nowrap [font-style:var(--body-link-font-style)]">
                {buttonText}
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
