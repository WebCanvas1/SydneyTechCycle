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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${scrolled ? 'bg-ink-950/95 backdrop-blur-xl border-b border-ink-700/50 shadow-sm' : 'bg-ink-950/55 backdrop-blur-md'}`}>
        <nav className="container-px h-16 lg:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 group min-w-0" aria-label="Sydney TechCycle home">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 36 36" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
                <circle cx="18" cy="18" r="16" stroke="#168a45" strokeWidth="2" strokeDasharray="8 4" className="transition-transform duration-700 group-hover:rotate-180" style={{ transformOrigin: 'center' }} />
                <circle cx="18" cy="18" r="9" fill="#0a0a0a" />
                <path d="M18 9 L22 18 L18 27 L14 18 Z" fill="#f4c430" />
              </svg>
            </div>
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-cream-50 leading-none truncate">Sydney <span className="text-cream-50">TechCycle</span></span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => <a key={link.label} href={link.href} className="nav-link">{link.label}</a>)}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#request-collection" className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 text-ink-950 text-sm font-semibold rounded-full transition-all duration-300 ease-out-expo hover:bg-forest-600 hover:text-cream-50 hover:shadow-lg hover:shadow-forest-600/30 hover:-translate-y-0.5">
              Request a Collection <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button className="lg:hidden w-11 h-11 -mr-2 flex items-center justify-center rounded-full active:bg-ink-800" onClick={() => setMobileOpen(true)} aria-label="Open menu" aria-expanded={mobileOpen}>
            <Menu className="w-6 h-6 text-cream-50" />
          </button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} aria-hidden={!mobileOpen}>
        <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className={`absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-ink-950 shadow-2xl transition-transform duration-300 ease-out-expo ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-ink-800">
            <span className="font-display font-bold text-lg text-cream-50">Sydney TechCycle</span>
            <button className="w-11 h-11 flex items-center justify-center rounded-full active:bg-ink-800" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X className="w-6 h-6 text-cream-50" /></button>
          </div>
          <div className="p-4 sm:p-5 space-y-1 overflow-y-auto max-h-[calc(100svh-76px)]">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center min-h-12 py-3 px-4 rounded-xl text-cream-200 hover:bg-ink-900 hover:text-yellow-400 transition-colors">{link.label}</a>
            ))}
            <a href="#request-collection" onClick={() => setMobileOpen(false)} className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 w-full px-5 py-3.5 bg-yellow-400 text-ink-950 font-semibold text-sm rounded-full">
              Request a Collection <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
