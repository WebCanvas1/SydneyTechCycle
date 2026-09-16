import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import Introduction from '@/components/sections/Introduction';
import WhoWeWorkWith from '@/components/sections/WhoWeWorkWith';
import Services from '@/components/sections/Services';
import WhatWeRecycle from '@/components/sections/WhatWeRecycle';
import DataSecurity from '@/components/sections/DataSecurity';
import ReuseFirst from '@/components/sections/ReuseFirst';
import HowItWorks from '@/components/sections/HowItWorks';
import Enterprise from '@/components/sections/Enterprise';
import Education from '@/components/sections/Education';
import EnvironmentalImpact from '@/components/sections/EnvironmentalImpact';
import SydneyServiceArea from '@/components/sections/SydneyServiceArea';
import CollectionForm from '@/components/sections/CollectionForm';
import Footer from '@/components/Footer';

type Route =
  | { name: 'home' }
  | { name: 'seo'; slug: string };

function getRoute(pathname: string): Route {
  const seoSlugs = [
    'e-waste-recycling-sydney',
    'business-e-waste-recycling-sydney',
    'computer-recycling-sydney',
    'it-asset-disposal-sydney',
    'secure-data-destruction-sydney',
    'server-recycling-sydney',
  ];

  const slug = pathname.replace(/^\//, '').replace(/\/$/, '');
  if (seoSlugs.includes(slug)) {
    return { name: 'seo', slug };
  }
  return { name: 'home' };
}

export default function App() {
  useScrollReveal();
  const [route, setRoute] = useState<Route>(() => getRoute(window.location.pathname));

  useEffect(() => {
    const onPop = () => setRoute(getRoute(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  if (route.name === 'seo') {
    return (
      <>
        <Navigation />
        <SeoPage slug={route.slug} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <Introduction />
        <WhoWeWorkWith />
        <Services />
        <WhatWeRecycle />
        <DataSecurity />
        <ReuseFirst />
        <HowItWorks />
        <Enterprise />
        <Education />
        <EnvironmentalImpact />
        <SydneyServiceArea />
        <CollectionForm />
      </main>
      <Footer />
    </>
  );
}

function SeoPage({ slug }: { slug: string }) {
  const pages: Record<string, { title: string; heading: string; description: string; keywords: string }> = {
    'e-waste-recycling-sydney': {
      title: 'E-Waste Recycling Sydney | Sydney TechCycle',
      heading: 'E-Waste Recycling for Sydney Businesses',
      description: 'Professional e-waste recycling services for Sydney organisations. Secure, responsible IT asset disposal with a reuse-first approach.',
      keywords: 'e waste recycling Sydney, business e waste recycling, electronics recycling Sydney',
    },
    'business-e-waste-recycling-sydney': {
      title: 'Business E-Waste Recycling Sydney | Sydney TechCycle',
      heading: 'Business E-Waste Recycling Across Sydney',
      description: 'Responsible business e-waste recycling for Sydney organisations. From office clear-outs to enterprise IT disposal.',
      keywords: 'business e waste recycling Sydney, corporate electronics recycling, office e waste',
    },
    'computer-recycling-sydney': {
      title: 'Computer Recycling Sydney | Sydney TechCycle',
      heading: 'Computer Recycling for Sydney Organisations',
      description: 'Secure computer and laptop recycling for Sydney businesses, schools and organisations. Reuse-first approach with data protection.',
      keywords: 'computer recycling Sydney, laptop recycling Sydney, business computer recycling',
    },
    'it-asset-disposal-sydney': {
      title: 'IT Asset Disposal Sydney | Sydney TechCycle',
      heading: 'IT Asset Disposal for Sydney Enterprises',
      description: 'Structured IT asset disposal services for Sydney organisations. Secure data handling and responsible recycling.',
      keywords: 'IT asset disposal Sydney, IT equipment recycling, corporate IT disposal',
    },
    'secure-data-destruction-sydney': {
      title: 'Secure Data Destruction Sydney | Sydney TechCycle',
      heading: 'Secure Data Destruction for Sydney Business',
      description: 'Secure data destruction services for Sydney organisations. Protect sensitive business data during IT disposal.',
      keywords: 'secure data destruction Sydney, data destruction services, hard drive destruction',
    },
    'server-recycling-sydney': {
      title: 'Server Recycling Sydney | Sydney TechCycle',
      heading: 'Server & Network Equipment Recycling',
      description: 'Responsible server, switch and network equipment recycling for Sydney data centres and IT departments.',
      keywords: 'server recycling Sydney, network equipment recycling, data centre recycling',
    },
  };

  const page = pages[slug];
  if (!page) return null;

  useEffect(() => {
    document.title = page.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', page.description);
  }, [page]);

  return (
    <main>
      {/* SEO Hero */}
      <section className="bg-ink-950 pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="relative container-px">
          <div className="max-w-4xl">
            <span className="text-eyebrow text-forest-400 mb-5 block">Sydney • NSW</span>
            <h1 className="text-display-lg text-cream-50 text-4xl lg:text-6xl xl:text-7xl mb-6 text-balance">
              {page.heading}
            </h1>
            <p className="text-lg text-cream-300 max-w-2xl mb-8 text-pretty">
              {page.description}
            </p>
            <a href="#request-collection" className="inline-flex items-center gap-2 px-7 py-4 bg-forest-600 text-cream-50 font-medium text-sm rounded-full transition-all duration-300 ease-out-expo hover:bg-forest-500 hover:-translate-y-0.5">
              Request a Collection
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream-50 section-py">
        <div className="container-px max-w-4xl">
          <div className="reveal space-y-6">
            <h2 className="text-display text-3xl lg:text-4xl text-ink-900">
              Secure, responsible technology disposal.
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed text-pretty">
              Sydney TechCycle provides {page.heading.toLowerCase()} with a reuse-first approach. We help organisations across Sydney securely manage unwanted technology, protect sensitive data, and prioritise reuse wherever practical.
            </p>
            <p className="text-base text-ink-500 leading-relaxed text-pretty">
              From office technology upgrades to complete IT infrastructure clear-outs, our team coordinates collection, assessment, secure data handling, and responsible recycling or reuse pathways — all designed for businesses, schools, government and enterprise organisations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                'Secure data handling throughout disposal',
                'Reuse-first approach before recycling',
                'Business and enterprise collections',
                'Asset identification and reporting',
                'Server and network equipment',
                'Multi-site and bulk collections',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 rounded-xl bg-cream-100 border border-ink-100">
                  <div className="w-2 h-2 rounded-full bg-forest-600" />
                  <span className="text-sm text-ink-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CollectionForm />
    </main>
  );
}
