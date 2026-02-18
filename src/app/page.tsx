import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Durable, yield-forward, downside-protected investment grounded in critical U.S. housing.",
};

export default function Home() {
  return (
    <main>
      <section className="relative border-b border-[var(--mdh-line)]">
        <div className="relative h-[380px] w-full overflow-hidden md:h-[520px]">
          <Image
            src="/images/bldg-01.jpg"
            alt="Middle Door Homes streetscape"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(12,22,31,0.08)]" />
          <Container className="relative z-10 h-full pt-8 md:pt-12">
            <div className="inline-block border border-[var(--mdh-line)] bg-[rgba(245,248,250,0.88)] px-6 py-4 md:px-8 md:py-6">
              <h1 className="text-5xl font-medium leading-none tracking-[-0.02em] text-[var(--mdh-title)] md:text-8xl">
                Middle Door
                <br />
                Homes
              </h1>
            </div>
          </Container>
          <Container className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 md:bottom-5">
            <p className="inline-block border border-[var(--mdh-line)] bg-[rgba(245,248,250,0.88)] px-3 py-1 text-base italic text-[var(--mdh-title)] md:px-4 md:py-2 md:text-3xl">
              Durable, yield-forward, downside-protected investment grounded in critical US housing
            </p>
          </Container>
        </div>
      </section>

      <section className="border-y border-[var(--mdh-line)]">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {[
            "/images/bldg-02.jpg",
            "/images/bldg-03.jpg",
            "/images/bldg-04.jpg",
            "/images/bldg-05.jpg",
            "/images/bldg-06.jpg",
            "/images/bldg-07.jpg",
          ].map((src) => (
            <div key={src} className="relative h-20 md:h-28">
              <Image src={src} alt="Small multifamily building" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <Section className="pb-12 pt-12">
        <Container>
          <p className="max-w-5xl text-xl leading-relaxed text-[var(--mdh-ink)] md:text-[2rem] md:leading-[1.35]">
            Middle Door Homes is building a long-term institutional portfolio in small multifamily
            housing through disciplined acquisitions, portfolio construction, and scattered-site
            operational excellence.
          </p>
        </Container>
      </Section>
    </main>
  );
}
