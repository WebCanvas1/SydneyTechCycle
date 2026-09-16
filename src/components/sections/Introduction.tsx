import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/constants';

export default function Introduction() {
  return (
    <section className="bg-cream-100 section-py">
      <div className="container-px">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="reveal relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={IMAGES.officeMonitors}
                alt="Modern office with computer monitors"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 w-48 p-5 bg-ink-900 rounded-xl shadow-xl hidden md:block border border-ink-700">
              <p className="text-eyebrow text-yellow-400 mb-1">Reuse First</p>
              <p className="text-sm text-cream-200 leading-snug">
                We assess for reuse before recycling wherever practical.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal reveal-delay-1">
            <span className="text-eyebrow text-forest-600 mb-5 block">Introduction</span>
            <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-ink-900 mb-6 text-balance">
              Your old IT equipment still has value.
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed mb-4 text-pretty">
              Technology doesn't have to become waste when an organisation upgrades.
            </p>
            <p className="text-base text-ink-500 leading-relaxed mb-8 text-pretty">
              Sydney TechCycle helps businesses, schools and organisations responsibly manage unwanted electronics while protecting sensitive data and prioritising reuse wherever practical.
            </p>
            <a href="#our-approach" className="group inline-flex items-center gap-2 text-forest-700 font-medium text-sm">
              Discover Our Approach
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
