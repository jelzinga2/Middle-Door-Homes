import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Eyebrow, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Deep experience in institutional scattered-site housing, platform scaling, and data science.",
};

const TEAM = [
  {
    name: "Jack Elzinga",
    image: "/images/team-jack.jpg",
    points: [
      "Transformative leader with expertise in housing and opportunity activation",
      "Experience across institutional and entrepreneurial real estate environments",
      "Background in high-achievement financial, corporate, and operating settings",
    ],
  },
  {
    name: "Jose Torres",
    image: "/images/team-jose.jpg",
    points: [
      "Housing executive with deep experience across scattered-site portfolios",
      "Led multi-market portfolio management at scale",
      "Background in asset management, capital markets, and operating decisioning",
    ],
  },
  {
    name: "Robert Callaway",
    image: "/images/team-robert.jpg",
    points: [
      "Institutional and startup CFO with housing finance depth",
      "Leadership through large-scale residential finance and performance programs",
      "Experience building finance organizations and executing complex financings",
    ],
  },
  {
    name: "Mike Rozovics",
    image: "/images/team-mike.jpg",
    points: [
      "Operations executive with expertise in scattered-site capital programs",
      "Led cross-functional initiatives to drive NOI and portfolio performance",
      "Hands-on experience renovating small multifamily buildings",
    ],
  },
  {
    name: "Yexuan Fan",
    image: "/images/team-yexuan.jpg",
    points: [
      "Data science and AI leader focused on real estate operations",
      "Track record building practical ML/AI tools and analytics workflows",
      "Translates data systems into actionable investment and operating insight",
    ],
  },
];

export default function TeamPage() {
  return (
    <main>
      <Section className="pb-8 pt-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <div>
              <Eyebrow>Leadership</Eyebrow>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-5xl">
                Team
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--mdh-ink)]">
                Deep experience in institutional scattered-site housing, scaling early-stage platforms,
                and AI/data science.
              </p>
            </div>
            <div className="relative h-44 overflow-hidden rounded-2xl border border-[var(--mdh-line)] md:h-52">
              <Image src="/images/bldg-11.jpg" alt="Residential streetscape" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-2">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {TEAM.map((member) => (
              <Card key={member.name}>
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[var(--mdh-line)]">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--mdh-title)]">{member.name}</h2>
                </div>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--mdh-ink)]">
                  {member.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
