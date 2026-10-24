import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { SportCard } from "@/components/SportCard";
import { MetaIcon, ValueIcon } from "@/components/Icons";
import { sports } from "@/lib/sports";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Play",
  description: `Pick your sport and register for the season. Volleyball, basketball and 7v7 football across ${site.city}.`,
};

export default function PlayPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-cream/10 bg-ink-800 px-4 pb-10 pt-14 text-center sm:px-6 lg:pb-14 lg:pt-20">
        <div className="drift pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-flame/20 blur-[100px]" />
        <div className="relative mx-auto max-w-2xl">
          <h1 className="display text-4xl text-cream sm:text-5xl lg:text-6xl">
            What do you want to play?
          </h1>
          <p className="mt-4 text-[0.9375rem] text-cream/60">
            Pick your sport and register for the season.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="rail -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
          {sports.map((sport) => (
            <SportCard key={sport.id} sport={sport} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-cream/55">
          Game days, times and venues are announced once teams are set. Register now and we&rsquo;ll be in touch.
        </p>
      </div>

      {/* Reassurance strip */}
      <section className="border-y border-cream/10 bg-ink-800">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <MetaIcon.calendar className="h-9 w-9 shrink-0 text-volt" />
            <div>
              <h3 className="eyebrow text-cream">Seasons throughout the year</h3>
              <p className="mt-1.5 text-sm text-cream/60">
                Register your interest any time and we&rsquo;ll place you in the next season.
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
