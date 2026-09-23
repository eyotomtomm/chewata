"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Don't let the page scroll behind an open drawer.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" aria-label="Chawata home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`eyebrow relative py-2 transition-colors ${active ? "text-cream" : "text-cream/60 hover:text-cream"}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-flame transition-all duration-300 ease-out-quint ${active ? "w-full" : "w-0"}`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/join" arrow={false} className="hidden px-5 py-2.5 sm:inline-flex">
            Join Chawata
          </ButtonLink>
          <button
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-11 w-11 items-center justify-center text-cream lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-6">
              <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ease-out-quint ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ease-out-quint ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

    </header>

      {/* Mobile drawer — sibling of the header, not a child (see above).
          Any click inside closes it, which covers every link without an effect. */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-ink px-4 pb-8 transition-all duration-300 ease-out-quint lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col pt-4">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
              className={`display border-b border-cream/10 py-5 text-4xl transition-all duration-500 ease-out-quint ${
                pathname === item.href ? "text-flame" : "text-cream"
              } ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/join" className="mt-8 w-full">
          Join Chawata
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline" className="mt-3 w-full">
          Corporate & team days
        </ButtonLink>
      </div>
    </>
  );
}
