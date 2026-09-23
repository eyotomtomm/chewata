type P = { className?: string };
const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const SportIcon = {
  volleyball: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c3 4 3 10 0 18M3.2 10c4.6 1.3 9.7-.6 13.4-5.2M4.5 17.5c3.6-3 9-3.6 14-.9" />
    </svg>
  ),
  basketball: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18M5.6 5.6c3.8 3.8 3.8 9 0 12.8M18.4 5.6c-3.8 3.8-3.8 9 0 12.8" />
    </svg>
  ),
  football: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m12 8 3.6 2.6-1.4 4.3H9.8l-1.4-4.3L12 8ZM12 3v5M4.2 9.5 8.4 10.6M19.8 9.5l-4.2 1.1M6.8 18.6l3-3.7M17.2 18.6l-3-3.7" />
    </svg>
  ),
  padel: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <path d="M14.5 3c3.6 0 6 2.6 6 6s-2.6 6.4-6 6.4-6-2.8-6-6.4 2.4-6 6-6Z" />
      <path d="M10.3 13.7 4.6 19.4M3.2 20.8l1.4-1.4" />
      <circle cx="14.5" cy="9.2" r="1" />
    </svg>
  ),
  running: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <circle cx="15" cy="4.5" r="1.8" />
      <path d="m8 21 2.6-5.2L8 12.8l1-4.8 3.4-1.4 2.4 3.3 3 1.2M10 9 6 10.2 4.8 13M14.2 14.4l1.6 2.6L19 19" />
    </svg>
  ),
} as const;

export const ValueIcon = {
  people: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.6 6-5.6s6 2.3 6 5.6" />
      <path d="M16.5 6.4a3.2 3.2 0 0 1 0 6.2M17.5 14.9c2.1.7 3.5 2.6 3.5 5.1" />
    </svg>
  ),
  vibes: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.2c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8" />
      <path d="M9 9.5h.01M15 9.5h.01" strokeWidth="2.2" />
    </svg>
  ),
  active: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <path d="M2.5 15.5h6.8l2.4-3.4 2 5.2 2.2-8 1.8 6.2h3.8" />
      <path d="M4 18.8h16" />
    </svg>
  ),
  heart: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <path d="M12 20.2S3.5 15.4 3.5 9.6A4.1 4.1 0 0 1 12 7.3a4.1 4.1 0 0 1 8.5 2.3c0 5.8-8.5 10.6-8.5 10.6Z" />
    </svg>
  ),
} as const;

export const MetaIcon = {
  pin: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <path d="M12 21s6.5-5.6 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </svg>
  ),
  clock: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.3l3.2 2" />
    </svg>
  ),
  users: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.5c0-3.4 2.9-5.8 6.5-5.8s6.5 2.4 6.5 5.8" />
    </svg>
  ),
  level: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <path d="M4 20V13M10 20V8M16 20v-9M22 20V4" />
    </svg>
  ),
  calendar: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className} {...s} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.8h17M8.5 3v4M15.5 3v4" />
    </svg>
  ),
} as const;
