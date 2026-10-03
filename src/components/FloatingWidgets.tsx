import React, { useState } from 'react';
import { Phone, MessageSquare, ClipboardList, X } from 'lucide-react';
import { getPhoneLink, getWhatsAppLink } from '../config';

interface FloatingWidgetsProps {
  onOpenQuote: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenQuote }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3">
        {showTooltip && (
          <div className="bg-neutral-900 border border-neutral-700 text-white text-xs px-3.5 py-2 shadow-2xl flex items-center gap-2 animate-in fade-in-50 slide-in-from-right-4 duration-200">
            <span>Discuss your site requirement on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-neutral-400 hover:text-white p-0.5"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 flex items-center justify-center shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all duration-150 relative group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 stroke-[2.2]" />
          <span className="sr-only">WhatsApp Us</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Navigation (Compact: ~52px height, well within 15% viewport height rule) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2 flex items-center justify-around shadow-2xl">
        {/* Call Now */}
        <a
          href={getPhoneLink()}
          className="flex-1 py-1.5 flex flex-col items-center justify-center text-neutral-300 active:text-amber-400 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-500 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">Call Now</span>
        </a>

        <div className="h-6 w-px bg-neutral-800" />

        {/* WhatsApp */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-1.5 flex flex-col items-center justify-center text-neutral-300 active:text-emerald-400 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">WhatsApp</span>
        </a>

        <div className="h-6 w-px bg-neutral-800" />

        {/* Get Quote */}
        <button
          onClick={onOpenQuote}
          className="flex-1 py-1.5 flex flex-col items-center justify-center text-amber-400 active:text-amber-300 transition-colors"
        >
          <ClipboardList className="w-4 h-4 text-amber-500 mb-0.5" />
          <span className="text-[10px] font-bold tracking-wide">Get Quote</span>
        </button>
      </div>
    </>
  );
};
