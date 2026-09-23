export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 28" className="h-7 w-10 shrink-0" aria-hidden="true">
        <path d="M14 4a10 10 0 1 0 0 20" fill="none" stroke="var(--color-flame)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M26 24a10 10 0 1 0 0-20" fill="none" stroke="var(--color-cream)" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="20" cy="14" r="3" fill="var(--color-volt)" />
      </svg>
      <span className="leading-none">
        <span className="display block text-[1.15rem] text-cream">Chawata</span>
        <span className="eyebrow block text-[0.5rem] text-cream/50">The Social Sports League</span>
      </span>
    </span>
  );
}
