import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Asset Class",
  description:
    "Small multifamily is a large, underinstitutionalized category with durable housing demand and operationally driven return potential.",
};

export default function AssetClassPage() {
  return (
    <main>
      <Section className="pb-8 pt-10">
        <Container>
          <Eyebrow>Asset Class</Eyebrow>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-5xl">
            Why small multifamily
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[var(--mdh-ink)]">
            Small multifamily (2-49 units) represents a deep and underinstitutionalized segment of US
            housing. With an estimated <span className="font-semibold text-[var(--mdh-title)]">$5T+ asset base</span> and{" "}
            <span className="font-semibold text-[var(--mdh-title)]">&lt;3% institutional ownership</span>, the category offers room for scaled
            institutional participation built on execution rather than financial engineering.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-3 md:grid-cols-[1fr_300px]">
            <div className="relative h-60 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-80">
              <Image
                src="/images/bldg-07.jpg"
                alt="Portfolio-quality small multifamily asset"
                fill
                quality={90}
                sizes="(min-width: 768px) calc(100vw - 360px), 100vw"
                className="object-cover object-[center_54%]"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-80">
              <Image
                src="/images/bldg-05.jpg"
                alt="Urban infill multifamily stock"
                fill
                quality={90}
                sizes="(min-width: 768px) 300px, 100vw"
                className="object-cover object-[center_48%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Heading>Return and downside framing</Heading>
          <div className="mt-6 max-w-4xl space-y-4 text-[0.98rem] leading-relaxed text-[var(--mdh-ink)] md:text-[1.05rem]">
            <p>
              The strategy is built around durable cash flow and operating-led value creation: targeting
              5-7%+ stabilized yield, building toward 8-11%+ base-case organic return, with 13-20% target
              total return / IRR over 5-7 years.
            </p>
            <p>
              Downside protection is anchored in basis discipline, with assets often acquired below
              replacement cost in supply-constrained markets. Return drivers are intended to be primarily
              operational, reducing dependence on cap-rate compression and narrow exit timing windows.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
