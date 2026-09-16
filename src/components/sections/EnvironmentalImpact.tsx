import { Leaf } from 'lucide-react';

export default function EnvironmentalImpact() {
  const hasMetrics = false;

  return (
    <section className="bg-forest-950 section-py relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-green opacity-30" />

      <div className="relative container-px">
        <div className="max-w-3xl mb-14 reveal">
          <div className="flex items-center gap-2 mb-5">
            <Leaf className="w-4 h-4 text-yellow-400" />
            <span className="text-eyebrow text-yellow-400">Environmental Impact</span>
          </div>
          <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-cream-50 text-balance">
            Less e-waste. More circulation.
          </h2>
        </div>

        {hasMetrics ? (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {/* Metrics would render here when populated via admin */}
          </div>
        ) : (
          <div className="reveal reveal-delay-1">
            <div className="max-w-2xl p-8 lg:p-10 rounded-2xl bg-forest-900/50 border border-forest-800">
              <p className="text-cream-300 text-lg leading-relaxed text-pretty">
                Our environmental impact metrics — including devices reused, equipment recycled, tonnes diverted, business collections and Sydney locations serviced — will be displayed here once verified data is published.
              </p>
              <p className="text-cream-400/60 text-sm mt-4">
                We do not publish fabricated or estimated statistics.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
