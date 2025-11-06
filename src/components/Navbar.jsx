import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'Solutions', href: '#/solutions' },
  { label: 'Industries', href: '#/industries' },
  { label: 'Resources', href: '#/resources' },
  { label: 'Contact', href: '#/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#/" className="flex items-center gap-2">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center">
            <span className="font-bold">G</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">Geodata Global</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-slate-900 transition">
              {item.label}
            </a>
          ))}
          <a href="#/contact" className="inline-flex items-center rounded-full bg-slate-900 text-white text-sm px-4 py-2 hover:bg-slate-800 transition">
            Get a demo
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#/contact" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white text-sm px-4 py-2">
              Get a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
