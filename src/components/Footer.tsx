import Link from "next/link";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-10 border-b border-cream/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display max-w-xl text-5xl text-cream sm:text-6xl lg:text-7xl">
            Come play.<br />
            <span className="text-flame">Connect.</span><br />
            Belong.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <ButtonLink href="/join">Join Chawata</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Corporate enquiries
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              Organised social sport for adults and kids across {site.city}.
            </p>
          </div>
          <FooterCol title="Explore" links={nav.map((n) => ({ href: n.href, label: n.label }))} />
          <FooterCol
            title="Get involved"
            links={[
              { href: "/join", label: "Join a season" },
              { href: "/contact", label: "Corporate field days" },
              { href: "/contact", label: "Active retreats" },
              { href: "/contact", label: "Contact us" },
            ]}
          />
          <FooterCol
            title="Follow"
            links={[
              { href: site.telegram, label: "Telegram" },
              { href: site.instagram, label: "Instagram" },
              { href: `mailto:${site.email}`, label: site.email },
            ]}
          />
        </div>

        <p className="mt-12 text-xs text-cream/35">
          © {new Date().getFullYear()} {site.name}. {site.city}, Ethiopia.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="eyebrow text-cream/40">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l, i) => (
          <li key={`${l.href}-${i}`}>
            <Link href={l.href} className="text-sm text-cream/70 transition-colors hover:text-flame">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
