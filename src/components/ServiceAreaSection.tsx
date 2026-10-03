import React from 'react';
import { MapPin, Navigation, ShieldCheck } from 'lucide-react';
import { SERVICE_AREAS } from '../config';

interface ServiceAreaSectionProps {
  onSelectAreaForQuote: (area: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({
  onSelectAreaForQuote,
}) => {
  return (
    <section className="py-20 bg-neutral-900 border-t border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <Navigation className="w-4 h-4 text-amber-500" />
            <span>Operational Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Serving Mumbai & Surrounding Areas
          </h2>
          <p className="text-base text-neutral-400 font-normal leading-relaxed">
            We provide organized on-site inspection, material transit, and execution oversight throughout the configured regional zones. Select your locality to plan a site assessment.
          </p>
        </div>

        {/* Areas Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {SERVICE_AREAS.map((area, idx) => (
            <button
              key={idx}
              onClick={() => onSelectAreaForQuote(area)}
              className="group p-4 bg-neutral-950 border border-neutral-800 hover:border-amber-500 text-left transition-all duration-150 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <MapPin className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono text-neutral-500">
                  Zone {(idx + 1).toString().padStart(2, '0')}
                </span>
              </div>
              <div>
                <span className="text-sm font-bold text-neutral-200 group-hover:text-amber-400 transition-colors block">
                  {area}
                </span>
                <span className="text-[11px] text-neutral-500 group-hover:text-neutral-400">
                  Active Coverage
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Strict coverage policy: We only accept project commitments within our active operational boundaries to ensure reliable on-site supervision.
            </span>
          </div>
          <span className="font-mono text-amber-500/90 whitespace-nowrap">
            Expanding to additional regions soon
          </span>
        </div>
      </div>
    </section>
  );
};
