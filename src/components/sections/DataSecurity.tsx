import { ArrowRight, Lock, ChevronDown } from 'lucide-react';
import { IMAGES, DATA_WORKFLOW } from '@/lib/constants';

export default function DataSecurity() {
  return (
    <section id="data-security" className="bg-ink-950 section-py relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={IMAGES.serverRoom} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/90 to-ink-950" />
      </div>

      <div className="relative container-px">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="reveal">
            <div className="flex items-center gap-2 mb-5">
              <Lock className="w-4 h-4 text-yellow-400" />
              <span className="text-eyebrow text-yellow-400">Data Security</span>
            </div>
            <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-cream-50 mb-6 text-balance">
              The hardware may be obsolete. The data isn't.
            </h2>
            <p className="text-lg text-cream-300 leading-relaxed mb-4 text-pretty">
              Retired computers, servers and storage devices can still contain confidential business, employee and customer information.
            </p>
            <p className="text-base text-cream-300/70 leading-relaxed mb-8 text-pretty">
              Sydney TechCycle provides secure data-handling options throughout the IT disposal process.
            </p>
            <a
              href="#request-collection"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-yellow-400 text-ink-950 font-semibold text-sm rounded-full transition-all duration-300 ease-out-expo hover:bg-forest-600 hover:text-cream-50 hover:shadow-xl hover:shadow-forest-600/30 hover:-translate-y-0.5"
            >
              Explore Data Security
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: Workflow */}
          <div className="reveal reveal-delay-1">
            <div className="space-y-1">
              {DATA_WORKFLOW.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="flex items-center gap-4 w-full group">
                    <div className="relative flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-forest-600/15 border border-forest-500/30 flex items-center justify-center transition-all duration-300 group-hover:bg-forest-600 group-hover:border-forest-500">
                        <span className="font-mono text-xs text-forest-400 transition-colors duration-300 group-hover:text-cream-50">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 p-5 rounded-xl bg-ink-900/60 border border-ink-800 transition-all duration-300 group-hover:border-forest-500/30 group-hover:bg-ink-900">
                      <span className="font-display font-semibold text-cream-50 text-base">{step}</span>
                    </div>
                  </div>
                  {i < DATA_WORKFLOW.length - 1 && (
                    <ChevronDown className="w-4 h-4 text-yellow-400/40 mx-auto -my-1 block" style={{ marginLeft: '1.5rem' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
