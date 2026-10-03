import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQ_LIST } from '../data/faqData';
import { getWhatsAppLink } from '../config';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-neutral-950 text-neutral-100 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>Common Queries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-neutral-400 font-normal leading-relaxed">
            Clear, transparent answers about our contracting approach, site surveys, multi-service coordination, and execution standards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-neutral-900 border border-neutral-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-850 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-300 font-normal leading-relaxed border-t border-neutral-800/60 bg-neutral-950/40 animate-in fade-in-50 duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Prompt */}
        <div className="mt-12 text-center p-6 bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white mb-1">
              Have a specific question not covered here?
            </h4>
            <p className="text-xs text-neutral-400">
              Send your project queries or site photos directly via WhatsApp for quick clarification.
            </p>
          </div>
          <a
            href={getWhatsAppLink('Hello ONE CONNECT, I have a specific project question.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 text-emerald-400 hover:text-emerald-300 text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
