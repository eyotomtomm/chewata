export type SportId = "basketball" | "volleyball" | "football";

export type Sport = {
  id: SportId;
  name: string;
  tagline: string;
  /** Season price in ETB. */
  price: number;
  /** Tailwind colour token for this sport's accent. */
  accent: "flame" | "aqua" | "volt";
};

export const sports: Sport[] = [
  { id: "volleyball", name: "Volleyball", tagline: "Serve. Rally. Connect.", price: 7500, accent: "aqua" },
  { id: "basketball", name: "Basketball", tagline: "Run the court.", price: 7500, accent: "flame" },
  { id: "football", name: "7v7 Football", tagline: "Your weekly kickabout.", price: 7500, accent: "volt" },
];

export const sportById = (id: string) => sports.find((s) => s.id === id);

/** Season total for a set of chosen sports. Unknown ids are ignored, not counted as 0-priced. */
export function seasonTotal(ids: readonly string[]): number {
  return [...new Set(ids)].reduce((sum, id) => sum + (sportById(id)?.price ?? 0), 0);
}

export const formatETB = (n: number) => `${n.toLocaleString("en-US")} ETB`;
