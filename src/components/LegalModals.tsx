import React from 'react';
import { X } from 'lucide-react';
import { COMPANY_NAME } from '../config';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-neutral-900 border border-neutral-800 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 text-neutral-200 relative shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
          <h2 className="text-xl font-bold text-white tracking-tight">
            {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            <p>
              At <strong className="text-white font-medium">{COMPANY_NAME}</strong>, we respect your privacy and are committed to protecting the personal information you share with us when requesting project estimates, site surveys, or contacting our team.
            </p>
            <h4 className="text-sm font-bold text-white pt-2">Information We Collect</h4>
            <p>
              We collect details provided directly by you, such as your full name, phone number, WhatsApp contact, property address/location, and project specifications (drawings, photos, scope descriptions).
            </p>
            <h4 className="text-sm font-bold text-white pt-2">How We Use Your Information</h4>
            <p>
              Your information is exclusively used to evaluate project requirements, prepare quotations, schedule site visits, and coordinate project execution. We do not sell, rent, or distribute customer details to third-party marketing services.
            </p>
            <h4 className="text-sm font-bold text-white pt-2">Data Security</h4>
            <p>
              We implement industry-standard administrative and technical safeguards to keep customer contact records secure and confidential.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            <p>
              Welcome to <strong className="text-white font-medium">{COMPANY_NAME}</strong>. By accessing our website, requesting quotations, or engaging our contracting and project coordination services, you agree to the following operational terms.
            </p>
            <h4 className="text-sm font-bold text-white pt-2">Quotations & Scope of Work</h4>
            <p>
              Preliminary quotations are prepared based on initial discussions and site assessment data. Any scope alterations, material substitutions, or additional site requirements requested during execution will be documented in a mutual addendum.
            </p>
            <h4 className="text-sm font-bold text-white pt-2">Site Access & Readiness</h4>
            <p>
              Execution timelines depend on uninterrupted site accessibility, basic utility availability (electricity/water), and building management permissions where applicable.
            </p>
            <h4 className="text-sm font-bold text-white pt-2">Work Quality & Handover</h4>
            <p>
              {COMPANY_NAME} coordinates execution following accepted professional standards. A formal joint inspection is carried out upon completion for final sign-off and handover.
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
