export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Transparent pricing, built to scale</h2>
          <p className="mt-3 text-slate-600">Start small or roll out across your org. Every plan includes compliance controls and human support.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
            <p className="mt-1 text-sm text-slate-600">For solo operators and early teams.</p>
            <p className="mt-4 text-3xl font-semibold">$89<span className="text-base font-normal text-slate-600">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>10,000 credits</li>
              <li>Core filters</li>
              <li>Email verification</li>
              <li>CSV export</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">Get started</a>
          </div>

          <div className="rounded-2xl border-2 border-slate-900 p-6 bg-gradient-to-b from-white to-slate-50 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Growth</h3>
            <p className="mt-1 text-sm text-slate-600">Best for scaling revenue teams.</p>
            <p className="mt-4 text-3xl font-semibold">$249<span className="text-base font-normal text-slate-600">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>100,000 credits</li>
              <li>Advanced filters</li>
              <li>Direct dials</li>
              <li>CRM enrichment</li>
              <li>Basic integrations</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">Start free trial</a>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
            <p className="mt-1 text-sm text-slate-600">For global orgs with strict needs.</p>
            <p className="mt-4 text-3xl font-semibold">Custom</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Unlimited seats</li>
              <li>Dedicated instance</li>
              <li>Advanced compliance</li>
              <li>Premium support</li>
              <li>SLAs & security review</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
