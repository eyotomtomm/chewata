import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chawata Kids",
  description: `Organized social sport for kids across ${site.city}. Coming soon.`,
};

export default function KidsPage() {
  return (
    <section className="relative flex min-h-[80svh] flex-col justify-end overflow-hidden">
      <Image src={photos.community[0]} alt="" fill priority sizes="100vw" className="duotone object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
        <p className="eyebrow text-volt">Coming soon</p>
        <h1 className="display mt-4 max-w-2xl text-[3rem] text-cream sm:text-6xl lg:text-7xl">
          Chawata <span className="text-grape">Kids.</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
          The same thing we built for adults, made for younger players — organized games, real coaching
          and a team to belong to. We&rsquo;re putting the first season together now.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Get on the list</ButtonLink>
          <ButtonLink href="/play" variant="outline">See adult leagues</ButtonLink>
        </div>
      </div>
    </section>
  );
}
