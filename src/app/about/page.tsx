import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { SportIcon } from "@/components/Icons";
import { photos } from "@/lib/photos";
import { sports } from "@/lib/sports";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Chawata is an organized social sports league built to get people out, moving, meeting new people and having fun in ${site.city}.`,
};

const pillars = [
  { label: "Play.", color: "bg-volt text-ink", Icon: SportIcon.running },
  { label: "Meet.", color: "bg-aqua text-white", Icon: SportIcon.volleyball },
  { label: "Connect.", color: "bg-grape text-white", Icon: SportIcon.basketball },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden">
        <Image src={photos.aboutHero} alt="" fill priority sizes="100vw" className="duotone object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20">
          <p className="eyebrow mb-5 text-volt">About Chawata</p>
          <h1 className="display max-w-2xl text-[3.25rem] text-cream sm:text-7xl lg:text-8xl">
            Life is better<br />when we <span className="text-volt">play.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75">
            Chawata is an organized social sports league built to get people out, moving, meeting new
            people and having fun.
          </p>
          <ButtonLink href="/play" variant="volt" className="mt-8">
            Come play
          </ButtonLink>
        </div>
      </section>

      {/* Why + mission — cream block */}
      <section className="bg-cream text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">
          <div className="reveal">
            <p className="eyebrow text-ink/40">01 — Why Chawata exists</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              We could all use<br />a little more <span className="text-flame">play.</span>
            </h2>
            <div className="mt-6 space-y-4 text-[0.9375rem] leading-relaxed text-ink/70">
              <p>
                We spend more time indoors, behind screens and moving between work, school and home. At
                the same time, finding ways to meet people, stay active and simply have fun can be
                surprisingly difficult.
              </p>
              <p>
                Chawata creates an easy way to change that. Pick a sport, join a league and show up. We
                take care of organizing the rest.
              </p>
            </div>
          </div>

          <div className="reveal">
            <p className="eyebrow text-ink/40">02 — Our mission</p>
            <p className="mt-4 text-xl leading-relaxed text-ink/80 sm:text-2xl">
              Our mission is to make it easier for people to get out, get moving, play, connect and
              belong through organized social sport.
            </p>
            <div className="mt-10 flex gap-6 sm:gap-10">
              {pillars.map(({ label, color, Icon }) => (
                <div key={label}>
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full ${color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <p className="display mt-3 text-lg">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sports strip */}
        <div className="mx-auto max-w-7xl border-t border-ink/10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="reveal">
              <p className="eyebrow text-ink/40">03 — What is Chawata?</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl">
                Sport is our game.<br />People are <span className="text-volt [text-shadow:0_0_1px_rgba(0,0,0,.5)]">our why.</span>
              </h2>
            </div>
            <p className="reveal max-w-md self-end text-[0.9375rem] leading-relaxed text-ink/70">
              Chawata is a social sports league for kids and adults. You can sign up with friends or on
              your own. We place you in a team, organize the games and create a space where everyone can
              show up, compete, laugh and belong.
            </p>
          </div>

          <ul className="rail mt-12 -mx-4 flex gap-8 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0 lg:grid-cols-6">
            {sports.map((s) => {
              const Icon = SportIcon[s.id];
              return (
                <li key={s.id} className="flex shrink-0 flex-col items-center gap-3 text-center">
                  <Icon className="h-10 w-10 text-ink/80" />
                  <span className="eyebrow text-ink/70">{s.name}</span>
                </li>
              );
            })}
            <li className="flex shrink-0 flex-col items-center gap-3 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 text-xl text-ink/60">
                +
              </span>
              <span className="eyebrow text-ink/50">More<br />to come</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Not an athlete */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <div className="reveal">
            <p className="eyebrow text-volt">04 — Sport without all the seriousness</p>
            <h2 className="display mt-4 text-4xl text-cream sm:text-5xl lg:text-6xl">
              You don&rsquo;t have to be<br />an athlete to <span className="text-volt">play.</span>
            </h2>
            <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-cream/65">
              We keep things competitive enough to keep it interesting, but social enough to remember why
              we started playing in the first place.
            </p>
            <ButtonLink href="/join" className="mt-8">
              Join Season 1
            </ButtonLink>
          </div>

          <div className="reveal grid grid-cols-3 gap-3">
            {photos.community.map((src, i) => (
              <div
                key={src}
                className={`relative aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-cream/10 ${i === 1 ? "mt-8" : ""}`}
              >
                <Image src={src} alt="" fill sizes="33vw" className="duotone object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
