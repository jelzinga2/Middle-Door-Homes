import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Section, WideHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Deep experience in institutional scattered site housing, scaling early-stage platforms, and AI & data science.",
};

const TEAM = [
  {
    name: "Jack Elzinga",
    image: "/images/team-jack.jpg",
    points: [
      "Transformative leader with expertise in housing and opportunity activation",
      "Experience across tier one institutional and entrepreneurial real estate environments",
      "Background in high-achieving entrepreneurial, financial, and corporate environments",
    ],
  },
  {
    name: "Jose Torres",
    image: "/images/team-jose.jpg",
    points: [
      "Housing executive with deep experience across scattered site portfolios",
      "Led portfolio management at Home Partners of America across multi-market scale",
      "Background in asset management, capital markets, and operational decisioning",
    ],
  },
  {
    name: "Robert Callaway",
    image: "/images/team-robert.jpg",
    points: [
      "Institutional and startup CFO, capital markets, corporate finance, and housing expert",
      "Leadership through large-scale residential finance and operating growth",
      "Experience building finance organizations and executing debt and equity financing",
    ],
  },
  {
    name: "Mike Rozovics",
    image: "/images/team-mike.jpg",
    points: [
      "Operations executive with expertise in large-scale scattered site capital programs",
      "Experience leading cross-functional initiatives to drive NOI growth",
      "Personal experience renovating small multifamily buildings across markets",
    ],
  },
  {
    name: "Yexuan Fan",
    image: "/images/team-yexuan.jpg",
    points: [
      "Innovative data science and AI leader with focus on real estate operations",
      "Track record building data-driven ML/AI and analytical solutions",
      "Strength in data asset development, mining, and actionable insights",
    ],
  },
];

export default function TeamPage() {
  return (
    <main>
      <WideHero imageSrc="/images/bldg-11.jpg" imageAlt="Residential neighborhood" />

      <Section className="pt-10">
        <Container>
          <h1 className="text-2xl leading-tight md:text-[3.1rem]">
            <span className="font-semibold text-[var(--mdh-title)]">Team | </span>
            <span className="text-[var(--mdh-ink)]">
              Deep experience in institutional scattered site housing, scaling early-stage platforms,
              and AI &amp; data science
            </span>
          </h1>
          <p className="mt-4 text-lg italic leading-snug text-[var(--mdh-title)] md:text-[2rem]">
            Scattered site execution is the core challenge of this asset class; team is deeply
            experienced in scattered site housing at scale
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {TEAM.map((member) => (
              <Card key={member.name}>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[var(--mdh-line)]">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <h2 className="text-2xl font-semibold text-[var(--mdh-title)]">{member.name}</h2>
                </div>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-[var(--mdh-ink)] md:text-lg">
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
