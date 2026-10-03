import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, ArrowRight } from 'lucide-react';
import { BEFORE_AFTER_SCENARIOS, BeforeAfterScenario } from '../data/beforeAfterData';

interface BeforeAfterSliderProps {
  onOpenQuote: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenQuote }) => {
  const [selectedScenario, setSelectedScenario] = useState<BeforeAfterScenario>(
    BEFORE_AFTER_SCENARIOS[0]
  );
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-24 bg-neutral-900 border-t border-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Real Project Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Interactive Before & After
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            Drag the slider horizontally to compare the raw site conditions before our team stepped in versus the finished execution.
          </p>
        </div>

        {/* Scenario Selectors (Segmented buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {BEFORE_AFTER_SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => {
                setSelectedScenario(sc);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-none border whitespace-nowrap transition-all ${
                selectedScenario.id === sc.id
                  ? 'bg-amber-500 text-neutral-950 border-amber-500'
                  : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Comparison Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-950 border border-neutral-800 p-4 sm:p-8">
          {/* Interactive Slider Area */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              className="relative aspect-video w-full overflow-hidden select-none cursor-ew-resize border border-neutral-800 bg-neutral-950 shadow-2xl"
            >
              {/* After Image (Full width background) */}
              <img
                src={selectedScenario.afterImage}
                alt={selectedScenario.afterLabel}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={selectedScenario.beforeImage}
                  alt={selectedScenario.beforeLabel}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale contrast-125 brightness-75"
                  style={{
                    width: containerRef.current
                      ? `${containerRef.current.clientWidth}px`
                      : '100%',
                  }}
                />
              </div>

              {/* Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-amber-500 pointer-events-none shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-amber-500 text-neutral-950 flex items-center justify-center shadow-lg border-2 border-neutral-950">
                  <MoveHorizontal className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* Badges on images */}
              <div className="absolute top-4 left-4 bg-neutral-950/90 text-neutral-300 border border-neutral-800 text-[11px] font-mono uppercase px-3 py-1 pointer-events-none backdrop-blur-sm">
                Before / Raw Site
              </div>
              <div className="absolute top-4 right-4 bg-amber-500/90 text-neutral-950 font-bold text-[11px] uppercase tracking-wider px-3 py-1 pointer-events-none backdrop-blur-sm">
                After / Executed
              </div>

              {/* Helper Drag Note */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-neutral-950/80 text-neutral-400 text-[11px] px-3 py-1 border border-neutral-800 pointer-events-none backdrop-blur-sm hidden sm:block">
                Drag slider to inspect transformation
              </div>
            </div>

            {/* Range input for full accessibility */}
            <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 px-1">
              <span>Raw Site Condition</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-48 accent-amber-500 cursor-pointer"
                aria-label="Before and after transformation slider percentage"
              />
              <span>Finished Execution</span>
            </div>
          </div>

          {/* Details & Specs Column */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold text-amber-500 uppercase tracking-widest">
                Case Study Highlight
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1 mb-3">
                {selectedScenario.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                {selectedScenario.description}
              </p>
            </div>

            {/* Services Coordinated */}
            <div className="p-4 bg-neutral-900 border border-neutral-800">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
                Services Coordinated Under One Scope:
              </h4>
              <div className="space-y-1.5">
                {selectedScenario.servicesInvolved.map((svc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-300 font-normal">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{svc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Note */}
            <div className="text-xs text-neutral-300 border-l-2 border-amber-500 pl-3 py-1 font-mono">
              {selectedScenario.accentNote}
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs sm:text-sm font-bold tracking-wide transition-colors flex items-center justify-center gap-2"
            >
              <span>Get Quote for Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
