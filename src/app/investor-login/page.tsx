import type { Metadata } from "next";
import { Card, Container, Section } from "@/components/ui";
import { InvestorLoginForm } from "@/components/investor-login-form";

export const metadata: Metadata = {
  title: "Investor Login",
  description:
    "Investor portal login placeholder for Middle Door Homes. Access details are provided directly to approved users.",
};

export default function InvestorLoginPage() {
  return (
    <main>
      <Section>
        <Container className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">Investor Login</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Investor portal access
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--mdh-muted)]">
            Placeholder login interface. No investor-facing gated content is connected yet.
          </p>

          <Card className="mt-10">
            <InvestorLoginForm />
          </Card>
        </Container>
      </Section>
    </main>
  );
}
