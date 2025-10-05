import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroBlock } from "@/types/blocks";
import { Play, Menu, Plus } from "lucide-react";
import React, { JSX } from "react";

export default function HeroModule({heading, subheading, logoSrc, mediaSrc, cta, navItems, cards}: HeroBlock): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-[var(--spacing-padding-medium)] pb-[var(--spacing-padding-flex-xlarge)] pt-0 px-0 bg-[#2a223f]">
      <header className="flex max-w-screen-2xl h-[73px] items-center justify-between pt-[var(--spacing-padding-xsmall)] pr-[var(--spacing-margins)] pb-[var(--spacing-padding-xsmall)] pl-[var(--spacing-margins)] w-full bg-transparent">
        <div className={`relative w-[128.56px] h-[19px] bg-[url(${logoSrc})] bg-[100%_100%]`} />

        <nav className="hidden lg:inline-flex items-center justify-end gap-[var(--spacing-padding-medium)] flex-[0_0_auto]">
          <div className="inline-flex flex-wrap items-center gap-[var(--spacing-padding-medium)] flex-[0_0_auto]">
            {navItems.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-9 rounded-md inline-flex items-center justify-center flex-[0_0_auto] hover:bg-transparent"
                asChild
              >
                <a
                  href={link.href}
                  className="flex items-center justify-center w-fit font-body-link font-[number:var(--body-link-font-weight)] text-interactionsondarktext-link-default text-[length:var(--body-link-font-size)] text-center tracking-[var(--body-link-letter-spacing)] leading-[var(--body-link-line-height)] whitespace-nowrap [font-style:var(--body-link-font-style)]"
                >
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          <Button className="h-11 pt-[var(--spacing-padding-xsmall)] pr-[var(--spacing-padding-xsmall)] pb-[var(--spacing-padding-xsmall)] pl-[var(--spacing-padding-xsmall)] bg-white rounded inline-flex items-center justify-center flex-[0_0_auto] hover:bg-white/90">
            <span className="w-fit mt-[-0.50px] font-body-link font-[number:var(--body-link-font-weight)] text-[#2a223f] text-[length:var(--body-link-font-size)] tracking-[var(--body-link-letter-spacing)] leading-[var(--body-link-line-height)] whitespace-nowrap [font-style:var(--body-link-font-style)]">
              {cta.label}
            </span>
          </Button>
        </nav>

        <nav className="inline-flex lg:hidden items-center justify-end">
          <Button variant="ghost" size="icon" className="w-11 h-11 text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </nav>
      </header>

      <main className="max-w-screen-2xl items-start gap-[var(--spacing-padding-flex-xlarge)] pr-[var(--spacing-margins)] pl-[var(--spacing-margins)] py-0 w-full flex-[0_0_auto] flex flex-col">
        <section className="flex-wrap gap-[var(--spacing-padding-flex-xsmall)] self-stretch w-full flex-[0_0_auto] flex items-center">
          <div className="min-w-[342px] items-start justify-center gap-[var(--spacing-padding-flex-xsmall)] pr-[var(--spacing-padding-medium)] pl-0 py-0 flex-1 grow flex flex-col">
            <h1 className="self-stretch mt-[-1.00px] font-display-extra-large-h1 font-[number:var(--display-extra-large-h1-font-weight)] text-text-staticoncolour text-[length:var(--display-large-h1-font-size)] md:text-[length:var(--display-extra-large-h1-font-size)] tracking-[var(--display-extra-large-h1-letter-spacing)] leading-[var(--display-extra-large-h1-line-height)] [font-style:var(--display-extra-large-h1-font-style)]">
              {heading}
            </h1>

            <p className="self-stretch font-body-large font-[number:var(--body-large-font-weight)] text-text-staticoncolour text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
              {subheading}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[786px] h-[638px] flex items-center justify-center overflow-visible">

            <div className="pointer-events-none absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[764px] h-[604px] max-w-none">
              <svg className="block w-full h-full" viewBox="0 0 764 604" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M559.029 181.703H763.832L665.006 411.174H464.658L385.35 604H131.193L210.5 411.174H0.831787L99.9509 181.762L304.871 181.703L379.665 0H633.822L559.029 181.703Z" fill="#7160F0"/>
              </svg>
            </div>

            <div className="absolute w-[338px] h-[470px] z-10 rounded-xl aspect-[0.72] overflow-hidden">
              <iframe
                src={mediaSrc}
                width="338"
                height="470"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Intro-short-Sm-v1.1">
              </iframe>
              <Button
                variant="secondary"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 h-auto px-4 py-2 bg-white/90 hover:bg-white"
              >
                <Play className="w-4 h-4 mr-2" />
                <span className="font-body-link font-[number:var(--body-link-font-weight)] text-[#2a223f] text-[length:var(--body-link-font-size)]">
                  Discover Add.Law
                </span>
              </Button>
            </div>
          </div>
        </section>

        <section className="max-w-[1512px] min-w-[342px] justify-center w-full flex-[0_0_auto] flex flex-col lg:flex-row items-start gap-[var(--spacing-padding-flex-xsmall)]">
          {cards.map((feature, index) => {
            const IconComponent = Plus;
            return (
              <Card
                key={index}
                className="flex-col flex-1 flex items-start gap-[var(--spacing-padding-medium)] border-0 w-full lg:flex-1 lg:grow"
              >
                <CardContent className="items-start gap-[var(--spacing-padding-small)] self-stretch w-full flex-[0_0_auto] flex flex-col p-0">
                  <div className="flex w-9 h-9 items-center justify-center gap-2.5 px-[3px] py-1.5 rounded overflow-hidden border border-solid border-white rotate-90">
                    <div className="w-6 h-6 -rotate-90 flex items-center justify-center">
                      <IconComponent className="w-[60%] h-[50%] text-white" />
                    </div>
                  </div>

                  <div className="items-start gap-[var(--spacing-padding-xsmall)] self-stretch w-full flex-[0_0_auto] flex flex-col">
                    <h2 className="self-stretch mt-[-1.00px] font-heading-large font-[number:var(--heading-large-font-weight)] text-text-staticoncolour text-[length:var(--heading-large-font-size)] tracking-[var(--heading-large-letter-spacing)] leading-[var(--heading-large-line-height)] [font-style:var(--heading-large-font-style)]">
                      {feature.title}
                    </h2>

                    <div className="items-start self-stretch w-full flex-[0_0_auto] flex flex-col">
                      <p className="self-stretch mt-[-1.00px] font-body-regular font-[number:var(--body-regular-font-weight)] text-text-staticoncolour text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>
      </main>
    </div>
  );
}
