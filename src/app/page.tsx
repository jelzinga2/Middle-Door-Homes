import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Institutional small multifamily platform focused on durable yield, downside protection, and long-term value creation.",
};

const PROOF_POINTS = [
  { value: "5-7%+", label: "Stabilized cash yield" },
  { value: "8-11%+", label: "Base-case organic return" },
  { value: "13-20%", label: "Target 5-7 year total return / IRR" },
];

export default function Home() {
  return (
    <main>
      <Section className="pb-8 pt-9 md:pt-12">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[1fr_1.05fr] lg:items-end">
            <div>
              <Eyebrow>Middle Door Homes</Eyebrow>
              <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.01em] text-[var(--mdh-title)] md:text-6xl">
                A long-term institutional platform in small multifamily housing
              </h1>
              <Lead>
                Durable, yield-forward, downside-protected exposure to critical US housing with return
                drivers centered on operations, not exit timing.
              </Lead>
              <div className="mt-7 grid gap-4 border-t border-[var(--mdh-line)] pt-5 sm:grid-cols-3">
                {PROOF_POINTS.map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-medium tracking-tight text-[var(--mdh-title)] md:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--mdh-subtle)]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-[440px]">
              <Image
                src="/images/Bldg-16.jpg"
                alt="Institutional-quality small multifamily building"
                fill
                priority
                quality={92}
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[center_46%]"
              />
            </div>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div className="relative h-24 overflow-hidden rounded-lg border border-[var(--mdh-line)] md:h-28">
              <Image
                src="/images/bldg-13.jpg"
                alt="Street-level multifamily context"
                fill
                quality={90}
                sizes="33vw"
                className="object-cover object-[center_45%]"
              />
            </div>
            <div className="relative h-24 overflow-hidden rounded-lg border border-[var(--mdh-line)] md:h-28">
              <Image
                src="/images/bldg-10.jpg"
                alt="Urban multifamily row"
                fill
                quality={90}
                sizes="33vw"
                className="object-cover object-[center_56%]"
              />
            </div>
            <div className="relative h-24 overflow-hidden rounded-lg border border-[var(--mdh-line)] md:h-28">
              <Image
                src="/images/bldg-15.jpg"
                alt="Infill multifamily buildings"
                fill
                quality={90}
                sizes="33vw"
                className="object-cover object-[center_45%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-1">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/55 p-6 md:p-8">
            <div className="grid gap-6 border-y border-[var(--mdh-line)] py-8 md:grid-cols-3">
              <article>
                <h2 className="text-xl font-medium text-[var(--mdh-title)]">Acquisition scale</h2>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  MLS, broker, partner, and 721 channels support a deep sourcing funnel while preserving
                  selective underwriting.
                </p>
              </article>
              <article>
                <h2 className="text-xl font-medium text-[var(--mdh-title)]">Portfolio discipline</h2>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  Data and AI inform market selection; institutional underwriting governs each asset
                  decision.
                </p>
              </article>
              <article>
                <h2 className="text-xl font-medium text-[var(--mdh-title)]">Scattered-site execution</h2>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                  SFR-inspired operating systems drive rent capture, turn quality, and controllable cost
                  performance.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-1">
        <Container>
          <div className="grid gap-6 rounded-2xl border border-[var(--mdh-line)] bg-white/40 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <Eyebrow>Portfolio Construction</Eyebrow>
              <Heading className="mt-3">Built for resilient, compounding performance</Heading>
              <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[var(--mdh-ink)] md:text-lg">
                Focused on 2-49 unit assets in supply-constrained submarkets, with entry basis often
                below replacement cost and a hold strategy designed around durable cash generation.
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--mdh-subtle)] md:text-base">
                <li>Below-replacement-cost entry where available</li>
                <li>Operational levers prioritized over cap-rate compression assumptions</li>
                <li>Long-term hold orientation with institutional risk controls</li>
              </ul>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="relative h-44 overflow-hidden rounded-xl border border-[var(--mdh-line)] sm:col-span-2 md:h-60">
                <Image
                  src="/images/bldg-10.jpg"
                  alt="Urban small multifamily stock"
                  fill
                  quality={90}
                  sizes="(min-width: 640px) 66vw, 100vw"
                  className="object-cover object-[center_58%]"
                />
              </div>
              <div className="relative h-44 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-60">
                <Image
                  src="/images/bldg-03.jpg"
                  alt="Mid-rise multifamily building"
                  fill
                  quality={90}
                  sizes="(min-width: 640px) 34vw, 100vw"
                  className="object-cover object-[center_44%]"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
