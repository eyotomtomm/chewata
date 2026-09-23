import Image from "next/image";
import Link from "next/link";
import { accent, accentButton } from "@/lib/accents";
import { photos } from "@/lib/photos";
import { statusLabel, type Game } from "@/lib/games";
import { sportById } from "@/lib/sports";
import { MetaIcon } from "./Icons";

export function GameCard({ game }: { game: Game }) {
  const sport = sportById(game.sport)!;
  const a = accent[sport.accent];
  const full = game.status === "full";

  const meta = [
    { Icon: MetaIcon.pin, text: game.venue },
    { Icon: MetaIcon.clock, text: `${game.day}, ${game.time}` },
    { Icon: MetaIcon.users, text: game.format },
    { Icon: MetaIcon.level, text: game.level },
    { Icon: MetaIcon.calendar, text: `Starts ${game.starts}` },
  ];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-ink-800 ring-1 ring-cream/10 transition-all duration-300 ease-out-quint hover:-translate-y-1 hover:ring-cream/25">
      <div className="relative h-36 overflow-hidden">
        <Image
          src={photos[game.sport]}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="duotone object-cover transition-transform duration-700 ease-out-quint group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/50 to-ink/40" />
        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
          <h3 className="display text-xl text-cream drop-shadow">{game.title}</h3>
          <span
            className={`eyebrow relative shrink-0 rounded-full px-2.5 py-1 ${
              game.status === "almost-full"
                ? "pulse-ring bg-flame/20 text-flame"
                : full
                  ? "bg-cream/10 text-cream/50"
                  : a.chip
            }`}
          >
            {statusLabel[game.status]}
          </span>
        </div>
      </div>

      <dl className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
        {meta.map(({ Icon, text }) => (
          <div key={text} className="flex items-center gap-2.5 text-[0.8125rem] text-cream/65">
            <Icon className="h-4 w-4 shrink-0 text-cream/35" />
            <dd>{text}</dd>
          </div>
        ))}
      </dl>

      <div className="px-4 pb-4">
        {full ? (
          <span className="flex w-full items-center justify-center rounded-full bg-cream/8 px-4 py-2.5 text-sm font-semibold text-cream/40">
            Waitlist only
          </span>
        ) : (
          <Link
            href={`/join?game=${game.id}`}
            className={`flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ease-out-quint hover:brightness-110 active:scale-[0.97] ${accentButton[sport.accent]}`}
          >
            Join this game
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
              <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>
    </article>
  );
}
