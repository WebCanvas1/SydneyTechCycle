import {
  MonitorSmartphone, HardDrive, ShieldCheck, Truck, Server,
  GraduationCap, Building2, RefreshCw, ArrowRight, type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  MonitorSmartphone, HardDrive, ShieldCheck, Truck, Server,
  GraduationCap, Building2, RefreshCw,
};

export default function Services() {
  return (
    <section id="services" className="bg-cream-100 section-py">
      <div className="container-px">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-eyebrow text-forest-600 mb-5 block">Services</span>
          <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-ink-900 text-balance">
            One partner. Every stage of IT disposal.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? HardDrive;
            return (
              <div
                key={service.number}
                className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl bg-cream-50 border border-ink-100 p-7 lg:p-8 transition-all duration-500 ease-out-expo hover:border-forest-400 hover:shadow-xl hover:shadow-forest-900/5 hover:-translate-y-1`}
              >
                {/* Number — yellow accent */}
                <span className="font-mono text-xs font-semibold text-yellow-600 mb-5 block">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-forest-600/8 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-forest-600 group-hover:scale-110">
                  <Icon className="w-5 h-5 text-forest-600 transition-colors duration-300 group-hover:text-cream-50" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-ink-900 text-lg leading-tight mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-ink-500 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-5 flex items-center gap-1.5 text-forest-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="text-xs font-medium">Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
