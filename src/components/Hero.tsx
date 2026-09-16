import { ArrowRight, MapPin } from 'lucide-react';
import { TECH_STRIP_ITEMS } from '@/lib/constants';

const HERO_IMAGE = '/hero-recycling.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink-950">
      {/* Uploaded IT recycling background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Green recycling symbol on electronic circuit board representing sustainable IT recycling"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* A subtle left-side treatment only for text readability; the image remains unobscured across the hero. */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] bg-gradient-to-r from-ink-950/55 via-ink-950/20 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative container-px pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="max-w-5xl">
          <div className="flex items-center gap-2 mb-8 animate-fade-in">
            <MapPin className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-eyebrow text-yellow-400 drop-shadow-md">Sydney • NSW</span>
          </div>

          <h1 className="text-display-lg text-cream-50 text-5xl sm:text-7xl lg:text-8xl xl:text-9xl mb-6 animate-fade-up drop-shadow-xl">
            Old Technology.
            <br />
            <span className="text-forest-500">New Purpose.</span>
          </h1>

          <p className="text-lg lg:text-xl text-cream-50 max-w-2xl mb-4 animate-fade-up drop-shadow-lg" style={{ animationDelay: '0.15s' }}>
            Secure, responsible IT asset disposal and electronics recycling for Sydney organisations.
          </p>

          <p className="text-base text-cream-100 max-w-2xl mb-10 animate-fade-up drop-shadow-lg" style={{ animationDelay: '0.25s' }}>
            From office technology upgrades to complete IT infrastructure clear-outs, Sydney TechCycle helps organisations securely reuse, recover and recycle unwanted technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <a
              href="#request-collection"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-yellow-400 text-ink-950 font-semibold text-sm tracking-wide rounded-full transition-all duration-300 ease-out-expo hover:bg-forest-600 hover:text-cream-50 hover:shadow-xl hover:shadow-forest-600/30 hover:-translate-y-0.5"
            >
              Request a Collection
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="btn-dark-secondary">
              Business Solutions
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-ink-700/50 bg-ink-950/80 backdrop-blur-sm py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TECH_STRIP_ITEMS, ...TECH_STRIP_ITEMS].map((item, i) => (
            <span key={i} className="text-eyebrow text-cream-400/50 mx-8 flex items-center gap-8">
              {item}
              <span className="text-yellow-400/60">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
