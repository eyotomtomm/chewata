import type { Metadata } from "next";
import { Suspense } from "react";
import { MetaIcon, ValueIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { JoinForm } from "./JoinForm";

export const metadata: Metadata = {
  title: "Join Season 1",
  description: `Tell us what you want to play. Once we have enough players we'll confirm your spot and send payment details. Season 1 across ${site.city}.`,
};

const facts = [
  { Icon: ValueIcon.people, title: "All levels welcome", body: "Whether you play for fun or to compete." },
  { Icon: MetaIcon.calendar, title: "Weekend & evening games", body: "Games on weekends and weekday evenings." },
  { Icon: MetaIcon.pin, title: `Across ${site.city}`, body: "We play in quality venues across the city." },
];

export default function JoinPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="drift pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-flame/25 blur-[110px]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <h1 className="display text-4xl text-cream sm:text-5xl lg:text-6xl">
              Join <span className="text-flame">Season 1</span>
            </h1>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-cream/65">
              Tell us what you want to play. Once we have enough players, we&rsquo;ll confirm your spot
              and send your payment details.
            </p>
          </div>
          <div className="relative grid gap-5 sm:grid-cols-3">
            {facts.map(({ Icon, title, body }) => (
              <div key={title}>
                <Icon className="h-7 w-7 text-volt" />
                <h2 className="eyebrow mt-3 text-cream">{title}</h2>
                <p className="mt-1.5 text-xs leading-relaxed text-cream/50">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-white/60" />}>
            <JoinForm />
          </Suspense>
        </div>
      </div>
    </>
  );
}
