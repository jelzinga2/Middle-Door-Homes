import type { Metadata } from "next";
import { Card, Container, Heading, Section, Subheading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Middle Door Homes builds a long-term institutional platform in small multifamily with disciplined underwriting, data-enabled portfolio construction, and scattered-site operating expertise.",
};

export default function AboutPage() {
  return (
    <main>
      <Section>
        <Container>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">About Us</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Building an institutional platform in the missing middle of U.S. housing.
          </h1>
          <Subheading>
            Middle Door Homes is focused on assembling and operating a diversified, multi-market
            portfolio of small multifamily buildings with a long-term orientation toward cash yield,
            operational durability, and compounding value.
          </Subheading>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <h2 className="text-lg font-semibold">Institutional rigor, local execution</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                The platform combines institutional underwriting and investment governance with
                neighborhood-level operating focus in each market.
              </p>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold">Long-term alignment</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                Strategy is centered on stabilized cash flow and measured portfolio growth rather than
                short-duration exits or macro timing calls.
              </p>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold">Category creation mindset</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                The objective is to help define a new institutional category in U.S. housing by
                scaling quality operations in an underinstitutionalized asset class.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Heading>Approach</Heading>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="text-base font-semibold">Portfolio build-out</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                Acquire 2-49 unit buildings in high-conviction submarkets through multiple channels,
                including broker networks, direct sourcing, and exchange-based partnerships.
              </p>
            </Card>
            <Card>
              <h3 className="text-base font-semibold">Operational value creation</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">
                Improve asset performance through standardized turns, expense control, and tenant
                retention supported by data-enabled operating systems.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
