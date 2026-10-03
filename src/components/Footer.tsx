import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import {
  COMPANY_NAME,
  BRAND_TAGLINE,
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  getPhoneLink,
  getWhatsAppLink,
} from '../config';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenLegal }) => {
  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About Us', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesList = [
    'Fabrication & Welding',
    'Drywall Partitions',
    'False Ceiling & POP',
    'Epoxy Flooring',
    'Waterproofing',
    'Turnkey Execution',
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-500 inline-block"></span>
              <span className="text-xl font-extrabold text-white tracking-tight">
                {COMPANY_NAME}
              </span>
            </div>

            <p className="text-sm text-neutral-300 font-semibold tracking-wide">
              {BRAND_TAGLINE}
            </p>

            <p className="text-neutral-400 leading-relaxed max-w-sm">
              Professional multi-service contracting and project execution company for residential, commercial, office, and retail properties across Mumbai and surrounding regions.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <span>Request Project Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Works
            </h4>
            <ul className="space-y-2">
              {servicesList.map((svc, i) => (
                <li key={i}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={getPhoneLink()}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © 2026 {COMPANY_NAME}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-neutral-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
