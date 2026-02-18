import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bldg-01.jpg"
            alt="Small multifamily courtyard building"
            fill
            priority
            className="object-cover"
          />
          {/* Institutional overlay for legibility */}
          <div className="absolute inset-0 bg-white/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="text-sm tracking-[0.18em] uppercase text-neutral-600">
              Small multifamily (2–49 units)
            </div>

            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
              Middle Door Homes
            </h1>

            <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed">
              Durable, yield-forward, downside-protected investment grounded in
              critical U.S. housing.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/asset-class"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition"
              >
                The asset class
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 transition"
              >
                About us
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 grid md:grid-cols-3 gap-4">
            {[
              {
                value: "5–7%+",
                label: "Stabilized cash yield",
                note: "Durable cash flow following operational stabilization.",
              },
              {
                value: "8–11%+",
                label: "Base-case return",
                note: "Organic growth without reliance on exit timing.",
              },
              {
                value: "13–20%",
                label: "Target IRR (5–7 years)",
                note: "Structural upside driven by operations and disciplined basis.",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-neutral-200/70 bg-white/80 backdrop-blur p-6 shadow-sm"
              >
                <div className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-neutral-600">
                  {s.label}
                </div>
                <div className="mt-3 text-neutral-700">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting image strip */}
      <section className="border-t border-neutral-200/70">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden border border-neutral-200/70 shadow-sm">
              <Image
                src="/images/bldg-02.jpg"
                alt="Small multifamily building"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-200/70 shadow-sm">
              <Image
                src="/images/bldg-01.jpg"
                alt="Courtyard building detail"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-200/70 shadow-sm">
              <Image
                src="/images/bldg-02.jpg"
                alt="Building streetscape"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
