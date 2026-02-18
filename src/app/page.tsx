import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Eyebrow, Heading, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Institutional small multifamily platform focused on durable yield, downside protection, and long-term value creation.",
};

const STATS = [
  { value: "5-7%+", label: "Stabilized cash yield" },
  { value: "8-11%+", label: "Base-case organic return" },
  { value: "13-20%", label: "Target 5-7 year total return / IRR" },
];

export default function Home() {
  return (
    <main>
      <Section className="pb-12 pt-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <Eyebrow>Middle Door Homes</Eyebrow>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-6xl">
                Institutional platform in the missing middle of US housing
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--mdh-ink)] md:text-[1.15rem]">
                Durable, yield-forward, downside-protected investment grounded in critical US housing.
                Middle Door Homes is building a long-term institutional portfolio in small multifamily
                through disciplined acquisitions, portfolio construction, and operating execution.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative h-56 overflow-hidden rounded-xl border border-[var(--mdh-line)] sm:col-span-2 md:h-72">
                <Image src="/images/bldg-01.jpg" alt="Streetscape multifamily asset" fill priority className="object-cover" />
              </div>
              <div className="relative h-36 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-40">
                <Image src="/images/bldg-02.jpg" alt="Courtyard multifamily property" fill className="object-cover" />
              </div>
              <div className="relative h-36 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-40">
                <Image src="/images/bldg-03.jpg" alt="Urban multifamily building" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {STATS.map((item) => (
              <Card key={item.label} className="bg-white">
                <p className="text-3xl font-semibold tracking-tight text-[var(--mdh-title)]">{item.value}</p>
                <p className="mt-2 text-sm text-[var(--mdh-subtle)]">{item.label}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pb-16">
        <Container>
          <Heading>Middle Door&apos;s edge</Heading>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <Card>
              <p className="text-lg font-semibold text-[var(--mdh-title)]">Acquisition scale</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                Sourcing through MLS channels, broker relationships, partner institutions, and 721
                exchange pathways.
              </p>
            </Card>
            <Card>
              <p className="text-lg font-semibold text-[var(--mdh-title)]">Portfolio discipline</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                Data and AI-enabled market selection with institutional underwriting and asset-level
                investment committee review.
              </p>
            </Card>
            <Card>
              <p className="text-lg font-semibold text-[var(--mdh-title)]">Operating playbook</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
                Scattered-site execution model informed by SFR: standardized turns, leasing discipline,
                and cost control at scale.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
