import { ShieldCheck, Rocket, Database, Workflow, Layers, Globe2 } from 'lucide-react';

const solutions = [
  {
    icon: ShieldCheck,
    title: 'Verified B2B Contacts',
    desc: 'Human and machine validation for emails, phones, and roles so your outreach lands with confidence.',
  },
  {
    icon: Database,
    title: 'CRM Enrichment',
    desc: 'Fill gaps, unify fields, and auto-refresh records across Salesforce, HubSpot, and your data warehouse.',
  },
  {
    icon: Workflow,
    title: 'Intent & Signals',
    desc: 'Layer buying signals, technographics, and firmographics to prioritize the accounts that will convert.',
  },
  {
    icon: Layers,
    title: 'List Building',
    desc: 'Filter by role, seniority, stack, funding, and more. Export clean lists or sync to your tools in one click.',
  },
  {
    icon: Globe2,
    title: 'Global Compliance',
    desc: 'Built-in consent frameworks and regional controls to meet GDPR, CCPA, and CAN-SPAM requirements.',
  },
  {
    icon: Rocket,
    title: 'Revenue Acceleration',
    desc: 'Pipeline-ready data fuels SDR, ABM, and lifecycle campaigns with measurable ROI.',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Solutions for every GTM motion</h2>
          <p className="mt-3 text-slate-600">From prospecting to retention, equip your team with accurate data and compliant workflows.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-700">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
