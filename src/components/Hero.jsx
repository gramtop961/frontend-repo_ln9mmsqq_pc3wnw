import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[86vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-2xl py-28">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/90 px-3 py-1 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Geodata Global • Compliant B2B data platform
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            A Leading B2B Contact Database Provider
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Verify millions of decision-makers, enrich your CRM, and launch revenue campaigns with confidence. Clean, compliant, and continually refreshed data built for modern GTM teams.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#/solutions" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-slate-800">
              Explore solutions
            </a>
            <a href="#/contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium hover:bg-slate-50">
              Book a demo
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-slate-500">
            <div>
              <p className="text-2xl font-semibold text-slate-900">95%+</p>
              <p>Email accuracy</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900">200M+</p>
              <p>Verified contacts</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900">190+</p>
              <p>Countries covered</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900">24/7</p>
              <p>Human support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
