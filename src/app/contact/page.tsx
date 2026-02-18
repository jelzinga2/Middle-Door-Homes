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

          <div className="mt-10 space-y-7 text-base leading-relaxed text-[var(--mdh-ink)] md:text-lg">
            <p>
              <strong>Informational purposes only.</strong> This presentation has been prepared by
              Middle Door Homes LLC (&quot;Middle Door Homes&quot;) solely for informational purposes. It does
              not constitute an offer to sell, or a solicitation of an offer to buy, any securities
              or investment products. The content is preliminary, subject to change, and should not be
              relied upon as the basis for any investment decision.
            </p>
            <p>
              <strong>Forward-looking statements.</strong> Certain statements herein may be
              forward-looking in nature. These statements involve risks and uncertainties that could
              cause actual results to differ materially. No assurance is given that future events will
              occur as projected.
            </p>
            <p>
              <strong>No guarantee of performance.</strong> Past performance is not indicative of
              future results. No representation or warranty, express or implied, is made regarding the
              accuracy or completeness of the information contained in this presentation.
            </p>
            <p>
              <strong>Confidentiality.</strong> This presentation is provided on a confidential basis
              for the exclusive use of the recipient. It may not be copied, reproduced, distributed, or
              disclosed to any other person without prior written consent of Middle Door Homes.
            </p>
            <p>
              <strong>Independent advice.</strong> Recipients are strongly advised to consult their own
              legal, financial, tax, and other professional advisors with respect to any decisions.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
