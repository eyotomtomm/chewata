export type SportId = "basketball" | "volleyball" | "football" | "padel" | "running";

export type Sport = {
  id: SportId;
  name: string;
  tagline: string;
  /** Season price in ETB. Running club is priced per season too, just cheaper. */
  price: number;
  /** Tailwind colour token for this sport's accent. */
  accent: "flame" | "aqua" | "volt" | "grape";
  /** Shown on the Play page; sports not yet running are listed but not bookable. */
  live: boolean;
};

export const sports: Sport[] = [
  { id: "volleyball", name: "Volleyball", tagline: "Serve. Rally. Connect.", price: 7000, accent: "aqua", live: true },
  { id: "basketball", name: "Basketball", tagline: "Run the court.", price: 7000, accent: "flame", live: true },
  { id: "football", name: "7v7 Football", tagline: "Your weekly kickabout.", price: 7000, accent: "volt", live: true },
  { id: "padel", name: "Padel", tagline: "Four walls, endless rallies.", price: 7000, accent: "grape", live: false },
  { id: "running", name: "Running Club", tagline: "Show up. Move. Repeat.", price: 3000, accent: "aqua", live: false },
];

export const sportById = (id: string) => sports.find((s) => s.id === id);

/** Season total for a set of chosen sports. Unknown ids are ignored, not counted as 0-priced. */
export function seasonTotal(ids: readonly string[]): number {
  return [...new Set(ids)].reduce((sum, id) => sum + (sportById(id)?.price ?? 0), 0);
}

export const formatETB = (n: number) => `${n.toLocaleString("en-US")} ETB`;
