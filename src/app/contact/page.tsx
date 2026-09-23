import type { Metadata } from "next";
import { ValueIcon, MetaIcon, SportIcon } from "@/components/Icons";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate & Contact",
  description: `Field days, active retreats and corporate leagues for teams across ${site.city}.`,
};

const offers = [
  { Icon: SportIcon.football, title: "Corporate field day", body: "A half or full day of multi-sport games for your whole company. Venues, referees, kit and scoring handled.", color: "text-volt" },
  { Icon: ValueIcon.heart, title: "Active retreat", body: "A weekend out of the city built around movement, games and downtime together.", color: "text-flame" },
  { Icon: ValueIcon.people, title: "Company league", body: "A recurring weekly slot for your team, in the sport you pick, for a full season.", color: "text-aqua" },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-cream/10 px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="drift pointer-events-none absolute left-1/4 top-0 h-72 w-72 -translate-y-1/3 rounded-full bg-volt/15 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="eyebrow text-volt">Corporate & groups</p>
          <h1 className="display mt-4 max-w-3xl text-[3rem] text-cream sm:text-6xl lg:text-7xl">
            Get your people<br />out of the office<br />and into the <span className="text-flame">game.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/65">
            We design and run field days, active retreats and private leagues for companies and groups
            across {site.city}. Tell us the size of your team and the rest is on us.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {offers.map(({ Icon, title, body, color }) => (
            <div key={title} className="reveal group rounded-2xl border border-cream/10 bg-ink-800 p-7 transition-all duration-300 ease-out-quint hover:-translate-y-1 hover:border-cream/25">
              <Icon className={`h-10 w-10 ${color} transition-transform duration-500 ease-out-quint group-hover:scale-110 group-hover:rotate-6`} />
              <h2 className="display mt-5 text-2xl text-cream">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-cream/10 bg-ink-800">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-20">
          <div>
            <h2 className="display text-3xl text-cream sm:text-4xl">Talk to us</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/60">
              Send us the basics — team size, rough date and what you have in mind — and we&rsquo;ll come
              back with a plan and a price.
            </p>
            <div className="mt-8 space-y-4">
              <ContactRow Icon={MetaIcon.pin} label={site.city} sub="Ethiopia" />
              <ContactRow Icon={MetaIcon.clock} label="Mon–Sat, 9:00–18:00" sub="We reply within a day" />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 rounded-2xl border border-cream/10 bg-ink p-7">
            <p className="eyebrow text-cream/40">Reach us on</p>
            <ButtonLink href={site.telegram} variant="primary" className="w-full">Message us on Telegram</ButtonLink>
            <ButtonLink href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`} variant="outline" className="w-full">WhatsApp</ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} variant="outline" className="w-full">{site.email}</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ Icon, label, sub }: { Icon: (p: { className?: string }) => React.ReactElement; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-4">
      <Icon className="h-6 w-6 shrink-0 text-flame" />
      <div>
        <p className="text-sm text-cream">{label}</p>
        <p className="text-xs text-cream/45">{sub}</p>
      </div>
    </div>
  );
}
