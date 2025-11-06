import { Building2, ShoppingCart, Shield, Stethoscope, Cpu, GraduationCap, Banknote, Network, Users, Target } from 'lucide-react';

const sectors = [
  { icon: Building2, title: 'SaaS & Software', points: ['ICP discovery by stack and hiring signals', 'Product, engineering, and RevOps personas', 'Usage-ready exports and CRM sync'] },
  { icon: ShoppingCart, title: 'Ecommerce & Retail', points: ['Ops, logistics, and growth leaders', 'Platform and marketplace filters', 'Store count and GMV bands'] },
  { icon: Shield, title: 'Cybersecurity', points: ['CISO to analyst seniorities', 'Frameworks (SOC 2, ISO) and risk drivers', 'High-compliance outreach controls'] },
  { icon: Stethoscope, title: 'Healthcare', points: ['Provider networks and payers', 'Practice type, bed count, locations', 'Regional consent and opt-out'] },
  { icon: Cpu, title: 'IT Services', points: ['MSPs and SIs by specialization', 'Cloud, data, and infra expertise', 'Project timelines and intent'] },
  { icon: GraduationCap, title: 'Education', points: ['K-12 and higher-ed hierarchies', 'Program and accreditation filters', 'Grant and budget cycles'] },
  { icon: Banknote, title: 'Financial Services', points: ['Fintech, banks, and insurance', 'Risk, ops, and growth buyers', 'Regulatory region mapping'] },
];

export default function IndustriesPage() {
  return (
    <div className="pt-28">
      <section className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Industry-grade coverage for precision GTM</h1>
          <p className="mt-4 text-lg text-slate-600">Granular firmographics, clean org charts, and region-aware compliance help you reach the right buyers across industries.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map(({ icon: Icon, title, points }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                {points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border border-slate-200 p-6">
            <div className="h-11 w-11 rounded-xl bg-slate-900 text-white flex items-center justify-center"><Network className="h-5 w-5" /></div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Account hierarchies</h3>
            <p className="mt-2 text-sm text-slate-600">Parent-subsidiary links and multi-location entities mapped for accurate targeting and routing.</p>
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 p-6">
            <div className="h-11 w-11 rounded-xl bg-slate-900 text-white flex items-center justify-center"><Users className="h-5 w-5" /></div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Buying committees</h3>
            <p className="mt-2 text-sm text-slate-600">Seniorities, roles, and responsibilities standardized for clear persona-based outreach.</p>
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 p-6">
            <div className="h-11 w-11 rounded-xl bg-slate-900 text-white flex items-center justify-center"><Target className="h-5 w-5" /></div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Signal-led targeting</h3>
            <p className="mt-2 text-sm text-slate-600">Layer intent, technographics, and hiring trends to prioritize accounts most likely to convert.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-fuchsia-50 p-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-slate-900">See coverage for your exact market</h3>
            <p className="mt-2 text-slate-600">Request a tailored breakdown by region, company size, and role combinations.</p>
          </div>
          <a href="#/contact" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800">Request a report</a>
        </div>
      </section>
    </div>
  );
}
