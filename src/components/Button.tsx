import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-sm tracking-wide transition-all duration-200 ease-out-quint active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-flame text-white hover:bg-flame/90 hover:-translate-y-0.5 shadow-lg shadow-flame/25",
  volt: "bg-volt text-ink hover:bg-volt/90 hover:-translate-y-0.5 shadow-lg shadow-volt/20",
  outline: "border border-cream/25 text-cream hover:border-cream/60 hover:bg-cream/5",
  dark: "bg-ink text-cream hover:bg-ink-800 hover:-translate-y-0.5",
};

export type ButtonVariant = keyof typeof variants;

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-200 ease-out-quint group-hover:translate-x-1" aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ButtonLink({
  href, variant = "primary", arrow = true, children, className = "",
}: { href: string; variant?: ButtonVariant; arrow?: boolean; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function Button({
  variant = "primary", arrow = false, children, className = "", ...props
}: ComponentProps<"button"> & { variant?: ButtonVariant; arrow?: boolean }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
