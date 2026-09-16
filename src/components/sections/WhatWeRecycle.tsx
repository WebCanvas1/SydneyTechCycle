import {
  Monitor, Smartphone, Server, Cpu, Printer, Cable,
  ArrowRight, type LucideIcon,
} from 'lucide-react';
import { EQUIPMENT_CATEGORIES, IMAGES } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  Monitor, Smartphone, Server, Cpu, Printer, Cable,
};

export default function WhatWeRecycle() {
  return (
    <section id="what-we-recycle" className="bg-ink-900 section-py relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img src={IMAGES.circuitBoard} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/95 to-ink-900" />

      <div className="relative container-px">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-eyebrow text-yellow-400 mb-5 block">What We Recycle</span>
          <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-cream-50 text-balance">
            From a box of laptops to an entire server room.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {EQUIPMENT_CATEGORIES.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Monitor;
            return (
              <div
                key={cat.name}
                className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl bg-ink-800/50 backdrop-blur-sm border border-ink-700 p-7 transition-all duration-500 ease-out-expo hover:border-forest-500/40 hover:bg-ink-800/80 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-forest-500/15 flex items-center justify-center transition-all duration-300 group-hover:bg-forest-500/25">
                    <Icon className="w-5 h-5 text-forest-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-cream-50 text-lg">{cat.name}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-cream-300/70">
                      <span className="w-1 h-1 rounded-full bg-yellow-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 reveal">
          <a
            href="#request-collection"
            className="group inline-flex items-center gap-2 text-cream-50 font-medium text-lg border-b border-ink-600 pb-1 transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
          >
            Not sure if we accept it? Ask our team
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
