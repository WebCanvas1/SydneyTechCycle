import { ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS } from '@/lib/constants';

export default function HowItWorks() {
  return (
    <section className="bg-cream-50 section-py border-y border-ink-100">
      <div className="container-px">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-eyebrow text-forest-600 mb-5 block">How It Works</span>
          <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-ink-900 text-balance">
            From your workplace to its next chapter.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {HOW_IT_WORKS.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} group relative`}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl bg-cream-100 border border-ink-100 p-7 lg:p-8 h-full transition-all duration-500 ease-out-expo hover:border-forest-400 hover:shadow-xl hover:shadow-forest-900/5 hover:-translate-y-1">
                {/* Number — yellow accent */}
                <span className="font-display text-5xl font-bold text-yellow-400/30 mb-4 block transition-colors duration-300 group-hover:text-yellow-400/50">
                  {step.number}
                </span>
                <h3 className="font-display font-semibold text-ink-900 text-lg mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow between cards */}
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-cream-50 border border-ink-200 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-ink-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 reveal">
          <a href="#request-collection" className="btn-primary">
            Request a Collection
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
