import React, { useState } from 'react';
import { MapPin, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { PROJECTS_LIST, PROJECT_CATEGORIES, ProjectItem } from '../data/projectsData';

interface ProjectsPortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({
  onSelectProject,
  onOpenQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-neutral-950 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
              <FolderGit2 className="w-4 h-4 text-amber-500" />
              <span>Execution Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Project Portfolio
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
              Explore completed residential, commercial, office, and retail contracting assignments across Mumbai and surrounding zones.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="self-start md:self-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            Start Your Project
          </button>
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-neutral-950 border-amber-500 font-bold'
                  : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-neutral-900 border border-neutral-800 hover:border-amber-500/60 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Slot */}
                <div className="relative h-56 overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 filter brightness-[0.8] contrast-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 bg-neutral-950/90 text-amber-400 border border-neutral-800 text-[11px] font-mono px-2.5 py-1">
                    {project.categoryLabel}
                  </div>

                  {/* Client Type */}
                  <div className="absolute top-3 right-3 bg-neutral-950/80 text-neutral-300 text-[11px] px-2.5 py-1 border border-neutral-800">
                    {project.clientType}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-amber-500 mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-normal leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Services Provided List */}
                  <div className="pt-3 border-t border-neutral-800">
                    <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      Services Provided
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.servicesProvided.map((service, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] text-neutral-300 bg-neutral-950 px-2 py-0.5 border border-neutral-800"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <div className="w-full py-2.5 bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 text-xs font-semibold text-neutral-300 group-hover:text-white flex items-center justify-between px-3 transition-colors">
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
