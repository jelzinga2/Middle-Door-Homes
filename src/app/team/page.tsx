import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";
import { TeamHoverGrid } from "@/components/team-hover-grid";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Leadership with deep experience in institutional scattered-site housing, platform scaling, and data science.",
};

const TEAM = [
  {
    name: "Jack Elzinga",
    image: "/images/team-jack.jpg",
    bio: "Transformative leader with expertise in housing and opportunity activation across institutional and entrepreneurial environments.",
  },
  {
    name: "Jose Torres",
    image: "/images/team-jose.jpg",
    bio: "Housing executive with deep scattered-site portfolio management experience and a background in asset management and capital markets.",
  },
  {
    name: "Robert Callaway",
    image: "/images/team-robert.jpg",
    bio: "Institutional and startup CFO with housing finance depth and experience building organizations through scaled growth.",
  },
  {
    name: "Mike Rozovics",
    image: "/images/team-mike.jpg",
    bio: "Operations executive focused on large-scale scattered-site capital programs and NOI-oriented execution.",
  },
  {
    name: "Yexuan Fan",
    image: "/images/team-yexuan.jpg",
    bio: "Data science and AI leader translating machine learning and analytics into practical real estate operating and investment decisions.",
  },
];

export default function TeamPage() {
  return (
    <main>
      <Section className="pb-6 pt-7 md:pt-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <Eyebrow>Leadership</Eyebrow>
              <Heading className="mt-3">Team</Heading>
              <Lead>
                Deep execution experience across acquisitions, operations, capital markets, and data
                science in scattered-site housing.
              </Lead>
            </div>
            <div className="relative h-[290px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_10px_28px_rgba(18,29,41,0.05)]">
              <Image
                src="/images/bldg-13.jpg"
                alt="Small multifamily neighborhood context"
                fill
                quality={90}
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-[center_50%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <TeamHoverGrid team={TEAM} />
        </Container>
      </Section>
    </main>
  );
}
