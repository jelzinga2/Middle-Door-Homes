import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Divider, Heading, Section, WideHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Asset class opportunity, Middle Door's edge, and investor benefits for the small multifamily strategy.",
};

export default function AboutPage() {
  return (
    <main>
      <WideHero imageSrc="/images/bldg-06.jpg" imageAlt="Small multifamily neighborhood" />

      <Section className="pb-8 pt-10">
        <Container>
          <div className="grid gap-6 md:grid-cols-[240px_1fr] md:gap-8">
            <Heading className="text-3xl leading-tight md:text-4xl">Asset Class Opportunity</Heading>
            <div className="space-y-4 text-lg leading-relaxed italic text-[var(--mdh-ink)] md:text-2xl">
              <p>
                Small multifamily (2-49 unit buildings) is the last significant underinvested US housing
                category, with <strong className="text-[var(--mdh-title)] not-italic">$5 Trillion of asset value</strong>{" "}
                and <strong className="text-[var(--mdh-title)] not-italic">&lt;3% institutional ownership</strong>
              </p>
              <p>
                Valuation gap + turnover create a{" "}
                <strong className="text-[var(--mdh-title)] not-italic">window for a scaled operator</strong>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      <Section className="py-8">
        <Container>
          <div className="grid gap-6 md:grid-cols-[240px_1fr] md:gap-8">
            <Heading className="text-3xl leading-tight md:text-4xl">Middle Door&apos;s Edge</Heading>
            <div>
              <p className="text-lg leading-relaxed italic text-[var(--mdh-ink)] md:text-2xl">
                Our team brings <strong className="text-[var(--mdh-title)] not-italic">billions of dollars of collective experience</strong>, with a proven playbook to acquire and manage at scale:
              </p>
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                <Card>
                  <p className="text-lg leading-relaxed text-[var(--mdh-ink)]">
                    <strong className="text-[var(--mdh-title)]">Acquisitions at scale</strong> through MLS data,
                    brokers, partners, and 721 exchange partnerships
                  </p>
                </Card>
                <Card>
                  <p className="text-lg leading-relaxed text-[var(--mdh-ink)]">
                    <strong className="text-[var(--mdh-title)]">Portfolio discipline</strong> using data /
                    AI-enabled submarket selection plus institutional asset-level assessments
                  </p>
                </Card>
                <Card>
                  <p className="text-lg leading-relaxed text-[var(--mdh-ink)]">
                    <strong className="text-[var(--mdh-title)]">Scattered site operational playbook</strong>{" "}
                    developed in analog single family rental model
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      <Section className="py-8">
        <Container>
          <Heading className="text-3xl md:text-4xl">Investor benefits</Heading>
          <Card className="mt-6 border-dashed">
            <ul className="list-disc space-y-3 pl-5 text-lg leading-relaxed text-[var(--mdh-ink)]">
              <li>
                <strong className="text-[var(--mdh-title)]">Cash yield plus upside.</strong> 5-7%+ durable cash
                yield building to 8-11%+ base case return; structural upside with appreciation &amp; scale
                (13-20% target 5-7 year return)
              </li>
              <li>
                <strong className="text-[var(--mdh-title)]">Downside protection and low volatility investment</strong>{" "}
                backed by critical, long-term housing, acquired below replacement cost in
                supply-constrained areas
              </li>
              <li className="italic">
                Return drivers primarily operational vs. exit timing or cap-rate compression
              </li>
            </ul>
          </Card>
        </Container>
      </Section>

      <section className="border-y border-[var(--mdh-line)]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {["/images/bldg-07.jpg", "/images/bldg-08.jpg", "/images/bldg-09.jpg", "/images/bldg-10.jpg"].map(
            (src) => (
              <div key={src} className="relative h-28 md:h-36">
                <Image src={src} alt="Small multifamily asset" fill className="object-cover" />
              </div>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
