import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Section } from "@/components/ui";

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
      <section className="border-b border-[var(--mdh-line)]">
        <div className="relative h-44 w-full overflow-hidden md:h-56">
          <Image
            src="/images/bldg-11.jpg"
            alt="Scattered-site housing streetscape"
            fill
            priority
            quality={90}
            className="object-cover object-[center_38%]"
          />
        </div>
      </section>

      <Section className="pb-8 pt-10">
        <Container>
          <Eyebrow>Leadership</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--mdh-title)] md:text-5xl">
            Team
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--mdh-ink)]">
            Deep experience in institutional scattered-site housing, platform scaling, and AI/data
            science.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="divide-y divide-[var(--mdh-line)] border-y border-[var(--mdh-line)]">
            {TEAM.map((member) => (
              <article key={member.name} className="grid gap-6 py-8 md:grid-cols-[180px_1fr] md:items-center">
                <div className="relative h-44 w-44 overflow-hidden rounded-xl border border-[var(--mdh-line)]">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--mdh-title)]">{member.name}</h2>
                  <p className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-[var(--mdh-ink)]">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
