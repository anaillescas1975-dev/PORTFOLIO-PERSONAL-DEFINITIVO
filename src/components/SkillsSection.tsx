import React from 'react';
import { Cpu, Layout, PenTool, Share2, Sparkles, CheckCircle } from 'lucide-react';
import { PortfolioContent, SkillCategory } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface SkillsSectionProps {
  content: PortfolioContent;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ content }) => {
  const categoryIcons = [
    <Layout className="w-5 h-5 text-[#C9828F]" key="cms" />,
    <PenTool className="w-5 h-5 text-[#C9828F]" key="design" />,
    <Share2 className="w-5 h-5 text-[#C9828F]" key="social" />,
    <Cpu className="w-5 h-5 text-[#C9828F]" key="ai" />,
  ];

  return (
    <section id="competencias" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9828F] block mb-2">
            {content.skillsSection.kicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E1B2E] tracking-tight text-balance">
            {content.skillsSection.heading}
          </h2>
          <p className="text-base text-[#132238]/70 mt-3 font-light leading-relaxed">
            {content.skillsSection.subheading}
          </p>
        </div>

        {/* 4 Category Grid with Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.skillsSection.categories.map((cat: SkillCategory, idx: number) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(201, 130, 143, 0.18)"
              className="p-8 bg-white border border-[#E8E2D9] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                    {categoryIcons[idx % categoryIcons.length]}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0E1B2E]">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#132238]/70 mb-6 font-light">
                  {cat.description}
                </p>

                {/* Skills Inside this Category */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]/80"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-sm text-[#0E1B2E] flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C9828F]" />
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-semibold text-[#C9828F] uppercase tracking-wider">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#132238]/75 font-normal leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Practical Application Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#0E1B2E] to-[#1A3152] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E6B5BF]">
              <Sparkles className="w-4 h-4" />
              <span>{content.skillsSection.aiBannerTitle}</span>
            </div>
            <p className="font-serif text-xl font-normal text-white">
              {content.skillsSection.aiBannerQuote}
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-xs font-medium border border-white/20">
              {content.skillsSection.aiBannerTag}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
