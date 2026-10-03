import React from 'react';
import { Check, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { COMPANY_NAME, getPhoneLink } from '../config';

interface MajorConversionSectionProps {
  onOpenQuote: () => void;
}

export const MajorConversionSection: React.FC<MajorConversionSectionProps> = ({
  onOpenQuote,
}) => {
  const checklistItems = [
    'Site Assessment',
    'Measurements',
    'Requirement Planning',
    'Scope Discussion',
    'Quotation',
    'Work Coordination',
    'Execution',
    'Finishing',
    'Final Handover',
  ];

  return (
    <section className="py-20 bg-neutral-900 border-y border-neutral-800 text-neutral-100 relative overflow-hidden">
      {/* Background subtle architectural motif */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
              <span className="w-2.5 h-0.5 bg-amber-500"></span>
              <span>Turnkey Coordination & Responsibility</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Need Multiple Works? <br />
              <span className="text-amber-400">Let {COMPANY_NAME} Handle the Project.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              You don't have to coordinate different service providers for every part of your project. Share your requirement with <strong className="text-white font-medium">{COMPANY_NAME}</strong> and discuss the complete scope with one professional team.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm tracking-wide rounded-none transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10"
              >
                <span>Discuss My Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getPhoneLink()}
                className="w-full sm:w-auto px-6 py-4 bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 text-white font-semibold text-sm rounded-none transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-amber-500" />
                <span>Call Directly</span>
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-neutral-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>One synchronized schedule. Clear scope documentation. No multi-party confusion.</span>
            </div>
          </div>

          {/* Right Column: Visual Checklist Card */}
          <div className="lg:col-span-6">
            <div className="bg-neutral-950 border border-neutral-800 p-8 relative">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Our End-to-End Execution Flow
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Structured oversight from first call to project completion
                  </p>
                </div>
                <div className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1">
                  9-POINT PROCESS
                </div>
              </div>

              {/* 9 Checklist Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {checklistItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 bg-neutral-900 border border-neutral-800 flex items-center gap-3 transition-colors hover:border-neutral-700"
                  >
                    <div className="w-5 h-5 bg-amber-500 text-neutral-950 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span>Accountable Contracting Model</span>
                <span className="text-amber-400 font-medium">Serving Mumbai & Suburbs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
