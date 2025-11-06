import { Building2, ShoppingCart, Shield, Stethoscope, Cpu, GraduationCap, Banknote } from 'lucide-react';

const industries = [
  { icon: Building2, title: 'SaaS & Software', desc: 'Target product leaders, engineers, and buyers across fast-growing software companies.' },
  { icon: ShoppingCart, title: 'Ecommerce & Retail', desc: 'Reach digital leaders and operations teams driving online revenue.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Connect with CISOs and security practitioners in regulated environments.' },
  { icon: Stethoscope, title: 'Healthcare', desc: 'Navigate provider networks and healthtech ecosystems with compliant outreach.' },
  { icon: Cpu, title: 'IT Services', desc: 'Identify decision-makers across MSPs, SIs, and infrastructure providers.' },
  { icon: GraduationCap, title: 'Education', desc: 'Engage institutions and EdTech buyers by role, region, and program focus.' },
  { icon: Banknote, title: 'Financial Services', desc: 'Find fintech and banking stakeholders across risk, ops, and growth.' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Built for your industry</h2>
          <p className="mt-3 text-slate-600">Precise filters, clean hierarchies, and regional compliance for the markets you serve.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
              <a href="#/industries" className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700">Explore use cases →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
