export default function Footer() {
  return (
    <footer className="border-t bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center">
              <span className="font-bold">G</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">Geodata Global</span>
          </div>
          <p className="mt-3 text-sm text-slate-600 max-w-xs">
            Enterprise-grade B2B contact data and enrichment built for revenue teams who value accuracy and compliance.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#/resources" className="hover:text-slate-900">About</a></li>
            <li><a href="#/resources" className="hover:text-slate-900">Blog</a></li>
            <li><a href="#/resources" className="hover:text-slate-900">Careers</a></li>
            <li><a href="#/resources" className="hover:text-slate-900">Security</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Products</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#/solutions" className="hover:text-slate-900">Contact database</a></li>
            <li><a href="#/solutions" className="hover:text-slate-900">Enrichment</a></li>
            <li><a href="#/solutions" className="hover:text-slate-900">Intent signals</a></li>
            <li><a href="#/solutions" className="hover:text-slate-900">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Get in touch</h4>
          <form className="mt-3 space-y-3">
            <input type="email" required placeholder="Work email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <button type="submit" className="w-full rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800">Request a demo</button>
          </form>
          <p className="mt-3 text-xs text-slate-500">By submitting, you agree to our communications. We respect your inbox.</p>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Geodata Global. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
