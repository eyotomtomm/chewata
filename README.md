# Chawata — web

Next.js 16 (App Router) + Tailwind 4. Mobile-first: the phone layout is the
real one, desktop is the adaptation.

```bash
npm run dev     # http://localhost:3000
npm test        # pricing self-check
npm run build
```

## Where things live

| What | File |
|---|---|
| Sports, prices, season logic | `src/lib/sports.ts` |
| This week's games | `src/lib/games.ts` |
| Photos (placeholders) | `src/lib/photos.ts` |
| Contact details, nav | `src/lib/site.ts` |
| Brand colours, type, motion | `src/app/globals.css` |
| Registration endpoint | `src/app/api/register/route.ts` |

Edit `games.ts` and redeploy to change the Play page. It moves to a database
when hand-editing actually hurts.

## Placeholders to replace

- **Photos.** `src/lib/photos.ts` points at picsum.photos. Swap for real
  Chawata game photos — that one file is the only change, and the `.duotone`
  treatment keeps whatever you drop in looking on-brand. Then delete
  `remotePatterns` from `next.config.ts`.
- **Contact details.** `src/lib/site.ts` has placeholder WhatsApp/email/socials.
- **Registrations aren't stored.** `/api/register` validates and logs. Wiring
  Supabase + the Telegram bot is the next step.

## Notes

- Motion is CSS-only (scroll-driven animations, no JS observers) and fully
  disabled under `prefers-reduced-motion`. Browsers without scroll timelines
  just show static content.
- The form recomputes the season total server-side — the browser's number is
  never trusted.
