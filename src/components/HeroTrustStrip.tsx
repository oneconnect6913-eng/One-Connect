import React from 'react';
import { Layers, Building, Ruler, ClipboardCheck } from 'lucide-react';

export const HeroTrustStrip: React.FC = () => {
  const highlights = [
    {
      icon: Layers,
      title: 'Multiple Services',
      description: 'One professional point of contact',
    },
    {
      icon: Building,
      title: 'Residential & Commercial',
      description: 'Solutions for different project types',
    },
    {
      icon: Ruler,
      title: 'Site Assessment',
      description: 'Understand your requirement before execution',
    },
    {
      icon: ClipboardCheck,
      title: 'Complete Project Coordination',
      description: 'From planning to final handover',
    },
  ];

  return (
    <section className="bg-neutral-900 border-y border-neutral-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="py-6 px-4 sm:px-6 flex items-start gap-4 transition-colors hover:bg-neutral-800/40"
              >
                <div className="p-2.5 bg-neutral-950 border border-neutral-800 text-amber-500 rounded-none shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
