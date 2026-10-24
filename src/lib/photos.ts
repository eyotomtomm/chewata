// PLACEHOLDERS. Swap these for real Chewata game photos — this is the only
// file that needs to change. Keep the same keys.
const ph = (seed: string, w = 1200, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const photos = {
  hero: ph("chewata-hero", 1600, 1100),
  aboutHero: ph("chewata-about", 1600, 1000),
  volleyball: ph("chewata-volley"),
  basketball: ph("chewata-hoops"),
  football: ph("chewata-football"),
  community: [
    ph("chewata-c1", 800, 900),
    ph("chewata-c2", 800, 900),
    ph("chewata-c3", 800, 900),
  ],
} as const;
