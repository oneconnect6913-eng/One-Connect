import React from 'react';
import { Home, Briefcase, Store, Utensils, Stethoscope, Factory, ArrowUpRight } from 'lucide-react';

interface ProjectTypesSectionProps {
  onSelectTypeForQuote: (type: string) => void;
}

export const ProjectTypesSection: React.FC<ProjectTypesSectionProps> = ({
  onSelectTypeForQuote,
}) => {
  const types = [
    {
      icon: Home,
      title: 'Residential',
      scope: [
        'Home renovation',
        'Interior work',
        'Ceiling',
        'Carpentry',
        'Waterproofing',
        'Flooring',
      ],
      description: 'Turnkey residential upgrades, custom joinery, modern acoustic ceilings, and leak-free waterproofing.',
    },
    {
      icon: Briefcase,
      title: 'Office',
      scope: [
        'Partitions',
        'False ceiling',
        'Electrical',
        'Flooring',
        'Carpentry',
        'Complete office setup',
      ],
      description: 'Corporate workspaces, executive cabins, acoustic meeting zones, and fast-track office fitouts.',
    },
    {
      icon: Store,
      title: 'Retail / Shop',
      scope: [
        'Shop renovation',
        'ACP',
        'Fabrication',
        'Lighting',
        'Flooring',
        'Finishing',
      ],
      description: 'Eye-catching storefronts, durable display counters, high-visibility lighting, and commercial flooring.',
    },
    {
      icon: Utensils,
      title: 'Restaurants & Cafes',
      scope: [
        'Interior execution',
        'Fabrication',
        'Electrical',
        'Ceiling',
        'Flooring',
        'Wall panels',
      ],
      description: 'High-traffic commercial dining environments with grease-resistant surfaces and designer wall accents.',
    },
    {
      icon: Stethoscope,
      title: 'Clinics',
      scope: [
        'Partitions',
        'Electrical',
        'Ceiling',
        'Flooring',
        'Carpentry',
        'Finishing',
      ],
      description: 'Hygienic consulting rooms, reception desks, soundproof consultation partitions, and clean lighting.',
    },
    {
      icon: Factory,
      title: 'Industrial / Warehouse',
      scope: [
        'Epoxy flooring',
        'Fabrication',
        'Waterproofing',
        'Electrical',
        'Structural work',
      ],
      description: 'Heavy-duty industrial floor coatings, structural steel framing, roof sealing, and 3-phase wiring.',
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <span className="w-2 h-2 bg-amber-500"></span>
            <span>Target Project Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for Every Property Requirement.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            From modern residences and boutique retail stores to corporate offices and industrial logistics hubs, we align trades according to each environment's operational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, idx) => {
            const Icon = type.icon;
            return (
              <div
                key={idx}
                className="group p-7 bg-neutral-900 border border-neutral-800 hover:border-amber-500/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-neutral-950 border border-neutral-800 text-amber-500 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-amber-400 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-normal leading-relaxed mb-6">
                    {type.description}
                  </p>

                  <div className="space-y-2 border-t border-neutral-800/80 pt-4 mb-6">
                    <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      Core Works Coordinated
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-neutral-300">
                      {type.scope.map((item, i) => (
                        <span key={i} className="inline-flex items-center">
                          <span className="text-amber-500 mr-1.5">•</span>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectTypeForQuote(type.title)}
                  className="w-full py-2.5 px-3 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs font-bold text-neutral-200 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Request {type.title} Estimate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-500" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
