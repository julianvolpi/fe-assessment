import { Button } from "@/components/ui/button";
import { FooterBlock } from "@/types/blocks";
import React from "react";
import Image from "next/image";

export default function FooterModule({
  id,
  navItems,
  connectItems,
  contactItems,
  logoSrc,
  subheading,
}: FooterBlock) {
  return (
    <footer id={id} className="bg-[#2a223f] w-full">
      <div className="flex flex-col md:flex-row flex-wrap max-w-page min-w-page justify-center gap-[var(--spacing-padding-flex-large)] flex-1 grow items-start mx-auto w-full pl-[var(--spacing-padding-medium)] pt-[var(--spacing-padding-flex-large)] pr-[var(--spacing-padding-medium)] pb-[var(--spacing-padding-flex-large)]">
        <div className="pl-3 flex flex-col items-start gap-[var(--spacing-padding-small)] flex-1 grow">
          <Image
            className="relative w-[129px] h-[19px] bg-[100%_100%]"
            alt="Brand logo"
            src={logoSrc}
            width={129}
            height={19}
          />

          <div className="flex flex-col gap-9 self-stretch w-full flex-[0_0_auto] items-start">
            <p className="self-stretch mt-[-1.00px] font-heading-regular font-[number:var(--heading-regular-font-weight)] text-text-staticoncolour text-[length:var(--heading-regular-font-size)] tracking-[var(--heading-regular-letter-spacing)] leading-[var(--heading-regular-line-height)] [font-style:var(--heading-regular-font-style)]">
              {subheading}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-10 flex-1 grow">
          <div className="flex flex-col gap-[var(--spacing-padding-small)] flex-1 grow items-start">
            <h3 className="pl-3 self-stretch mt-[-1.00px] font-heading-small font-[number:var(--heading-small-font-weight)] text-[#a29ccd] text-[length:var(--heading-small-font-size)] tracking-[var(--heading-small-letter-spacing)] leading-[var(--heading-small-line-height)] [font-style:var(--heading-small-font-style)]">
              EXPLORE
            </h3>

            <nav className="inline-flex flex-col justify-center flex-[0_0_auto] items-start">
              {navItems.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-9 items-center justify-center rounded-md hover:bg-transparent"
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
            </nav>
          </div>

          <div className="flex flex-col gap-[var(--spacing-padding-small)] flex-1 grow items-start">
            <h3 className="pl-3 self-stretch mt-[-1.00px] font-heading-small font-[number:var(--heading-small-font-weight)] text-[#a29ccd] text-[length:var(--heading-small-font-size)] tracking-[var(--heading-small-letter-spacing)] leading-[var(--heading-small-line-height)] [font-style:var(--heading-small-font-style)]">
              CONNECT
            </h3>

            <nav className="inline-flex flex-col justify-center flex-[0_0_auto] items-start">
              {connectItems.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-9 items-center justify-center rounded-md hover:bg-transparent"
                  asChild
                >
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex items-center justify-center w-fit font-body-link font-[number:var(--body-link-font-weight)] text-interactionsondarktext-link-default text-[length:var(--body-link-font-size)] text-center tracking-[var(--body-link-letter-spacing)] leading-[var(--body-link-line-height)] whitespace-nowrap [font-style:var(--body-link-font-style)]"
                  >
                    {link.label}
                  </a>
                </Button>
              ))}
            </nav>
          </div>

          <div className="pl-3 flex flex-col gap-[var(--spacing-padding-small)] flex-1 grow items-start">
            <h3 className="self-stretch mt-[-1.00px] font-heading-small font-[number:var(--heading-small-font-weight)] text-[#a29ccd] text-[length:var(--heading-small-font-size)] tracking-[var(--heading-small-letter-spacing)] leading-[var(--heading-small-line-height)] [font-style:var(--heading-small-font-style)]">
              CONTACT
            </h3>

            <span className="font-body-small text-white leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)] font-[number:var(--body-small-font-weight)] tracking-[var(--body-small-letter-spacing)] text-[length:var(--body-small-font-size)]">
              {contactItems.map((item, index) => (
                <React.Fragment key={index}>
                  <p className="whitespace-pre-line">{item}</p>
                  <br />
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
