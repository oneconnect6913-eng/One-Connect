import React, { useState } from 'react';
import {
  Wrench,
  LayoutGrid,
  Layers,
  Maximize,
  Sparkles,
  Hammer,
  Building2,
  ShieldAlert,
  CircleDot,
  AppWindow,
  Zap,
  FileText,
  Paintbrush,
  RefreshCw,
  Compass,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { SERVICES_LIST, CATEGORIES, ServiceItem } from '../data/servicesData';
import { getWhatsAppLink } from '../config';

const ICON_MAP: Record<string, React.ElementType> = {
  Wrench,
  LayoutGrid,
  Layers,
  Maximize,
  Sparkles,
  Hammer,
  Building2,
  ShieldAlert,
  CircleDot,
  AppWindow,
  Zap,
  FileText,
  Paintbrush,
  RefreshCw,
  Compass,
  CheckCircle2,
};

// Map each service to an architectural graphic theme or photo representation
const SERVICE_IMAGES: Record<string, string> = {
  'fabrication-welding': '/src/assets/images/hero_architectural_site_1791029885839.jpg',
  'drywall-partition': '/src/assets/images/commercial_office_fitout_1791029899454.jpg',
  'wall-panels': '/src/assets/images/retail_shop_renovation_1791029911701.jpg',
  'false-ceiling': '/src/assets/images/commercial_office_fitout_1791029899454.jpg',
  'pop-work': '/src/assets/images/hero_architectural_site_1791029885839.jpg',
  'carpentry': '/src/assets/images/commercial_office_fitout_1791029899454.jpg',
  'acp-cladding': '/src/assets/images/retail_shop_renovation_1791029911701.jpg',
  'waterproofing': '/src/assets/images/hero_architectural_site_1791029885839.jpg',
  'epoxy-flooring': '/src/assets/images/epoxy_flooring_industrial_1791029923384.jpg',
  'windows-glass': '/src/assets/images/retail_shop_renovation_1791029911701.jpg',
  'electrical-wiring': '/src/assets/images/commercial_office_fitout_1791029899454.jpg',
  'board-sheet-work': '/src/assets/images/hero_architectural_site_1791029885839.jpg',
  'painting-finishing': '/src/assets/images/retail_shop_renovation_1791029911701.jpg',
  'renovation': '/src/assets/images/retail_shop_renovation_1791029911701.jpg',
  'civil-finishing': '/src/assets/images/hero_architectural_site_1791029885839.jpg',
  'complete-project-execution': '/src/assets/images/commercial_office_fitout_1791029899454.jpg',
};

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuoteWithService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-neutral-950 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <span className="w-2 h-2 bg-amber-500"></span>
            <span>Comprehensive Contracting Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything Your Project Needs. In One Connect.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            Explore our complete range of contracting, construction, interior and finishing services. One accountable team to execute individual scopes or turnkey multi-trade projects.
          </p>
        </div>

        {/* Category Tabs (Segmented control buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors rounded-none border ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-neutral-950 border-amber-500'
                  : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 16 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Wrench;
            const imgSrc = SERVICE_IMAGES[service.id] || '/src/assets/images/hero_architectural_site_1791029885839.jpg';

            return (
              <div
                key={service.id}
                className="group bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Image Slot with Fallback */}
                  <div className="relative h-44 overflow-hidden bg-neutral-950">
                    <img
                      src={imgSrc}
                      alt={service.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 filter brightness-[0.75] contrast-[1.05]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                    
                    {/* Index & Category tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 text-[11px] font-mono font-medium text-neutral-300 bg-neutral-950/80 px-2.5 py-1 backdrop-blur-sm border border-neutral-800">
                      <span>{(index + 1).toString().padStart(2, '0')}</span>
                      <span>·</span>
                      <span className="text-amber-400 font-sans uppercase tracking-wider">{service.categoryLabel}</span>
                    </div>

                    {/* Icon Accent */}
                    <div className="absolute bottom-3 right-3 p-2 bg-neutral-950/90 border border-neutral-800 text-amber-500">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors mb-2">
                      {service.name}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-4 font-normal">
                      {service.shortDesc}
                    </p>

                    {/* Included Preview Tags (Clean unboxed inline text) */}
                    <div className="text-[11px] text-neutral-400 flex flex-wrap gap-x-2 gap-y-1 pt-2 border-t border-neutral-800/80">
                      {service.includedItems.slice(0, 4).map((item, i) => (
                        <span key={i} className="inline-flex items-center">
                          {item}
                          {i < Math.min(service.includedItems.length, 4) - 1 && (
                            <span className="text-neutral-600 ml-2">/</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 mt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                  </button>

                  <a
                    href={getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Inquire via WhatsApp"
                    className="p-2 bg-neutral-950 border border-neutral-800 hover:border-emerald-600 text-emerald-400 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single service quote helper banner */}
        <div className="mt-12 p-6 bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Have a custom or mixed service requirement?
            </h4>
            <p className="text-xs text-neutral-400 font-normal">
              You can select multiple services in our project quote request or discuss directly with an execution lead.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteWithService('Complete Project')}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-wider uppercase whitespace-nowrap transition-colors"
          >
            Get Multi-Service Quote
          </button>
        </div>
      </div>
    </section>
  );
};
