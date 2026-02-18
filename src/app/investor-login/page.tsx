import type { Metadata } from "next";
import { Card, Container, Section, WideHero } from "@/components/ui";
import { InvestorLoginForm } from "@/components/investor-login-form";

export const metadata: Metadata = {
  title: "Investor Login",
  description:
    "Investor portal login placeholder for Middle Door Homes. Access details are provided directly to approved users.",
};

export default function InvestorLoginPage() {
  return (
    <main>
      <WideHero imageSrc="/images/bldg-04.jpg" imageAlt="Multifamily building" />

      <Section>
        <Container className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">Investor Login</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-4xl">
            Investor portal access
          </h1>

          <Card className="mt-8">
            <InvestorLoginForm />
          </Card>
        </Container>
      </Section>
    </main>
  );
}
