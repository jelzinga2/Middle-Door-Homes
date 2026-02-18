import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Eyebrow, Heading, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Asset class opportunity, Middle Door's edge, and investor benefits for a long-term small multifamily strategy.",
};

export default function AboutPage() {
  return (
    <main>
      <Section className="pb-8 pt-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <div>
              <Eyebrow>Strategy</Eyebrow>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-5xl">
                About Middle Door Homes
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--mdh-ink)]">
                We are building an institutional small multifamily platform focused on durable income,
                disciplined basis, and long-term compounding through operating execution.
              </p>
            </div>
            <div className="relative h-44 overflow-hidden rounded-2xl border border-[var(--mdh-line)] md:h-52">
              <Image src="/images/bldg-06.jpg" alt="Small multifamily neighborhood" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <Heading>Asset class opportunity</Heading>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <p className="text-3xl font-semibold text-[var(--mdh-title)]">$5T+</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--mdh-ink)]">
                Small multifamily (2-49 units) represents one of the largest underinstitutionalized
                categories in US housing.
              </p>
            </Card>
            <Card>
              <p className="text-3xl font-semibold text-[var(--mdh-title)]">&lt;3%</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--mdh-ink)]">
                Institutional ownership remains limited, creating space for a scaled, disciplined
                operator.
              </p>
            </Card>
            <Card>
              <p className="text-3xl font-semibold text-[var(--mdh-title)]">15-30%+</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--mdh-ink)]">
                Assets often trade below replacement cost, supporting downside protection at entry.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <Heading>Middle Door&apos;s edge</Heading>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <p className="text-lg font-semibold text-[var(--mdh-title)]">Acquisitions at scale</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-ink)]">
                MLS channels, broker networks, partner pathways, and 721 relationships widen sourcing
                and increase selectivity.
              </p>
            </Card>
            <Card>
              <p className="text-lg font-semibold text-[var(--mdh-title)]">Portfolio discipline</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-ink)]">
                Data and AI support market selection and underwriting, while institutional standards
                govern risk and investment decisions.
              </p>
            </Card>
            <Card>
              <p className="text-lg font-semibold text-[var(--mdh-title)]">Scattered-site ops</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-ink)]">
                Repeatable operations inspired by SFR playbooks drive consistency in turns, rent
                execution, and cost efficiency.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <Heading>Investor benefits</Heading>
          <Card className="mt-6">
            <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-[var(--mdh-ink)] md:text-base">
              <li>
                5-7%+ stabilized cash yield, building toward 8-11%+ base-case organic return.
              </li>
              <li>
                13-20% target total 5-7 year return / IRR through operational execution and structural
                upside.
              </li>
              <li>
                Downside framing anchored in below-replacement-cost basis and return drivers that are
                primarily operational, not cap-rate compression timing.
              </li>
            </ul>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
