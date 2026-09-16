import { useState } from 'react';
import { MapPin, Search, Check, X } from 'lucide-react';
import { IMAGES, SERVICE_AREAS } from '@/lib/constants';

export default function SydneyServiceArea() {
  const [postcode, setPostcode] = useState('');
  const [result, setResult] = useState<'found' | 'not-found' | null>(null);
  const [foundArea, setFoundArea] = useState('');

  const checkPostcode = () => {
    const code = postcode.trim();
    if (!code) return;

    const area = SERVICE_AREAS.find((a) => a.postcodes.includes(code));
    if (area) {
      setResult('found');
      setFoundArea(area.name);
    } else {
      setResult('not-found');
    }
  };

  return (
    <section className="bg-cream-50 section-py border-y border-ink-100">
      <div className="container-px">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content + Postcode checker */}
          <div className="reveal">
            <span className="text-eyebrow text-forest-600 mb-5 block">Sydney Service Area</span>
            <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-ink-900 mb-6 text-balance">
              Built for Sydney business.
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed mb-8 text-pretty">
              Business electronics collection solutions across metropolitan Sydney.
            </p>

            {/* Postcode checker */}
            <div className="p-6 lg:p-7 rounded-2xl bg-cream-100 border border-ink-100">
              <p className="text-eyebrow text-ink-500 mb-4 block">Check Your Business Location</p>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => {
                      setPostcode(e.target.value);
                      setResult(null);
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && checkPostcode()}
                    placeholder="Enter postcode"
                    className="w-full pl-11 pr-4 py-3.5 bg-cream-50 border border-ink-200 rounded-xl text-ink-900 placeholder-ink-400 transition-all duration-200 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10"
                    maxLength={4}
                  />
                </div>
                <button
                  onClick={checkPostcode}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-yellow-400 text-ink-950 font-semibold text-sm rounded-xl transition-all duration-300 ease-out-expo hover:bg-forest-600 hover:text-cream-50 hover:-translate-y-0.5"
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Check</span>
                </button>
              </div>

              {/* Result */}
              {result === 'found' && (
                <div className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-forest-50 border border-forest-200 animate-fade-up">
                  <div className="w-8 h-8 rounded-full bg-forest-600 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-cream-50" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-forest-800">We service your area</p>
                    <p className="text-xs text-forest-700">{foundArea} — Sydney TechCycle covers this postcode.</p>
                  </div>
                </div>
              )}
              {result === 'not-found' && (
                <div className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-ink-100 border border-ink-200 animate-fade-up">
                  <div className="w-8 h-8 rounded-full bg-ink-400 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-cream-50" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-700">Contact us to confirm</p>
                    <p className="text-xs text-ink-500">This postcode isn't listed, but reach out — we may still be able to help.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Service area list */}
            <div className="mt-8">
              <p className="text-eyebrow text-ink-500 mb-4 block">Service Regions</p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area.name}
                    className="px-3.5 py-1.5 rounded-full bg-cream-100 border border-ink-200 text-xs font-medium text-ink-600 transition-all duration-200 hover:border-forest-400 hover:text-forest-700"
                  >
                    {area.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sydney map visual */}
          <div className="reveal reveal-delay-1 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={IMAGES.sydneySkyline}
                alt="Sydney skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className="text-eyebrow text-yellow-400">Sydney • NSW</span>
                </div>
                <p className="text-cream-50 text-2xl font-display font-semibold">
                  Metropolitan Sydney coverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
