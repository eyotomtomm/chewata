"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/Button";
import { SportIcon } from "@/components/Icons";
import { accent } from "@/lib/accents";
import { formatETB, seasonTotal, sports, type SportId } from "@/lib/sports";
import { games } from "@/lib/games";
import { Choice, Input, Label, Reveal, Section, Select } from "./FormBits";

const DAYS = ["Weekday Evenings (Mon–Thu)", "Friday Evenings", "Saturday", "Sunday"];
const AREAS = ["Bole / Kazanchis", "Yeka / Ayat", "Lafto / Kality", "Addis Ketema"];
const LEVELS = ["Just for fun", "Some experience", "Competitive"];
const HEARD = ["Instagram", "Telegram", "A friend", "At a venue", "Other"];

const toggle = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

export function JoinForm() {
  const params = useSearchParams();
  // Arriving from a "Join this game" button preselects that sport.
  const preselect = games.find((g) => g.id === params.get("game"))?.sport;

  const [picked, setPicked] = useState<SportId[]>(preselect ? [preselect] : []);
  const [joinAs, setJoinAs] = useState("individual");
  const [days, setDays] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [otherArea, setOtherArea] = useState("");
  const [level, setLevel] = useState(LEVELS[0]);
  const [ready, setReady] = useState("yes");
  const [consent, setConsent] = useState(true);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const total = useMemo(() => seasonTotal(picked), [picked]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (picked.length === 0) {
      setError("Pick at least one sport.");
      return;
    }
    setError("");
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: String(fd.get("fullName") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      sports: picked,
      total,
      joinAs,
      groupSize: fd.get("groupSize") ? Number(fd.get("groupSize")) : null,
      teamSize: fd.get("teamSize") ? Number(fd.get("teamSize")) : null,
      days,
      areas: otherArea ? [...areas, `Other: ${otherArea}`] : areas,
      level,
      heardFrom: String(fd.get("heardFrom") ?? ""),
      readyToPay: ready,
      consent,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Something went wrong.");
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="reveal rounded-2xl border border-ink/10 bg-white p-8 text-center sm:p-14">
        <div className="mx-auto flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-volt">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-ink" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </div>
        <h2 className="display mt-6 text-3xl text-ink sm:text-4xl">You&rsquo;re in the queue.</h2>
        <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink/60">
          We&rsquo;ll confirm your spot as soon as your league has enough players, then send payment
          details on WhatsApp or Telegram.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 pb-28 lg:pb-8">
      <Section n={1} title="Your information">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <Label required>Full Name</Label>
            <Input name="fullName" required placeholder="Enter your full name" autoComplete="name" />
          </div>
          <div>
            <Label required>Phone / WhatsApp</Label>
            <div className="flex">
              <span className="flex shrink-0 items-center gap-1.5 rounded-l-lg border border-r-0 border-ink/15 bg-ink/4 px-3 text-sm text-ink/60">
                🇪🇹 +251
              </span>
              <Input name="phone" required type="tel" placeholder="9XX XXX XXX" inputMode="tel" autoComplete="tel" className="rounded-l-none" />
            </div>
          </div>
          <div>
            <Label required>Email</Label>
            <Input name="email" required type="email" placeholder="you@example.com" autoComplete="email" />
          </div>
        </div>
      </Section>

      <Section n={2} title="What would you like to play?" hint="You can select more than one.">
        <div className="rail -mx-1 flex gap-3 overflow-x-auto px-1 pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-5">
          {sports.map((s) => {
            const on = picked.includes(s.id);
            const a = accent[s.accent];
            const Icon = SportIcon[s.id];
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setPicked((p) => toggle(p, s.id))}
                aria-pressed={on}
                className={`relative flex w-36 shrink-0 flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition-all duration-300 ease-out-quint sm:w-auto ${
                  on ? `${a.border} bg-flame/4 -translate-y-1 shadow-lg` : "border-ink/12 hover:border-ink/30 hover:-translate-y-0.5"
                }`}
              >
                <span
                  className={`absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-[5px] transition-all duration-300 ease-out-quint ${
                    on ? `${a.bg} scale-100 rotate-0` : "scale-0 -rotate-90 bg-transparent"
                  }`}
                >
                  <svg viewBox="0 0 12 12" className={`h-3 w-3 ${s.accent === "volt" ? "text-ink" : "text-white"}`}>
                    <path d="M2.5 6.2 4.8 8.5 9.5 3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <Icon className={`h-9 w-9 transition-all duration-500 ease-out-quint ${on ? `${a.text} rotate-[360deg]` : "text-ink/45"}`} />
                <span className={`text-sm font-semibold ${on ? a.text : "text-ink/80"}`}>{s.name}</span>
                <span className="text-[0.6875rem] text-ink/45">{formatETB(s.price)} / season</span>
                {!s.live && <span className="eyebrow text-[0.5625rem] text-ink/35">Coming soon</span>}
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-lg bg-flame/6 p-4">
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-flame" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5.5M12 7.8v.2" strokeLinecap="round" />
          </svg>
          <p className="text-[0.8125rem] leading-relaxed text-ink/65">
            <strong className="font-semibold text-ink">Season details.</strong> Season 1 is 8 weeks, 1
            game per week. Team T-shirt included. Payment is requested once your sport is confirmed.
          </p>
        </div>
      </Section>

      <Section n={3} title="How are you joining?" hint="Choose one option.">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            {[
              { v: "individual", label: "Joining as an individual", sub: "I'll be placed on a team" },
              { v: "friends", label: "With friends", sub: "We'll join as a small group" },
              { v: "team", label: "I have a team", sub: "We already have a team" },
            ].map((o) => (
              <Choice key={o.v} type="radio" checked={joinAs === o.v} onChange={() => setJoinAs(o.v)} label={o.label} sub={o.sub} />
            ))}
          </div>

          <div className="space-y-4">
            <Reveal open={joinAs === "friends"}>
              <div>
                <Label required>How many of you are joining together?</Label>
                <Select name="groupSize" defaultValue="">
                  <option value="" disabled>Select number</option>
                  {[2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}
                </Select>
                <p className="mt-1.5 text-xs text-ink/45">You and your friends will be grouped together.</p>
              </div>
            </Reveal>

            <Reveal open={joinAs === "team"}>
              <div>
                <Label required>How many players do you have so far?</Label>
                <Select name="teamSize" defaultValue="">
                  <option value="" disabled>Select number</option>
                  {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => <option key={n} value={n}>{n}</option>)}
                </Select>
                <p className="mt-1.5 text-xs text-ink/45">Minimum roster: Basketball (8 players), Volleyball (9 players).</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section n={4} title="Preferences">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Label required>Preferred Days</Label>
            {DAYS.map((d) => (
              <Choice key={d} type="checkbox" checked={days.includes(d)} onChange={() => setDays((p) => toggle(p, d))} label={d} />
            ))}
          </div>
          <div>
            <Label required>Preferred Area</Label>
            {AREAS.map((a) => (
              <Choice key={a} type="checkbox" checked={areas.includes(a)} onChange={() => setAreas((p) => toggle(p, a))} label={a} />
            ))}
            <Input value={otherArea} onChange={(e) => setOtherArea(e.target.value)} placeholder="Other — specify area" className="mt-2 py-2 text-sm" />
          </div>
          <div>
            <Label required>Skill Level</Label>
            {LEVELS.map((l) => (
              <Choice key={l} type="radio" checked={level === l} onChange={() => setLevel(l)} label={l} />
            ))}
          </div>
          <div>
            <Label>How did you hear about Chawata?</Label>
            <Select name="heardFrom" defaultValue="">
              <option value="" disabled>Select an option</option>
              {HEARD.map((h) => <option key={h} value={h}>{h}</option>)}
            </Select>
          </div>
        </div>
      </Section>

      <Section n={5} title="Confirmation">
        <div className="rounded-lg bg-flame/6 p-4">
          <p className="text-[0.875rem] font-semibold text-ink">
            Are you ready to pay once your league is confirmed?
          </p>
          <p className="mt-1 text-xs text-ink/55">
            We&rsquo;ll only request payment when your sport has enough players to launch.
          </p>
          <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:gap-8">
            <Choice type="radio" checked={ready === "yes"} onChange={() => setReady("yes")} label="Yes, I'm ready" />
            <Choice type="radio" checked={ready === "maybe"} onChange={() => setReady("maybe")} label="Maybe, depends on timing / schedule" />
          </div>
        </div>
        <div className="mt-4">
          <Choice
            type="checkbox"
            checked={consent}
            onChange={() => setConsent((v) => !v)}
            label="I agree to receive updates about Chawata leagues, news and events via WhatsApp and email."
            sub="You can opt out anytime."
          />
        </div>
      </Section>

      {error && (
        <p className="rounded-lg bg-flame/10 px-4 py-3 text-sm text-flame" role="alert">{error}</p>
      )}

      <Section n={6} title="You're almost done!" hint="Click submit and we'll be in touch.">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink/60">
            {picked.length === 0 ? "No sports selected yet." : (
              <>Season total: <strong className="display text-xl text-ink">{formatETB(total)}</strong></>
            )}
          </p>
          <Button type="submit" disabled={status === "sending"} arrow className="w-full sm:w-auto">
            {status === "sending" ? "Submitting…" : "Submit registration"}
          </Button>
        </div>
      </Section>

      {/* Sticky total on mobile — slides up once a sport is chosen */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 px-4 py-3 backdrop-blur-xl transition-transform duration-400 ease-out-quint lg:hidden ${
          picked.length > 0 ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[0.6875rem] text-ink/50">{picked.length} sport{picked.length === 1 ? "" : "s"} · season total</p>
            <p className="display text-xl text-ink">{formatETB(total)}</p>
          </div>
          <Button type="submit" disabled={status === "sending"} arrow className="px-5 py-3">
            {status === "sending" ? "Submitting…" : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
}
