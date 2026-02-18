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
      <Section className="pb-8 pt-8 md:pt-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <h1 className="text-5xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-6xl">
                Middle Door Homes
              </h1>
              <p className="mt-4 text-xl italic leading-relaxed text-[var(--mdh-title)] md:text-3xl">
                Durable, yield-forward, downside-protected investment grounded in critical US housing
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--mdh-ink)] md:text-xl">
                Middle Door Homes is building a long-term institutional portfolio in small multifamily
                housing through disciplined acquisitions, portfolio construction, and scattered-site
                operational excellence.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative h-44 overflow-hidden rounded-lg border border-[var(--mdh-line)] sm:col-span-2 md:h-56">
                <Image src="/images/bldg-01.jpg" alt="Streetscape multifamily building" fill className="object-cover" />
              </div>
              <div className="relative h-32 overflow-hidden rounded-lg border border-[var(--mdh-line)] md:h-40">
                <Image src="/images/bldg-02.jpg" alt="Courtyard multifamily building" fill className="object-cover" />
              </div>
              <div className="relative h-32 overflow-hidden rounded-lg border border-[var(--mdh-line)] md:h-40">
                <Image src="/images/bldg-03.jpg" alt="Urban multifamily building" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <section className="border-y border-[var(--mdh-line)]">
        <Container className="py-5">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {["/images/bldg-04.jpg", "/images/bldg-05.jpg", "/images/bldg-06.jpg", "/images/bldg-07.jpg"].map(
              (src) => (
                <div key={src} className="relative h-28 overflow-hidden rounded-lg border border-[var(--mdh-line)] md:h-36">
                  <Image src={src} alt="Small multifamily asset" fill className="object-cover" />
                </div>
              ),
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
