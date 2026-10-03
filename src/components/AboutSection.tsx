import React from 'react';
import { Target, Layers, Users, Sparkles } from 'lucide-react';
import { COMPANY_NAME, POSITIONING, BRAND_TAGLINE } from '../config';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 text-neutral-100 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Our Origin & Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            About {COMPANY_NAME}
          </h2>
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
            {POSITIONING} · {BRAND_TAGLINE}
          </div>
        </div>

        {/* Core Company Narrative strictly complying with instructions */}
        <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-12 space-y-8">
          <div className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal space-y-6">
            <p>
              <strong className="text-white font-semibold">{COMPANY_NAME}</strong> is a multi-service contracting and project execution company created to make construction, renovation and finishing projects simpler for customers.
            </p>
            <p>
              Instead of managing multiple project requirements separately, customers can discuss their needs with one professional point of contact and plan the required work together.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-neutral-800">
            <div className="p-5 bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="p-2.5 bg-neutral-900 text-amber-500 w-fit">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide">
                Unified Coordination
              </h3>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                Bring structural fabrication, partitions, ceilings, electrical, and finishing trades into one synchronized schedule.
              </p>
            </div>

            <div className="p-5 bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="p-2.5 bg-neutral-900 text-amber-500 w-fit">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide">
                Single Point of Contact
              </h3>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                Clear communication channel from initial site survey to quotation, execution monitoring, and handover.
              </p>
            </div>

            <div className="p-5 bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="p-2.5 bg-neutral-900 text-amber-500 w-fit">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide">
                Customer-Centric Execution
              </h3>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                Every project is planned around the customer's specific spatial dimensions, operational deadlines, and material specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
