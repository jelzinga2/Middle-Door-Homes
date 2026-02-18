import Link from "next/link";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--mdh-line)] bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-3 text-sm text-[var(--mdh-subtle)] md:flex-row md:items-center md:justify-between">
          <div>&copy; {new Date().getFullYear()} Middle Door Homes</div>
          <div className="flex items-center gap-4">
            <Link href="/investor-login" className="hover:text-[var(--mdh-ink)]">
              Investor Login
            </Link>
            <a href="mailto:info@middledoorhomes.com" className="hover:text-[var(--mdh-ink)]">
              info@middledoorhomes.com
            </a>
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-xs leading-relaxed text-[var(--mdh-muted)]">
          For informational purposes only. Not an offer to sell or solicitation to buy securities.
          Forward-looking statements involve risks and uncertainties, and no performance is guaranteed.
          Please consult your legal, financial, and tax advisors.
        </p>
      </Container>
    </footer>
  );
}
