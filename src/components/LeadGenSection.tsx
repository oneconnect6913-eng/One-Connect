import React, { useState } from 'react';
import {
  Send,
  Upload,
  CheckCircle2,
  FileCheck,
  AlertCircle,
  X,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { COMPANY_NAME, SERVICE_AREAS, getWhatsAppLink } from '../config';

const ALL_SERVICES_OPTIONS = [
  'Fabrication',
  'Welding',
  'Partition',
  'Wall Panels',
  'False Ceiling',
  'POP',
  'Carpentry',
  'ACP',
  'Waterproofing',
  'Epoxy Flooring',
  'Sliding Windows',
  'Glass Work',
  'Electrical',
  'Board / Sheet Work',
  'Painting',
  'Renovation',
  'Complete Project',
  'Other',
] as const;

const PROJECT_TYPES = [
  'Residential',
  'Office',
  'Retail / Shop',
  'Restaurant / Cafe',
  'Clinic',
  'Industrial / Warehouse',
  'Other',
] as const;

interface LeadGenSectionProps {
  preselectedService?: string;
  preselectedArea?: string;
  preselectedType?: string;
}

export const LeadGenSection: React.FC<LeadGenSectionProps> = ({
  preselectedService,
  preselectedArea,
  preselectedType,
}) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [sameAsMobile, setSameAsMobile] = useState(true);
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [projectType, setProjectType] = useState(preselectedType || 'Office');
  const [location, setLocation] = useState(preselectedArea || 'Andheri');
  const [customLocation, setCustomLocation] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Complete Project']
  );
  const [approxArea, setApproxArea] = useState('');
  const [estimatedBudget, setEstimatedBudget] = useState('Under ₹5 Lakhs');
  const [preferredStartDate, setPreferredStartDate] = useState('Immediately / Within 2 Weeks');
  const [projectDescription, setProjectDescription] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);

  // State management
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if props update
  React.useEffect(() => {
    if (preselectedService && !selectedServices.includes(preselectedService)) {
      setSelectedServices((prev) => [...prev, preselectedService]);
    }
  }, [preselectedService]);

  React.useEffect(() => {
    if (preselectedArea) {
      setLocation(preselectedArea);
    }
  }, [preselectedArea]);

  React.useEffect(() => {
    if (preselectedType) {
      setProjectType(preselectedType);
    }
  }, [preselectedType]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const formatted = files.map((file) => ({
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      }));
      setUploadedFiles((prev) => [...prev, ...formatted]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const cleanMobile = mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (!sameAsMobile) {
      const cleanWa = whatsAppNumber.replace(/\D/g, '');
      if (!cleanWa || cleanWa.length < 10) {
        newErrors.whatsAppNumber = 'Please enter a valid WhatsApp number.';
      }
    }

    if (selectedServices.length === 0) {
      newErrors.selectedServices = 'Please select at least one service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift submission to backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  // Generate structured summary for direct WhatsApp dispatch
  const getSubmissionWhatsAppUrl = () => {
    const finalLocation = location === 'Other Nearby Areas' && customLocation ? customLocation : location;
    const finalWa = sameAsMobile ? mobileNumber : whatsAppNumber;
    const msg = `*New Project Enquiry — ${COMPANY_NAME}*\n\n` +
      `*Name:* ${fullName}\n` +
      `*Mobile:* ${mobileNumber}\n` +
      `*WhatsApp:* ${finalWa}\n` +
      `*Type:* ${projectType}\n` +
      `*Location:* ${finalLocation}\n` +
      `*Services:* ${selectedServices.join(', ')}\n` +
      `*Approx Area:* ${approxArea || 'Not specified'}\n` +
      `*Budget:* ${estimatedBudget}\n` +
      `*Start Date:* ${preferredStartDate}\n` +
      `*Description:* ${projectDescription || 'None provided'}\n` +
      `*Attachments:* ${uploadedFiles.length} file(s) attached`;
    return getWhatsAppLink(msg);
  };

  return (
    <section id="quote" className="py-24 bg-neutral-900 border-t border-neutral-800 text-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Fast Turnaround Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tell Us About Your Project
          </h2>
          <p className="text-base text-neutral-400 font-normal leading-relaxed">
            Share a few details and our team can understand what you need. We'll coordinate a site assessment and prepare a comprehensive quotation.
          </p>
        </div>

        {/* Confirmation Modal / Screen */}
        {isSubmitted ? (
          <div className="bg-neutral-950 border border-neutral-800 p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="max-w-xl mx-auto space-y-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Thank you for contacting {COMPANY_NAME}.
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed font-normal">
                Our team will get in touch with you regarding your project requirement and coordinate your site review.
              </p>
            </div>

            {/* Structured Summary Card */}
            <div className="max-w-lg mx-auto p-4 bg-neutral-900 border border-neutral-800 text-left text-xs space-y-1.5 font-mono text-neutral-300">
              <div><strong className="text-white">Client:</strong> {fullName} ({mobileNumber})</div>
              <div><strong className="text-white">Location:</strong> {location}</div>
              <div><strong className="text-white">Type:</strong> {projectType}</div>
              <div><strong className="text-white">Services:</strong> {selectedServices.join(', ')}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={getSubmissionWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Directly to WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFullName('');
                  setMobileNumber('');
                  setProjectDescription('');
                  setUploadedFiles([]);
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors"
              >
                Submit Another Requirement
              </button>
            </div>
          </div>
        ) : (
          /* Main Quotation Form */
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-950 border border-neutral-800 p-6 sm:p-10 space-y-8"
          >
            {/* Step 1: Contact Details */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-4 pb-2 border-b border-neutral-800 flex items-center gap-2">
                <span>01</span>
                <span>Contact Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 bg-neutral-900 border text-white text-sm focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500'
                        : 'border-neutral-800 focus:border-amber-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Mobile Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="e.g. 98200 12345"
                    className={`w-full px-4 py-3 bg-neutral-900 border text-white text-sm focus:outline-none transition-colors ${
                      errors.mobileNumber
                        ? 'border-red-500'
                        : 'border-neutral-800 focus:border-amber-500'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* WhatsApp Number Option */}
              <div className="mt-3 space-y-2">
                <label className="inline-flex items-center gap-2 text-xs text-neutral-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sameAsMobile}
                    onChange={(e) => setSameAsMobile(e.target.checked)}
                    className="accent-amber-500 rounded-none w-4 h-4 cursor-pointer"
                  />
                  <span>WhatsApp number is the same as Mobile Number</span>
                </label>

                {!sameAsMobile && (
                  <div className="pt-2 max-w-sm">
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      WhatsApp Number <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={whatsAppNumber}
                      onChange={(e) => setWhatsAppNumber(e.target.value)}
                      placeholder="e.g. 98200 12345"
                      className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                    {errors.whatsAppNumber && (
                      <p className="mt-1 text-xs text-red-400">{errors.whatsAppNumber}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Step 2: Project Classification & Location */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-4 pb-2 border-b border-neutral-800 flex items-center gap-2">
                <span>02</span>
                <span>Project Scope & Location</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Project Type <span className="text-amber-500">*</span>
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500"
                  >
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-neutral-900">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Location / Area <span className="text-amber-500">*</span>
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500"
                  >
                    {SERVICE_AREAS.map((area) => (
                      <option key={area} value={area} className="bg-neutral-900">
                        {area}
                      </option>
                    ))}
                  </select>

                  {location === 'Other Nearby Areas' && (
                    <input
                      type="text"
                      placeholder="Specify your location in Mumbai MMR"
                      value={customLocation}
                      onChange={(e) => setCustomLocation(e.target.value)}
                      className="mt-2 w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Step 3: Required Services (Multi-select) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-neutral-300">
                  Required Services (Select one or multiple) <span className="text-amber-500">*</span>
                </label>
                <span className="text-[11px] font-mono text-neutral-400">
                  {selectedServices.length} selected
                </span>
              </div>

              {errors.selectedServices && (
                <p className="mb-2 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.selectedServices}
                </p>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {ALL_SERVICES_OPTIONS.map((svc) => {
                  const isChecked = selectedServices.includes(svc);
                  return (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => toggleService(svc)}
                      className={`p-2.5 text-left text-xs font-medium border transition-colors flex items-center justify-between ${
                        isChecked
                          ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-semibold'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <span className="truncate">{svc}</span>
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Dimensions, Budget & Timeline */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-4 pb-2 border-b border-neutral-800 flex items-center gap-2">
                <span>03</span>
                <span>Specifications & Timeline</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Approximate Area
                  </label>
                  <input
                    type="text"
                    value={approxArea}
                    onChange={(e) => setApproxArea(e.target.value)}
                    placeholder="e.g. 1,500 sq.ft."
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={estimatedBudget}
                    onChange={(e) => setEstimatedBudget(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="Under ₹2 Lakhs">Under ₹2 Lakhs</option>
                    <option value="₹2 - ₹5 Lakhs">₹2 - ₹5 Lakhs</option>
                    <option value="₹5 - ₹15 Lakhs">₹5 - ₹15 Lakhs</option>
                    <option value="₹15 - ₹35 Lakhs">₹15 - ₹35 Lakhs</option>
                    <option value="₹35 Lakhs+">₹35 Lakhs+</option>
                    <option value="To be determined on site">To be determined on site</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Preferred Start Date
                  </label>
                  <select
                    value={preferredStartDate}
                    onChange={(e) => setPreferredStartDate(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="Immediately / Within 2 Weeks">Immediately / Within 2 Weeks</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="Planning for next quarter">Planning for next quarter</option>
                    <option value="Flexible / Budgeting stage">Flexible / Budgeting stage</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 5: Project Description & File Upload */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Project Description & Specific Requirements
              </label>
              <textarea
                rows={3}
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Describe your site details, specific partitions, finishes, ceilings, or any deadlines..."
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 leading-relaxed font-normal"
              />

              {/* Upload Interface */}
              <div className="mt-4">
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Upload Site Photos / Videos / Architectural Drawings (Optional)
                </label>
                <div className="border border-dashed border-neutral-700 bg-neutral-900/50 p-6 text-center hover:border-amber-500/60 transition-colors relative">
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*,.pdf"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-xs text-neutral-300 font-medium">
                    Click to browse or drag and drop photos, drawings, or walkthrough videos
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    PNG, JPG, MP4, MOV, or PDF (Max 25MB each)
                  </p>
                </div>

                {/* Uploaded File Tags */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {uploadedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3 py-1.5 text-xs text-neutral-200"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-amber-500" />
                        <span className="truncate max-w-xs">{file.name}</span>
                        <span className="text-[10px] text-neutral-500">({file.size})</span>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-neutral-400 hover:text-red-400 p-0.5"
                          aria-label="Remove uploaded file"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-400">
                Direct engineer review. No spam, no obligation.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 disabled:opacity-50 text-neutral-950 font-bold text-sm tracking-wide rounded-none transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Get My Project Quote</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
