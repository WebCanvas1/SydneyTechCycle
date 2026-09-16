import { ArrowRight, Check } from 'lucide-react';
import { IMAGES, ENTERPRISE_FEATURES } from '@/lib/constants';

export default function Enterprise() {
  return (
    <section id="enterprise" className="bg-ink-900 section-py relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-15">
        <img src={IMAGES.serverRoom2} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/95 to-ink-900/80" />

      <div className="relative container-px">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="reveal">
            <span className="text-eyebrow text-yellow-400 mb-5 block">Enterprise</span>
            <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-cream-50 mb-6 text-balance">
              When an IT upgrade becomes a logistics project.
            </h2>
            <p className="text-lg text-cream-300 leading-relaxed mb-8 text-pretty">
              Large technology refreshes can leave organisations managing hundreds or thousands of devices across multiple locations. Sydney TechCycle provides scalable collection and IT asset disposal solutions designed for larger organisations.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {ENTERPRISE_FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest-600/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-forest-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-cream-300">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#request-collection"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-cream-50 font-medium text-sm rounded-full border border-forest-600/50 transition-all duration-300 ease-out-expo hover:border-forest-400 hover:bg-forest-600 hover:text-cream-50 hover:-translate-y-0.5"
            >
              Discuss Your Requirements
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: Image */}
          <div className="reveal reveal-delay-1 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={IMAGES.officeEmpty}
                alt="Enterprise office space with IT equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -top-6 -left-6 w-44 p-5 bg-forest-700 rounded-xl shadow-xl hidden md:block border border-forest-600">
              <p className="text-eyebrow text-yellow-400 mb-1">Scalable</p>
              <p className="text-sm text-cream-100 leading-snug">
                Multi-site collections and bulk IT asset disposal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
