import { NextResponse } from "next/server";
import { seasonTotal, sportById } from "@/lib/sports";

type Body = Record<string, unknown>;

const isNonEmpty = (v: unknown): v is string => typeof v === "string" && v.trim().length > 0;

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Validate at the boundary — the client can send anything.
  if (!isNonEmpty(body.fullName)) return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  if (!isNonEmpty(body.phone)) return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
  if (!isNonEmpty(body.email) || !body.email.includes("@"))
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });

  const picked = Array.isArray(body.sports) ? body.sports.filter(isNonEmpty) : [];
  if (picked.length === 0) return NextResponse.json({ error: "Pick at least one sport." }, { status: 400 });
  if (picked.some((id) => !sportById(id)))
    return NextResponse.json({ error: "Unknown sport selected." }, { status: 400 });

  // Never trust a total sent by the browser — recompute it.
  const total = seasonTotal(picked);

  // TODO: persist to Supabase, then notify via the Telegram bot.
  console.log("[register]", { ...body, total });

  // ponytail: email is the only copy of a registration until Supabase lands — fail loudly so nothing is lost.
  const { RESEND_API_KEY, REGISTRATION_EMAIL } = process.env;
  if (RESEND_API_KEY && REGISTRATION_EMAIL) {
    const text = Object.entries({ ...body, total })
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : String(v)}`)
      .join("\n");
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({
        from: "Chewata <onboarding@resend.dev>",
        to: REGISTRATION_EMAIL,
        reply_to: body.email,
        subject: `New registration: ${body.fullName}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[register] email failed", res.status, await res.text());
      return NextResponse.json({ error: "Couldn't submit right now. Please try again." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true, total });
}
