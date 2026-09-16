import { ArrowRight, GraduationCap, Check } from 'lucide-react';
import { IMAGES, EDUCATION_SERVICES } from '@/lib/constants';

export default function Education() {
  return (
    <section id="education" className="bg-cream-100 section-py">
      <div className="container-px">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={IMAGES.classroom}
                alt="Classroom with computers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 p-5 bg-forest-700 rounded-xl shadow-xl hidden md:block border border-forest-600">
              <p className="text-eyebrow text-yellow-400 mb-1">Education</p>
              <p className="text-sm text-cream-100 leading-snug">
                Technology recycling for schools, colleges and universities.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal reveal-delay-1 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap className="w-5 h-5 text-forest-600" />
              <span className="text-eyebrow text-forest-600">Education</span>
            </div>
            <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-ink-900 mb-6 text-balance">
              Old classroom technology. A better next chapter.
            </h2>
            <p className="text-base text-ink-600 leading-relaxed mb-6 text-pretty">
              For schools, colleges, universities and training organisations managing device upgrades, computer-lab refreshes or bulk device collections.
            </p>

            {/* Services list */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {EDUCATION_SERVICES.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest-600/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-forest-600" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-ink-600">{service}</span>
                </div>
              ))}
            </div>

            <a
              href="#request-collection"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-yellow-400 text-ink-950 font-semibold text-sm rounded-full transition-all duration-300 ease-out-expo hover:bg-forest-600 hover:text-cream-50 hover:shadow-lg hover:shadow-forest-600/20 hover:-translate-y-0.5"
            >
              Education Collections
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
