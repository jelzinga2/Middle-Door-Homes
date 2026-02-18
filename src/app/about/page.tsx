import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Middle Door Homes is building a long-term institutional platform in small multifamily housing.",
};

export default function AboutPage() {
  return (
    <main>
      <Section className="pb-8 pt-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_390px] lg:items-end">
            <div>
              <Eyebrow>About</Eyebrow>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-5xl">
                Building an institutional platform in the missing middle of US housing
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--mdh-ink)]">
                Middle Door Homes is designed as a long-horizon real estate platform, not a short-cycle
                trade. We target small multifamily assets where basis discipline, operating execution,
                and market selection can drive durable performance across cycles.
              </p>
            </div>
            <div className="relative h-56 overflow-hidden rounded-xl border border-[var(--mdh-line)]">
              <Image
                src="/images/bldg-10.jpg"
                alt="Small multifamily streetscape"
                fill
                quality={90}
                sizes="(min-width: 1024px) 390px, 100vw"
                className="object-cover object-[center_62%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pb-0 pt-0">
        <Container>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="relative h-36 overflow-hidden rounded-xl border border-[var(--mdh-line)] sm:col-span-2 md:h-48">
              <Image
                src="/images/bldg-05.jpg"
                alt="Small multifamily stock in mature neighborhood"
                fill
                quality={90}
                sizes="(min-width: 640px) 66vw, 100vw"
                className="object-cover object-[center_52%]"
              />
            </div>
            <div className="relative h-36 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-48">
              <Image
                src="/images/bldg-02.jpg"
                alt="Portfolio-quality multifamily exterior"
                fill
                quality={90}
                sizes="(min-width: 640px) 34vw, 100vw"
                className="object-cover object-[center_46%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Heading>How the platform is built</Heading>
          <div className="mt-7 grid gap-8 border-t border-[var(--mdh-line)] pt-8 md:grid-cols-3">
            <article>
              <h3 className="text-lg font-semibold text-[var(--mdh-title)]">Acquisition engine</h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Multi-channel sourcing across MLS, broker relationships, partner institutions, and 721
                pathways creates scale without compromising selectivity.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-[var(--mdh-title)]">Portfolio discipline</h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Data and AI support submarket prioritization, while institutional underwriting standards
                guide every asset-level investment decision.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-[var(--mdh-title)]">Operational execution</h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">
                Scattered-site operating systems informed by SFR playbooks create repeatability in turns,
                rent execution, and controllable expense management.
              </p>
            </article>
          </div>
        </Container>
      </Section>
    </main>
  );
}
