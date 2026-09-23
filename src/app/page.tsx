import Image from "next/image";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/Button";
import { SportCard } from "@/components/SportCard";
import { ValueIcon } from "@/components/Icons";
import { photos } from "@/lib/photos";
import { sports } from "@/lib/sports";
import { site } from "@/lib/site";

const values = [
  { Icon: ValueIcon.people, title: "Real people", body: "Meet new people and make lasting connections.", color: "text-aqua" },
  { Icon: ValueIcon.vibes, title: "Good vibes", body: "Fun, friendly games in a positive environment.", color: "text-flame" },
  { Icon: ValueIcon.active, title: "Stay active", body: "Move your body, clear your mind.", color: "text-volt" },
  { Icon: ValueIcon.heart, title: "More than a game", body: "Be part of a community that shows up for each other.", color: "text-grape" },
];

export default function HomePage() {
  const live = sports.filter((s) => s.live);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden lg:min-h-[92svh]">
        <Image
          src={photos.hero}
          alt="Chawata players on court in Addis Ababa"
          fill
          priority
          sizes="100vw"
          className="duotone ken-burns object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pb-24">
          <p className="fade-up eyebrow mb-5 text-volt">{site.city} · Season 1 open</p>
          <h1 className="display text-[3.5rem] leading-[0.85] text-cream sm:text-7xl lg:text-8xl">
            <span className="line-mask"><span style={{ "--d": "80ms" } as CSSProperties}>Come play.</span></span>
            <span className="line-mask"><span className="text-flame" style={{ "--d": "200ms" } as CSSProperties}>Connect.</span></span>
            <span className="line-mask"><span style={{ "--d": "320ms" } as CSSProperties}>Belong.</span></span>
          </h1>
          <p className="fade-up mt-6 max-w-md text-base leading-relaxed text-cream/75 lg:text-lg" style={{ "--d": "460ms" } as CSSProperties}>
            {site.description}
          </p>
          <div className="fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--d": "580ms" } as CSSProperties}>
            <ButtonLink href="/join">Join Chawata</ButtonLink>
            <ButtonLink href="/play" variant="outline">
              See this week&rsquo;s games
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Sports rail */}
      <section className="relative -mt-2 pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rail -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
            {live.map((sport) => (
              <SportCard key={sport.id} sport={sport} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-cream/10 bg-ink-800">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-20">
          {values.map(({ Icon, title, body, color }) => (
            <div key={title} className="reveal">
              <Icon className={`draw h-9 w-9 ${color}`} />
              <h3 className="eyebrow mt-4 text-cream">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <Stats />

      <Marquee />

      {/* Corporate — the CTA the brief asked for */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
        <div className="reveal relative overflow-hidden rounded-3xl bg-cream px-6 py-12 text-ink sm:px-12 lg:px-16 lg:py-20">
          <div className="drift absolute -right-16 -top-16 h-56 w-56 rounded-full bg-volt/40 blur-3xl" />
          <div className="drift-2 absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-flame/25 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="eyebrow text-flame">For companies & teams</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Bring your team<br />
              out to <span className="text-flame">play.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">
              We build field days and active retreats for companies across {site.city} — venues, referees,
              kit and the whole run of play. You just show up.
            </p>
            <ButtonLink href="/contact" variant="dark" className="mt-8">
              Plan a field day
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function Stats() {
  const stats = [
    { to: 6, suffix: "", label: "Weekly games" },
    { to: 3, suffix: "", label: "Sports live now" },
    { to: 8, suffix: "", label: "Week season" },
    { to: 120, suffix: "+", label: "Players placed" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="reveal border-l-2 border-flame/50 pl-4">
            <p className="display flex items-baseline text-5xl text-cream lg:text-6xl">
              <span className="count-up" style={{ "--to": s.to } as CSSProperties} />
              <span className="text-flame">{s.suffix}</span>
            </p>
            <p className="eyebrow mt-2 text-cream/45">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Volleyball", "Basketball", "7v7 Football", "Padel", "Running Club", "All levels welcome"];
  return (
    <div className="flex overflow-hidden border-b border-cream/10 bg-flame py-4 select-none">
      <div className="marquee-track flex shrink-0 gap-8 pr-8">
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className="display shrink-0 text-2xl text-white/95 sm:text-3xl">
            {w} <span className="text-ink/40">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
