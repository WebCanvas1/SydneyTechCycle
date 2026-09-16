import { ShieldCheck, RefreshCw, MapPin, Recycle } from 'lucide-react';
import { TRUST_ITEMS } from '@/lib/constants';

const icons = [MapPin, ShieldCheck, RefreshCw, Recycle];

export default function TrustStrip() {
  return (
    <section className="bg-ink-900 py-6 lg:py-8 border-y border-ink-700/50">
      <div className="container-px">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item} className="flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-600/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-forest-400" strokeWidth={1.5} />
                </div>
                <span className="text-eyebrow text-cream-300 leading-tight">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
