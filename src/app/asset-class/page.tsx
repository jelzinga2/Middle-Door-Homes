import type { Metadata } from "next";
import { Card, Container, Heading, Section, Stat, Subheading } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Asset Class",
  description:
    "Small multifamily (2-49 units) is a large, underinstitutionalized U.S. housing category with durable yield potential, replacement-cost discount entry points, and operationally driven upside.",
};

export default function AssetClassPage() {
  return (
    <main>
      <Section>
        <Container>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">The Asset Class</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Small multifamily is the last significant underinstitutionalized U.S. housing category.
          </h1>
          <Subheading>
            Middle housing serves a critical role across major cities and offers a large addressable
            universe with limited institutional ownership and frequent entry opportunities.
          </Subheading>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Stat value="$5T+" label="Asset Class Size" note="Estimated value of U.S. small multifamily stock." />
            <Stat
              value="<3%"
              label="Institutional Ownership"
              note="Institutions own a small share of 2-49 unit housing."
            />
            <Stat
              value="15-30%+"
              label="Below Replacement Cost"
              note="Discount to replacement cost is common in many target situations."
            />
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Heading>Downside protection and return framing</Heading>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card>
              <h2 className="text-base font-semibold">Basis and downside support</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                Acquiring assets below replacement cost in supply-constrained areas supports downside
                protection and reduces dependence on optimistic exit assumptions.
              </p>
            </Card>
            <Card>
              <h2 className="text-base font-semibold">Operationally driven upside</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                Value creation is primarily tied to controllable operational levers, including
                loss-to-lease capture, renovation execution, and expense management.
              </p>
            </Card>
            <Card>
              <h2 className="text-base font-semibold">Yield-forward profile</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                Return profile is designed around stabilized cash yield and organic NAV growth rather
                than cap-rate compression or narrow exit windows.
              </p>
            </Card>
            <Card>
              <h2 className="text-base font-semibold">Fragmented, liquid flow</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                Fragmented ownership and recurring annual unit turnover create a broad acquisition
                funnel for disciplined, scaled operators.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
