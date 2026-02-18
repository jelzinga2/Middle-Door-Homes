import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "For inquiries, contact Middle Door Homes directly at info@middledoorhomes.com.",
};

export default function ContactPage() {
  return (
    <main>
      <Section className="pb-8 pt-10 md:pt-12">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[1fr_380px] lg:items-end">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <Heading className="mt-3">Contact Us</Heading>
              <Lead>
                For institutional inquiries, contact{" "}
                <a
                  href="mailto:info@middledoorhomes.com"
                  className="font-medium text-[var(--mdh-title)] underline-offset-2 hover:underline"
                >
                  info@middledoorhomes.com
                </a>
                .
              </Lead>
            </div>
            <div className="relative h-[280px] overflow-hidden rounded-xl border border-[var(--mdh-line)]">
              <Image
                src="/images/bldg-02.jpg"
                alt="Institutional quality multifamily exterior"
                fill
                quality={90}
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover object-[center_46%]"
              />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
