import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Eyebrow, Section } from "@/components/ui";
import { InvestorLoginForm } from "@/components/investor-login-form";

export const metadata: Metadata = {
  title: "Investor Login",
  description: "Investor portal login for Middle Door Homes.",
};

export default function InvestorLoginPage() {
  return (
    <main>
      <Section className="pt-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,460px)_1fr]">
            <div>
              <Eyebrow>Investor Access</Eyebrow>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-5xl">
                Investor Login
              </h1>
              <Card className="mt-6">
                <InvestorLoginForm />
              </Card>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative h-44 overflow-hidden rounded-2xl border border-[var(--mdh-line)] sm:col-span-2 md:h-56">
                <Image src="/images/bldg-04.jpg" alt="Multifamily property exterior" fill className="object-cover" />
              </div>
              <div className="relative h-32 overflow-hidden rounded-2xl border border-[var(--mdh-line)] md:h-40">
                <Image src="/images/bldg-08.jpg" alt="Small multifamily asset" fill className="object-cover" />
              </div>
              <div className="relative h-32 overflow-hidden rounded-2xl border border-[var(--mdh-line)] md:h-40">
                <Image src="/images/bldg-09.jpg" alt="Neighborhood building stock" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
