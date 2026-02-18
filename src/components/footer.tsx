import Link from "next/link";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--mdh-line)] bg-[rgba(246,248,250,0.94)]">
      <Container className="py-10 md:py-12">
        <div className="flex flex-col gap-3 text-sm text-[var(--mdh-subtle)] md:flex-row md:items-center md:justify-between">
          <div>&copy; {new Date().getFullYear()} Middle Door Homes</div>
          <div className="flex items-center gap-4">
            <Link href="/investor-login" className="hover:text-[var(--mdh-ink)]">
              Investor Login
            </Link>
            <a href="mailto:info@middledoorhomes.com" className="hover:text-[var(--mdh-ink)]">
              info@middledoorhomes.com
            </a>
          </div>
        </div>

        <div className="mt-8 max-w-6xl space-y-5 text-xs leading-relaxed text-[var(--mdh-muted)] md:text-sm">
          <p>
            <strong>Informational purposes only.</strong> This presentation has been prepared by
            Middle Door Homes LLC (&quot;Middle Door Homes&quot;) solely for informational purposes. It does
            not constitute an offer to sell, or a solicitation of an offer to buy, any securities or
            investment products. The content is preliminary, subject to change, and should not be
            relied upon as the basis for any investment decision.
          </p>
          <p>
            <strong>Forward-looking statements.</strong> Certain statements herein may be
            forward-looking in nature. These statements involve risks and uncertainties that could
            cause actual results to differ materially. No assurance is given that future events will
            occur as projected.
          </p>
          <p>
            <strong>No guarantee of performance.</strong> Past performance is not indicative of future
            results. No representation or warranty, express or implied, is made regarding the accuracy
            or completeness of the information contained in this presentation.
          </p>
          <p>
            <strong>Confidentiality.</strong> This presentation is provided on a confidential basis for
            the exclusive use of the recipient. It may not be copied, reproduced, distributed, or
            disclosed to any other person without prior written consent of Middle Door Homes.
          </p>
          <p>
            <strong>Independent advice.</strong> Recipients are strongly advised to consult their own
            legal, financial, tax, and other professional advisors with respect to any decisions.
          </p>
        </div>
      </Container>
    </footer>
  );
}
