import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'bg-ink-950/90 backdrop-blur-xl border-b border-ink-700/50 shadow-sm'
            : 'bg-ink-950/40 backdrop-blur-md'
        }`}
      >
        <nav className="container-px h-16 lg:h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            {/* Brand device — abstract circular technology symbol */}
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
                <circle cx="18" cy="18" r="16" stroke="#168a45" strokeWidth="2" strokeDasharray="8 4" className="transition-transform duration-700 group-hover:rotate-180" style={{ transformOrigin: 'center' }} />
                <circle cx="18" cy="18" r="9" fill="#0a0a0a" />
                <path d="M18 9 L22 18 L18 27 L14 18 Z" fill="#f4c430" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-cream-50 leading-none">
              Sydney<br className="hidden sm:hidden" />
              <span className="text-cream-50"> TechCycle</span>
            </span>
          </a>

          {/* Centre: Links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: CTA — yellow bg, black text */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#request-collection"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 text-ink-950 text-sm font-semibold rounded-full transition-all duration-300 ease-out-expo hover:bg-forest-600 hover:text-cream-50 hover:shadow-lg hover:shadow-forest-600/30 hover:-translate-y-0.5"
            >
              Request a Collection
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-cream-50" />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ease-out-expo ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-ink-950 shadow-2xl transition-transform duration-500 ease-out-expo ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-ink-800">
            <span className="font-display font-bold text-lg text-cream-50">Sydney TechCycle</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6 text-cream-50" />
            </button>
          </div>
          <div className="p-5 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-4 rounded-xl text-cream-200 hover:bg-ink-900 hover:text-yellow-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#request-collection"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-yellow-400 text-ink-950 font-semibold text-sm rounded-full"
            >
              Request a Collection
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
