export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Middle Door Homes
        </h1>
        <p className="text-xl text-neutral-600 max-w-3xl">
          Durable, yield-forward, downside-protected investment grounded in critical U.S. housing.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-neutral-200">
        <h2 className="text-2xl font-semibold mb-8">Return Profile</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-medium mb-2">5–7%+ Stabilized Yield</h3>
            <p className="text-neutral-600">
              Durable in-place cash flow following operational stabilization.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">8–11%+ Base-Case Return</h3>
            <p className="text-neutral-600">
              Organic income growth without reliance on exit timing.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">13–20% Target IRR</h3>
            <p className="text-neutral-600">
              Structural upside over a 5–7 year hold period.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-neutral-200">
        <h2 className="text-2xl font-semibold mb-6">The Small Multifamily Opportunity</h2>
        <p className="text-neutral-600 max-w-3xl">
          Approximately $5T+ of U.S. housing stock across 2–49 unit properties, with less than 3%
          institutional ownership. Assets are frequently acquired below replacement cost, creating
          durable yield and embedded value creation.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-neutral-200">
        <h2 className="text-2xl font-semibold mb-6">Middle Door’s Edge</h2>
        <ul className="space-y-4 text-neutral-600">
          <li>Institutional acquisition scale across fragmented markets.</li>
          <li>Data-enabled submarket selection and disciplined underwriting.</li>
          <li>Scattered-site operating playbook inspired by SFR scale platforms.</li>
        </ul>
      </section>
    </main>
  );
}
