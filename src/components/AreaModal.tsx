import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { AreaItem } from '../types';

interface AreaModalProps {
  area: AreaItem | null;
  onClose: () => void;
  labels: {
    strategicSummary: string;
    responsibilities: string;
    relatedSkills: string;
    close: string;
  };
}

export const AreaModal: React.FC<AreaModalProps> = ({ area, onClose, labels }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (area) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [area, onClose]);

  if (!area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0E1B2E]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl border border-[#E8E2D9] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/90 text-[#0E1B2E] hover:bg-[#0E1B2E] hover:text-white transition-all shadow-sm"
          aria-label={labels.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Media & Title */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#0E1B2E]">
          <img
            src={area.image}
            alt={area.title}
            className="w-full h-full object-cover object-center opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E] via-[#0E1B2E]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#E6B5BF] block mb-1">
              {area.tag}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
              {area.title}
            </h3>
            <p className="text-sm text-white/80 font-light">
              {area.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9828F] mb-2">
              {labels.strategicSummary}
            </h4>
            <p className="text-sm sm:text-base text-[#132238]/85 leading-relaxed font-light">
              {area.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9828F] mb-3">
              {labels.responsibilities}
            </h4>
            <ul className="space-y-2.5">
              {area.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#132238]/80 font-normal">
                  <div className="mt-0.5 p-1 rounded-full bg-[#FAF8F5] border border-[#C9828F]/40 text-[#C9828F] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Competencies in this Area */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9828F] mb-3">
              {labels.relatedSkills}
            </h4>
            <div className="flex flex-wrap gap-2">
              {area.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-white border border-[#E8E2D9] text-[#0E1B2E] rounded-md shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#E8E2D9] flex items-center justify-between">
          <span className="text-xs text-[#132238]/60 font-medium">
            {area.statsBadge}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0E1B2E] rounded-full hover:bg-[#1B3050] transition-colors"
          >
            {labels.close}
          </button>
        </div>
      </div>
    </div>
  );
};
