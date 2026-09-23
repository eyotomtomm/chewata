// PLACEHOLDERS. Swap these for real Chawata game photos — this is the only
// file that needs to change. Keep the same keys.
const ph = (seed: string, w = 1200, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const photos = {
  hero: ph("chawata-hero", 1600, 1100),
  aboutHero: ph("chawata-about", 1600, 1000),
  volleyball: ph("chawata-volley"),
  basketball: ph("chawata-hoops"),
  football: ph("chawata-football"),
  padel: ph("chawata-padel"),
  running: ph("chawata-run"),
  community: [
    ph("chawata-c1", 800, 900),
    ph("chawata-c2", 800, 900),
    ph("chawata-c3", 800, 900),
  ],
} as const;
