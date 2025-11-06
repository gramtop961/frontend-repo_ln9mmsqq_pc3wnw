import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function ResourceTeasers() {
  return (
    <section id="resources" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Resources to sharpen your GTM</h2>
          <p className="mt-3 text-slate-600">Guides, benchmarks, and templates to help your team move faster.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition">
              <div className="h-40 bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">Data hygiene checklist {i}</h3>
                <p className="mt-2 text-sm text-slate-600">A practical framework for keeping your CRM accurate, enriched, and ready for revenue.</p>
                <div className="mt-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-700">Read article →</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <ResourceTeasers />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
