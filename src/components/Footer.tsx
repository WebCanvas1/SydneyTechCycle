import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer id="about" className="bg-ink-950 text-cream-300 pt-20 pb-10">
      <div className="container-px">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-10 h-10" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#168a45" strokeWidth="2" strokeDasharray="8 4" />
                  <circle cx="18" cy="18" r="9" fill="#0a0a0a" />
                  <path d="M18 9 L22 18 L18 27 L14 18 Z" fill="#f4c430" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-cream-50">Sydney TechCycle</span>
            </div>
            <p className="text-cream-400 text-sm leading-relaxed max-w-md mb-6 text-pretty">
              Business E-Waste Recycling & Secure IT Disposal. Technology deserves a better ending.
            </p>
            <p className="text-eyebrow text-yellow-400 mb-4">Sydney • NSW</p>
            <a
              href="#request-collection"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-ink-950 font-semibold text-sm rounded-full transition-all duration-300 ease-out-expo hover:bg-forest-600 hover:text-cream-50 hover:-translate-y-0.5"
            >
              Request a Collection
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <p className="text-eyebrow text-cream-500/60 mb-5">Navigate</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-cream-400 hover:text-yellow-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-eyebrow text-cream-500/60 mb-5">Contact</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-forest-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-cream-400">Email</p>
                  <p className="text-sm text-cream-300">hello@sydneytechcycle.com.au</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-forest-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-cream-400">Phone</p>
                  <p className="text-sm text-cream-300">02 8000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-forest-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-cream-400">Service Area</p>
                  <p className="text-sm text-cream-300">Metropolitan Sydney, NSW, Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-500/50">
            © {new Date().getFullYear()} Sydney TechCycle. Technology Deserves a Better Ending.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-cream-500/50 hover:text-yellow-400 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-cream-500/50 hover:text-yellow-400 transition-colors">Terms</a>
            <a href="/admin" className="text-xs text-cream-500/50 hover:text-yellow-400 transition-colors">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
