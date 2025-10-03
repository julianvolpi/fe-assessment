// app/(components)/navbar.tsx
// "use client";

import Link from "next/link";

const NAV = [
  { label: "What we do", href: "/#hero" },
  { label: "Case studies", href: "/#studies" }, // TODO: implement
  { label: "Services", href: "/#services" }, // TODO: implement
  { label: "How we partner", href: "/#how-we-partner" }, // TODO: implement
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b h-[var(--nav-h)]">
      <nav className="container mx-auto flex items-center justify-end gap-6 h-full">
        {NAV.map((i) => (
          <Link key={i.href} href={i.href} className="text-sm hover:opacity-80">
            {i.label}
          </Link>
        ))}
        <Link href="/#contact" className="btn btn-primary">Talk to us</Link>
      </nav>
    </header>
  );
}
