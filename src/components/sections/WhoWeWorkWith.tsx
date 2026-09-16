import {
  Building2, Briefcase, Network, GraduationCap, Landmark,
  HeartPulse, Building, Server, Users, type LucideIcon,
} from 'lucide-react';
import { WHO_WE_WORK_WITH } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  Building2, Briefcase, Network, GraduationCap, Landmark,
  HeartPulse, Building, Server, Users,
};

export default function WhoWeWorkWith() {
  return (
    <section className="bg-cream-50 section-py border-y border-ink-100">
      <div className="container-px">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-eyebrow text-forest-600 mb-5 block">Who We Work With</span>
          <h2 className="text-display text-4xl lg:text-5xl text-ink-900 text-balance">
            Trusted by organisations across Sydney.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
          {WHO_WE_WORK_WITH.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Building2;
            return (
              <div
                key={item.label}
                className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-xl bg-cream-100 border border-ink-100 p-6 lg:p-8 transition-all duration-500 ease-out-expo hover:border-forest-400 hover:shadow-lg hover:shadow-forest-900/5 hover:-translate-y-1`}
              >
                <div className="w-12 h-12 rounded-xl bg-forest-600/8 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-forest-600 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-forest-600 transition-colors duration-300 group-hover:text-cream-50" strokeWidth={1.5} />
                </div>
                <p className="font-display font-semibold text-ink-900 text-lg leading-tight">{item.label}</p>
                {/* Yellow accent line on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-500 ease-out-expo group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
