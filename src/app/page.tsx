import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Section } from "@/components/ui";

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
      <Section className="pb-6 pt-6 md:pt-9">
        <Container>
          <div className="relative overflow-hidden rounded-[22px] border border-[var(--mdh-line)] bg-white shadow-[0_18px_52px_rgba(18,29,41,0.08)]">
            <div className="relative h-[430px] md:h-[560px]">
              <Image
                src="/images/Bldg-16.jpg"
                alt="Institutional-quality small multifamily building"
                fill
                priority
                quality={95}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
                className="object-cover object-[center_48%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,19,28,0.55)] via-[rgba(11,19,28,0.15)] to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4 md:p-7">
              <div className="max-w-4xl rounded-xl border border-[rgba(215,225,233,0.75)] bg-[rgba(247,250,252,0.9)] p-5 shadow-[0_14px_30px_rgba(15,24,34,0.14)] backdrop-blur-[2px] md:p-7">
                <Eyebrow>Middle Door Homes</Eyebrow>
                <h1 className="mt-3 max-w-3xl text-[2.1rem] font-medium leading-[1.04] tracking-[-0.015em] text-[var(--mdh-title)] md:text-[3.08rem] lg:text-[3.35rem]">
                  Durable yield from critical US housing
                </h1>
                <p className="mt-3 max-w-[62ch] text-[0.98rem] leading-[1.6] text-[var(--mdh-ink)] md:text-[1.08rem]">
                  A long-term institutional platform in small multifamily focused on current cash yield,
                  downside-aware basis, and operational value creation.
                </p>
                <div className="mt-5 grid gap-3 border-t border-[var(--mdh-line)] pt-4 sm:grid-cols-3">
                  {PROOF_POINTS.map((item) => (
                    <div key={item.label}>
                      <p className="text-[1.6rem] font-medium tracking-[-0.015em] text-[var(--mdh-title)] md:text-[1.9rem]">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[0.8rem] leading-relaxed text-[var(--mdh-subtle)] md:text-[0.88rem]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-[1.25fr_1fr_1fr]">
            <div className="rounded-xl border border-[var(--mdh-line)] bg-white p-4 shadow-[0_8px_24px_rgba(18,29,41,0.05)] md:p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--mdh-subtle)]">
                Investment framing
              </p>
              <p className="mt-2 text-base leading-relaxed text-[var(--mdh-ink)]">
                Return drivers are primarily operational, with disciplined entry basis often below
                replacement cost.
              </p>
            </div>
            <div className="relative h-28 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-32">
              <Image
                src="/images/bldg-13.jpg"
                alt="Street-level multifamily context"
                fill
                quality={90}
                sizes="(min-width: 768px) 28vw, 100vw"
                className="object-cover object-[center_45%]"
              />
            </div>
            <div className="relative h-28 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-32">
              <Image
                src="/images/bldg-10.jpg"
                alt="Urban multifamily row"
                fill
                quality={90}
                sizes="(min-width: 768px) 28vw, 100vw"
                className="object-cover object-[center_56%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white/60 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.05)] md:p-8">
            <div className="mb-6 grid gap-5 lg:grid-cols-[1fr_1.05fr] lg:items-end">
              <div>
                <Eyebrow>Middle Door&apos;s Edge</Eyebrow>
                <Heading className="mt-3">Built for scale with institutional controls</Heading>
              </div>
              <p className="max-w-[64ch] text-[0.98rem] leading-relaxed text-[var(--mdh-ink)] md:text-[1.03rem]">
                The operating model combines broad sourcing coverage, disciplined portfolio construction,
                and a purpose-built scattered-site execution system.
              </p>
            </div>
            <div className="grid gap-5 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-3">
              <article>
                <h2 className="text-xl font-medium text-[var(--mdh-title)]">Acquisition scale</h2>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-[var(--mdh-ink)]">
                  MLS, broker, partner, and 721 channels create a broad funnel while preserving selective
                  underwriting standards.
                </p>
              </article>
              <article>
                <h2 className="text-xl font-medium text-[var(--mdh-title)]">Portfolio discipline</h2>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-[var(--mdh-ink)]">
                  Data and AI support market selection, with institutional underwriting at each asset and
                  portfolio decision point.
                </p>
              </article>
              <article>
                <h2 className="text-xl font-medium text-[var(--mdh-title)]">Scattered-site execution</h2>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-[var(--mdh-ink)]">
                  SFR-inspired operational playbooks improve rent capture, turn velocity, and controllable
                  cost performance.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="grid gap-5 rounded-2xl border border-[var(--mdh-line)] bg-white/50 p-6 shadow-[0_10px_28px_rgba(18,29,41,0.045)] md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <Eyebrow>Portfolio Construction</Eyebrow>
              <Heading className="mt-3">Built for resilient, compounding performance</Heading>
              <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-[var(--mdh-ink)] md:text-lg">
                Focused on 2-49 unit assets in supply-constrained submarkets, with entry basis often
                below replacement cost and a hold strategy designed around durable cash generation.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--mdh-subtle)] md:text-base">
                <li>Below-replacement-cost entry where available</li>
                <li>Operational levers prioritized over cap-rate compression assumptions</li>
                <li>Long-term hold orientation with institutional risk controls</li>
              </ul>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="relative h-44 overflow-hidden rounded-xl border border-[var(--mdh-line)] sm:col-span-2 md:h-56">
                <Image
                  src="/images/bldg-15.jpg"
                  alt="Urban small multifamily stock"
                  fill
                  quality={90}
                  sizes="(min-width: 640px) 66vw, 100vw"
                  className="object-cover object-[center_45%]"
                />
              </div>
              <div className="relative h-44 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-56">
                <Image
                  src="/images/bldg-14.jpeg"
                  alt="Mid-rise multifamily building"
                  fill
                  quality={90}
                  sizes="(min-width: 640px) 34vw, 100vw"
                  className="object-cover object-[center_55%]"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
