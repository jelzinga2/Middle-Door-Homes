"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./ui";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/investor-login", label: "Investor Login" },
  { href: "/contact", label: "Contact Us" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--mdh-line)] bg-white/95 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Middle Door Homes home">
            <Image src="/images/Logo.png" alt="Middle Door Homes" width={30} height={30} priority />
            <span className="text-sm font-semibold tracking-tight text-[var(--mdh-title)] md:text-[1rem]">
              Middle Door Homes
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 text-sm md:flex">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition hover:text-[var(--mdh-title)] ${active ? "font-semibold text-[var(--mdh-title)]" : "text-[var(--mdh-subtle)]"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <a
              href="mailto:info@middledoorhomes.com"
              className="text-xs font-medium text-[var(--mdh-subtle)] transition hover:text-[var(--mdh-title)] md:text-sm"
            >
              info@middledoorhomes.com
            </a>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="inline-flex items-center rounded-md border border-[var(--mdh-line)] px-3 py-2 text-xs text-[var(--mdh-ink)] md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-[var(--mdh-line)] bg-white md:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile Primary" className="flex flex-col gap-3">
              {LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-2 py-1.5 text-sm ${active ? "bg-[var(--mdh-bg)] text-[var(--mdh-ink)]" : "text-[var(--mdh-subtle)]"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <a
              href="mailto:info@middledoorhomes.com"
              className="mt-4 inline-block text-sm font-medium text-[var(--mdh-ink)]"
            >
              info@middledoorhomes.com
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
