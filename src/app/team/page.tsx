import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";

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
      <Section className="pb-10 pt-12 md:pt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <Eyebrow>Leadership</Eyebrow>
              <Heading className="mt-3">Team</Heading>
              <Lead>
                Institutional scattered-site operating experience across acquisitions, asset management,
                finance, and data science.
              </Lead>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-xl border border-[var(--mdh-line)]">
              <Image
                src="/images/bldg-15.jpg"
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

      <Section className="pt-0">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {TEAM.map((member) => (
              <article key={member.name} className="grid gap-4 border-t border-[var(--mdh-line)] pt-6 md:grid-cols-[128px_1fr]">
                <div className="relative h-32 w-32 overflow-hidden rounded-xl border border-[var(--mdh-line)]">
                  <Image src={member.image} alt={member.name} fill sizes="128px" className="object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-medium tracking-tight text-[var(--mdh-title)]">{member.name}</h2>
                  <p className="mt-3 max-w-[55ch] text-[0.97rem] leading-relaxed text-[var(--mdh-ink)]">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
