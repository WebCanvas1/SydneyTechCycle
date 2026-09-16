import { RefreshCw, ArrowRight, ArrowDown } from 'lucide-react';
import { IMAGES, REUSE_JOURNEY_REUSE, REUSE_JOURNEY_RECYCLE } from '@/lib/constants';

export default function ReuseFirst() {
  return (
    <section id="our-approach" className="bg-cream-100 section-py relative overflow-hidden">
      <div className="container-px">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-eyebrow text-forest-600 mb-5 block">Reuse First</span>
          <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-ink-900 mb-6 text-balance">
            Before we recycle, we ask if it can be reused.
          </h2>
          <p className="text-lg text-ink-600 leading-relaxed text-pretty">
            Responsible technology management isn't only about recycling. Where practical and appropriate, reusable equipment can be assessed for refurbishment or reuse, helping extend the useful life of technology and reduce unnecessary waste.
          </p>
        </div>

        {/* Visual journey */}
        <div className="reveal reveal-delay-1 space-y-8">
          {/* Reuse pathway */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-cream-50" />
              </div>
              <span className="text-eyebrow text-forest-700">Reuse Pathway</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:gap-4">
              {REUSE_JOURNEY_REUSE.map((step, i) => (
                <div key={step} className="flex items-center gap-3 lg:gap-4">
                  <div className="px-5 py-3.5 rounded-xl bg-forest-600/8 border border-forest-300 transition-all duration-300 hover:bg-forest-600 hover:border-forest-600 group cursor-default">
                    <span className="font-display font-semibold text-forest-700 text-sm transition-colors duration-300 group-hover:text-cream-50">
                      {step}
                    </span>
                  </div>
                  {i < REUSE_JOURNEY_REUSE.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-forest-500/50 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recycle pathway */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-ink-200 flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-ink-600" />
              </div>
              <span className="text-eyebrow text-ink-500">Recycle Pathway</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:gap-4">
              {REUSE_JOURNEY_RECYCLE.map((step, i) => (
                <div key={step} className="flex items-center gap-3 lg:gap-4">
                  <div className="px-5 py-3.5 rounded-xl bg-ink-100 border border-ink-200 transition-all duration-300 hover:bg-ink-900 hover:border-ink-900 group cursor-default">
                    <span className="font-display font-semibold text-ink-700 text-sm transition-colors duration-300 group-hover:text-cream-50">
                      {step}
                    </span>
                  </div>
                  {i < REUSE_JOURNEY_RECYCLE.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-ink-400 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="mt-14 reveal reveal-delay-2">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            <img
              src={IMAGES.circuitBoards}
              alt="Electronics being assessed for reuse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <p className="text-cream-50 text-lg lg:text-xl font-display font-semibold max-w-lg">
                Extending the useful life of technology wherever practical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
