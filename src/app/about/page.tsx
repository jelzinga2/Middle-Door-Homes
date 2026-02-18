import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Middle Door Homes is building a long-term institutional platform in small multifamily housing.",
};

export default function AboutPage() {
  return (
    <main>
      <Section className="pb-8 pt-10 md:pt-12">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <Eyebrow>About</Eyebrow>
              <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-[var(--mdh-title)] md:text-5xl">
                Institutional by design, operating-first by discipline
              </h1>
              <Lead>
                Middle Door Homes is built to institutionalize small multifamily through disciplined
                acquisitions, repeatable operations, and long-term portfolio construction.
              </Lead>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-xl border border-[var(--mdh-line)]">
              <Image
                src="/images/bldg-14.jpeg"
                alt="Neighborhood multifamily building"
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-[center_48%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-1">
        <Container>
          <Heading>Platform principles</Heading>
          <div className="mt-6 rounded-2xl border border-[var(--mdh-line)] bg-white/45 p-6 md:p-8">
            <div className="grid gap-6 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-medium text-[var(--mdh-title)]">Execution before narrative</h3>
                <p className="mt-3 max-w-[62ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  We underwrite for durability and execute for consistency. Operational outcomes and basis
                  discipline are prioritized over short-term market timing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[var(--mdh-title)]">Long-term institutional fit</h3>
                <p className="mt-3 max-w-[62ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  The platform is structured for scale, reporting quality, and repeatability, with a hold
                  profile designed for patient institutional capital.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[var(--mdh-title)]">Data-informed judgment</h3>
                <p className="mt-3 max-w-[62ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  Data and AI improve screening and prioritization, while investment decisions remain anchored
                  in institutional underwriting and field-level context.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[var(--mdh-title)]">Operational leverage</h3>
                <p className="mt-3 max-w-[62ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  Scattered-site execution capabilities are the strategic edge of this category and the
                  central driver of portfolio-level performance.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
