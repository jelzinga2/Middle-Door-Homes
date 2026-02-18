import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Middle Door Homes is building a long-term institutional platform in small multifamily housing.",
};

export default function Home() {
  return (
    <main>
      <section className="border-b border-[var(--mdh-line)]">
        <div className="relative h-[62svh] min-h-[440px] w-full overflow-hidden">
          <Image
            src="/images/bldg-01.jpg"
            alt="Urban multifamily streetscape"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,24,34,0.56)] via-[rgba(15,24,34,0.22)] to-transparent" />
          <Container className="relative z-10 flex h-full items-end pb-14">
            <div className="max-w-3xl">
              <Eyebrow className="text-white/75">Middle Door Homes</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] text-white md:text-6xl">
                Durable, yield-forward, downside-protected investment in critical US housing
              </h1>
            </div>
          </Container>
        </div>
      </section>

      <Section>
        <Container>
          <p className="max-w-4xl text-xl leading-relaxed text-[var(--mdh-ink)] md:text-2xl">
            Middle Door Homes is building a long-term institutional portfolio in small multifamily
            housing. The strategy emphasizes disciplined basis, operational execution, and resilient cash
            generation, with a return profile targeting <span className="font-semibold text-[var(--mdh-title)]">5-7%+ stabilized yield</span>, building toward{" "}
            <span className="font-semibold text-[var(--mdh-title)]">8-11%+ base-case organic return</span> and{" "}
            <span className="font-semibold text-[var(--mdh-title)]">13-20% total 5-7 year return/IRR</span>.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Heading>Middle Door&apos;s Edge</Heading>
          <div className="mt-8 grid gap-8 border-t border-[var(--mdh-line)] pt-8 md:grid-cols-3">
            <article>
              <h3 className="text-lg font-semibold text-[var(--mdh-title)]">Acquisition scale</h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Sourcing through MLS, brokers, partner pathways, and 721 structures to build a selective
                and repeatable pipeline.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-[var(--mdh-title)]">Portfolio discipline</h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Data- and AI-enabled market selection combined with institutional underwriting and
                asset-level investment review.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-[var(--mdh-title)]">Scattered-site operations</h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Operating model informed by SFR scale playbooks, with execution focused on rent capture,
                turn quality, and cost control.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-4">
              <Eyebrow>Asset focus</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-[2.25rem]">
                Small multifamily at institutional quality
              </h2>
              <p className="text-base leading-relaxed text-[var(--mdh-ink)] md:text-[1.05rem]">
                We focus on 2-49 unit buildings in supply-constrained markets where assets can be acquired
                below replacement cost and improved through controllable operating levers, not exit timing.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="relative h-44 overflow-hidden rounded-xl border border-[var(--mdh-line)] sm:col-span-2 md:h-56">
                <Image
                  src="/images/bldg-06.jpg"
                  alt="Mid-rise multifamily asset"
                  fill
                  quality={90}
                  sizes="(min-width: 640px) 66vw, 100vw"
                  className="object-cover object-[center_46%]"
                />
              </div>
              <div className="relative h-44 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-56">
                <Image
                  src="/images/bldg-10.jpg"
                  alt="Neighborhood small multifamily"
                  fill
                  quality={90}
                  sizes="(min-width: 640px) 34vw, 100vw"
                  className="object-cover object-[center_60%]"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
