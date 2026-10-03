import React from 'react';
import { X, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';
import { getWhatsAppLink } from '../config';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="bg-neutral-900 border border-neutral-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-950">
          <div>
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-1">
              {service.categoryLabel}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {service.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors rounded-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Scope & Execution Overview
            </h3>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
              {service.fullDesc}
            </p>
          </div>

          {/* Included Items */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              Included Works & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.includedItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 bg-neutral-950 border border-neutral-800/80 text-xs sm:text-sm text-neutral-200"
                >
                  <Check className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coordination note */}
          <div className="p-4 bg-neutral-950/60 border-l-2 border-amber-500 text-xs text-neutral-300">
            <strong className="text-white font-medium">Single Point of Coordination: </strong>
            Whether this service is needed individually or integrated with other interior/renovation trades, ONE CONNECT plans measurements, schedules, and finishes directly.
          </div>
        </div>

        {/* Actions Footer */}
        <div className="p-6 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={getWhatsAppLink(service.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Quotation</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onSelectForQuote(service.name);
            }}
            className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-neutral-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <span>{service.ctaText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
