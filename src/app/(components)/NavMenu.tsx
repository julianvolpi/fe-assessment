import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function NavMenu({
  logoSrc,
  navItems,
  cta,
  onClose,
}: {
  logoSrc: string;
  navItems: { label: string; href: string }[];
  cta: { label: string; href: string };
  onClose: () => void;
}) {
  return (
    <div
      className="flex flex-col w-full min-w-page max-w-[395px] items-start bg-white absolute top-0 fixed inset-y-0 right-0 border-l border-border z-50"
      data-spacing-mode="small-sm"
    >
      <header className="flex items-center justify-between pt-[var(--spacing-padding-xsmall)] pr-[var(--spacing-margins)] pb-[var(--spacing-padding-xsmall)] pl-[var(--spacing-margins)] w-full bg-transparent">
        <Image
          className="relative w-[129px] h-[19px] bg-[100%_100%]"
          alt="Brand logo"
          src={logoSrc}
          width={129}
          height={19}
        />

        <Button
          variant="ghost"
          size="icon"
          className="w-11 h-11"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </Button>
      </header>

      <nav className="flex flex-col w-full">
        {navItems.map((item, index) => (
          <Button
            key={index}
            className="flex h-[66px] justify-start items-center gap-2.5 pt-[var(--spacing-padding-xsmall)] pr-[var(--spacing-padding-flex-xsmall)] pb-[var(--spacing-padding-xsmall)] pl-[var(--spacing-padding-flex-xsmall)] w-full bg-white text-left hover:bg-gray-50 transition-colors"
            onClick={onClose}
          >
            <a href={item.href} className="block w-full text-left">
              <span className="[font-family:'Figtree-Regular',Helvetica] font-normal text-[#2a223f] text-lg tracking-[0] leading-[normal]">
                {item.label}
              </span>
            </a>
          </Button>
        ))}
      </nav>

      <div className="flex flex-col items-start pt-[var(--spacing-padding-small)] pr-[var(--spacing-padding-small)] pb-[var(--spacing-padding-small)] pl-[var(--spacing-padding-small)] w-full pb-6">
        <Button className="w-full md:w-[159px] h-11 bg-[#2a223f] hover:bg-[#3a3353] rounded text-text-staticoncolour font-body-link font-[number:var(--body-link-font-weight)] text-[length:var(--body-link-font-size)] tracking-[var(--body-link-letter-spacing)] leading-[var(--body-link-line-height)]">
          {cta.label}
        </Button>
      </div>
    </div>
  );
}
