import Image from "next/image";

const TEAM = [
  {
    name: "Jack Elzinga",
    title: "Founder",
    img: "/images/team-jack.jpg",
    bio: "Strategy, acquisitions, and building the institutional platform and operating systems.",
  },
  {
    name: "Jose Torres",
    title: "Operations",
    img: "/images/team-jose.jpg",
    bio: "Scattered-site execution and operational discipline across the portfolio.",
  },
  {
    name: "Mike Rozovics",
    title: "Acquisitions / Investment",
    img: "/images/team-mike.jpg",
    bio: "Underwriting, market selection support, and portfolio construction.",
  },
  {
    name: "Robert Callaway",
    title: "Leadership",
    img: "/images/team-robert.jpg",
    bio: "Scaled housing leadership and repeatable operating playbook development.",
  },
  {
    name: "Yexuan Fan",
    title: "Data / Analytics",
    img: "/images/team-yexuan.jpg",
    bio: "Data-enabled submarket research, analytics, and systems to support decision-making.",
  },
];

export default function Team() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="text-sm tracking-[0.18em] uppercase text-neutral-500">
            Team
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Built by operators.
          </h1>
          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            Institutional standards with a long-term orientation—grounded in
            repeatable execution.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-neutral-200">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-neutral-900">{p.name}</div>
                  <div className="text-sm text-neutral-600">{p.title}</div>
                </div>
              </div>
              <div className="mt-4 text-neutral-600 leading-relaxed">
                {p.bio}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
