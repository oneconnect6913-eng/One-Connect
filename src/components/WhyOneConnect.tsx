import React from 'react';
import { Layers, Users, Sliders, Building, Compass, PackageCheck } from 'lucide-react';
import { COMPANY_NAME } from '../config';

export const WhyOneConnect: React.FC = () => {
  const benefits = [
    {
      icon: Layers,
      title: 'Multiple Services',
      description: 'Different project requirements can be discussed through one company.',
    },
    {
      icon: Users,
      title: 'Professional Coordination',
      description: 'Keep project communication organized through one point of contact.',
    },
    {
      icon: Sliders,
      title: 'Customized Solutions',
      description: 'Every project can have different requirements, dimensions and finishes.',
    },
    {
      icon: Building,
      title: 'Residential & Commercial',
      description: 'Support different types of projects across living and business spaces.',
    },
    {
      icon: Compass,
      title: 'Site-Based Planning',
      description: 'Understand the actual site before finalizing requirements.',
    },
    {
      icon: PackageCheck,
      title: 'Complete Project Approach',
      description: 'Coordinate multiple work categories as part of one organized project.',
    },
  ];

  return (
    <section className="py-24 bg-neutral-900 border-t border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <span className="w-2 h-2 bg-amber-500"></span>
            <span>Why Choose {COMPANY_NAME}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            One Project. One Point of Contact.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            Eliminate the stress of chasing separate contractors, mismatched timelines, and finger-pointing. We coordinate every stage under disciplined technical oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-7 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                    {benefit.description}
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
