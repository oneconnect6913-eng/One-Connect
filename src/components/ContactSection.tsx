import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import {
  COMPANY_NAME,
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  GOOGLE_MAPS_URL,
  WORKING_HOURS,
  getPhoneLink,
  getWhatsAppLink,
} from '../config';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requirement, setRequirement] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitted(true);
    setTimeout(() => {
      // open WhatsApp with contact msg
      const fullText = `*New Contact Message — ${COMPANY_NAME}*\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nRequirement: ${requirement}\nMessage: ${message}`;
      window.open(getWhatsAppLink(fullText), '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900 border-t border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <span className="w-2 h-2 bg-amber-500"></span>
            <span>Direct Communications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contact {COMPANY_NAME}
          </h2>
          <p className="text-base text-neutral-400 font-normal leading-relaxed">
            Reach out by phone, WhatsApp, email, or send an enquiry. Our project team is available to discuss your specifications and schedule a site visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone */}
            <div className="p-5 bg-neutral-950 border border-neutral-800 flex items-start gap-4">
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-amber-500 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  Direct Phone
                </div>
                <a
                  href={getPhoneLink()}
                  className="text-base font-bold text-white hover:text-amber-400 transition-colors block"
                >
                  {PHONE_NUMBER}
                </a>
                <span className="text-[11px] text-neutral-500 block">
                  Click to call our project line
                </span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-5 bg-neutral-950 border border-neutral-800 flex items-start gap-4">
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-emerald-400 shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  WhatsApp Support
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors block"
                >
                  Chat with Project Coordinator
                </a>
                <span className="text-[11px] text-neutral-500 block">
                  Instant response for site queries & drawings
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="p-5 bg-neutral-950 border border-neutral-800 flex items-start gap-4">
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-amber-500 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  Official Email
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-base font-bold text-white hover:text-amber-400 transition-colors block"
                >
                  {EMAIL}
                </a>
                <span className="text-[11px] text-neutral-500 block">
                  For tenders, BOQs and drawings
                </span>
              </div>
            </div>

            {/* Address & Google Maps */}
            <div className="p-5 bg-neutral-950 border border-neutral-800 flex items-start gap-4">
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-amber-500 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  Business Address
                </div>
                <p className="text-sm font-medium text-neutral-200">
                  {ADDRESS}
                </p>
                {GOOGLE_MAPS_URL && (
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-500 hover:text-amber-400 pt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-5 bg-neutral-950 border border-neutral-800 flex items-start gap-4">
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-neutral-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  Working Hours
                </div>
                <p className="text-sm font-medium text-neutral-200">
                  {WORKING_HOURS}
                </p>
                <span className="text-[11px] text-neutral-500 block">
                  Emergency site inspections by appointment
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Send a Quick Enquiry
            </h3>
            <p className="text-xs text-neutral-400 mb-6 font-normal">
              Leave your contact details and project note. An engineer will follow up promptly.
            </p>

            {isSubmitted ? (
              <div className="p-6 bg-neutral-900 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Enquiry Received</h4>
                <p className="text-xs text-neutral-300">
                  Thank you for reaching out. Opening WhatsApp or our project team will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-amber-500 hover:underline pt-2 block mx-auto"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Phone Number <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98200 12345"
                      className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Requirement
                    </label>
                    <select
                      value={requirement}
                      onChange={(e) => setRequirement(e.target.value)}
                      className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Complete Project Execution">Complete Project Execution</option>
                      <option value="Fabrication & Welding">Fabrication & Welding</option>
                      <option value="Drywall & Partitions">Drywall & Partitions</option>
                      <option value="False Ceiling">False Ceiling</option>
                      <option value="Epoxy Flooring">Epoxy Flooring</option>
                      <option value="Waterproofing">Waterproofing</option>
                      <option value="Electrical & MEP">Electrical & MEP</option>
                      <option value="Carpentry & Joinery">Carpentry & Joinery</option>
                      <option value="Shop / Office Renovation">Shop / Office Renovation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your site location, scope, or timeline..."
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 font-normal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Enquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
