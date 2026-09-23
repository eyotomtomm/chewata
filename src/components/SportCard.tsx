import Image from "next/image";
import Link from "next/link";
import { accent } from "@/lib/accents";
import { photos } from "@/lib/photos";
import { SportIcon } from "./Icons";
import type { Sport } from "@/lib/sports";

export function SportCard({ sport }: { sport: Sport }) {
  const a = accent[sport.accent];
  const Icon = SportIcon[sport.id];
  const photo = photos[sport.id];

  return (
    <Link
      href={`/play#${sport.id}`}
      className={`group relative flex aspect-[4/5] w-[78vw] shrink-0 flex-col justify-end overflow-hidden rounded-2xl bg-ink-800 ring-1 ring-cream/10 transition-all duration-300 ease-out-quint hover:-translate-y-1 hover:shadow-2xl sm:aspect-[3/4] sm:w-auto ${a.ring} ${a.glow}`}
    >
      <Image
        src={photo}
        alt=""
        fill
        sizes="(max-width: 640px) 78vw, 33vw"
        className="duotone object-cover transition-transform duration-700 ease-out-quint group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25" />
      <div className={`absolute inset-x-0 bottom-0 h-1 ${a.bg} origin-left scale-x-0 transition-transform duration-500 ease-out-quint group-hover:scale-x-100`} />

      <div className="relative p-5">
        <Icon className={`mb-3 h-8 w-8 ${a.text}`} />
        <h3 className={`display text-2xl ${a.text}`}>{sport.name}</h3>
        <p className="mt-1 text-sm text-cream/75">{sport.tagline}</p>
      </div>
    </Link>
  );
}
