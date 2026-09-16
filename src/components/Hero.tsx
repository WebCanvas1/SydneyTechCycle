import { ArrowRight, MapPin } from 'lucide-react';
import { TECH_STRIP_ITEMS } from '@/lib/constants';

const HERO_IMAGE = 'https://raw.githubusercontent.com/WebCanvas1/SydneyTechCycle/main/hero-recycling.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Green recycling symbol on electronic circuit board representing sustainable IT recycling"
          className="w-full h-full object-cover object-[72%_center] sm:object-[65%_center]"
        />
      </div>

      {/* Mobile gets extra lower-page contrast; desktop preserves the bright image focal point. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.90)_0%,rgba(10,10,10,0.62)_58%,rgba(10,10,10,0.18)_100%)] sm:bg-gradient-to-r sm:from-ink-950/90 sm:via-ink-950/65 sm:to-transparent lg:bg-[linear-gradient(90deg,rgba(10,10,10,0.92)_0%,rgba(10,10,10,0.80)_30%,rgba(10,10,10,0.38)_48%,rgba(10,10,10,0)_68%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent sm:hidden pointer-events-none" />

      <div className="relative container-px pb-8 sm:pb-16 pt-24 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-2 mb-4 sm:mb-8 animate-fade-in">
            <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
            <span className="text-eyebrow text-yellow-400">Sydney • NSW</span>
          </div>

          <h1 className="text-display-lg text-cream-50 text-[2.65rem] leading-[0.98] sm:text-7xl lg:text-8xl xl:text-9xl mb-5 sm:mb-6 animate-fade-up">
            IT Recycling
            <br />
            for a Cleaner,
            <br />
            <span className="text-[#22A95A]">Brighter Tomorrow.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-cream-50 max-w-2xl mb-3 sm:mb-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Secure, responsible IT asset disposal and electronics recycling for Sydney organisations.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-cream-100 max-w-2xl mb-6 sm:mb-10 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            From office technology upgrades to complete IT infrastructure clear-outs, Sydney TechCycle helps organisations securely reuse, recover and recycle unwanted technology.
          </p>

          <div className="grid grid-cols-1 min-[430px]:grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <a href="#request-collection" className="inline-flex min-h-12 items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-yellow-400 text-ink-950 font-semibold text-sm tracking-wide rounded-full transition-all duration-300 ease-out-expo hover:bg-forest-600 hover:text-cream-50 hover:shadow-xl hover:shadow-forest-600/30 hover:-translate-y-0.5">
              Request a Collection
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
            <a href="#services" className="btn-dark-secondary">Business Solutions</a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-ink-700/50 bg-ink-950/85 backdrop-blur-sm py-3 sm:py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TECH_STRIP_ITEMS, ...TECH_STRIP_ITEMS].map((item, i) => (
            <span key={i} className="text-eyebrow text-cream-400/50 mx-5 sm:mx-8 flex items-center gap-5 sm:gap-8">
              {item}<span className="text-yellow-400/60">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
