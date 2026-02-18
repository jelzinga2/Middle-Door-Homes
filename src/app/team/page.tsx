import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Section, Subheading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Middle Door Homes leadership combines institutional scattered-site housing expertise, operating scale experience, and data science capability.",
};

const TEAM = [
  {
    name: "Jack Elzinga",
    role: "Managing Partner",
    image: "/images/team-jack.jpg",
    bio: "Transformative housing leader with experience across institutional and entrepreneurial real estate environments, including Home Partners of America, Landis, and LaSalle.",
  },
  {
    name: "Mike Rozovics",
    role: "Finance & Capital Markets",
    image: "/images/team-mike.jpg",
    bio: "Institutional and startup CFO with deep housing finance expertise, including leadership roles at CV3 Financial and Invitation Homes through IPO and merger execution.",
  },
  {
    name: "Robert Callaway",
    role: "Operations & Asset Management",
    image: "/images/team-robert.jpg",
    bio: "Operations executive with experience leading asset management initiatives in scattered-site housing and executing large-scale renovation and NOI growth programs.",
  },
  {
    name: "Yexuan Fan",
    role: "Data Science & AI",
    image: "/images/team-yexuan.jpg",
    bio: "Data science and AI leader focused on real estate operations, with a track record in lease pricing algorithms, operational analytics, and decision-support systems.",
  },
  {
    name: "Jose Torres",
    role: "Portfolio Leadership",
    image: "/images/team-jose.jpg",
    bio: "Housing executive with deep institutional scattered-site experience across portfolio management, underwriting, and capital markets in multi-market residential platforms.",
  },
];

export default function TeamPage() {
  return (
    <main>
      <Section>
        <Container>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--mdh-subtle)]">Team</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Institutional scattered-site housing experience across operations, finance, and data science.
          </h1>
          <Subheading>
            The team combines expertise from scaled residential platforms and high-accountability
            operating environments to execute in a fragmented asset class.
          </Subheading>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <Card key={member.name}>
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[var(--mdh-line)]">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[var(--mdh-ink)]">{member.name}</p>
                    <p className="text-sm text-[var(--mdh-subtle)]">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--mdh-muted)]">{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
