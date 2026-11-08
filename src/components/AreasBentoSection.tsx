import React, { useState } from 'react';
import { ArrowUpRight, Check, Newspaper, Sparkles, Briefcase, FileText } from 'lucide-react';
import { AreaItem, PortfolioContent } from '../types';
import { SpotlightCard } from './SpotlightCard';
import { AreaModal } from './AreaModal';

interface AreasBentoSectionProps {
  content: PortfolioContent;
}

export const AreasBentoSection: React.FC<AreasBentoSectionProps> = ({ content }) => {
  const [selectedArea, setSelectedArea] = useState<AreaItem | null>(null);

  const areas = content.areasSection.areas;
  const adminArea = areas.find((a) => a.id === 'area-administracion') || areas[0];
  const mediaArea = areas.find((a) => a.id === 'area-comunicacion') || areas[1];
  const marketingArea = areas.find((a) => a.id === 'area-marketing') || areas[2];

  return (
    <section id="areas" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9828F] block mb-2">
              {content.areasSection.kicker}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E1B2E] tracking-tight text-balance">
              {content.areasSection.heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#132238]/70 max-w-md font-light leading-relaxed">
            {content.areasSection.subheading}
          </p>
        </div>

        {/* 21st.dev Style Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Comunicación y Medios (Wide Featured Card, 7 columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <SpotlightCard
              spotlightColor="rgba(201, 130, 143, 0.2)"
              className="p-8 sm:p-10 flex flex-col justify-between h-full bg-white group cursor-pointer"
              onClick={() => setSelectedArea(mediaArea)}
            >
              <div>
                {/* Media Image Banner inside card */}
                <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden mb-8 bg-[#0E1B2E]">
                  <img
                    src={mediaArea.image}
                    alt={mediaArea.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-[#0E1B2E]/80 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                      {mediaArea.statsBadge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-serif italic text-[#E6B5BF]">
                      {content.areasSection.mediaStrip1}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C9828F]">
                    {mediaArea.tag}
                  </span>
                  <div className="p-2 rounded-full bg-[#FAF8F5] text-[#0E1B2E] group-hover:bg-[#0E1B2E] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E1B2E] mb-3 group-hover:text-[#C9828F] transition-colors">
                  {mediaArea.title}
                </h3>
                <p className="text-sm sm:text-base text-[#132238]/75 mb-6 font-light leading-relaxed">
                  {mediaArea.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {mediaArea.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#132238]/80">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C9828F] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Footer */}
              <div className="pt-4 border-t border-[#E8E2D9] flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#132238]/60">
                  {mediaArea.skills.slice(0, 3).map((s, idx) => (
                    <span key={idx} className="font-medium text-[#0E1B2E]">
                      {s} {idx < 2 && <span className="text-[#C9828F] mx-1">·</span>}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArea(mediaArea);
                  }}
                  className="text-xs font-semibold text-[#0E1B2E] hover:text-[#C9828F] transition-colors"
                >
                  {content.areasSection.viewDetails} →
                </button>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 2: Marketing, Moda y Eventos (Tall Showcase Card, 5 columns) */}
          <div className="lg:col-span-5 flex flex-col">
            <SpotlightCard
              spotlightColor="rgba(201, 130, 143, 0.22)"
              className="p-8 sm:p-10 flex flex-col justify-between h-full bg-white group cursor-pointer"
              onClick={() => setSelectedArea(marketingArea)}
            >
              <div>
                {/* Media Image Banner */}
                <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden mb-8 bg-[#0E1B2E]">
                  <img
                    src={marketingArea.image}
                    alt={marketingArea.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/75 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-[#0E1B2E]/80 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                      {marketingArea.statsBadge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-serif italic text-[#E6B5BF]">
                      {content.areasSection.mediaStrip2}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C9828F]">
                    {marketingArea.tag}
                  </span>
                  <div className="p-2 rounded-full bg-[#FAF8F5] text-[#0E1B2E] group-hover:bg-[#0E1B2E] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#0E1B2E] mb-3 group-hover:text-[#C9828F] transition-colors">
                  {marketingArea.title}
                </h3>
                <p className="text-sm text-[#132238]/75 mb-6 font-light leading-relaxed">
                  {marketingArea.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {marketingArea.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#132238]/80">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C9828F] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Footer */}
              <div className="pt-4 border-t border-[#E8E2D9] flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-medium text-[#0E1B2E]">
                  Vertize Innovamoda S.L.
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArea(marketingArea);
                  }}
                  className="text-xs font-semibold text-[#0E1B2E] hover:text-[#C9828F] transition-colors"
                >
                  {content.areasSection.viewDetails} →
                </button>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 3: Administración y Gestión (Full-Width Card, 12 columns) */}
          <div className="lg:col-span-12">
            <SpotlightCard
              spotlightColor="rgba(201, 130, 143, 0.18)"
              className="p-8 sm:p-10 bg-white group cursor-pointer"
              onClick={() => setSelectedArea(adminArea)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 relative aspect-16/10 rounded-xl overflow-hidden bg-[#0E1B2E]">
                  <img
                    src={adminArea.image}
                    alt={adminArea.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-[#0E1B2E]/80 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
                      {adminArea.statsBadge}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#C9828F]">
                        {adminArea.tag}
                      </span>
                      <div className="p-2 rounded-full bg-[#FAF8F5] text-[#0E1B2E] group-hover:bg-[#0E1B2E] group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E1B2E] mb-2 group-hover:text-[#C9828F] transition-colors">
                      {adminArea.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#132238]/75 mb-5 font-light leading-relaxed">
                      {adminArea.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {adminArea.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#132238]/80">
                          <Check className="w-4 h-4 text-[#C9828F] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#132238]/70">
                      {content.areasSection.adminStrip.map((item, idx) => (
                        <React.Fragment key={idx}>
                          <span>{item}</span>
                          {idx < content.areasSection.adminStrip.length - 1 && (
                            <span className="text-[#C9828F]">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedArea(adminArea);
                      }}
                      className="text-xs font-semibold text-[#0E1B2E] hover:text-[#C9828F] transition-colors"
                    >
                      {content.areasSection.viewDetails} →
                    </button>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AreaModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        labels={{
          strategicSummary: content.areasSection.modalStrategicSummary,
          responsibilities: content.areasSection.modalResponsibilities,
          relatedSkills: content.areasSection.modalRelatedSkills,
          close: content.areasSection.modalClose,
        }}
      />
    </section>
  );
};
