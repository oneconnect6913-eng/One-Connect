import React from 'react';
import { X, MapPin, Building, Check, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenQuote,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="bg-neutral-900 border border-neutral-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative h-64 sm:h-72 bg-neutral-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-neutral-950/80 hover:bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-neutral-950/90 px-2.5 py-1 border border-neutral-800">
              {project.categoryLabel}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-2">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300 border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-amber-500" />
              <span>{project.clientType} Project</span>
            </div>
            {project.areaSqFt && (
              <div className="font-mono text-neutral-400">
                Area: <span className="text-white">{project.areaSqFt}</span>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Project Summary
            </h3>
            <p className="text-sm text-neutral-200 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              Services Delivered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.servicesProvided.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2 bg-neutral-950 border border-neutral-800 text-xs text-neutral-200"
                >
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-neutral-400">
            Have a project in {project.location.split(',')[0]} or nearby?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
          >
            <span>Request Scope Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
