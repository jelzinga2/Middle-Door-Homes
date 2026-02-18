import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Middle Door Homes for institutional inquiries regarding the small multifamily strategy.",
};

export default function ContactPage() {
  return (
    <main>
      <Section>
        <Container>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">Contact</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Institutional inquiries
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--mdh-muted)]">
            For investor and partnership inquiries, please contact Middle Door Homes directly by email.
          </p>
          <a
            href="mailto:info@middledoorhomes.com"
            className="mt-8 inline-flex rounded-full border border-[var(--mdh-line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--mdh-ink)] hover:bg-[var(--mdh-bg)]"
          >
            info@middledoorhomes.com
          </a>
        </Container>
      </Section>
    </main>
  );
}
