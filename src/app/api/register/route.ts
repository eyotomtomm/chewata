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

  return NextResponse.json({ ok: true, total });
}
