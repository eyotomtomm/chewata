import type { SportId } from "./sports";

export type Game = {
  id: string;
  sport: SportId;
  title: string;
  venue: string;
  day: string;
  time: string;
  format: string;
  level: string;
  starts: string;
  status: "open" | "almost-full" | "full";
};

// Edit this list to change what's on the Play page, then redeploy.
// Moves to the database once editing by hand actually hurts.
export const games: Game[] = [
  { id: "thursday-social", sport: "volleyball", title: "Thursday Social", venue: "Bole", day: "Thursdays", time: "7:00 PM", format: "6v6", level: "All levels welcome", starts: "May 30", status: "open" },
  { id: "sunday-social", sport: "volleyball", title: "Sunday Social", venue: "Bole", day: "Sundays", time: "4:00 PM", format: "6v6", level: "All levels welcome", starts: "June 2", status: "open" },
  { id: "tuesday-hoops", sport: "basketball", title: "Tuesday Hoops", venue: "Kazanchis", day: "Tuesdays", time: "7:30 PM", format: "5v5", level: "Intermediate & above", starts: "May 28", status: "open" },
  { id: "saturday-run", sport: "basketball", title: "Saturday Run", venue: "Bole", day: "Saturdays", time: "5:00 PM", format: "5v5", level: "All levels welcome", starts: "June 1", status: "almost-full" },
  { id: "friday-night-7s", sport: "football", title: "Friday Night 7s", venue: "Bole", day: "Fridays", time: "8:00 PM", format: "7v7", level: "All levels welcome", starts: "May 31", status: "open" },
  { id: "sunday-kickabout", sport: "football", title: "Sunday Kickabout", venue: "Jemmeda", day: "Sundays", time: "8:00 AM", format: "7v7", level: "All levels welcome", starts: "June 2", status: "open" },
];

export const gamesBySport = (sport: SportId) => games.filter((g) => g.sport === sport);

export const statusLabel: Record<Game["status"], string> = {
  open: "Open",
  "almost-full": "Almost full",
  full: "Full",
};
