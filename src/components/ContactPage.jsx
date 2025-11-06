export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Contact sales</h1>
        <p className="mt-4 text-lg text-slate-600">Tell us about your goals. We’ll tailor a short demo with relevant data samples and workflows for your team.</p>

        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">First name</label>
            <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Last name</label>
            <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Work email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Company</label>
            <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">What are you looking to solve?</label>
            <textarea rows={5} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="e.g., enrich CRM, build ICP lists, global compliance" />
          </div>
          <div className="md:col-span-2 flex items-start gap-2">
            <input id="consent" type="checkbox" className="mt-1" />
            <label htmlFor="consent" className="text-xs text-slate-600">I agree to receive communications from Geodata Global. You can unsubscribe anytime.</label>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800">Request demo</button>
          </div>
        </form>
      </section>
    </div>
  );
}
