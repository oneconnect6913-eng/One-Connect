import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, ChevronDown } from 'lucide-react';
import { COMPANY_NAME, BRAND_TAGLINE, getWhatsAppLink } from '../config';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-neutral-950">
      {/* Background Architectural Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_architectural_site_1791029885839.jpg"
          alt="Architectural Construction & Contracting Execution"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.05]"
        />
        {/* Architectural Linear Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-neutral-950/40 to-neutral-950/90" />
        {/* Subtle grid line motif */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Category kicker text: unboxed text with clean typographic separators (Zero-pill discipline) */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-semibold mb-6">
          <span>Residential</span>
          <span aria-hidden="true" className="text-neutral-500">·</span>
          <span>Commercial</span>
          <span aria-hidden="true" className="text-neutral-500">·</span>
          <span>Retail</span>
          <span aria-hidden="true" className="text-neutral-500">·</span>
          <span>Office</span>
          <span aria-hidden="true" className="text-neutral-500">·</span>
          <span>Renovation</span>
        </div>

        {/* Company Title */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-0.5 w-8 bg-amber-500 hidden sm:inline-block"></span>
          <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-neutral-300">
            {COMPANY_NAME}
          </span>
          <span className="h-0.5 w-8 bg-amber-500 hidden sm:inline-block"></span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl text-balance mb-6">
          {BRAND_TAGLINE}
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed text-balance mb-10 font-normal">
          From fabrication and partitions to false ceilings, flooring, electrical, carpentry, waterproofing and complete renovation — <strong className="text-white font-medium">ONE CONNECT</strong> brings your project together under one professional point of contact.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-neutral-950 font-bold text-sm tracking-wide rounded-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-500 font-semibold text-sm tracking-wide rounded-sm transition-all duration-150 flex items-center justify-center gap-2.5 backdrop-blur-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Trust marker notice */}
        <div className="mt-12 flex items-center gap-2 text-xs text-neutral-400">
          <ShieldCheck className="w-4 h-4 text-amber-500" />
          <span>Professional on-site planning & end-to-end execution across Mumbai</span>
        </div>

        {/* Subtle scroll down indicator */}
        <a
          href="#services"
          className="mt-10 text-neutral-500 hover:text-amber-400 transition-colors p-2"
          aria-label="Scroll down to services"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
