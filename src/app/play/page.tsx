import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { GameCard } from "@/components/GameCard";
import { SportIcon, MetaIcon, ValueIcon } from "@/components/Icons";
import { accent } from "@/lib/accents";
import { games, gamesBySport } from "@/lib/games";
import { sports } from "@/lib/sports";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Play",
  description: `Pick your sport and find a game that fits your week. Volleyball, basketball and 7v7 football across ${site.city}.`,
};

export default function PlayPage() {
  const live = sports.filter((s) => s.live);

  return (
    <>
      <section className="relative overflow-hidden border-b border-cream/10 bg-ink-800 px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="drift pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-flame/20 blur-[100px]" />
        <div className="relative mx-auto max-w-2xl">
          <h1 className="display text-4xl text-cream sm:text-5xl lg:text-6xl">
            What do you want to play?
          </h1>
          <p className="mt-4 text-[0.9375rem] text-cream/60">
            Pick your sport and find a game that fits your week.
          </p>
        </div>

        {/* Sport jump links */}
        <div className="rail mx-auto mt-8 -mb-2 flex max-w-4xl gap-3 overflow-x-auto px-1 pb-2 sm:justify-center">
          {live.map((s) => {
            const a = accent[s.accent];
            const Icon = SportIcon[s.id];
            return (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className={`group flex shrink-0 items-center gap-2.5 rounded-full border px-5 py-3 transition-all duration-200 ease-out-quint hover:-translate-y-0.5 ${a.border} ${a.chip}`}
              >
                <Icon className="h-5 w-5 transition-transform duration-500 ease-out-quint group-hover:rotate-180" />
                <span className="display text-sm">{s.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Games grouped by sport */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {live.map((sport) => {
          const list = gamesBySport(sport.id);
          const a = accent[sport.accent];
          const Icon = SportIcon[sport.id];
          return (
            <section key={sport.id} id={sport.id} className="mb-14 scroll-mt-24 last:mb-0">
              <div className="mb-6 flex items-center gap-3">
                <Icon className={`h-7 w-7 ${a.text}`} />
                <h2 className={`display text-2xl sm:text-3xl ${a.text}`}>{sport.name}</h2>
                <span className="ml-auto text-xs text-cream/40">
                  {list.length} {list.length === 1 ? "game" : "games"}
                </span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((game) => (
                  <div key={game.id} className="reveal">
                    <GameCard game={game} />
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {games.length === 0 && (
          <p className="py-20 text-center text-cream/50">No games scheduled yet — check back soon.</p>
        )}
      </div>

      {/* Reassurance strip */}
      <section className="border-y border-cream/10 bg-ink-800">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <MetaIcon.calendar className="h-9 w-9 shrink-0 text-volt" />
            <div>
              <h3 className="eyebrow text-cream">Seasons throughout the year</h3>
              <p className="mt-1.5 text-sm text-cream/60">
                New games every month. Jump in whenever you&rsquo;re ready.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <ValueIcon.people className="h-9 w-9 shrink-0 text-aqua" />
            <div>
              <h3 className="eyebrow text-cream">Play solo or with friends</h3>
              <p className="mt-1.5 text-sm text-cream/60">
                Join as an individual or register your team — we place you either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate CTA — also requested on Play */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="reveal flex flex-col gap-6 rounded-3xl border border-cream/15 bg-gradient-to-br from-ink-800 to-ink p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow text-volt">Corporate & groups</p>
            <h2 className="display mt-3 text-3xl text-cream sm:text-4xl">
              Want a field day for your company?
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/60">
              We run private field days and active retreats — your team, your date, our venues and
              referees.
            </p>
          </div>
          <ButtonLink href="/contact" variant="volt" className="shrink-0">
            Talk to us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
