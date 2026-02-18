import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Eyebrow, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "For inquiries, contact Middle Door Homes directly at info@middledoorhomes.com.",
};

export default function ContactPage() {
  return (
    <main>
      <Section className="pt-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-[3.1rem]">
                Contact Us
              </h1>
              <Card className="mt-6">
                <p className="text-base leading-relaxed text-[var(--mdh-ink)] md:text-lg">
                  For inquiries, contact us at{" "}
                  <a
                    href="mailto:info@middledoorhomes.com"
                    className="font-semibold text-[var(--mdh-title)] underline-offset-2 hover:underline"
                  >
                    info@middledoorhomes.com
                  </a>
                  .
                </p>
              </Card>
            </div>
            <div className="relative h-44 overflow-hidden rounded-2xl border border-[var(--mdh-line)] md:h-52">
              <Image src="/images/bldg-12.jpg" alt="Multifamily asset exterior" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
