import React from 'react';
import { PhoneCall, Ruler, FileSpreadsheet, HardHat, CheckCheck } from 'lucide-react';
import { COMPANY_NAME } from '../config';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell Us Your Requirement',
      description: 'Contact us through WhatsApp, phone or enquiry form to outline what work you need.',
      icon: PhoneCall,
    },
    {
      number: '02',
      title: 'Site Assessment',
      description: 'Understand measurements, site conditions and project requirements directly on location.',
      icon: Ruler,
    },
    {
      number: '03',
      title: 'Quotation',
      description: 'Prepare a transparent, itemized quotation based on the mutually agreed scope of work.',
      icon: FileSpreadsheet,
    },
    {
      number: '04',
      title: 'Project Execution',
      description: 'Coordinate trades and execute the required work following quality benchmarks and timelines.',
      icon: HardHat,
    },
    {
      number: '05',
      title: 'Final Handover',
      description: 'Complete finishing touches, inspect with you, and conduct the final project handover.',
      icon: CheckCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-neutral-950 text-neutral-100 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <span className="w-2 h-2 bg-amber-500"></span>
            <span>Simple, Structured Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            How {COMPANY_NAME} Works
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            A reliable 5-stage coordination process designed to keep your project on schedule, on budget, and free from multi-contractor friction.
          </p>
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-colors flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-amber-500">
                      {step.number}
                    </span>
                    <div className="p-2 bg-neutral-950 border border-neutral-800 text-neutral-400 group-hover:text-amber-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Step {idx + 1} of 5</span>
                  <span className="text-amber-500/80">Active Coordination</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
