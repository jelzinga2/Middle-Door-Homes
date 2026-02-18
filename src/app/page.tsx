import type { Metadata } from "next";
import Image from "next/image";
import { Button, Card, Container, Divider, Heading, Section, Stat, Subheading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Middle Door Homes is building an institutional small multifamily platform focused on durable yield, downside protection, and long-term compounding.",
};

const STATS = [
  {
    value: "5-7%+",
    label: "Stabilized Cash Yield",
    note: "Durable cash yield with quarterly distribution potential from stabilized operations.",
  },
  {
    value: "8-11%+",
    label: "Base-Case Organic Return",
    note: "Organic return profile from yield plus NAV growth without dependence on cap-rate compression.",
  },
  {
    value: "13-20%",
    label: "Target 5-7 Year Return / IRR",
    note: "Target total return range from operational execution and structural upside as scale builds.",
  },
];

export default function Home() {
  return (
    <main>
      <Section className="pb-10 pt-12 md:pt-16">
        <Container>
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">
                Small Multifamily (2-49 Units)
              </p>
              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-6xl">
                Durable, yield-forward, downside-protected investment grounded in critical U.S. housing.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--mdh-muted)]">
                Middle Door Homes is building a long-term institutional platform in the underinvested U.S.
                small multifamily asset class through disciplined acquisitions, data-enabled portfolio
                construction, and scattered-site operating rigor.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/asset-class">The Asset Class</Button>
                <Button href="/about" variant="secondary">
                  About Middle Door
                </Button>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[var(--mdh-line)] bg-white">
              <Image
                src="/images/bldg-08.jpg"
                alt="Small multifamily building exterior"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {STATS.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} note={stat.note} />
            ))}
          </div>
        </Container>
      </Section>

      <Divider />

      <Section>
        <Container>
          <Heading>Middle Door&apos;s edge</Heading>
          <Subheading>
            Three linked capabilities support scale and long-term portfolio quality.
          </Subheading>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold">Acquisition scale</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                Sourcing through MLS channels, broker relationships, institutional partners, and 721
                exchange partnerships.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Portfolio discipline</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                Data and AI-enabled market/submarket selection with institutional, asset-level
                underwriting and investment committee standards.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Scattered-site operations</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                Operating playbook inspired by single family rental, including standardized turns,
                pricing systems, and phased property management.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
