export default function ResourcesPage() {
  const items = [
    { title: 'The B2B Data Quality Playbook', desc: 'A step-by-step guide to building a durable, compliant data engine for revenue teams.' },
    { title: 'Coverage Benchmarks 2025', desc: 'Role, seniority, and geo benchmarks to plan your TAM and territory strategy.' },
    { title: 'Enrichment Field Mapping Guide', desc: 'Best practices for normalizing and syncing fields across CRM, MAP, and warehouse.' },
    { title: 'Cold Outreach Compliance Checklist', desc: 'Practical requirements and regional controls for GDPR, CCPA, and CAN-SPAM.' },
    { title: 'Signals That Actually Predict Pipeline', desc: 'A framework for combining intent, technographics, and hiring trends.' },
    { title: 'RevOps Template: ICP Scorecard', desc: 'A simple model to quantify fit and prioritize accounts for sellers.' },
  ];

  return (
    <div className="pt-28">
      <section className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Resources</h1>
          <p className="mt-4 text-lg text-slate-600">Guides, templates, and benchmarks to help your team operate with clarity.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <article key={it.title} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition">
              <div className="h-36 bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
                <div className="mt-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-700">Read more →</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
