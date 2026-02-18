import type { Metadata } from "next";
import { Container, Section, WideHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "For inquiries, contact Middle Door Homes directly at info@middledoorhomes.com.",
};

export default function ContactPage() {
  return (
    <main>
      <WideHero imageSrc="/images/bldg-12.jpg" imageAlt="Small multifamily asset" />

      <Section className="pt-10">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-[var(--mdh-ink)] md:text-xl">
            For inquiries, contact us at:{" "}
            <a href="mailto:info@middledoorhomes.com" className="font-semibold text-[var(--mdh-title)]">
              info@middledoorhomes.com
            </a>
          </p>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-[var(--mdh-muted)] md:text-base">
            Important disclosures are provided in the footer on every page. This website is for
            informational purposes and does not constitute an offer or solicitation.
          </p>
        </Container>
      </Section>
    </main>
  );
}
