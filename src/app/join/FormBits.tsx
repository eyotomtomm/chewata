"use client";

import type { ReactNode } from "react";

export function Section({ n, title, hint, children }: { n: number; title: string; hint?: string; children: ReactNode }) {
  return (
    <section className="reveal rounded-2xl border border-ink/10 bg-white p-5 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-flame text-sm text-white">
          {n}
        </span>
        <div>
          <h2 className="eyebrow pt-1.5 text-ink">{title}</h2>
          {hint && <p className="mt-1 text-xs text-ink/50">{hint}</p>}
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function Label({ children, required }: { children: ReactNode; required?: boolean }) {
  return (
    <span className="mb-1.5 block text-[0.8125rem] font-medium text-ink/80">
      {children}
      {required && <span className="ml-0.5 text-flame">*</span>}
    </span>
  );
}

const fieldBase =
  "w-full rounded-lg border border-ink/15 bg-white px-3.5 py-3 text-[0.9375rem] text-ink transition-all duration-200 placeholder:text-ink/30 focus:border-flame focus:ring-4 focus:ring-flame/12 focus:outline-none";

export function Input(props: React.ComponentProps<"input">) {
  return <input {...props} className={`${fieldBase} ${props.className ?? ""}`} />;
}

export function Select(props: React.ComponentProps<"select">) {
  return (
    <select
      {...props}
      className={`${fieldBase} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="%23999" stroke-width="1.6"><path d="M4 6.5 8 10.5 12 6.5"/></svg>')] bg-[length:16px] bg-[right_0.9rem_center] bg-no-repeat pr-10 ${props.className ?? ""}`}
    />
  );
}

/** Checkbox and radio share everything but the shape and the multi/single semantics. */
export function Choice({
  type, checked, onChange, label, sub,
}: { type: "checkbox" | "radio"; checked: boolean; onChange: () => void; label: ReactNode; sub?: string }) {
  return (
    <label className="group flex cursor-pointer items-start gap-2.5 py-1.5">
      <span
        className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center border transition-all duration-200 ease-out-quint ${
          type === "checkbox" ? "rounded-[5px]" : "rounded-full"
        } ${checked ? "border-flame bg-flame scale-100" : "border-ink/25 bg-white group-hover:border-flame/50"}`}
      >
        {type === "checkbox" ? (
          <svg viewBox="0 0 12 12" className={`h-3 w-3 text-white transition-all duration-200 ease-out-quint ${checked ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
            <path d="M2.5 6.2 4.8 8.5 9.5 3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <span className={`h-1.5 w-1.5 rounded-full bg-white transition-all duration-200 ease-out-quint ${checked ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
        )}
      </span>
      <input type={type} checked={checked} onChange={onChange} className="sr-only" />
      <span className="text-[0.875rem] leading-snug text-ink/85">
        {label}
        {sub && <span className="mt-0.5 block text-xs text-ink/45">{sub}</span>}
      </span>
    </label>
  );
}

/** Slides open/closed without a fixed height. */
export function Reveal({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <div
      className={`grid transition-all duration-400 ease-out-quint ${
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
