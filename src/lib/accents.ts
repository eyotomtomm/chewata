import type { Sport } from "./sports";

// Tailwind can't see interpolated class names, so accents are spelled out.
export const accent: Record<Sport["accent"], {
  text: string; bg: string; border: string; ring: string; chip: string; glow: string;
}> = {
  flame: {
    text: "text-flame", bg: "bg-flame", border: "border-flame",
    ring: "group-hover:ring-flame/60", chip: "bg-flame/15 text-flame",
    glow: "group-hover:shadow-flame/25",
  },
  aqua: {
    text: "text-aqua", bg: "bg-aqua", border: "border-aqua",
    ring: "group-hover:ring-aqua/60", chip: "bg-aqua/15 text-aqua",
    glow: "group-hover:shadow-aqua/25",
  },
  volt: {
    text: "text-volt", bg: "bg-volt", border: "border-volt",
    ring: "group-hover:ring-volt/60", chip: "bg-volt/15 text-volt",
    glow: "group-hover:shadow-volt/25",
  },
  grape: {
    text: "text-grape", bg: "bg-grape", border: "border-grape",
    ring: "group-hover:ring-grape/60", chip: "bg-grape/15 text-grape",
    glow: "group-hover:shadow-grape/25",
  },
};

/** Button colour on a game card — volt needs dark text, the rest need white. */
export const accentButton: Record<Sport["accent"], string> = {
  flame: "bg-flame text-white",
  aqua: "bg-aqua text-white",
  volt: "bg-volt text-ink",
  grape: "bg-grape text-white",
};
