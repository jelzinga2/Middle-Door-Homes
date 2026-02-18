import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Asset Class",
  description:
    "Small multifamily is a deep, underinstitutionalized category with durable demand and operationally driven return potential.",
};

export default function AssetClassPage() {
  return (
    <main>
      <Section className="pb-8 pt-10 md:pt-12">
        <Container>
          <Eyebrow>Asset Class</Eyebrow>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium tracking-tight text-[var(--mdh-title)] md:text-5xl">
            A large category with limited institutional penetration
          </h1>
          <Lead>
            Small multifamily (2-49 units) represents one of the largest underinstitutionalized segments
            in US housing, with approximately <span className="font-medium text-[var(--mdh-title)]">$5T+ in asset value</span> and{" "}
            <span className="font-medium text-[var(--mdh-title)]">&lt;3% institutional ownership</span>.
          </Lead>
        </Container>
      </Section>

      <Section className="py-0">
        <Container>
          <div className="grid gap-3 md:grid-cols-[1fr_320px]">
            <div className="relative h-[300px] overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-[420px]">
              <Image
                src="/images/bldg-13.jpg"
                alt="Small multifamily building stock"
                fill
                quality={92}
                priority
                sizes="(min-width: 768px) calc(100vw - 420px), 100vw"
                className="object-cover object-[center_50%]"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-[420px]">
              <Image
                src="/images/bldg-15.jpg"
                alt="Infill multifamily properties"
                fill
                quality={90}
                sizes="(min-width: 768px) 360px, 100vw"
                className="object-cover object-[center_45%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-8">
        <Container>
          <Heading>Return profile and downside framing</Heading>
          <div className="mt-5 rounded-2xl border border-[var(--mdh-line)] bg-white/45 p-6 md:p-8">
            <div className="max-w-[70ch] space-y-3 text-[0.98rem] leading-relaxed text-[var(--mdh-ink)] md:text-[1.05rem]">
              <p>
                Strategy targets 5-7%+ stabilized cash yield, building toward 8-11%+ base-case organic
                return, with 13-20% target total return / IRR over a 5-7 year horizon.
              </p>
              <p>
                Downside framing is based on disciplined entry basis and operationally driven value creation,
                with assets often acquired below replacement cost in supply-constrained markets.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
