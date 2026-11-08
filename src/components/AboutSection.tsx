import React from 'react';
import { GraduationCap, Award, Compass, Sparkles } from 'lucide-react';
import { PortfolioContent } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface AboutSectionProps {
  content: PortfolioContent;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  const iconList = [
    <Compass className="w-5 h-5 text-[#C9828F]" key="1" />,
    <Sparkles className="w-5 h-5 text-[#C9828F]" key="2" />,
    <Award className="w-5 h-5 text-[#C9828F]" key="3" />,
    <GraduationCap className="w-5 h-5 text-[#C9828F]" key="4" />,
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-[#F5F2EB]/50 border-y border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9828F] block mb-2">
            {content.about.kicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0E1B2E] tracking-tight text-balance">
            {content.about.heading}
          </h2>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#132238]/85 leading-relaxed font-light">
            {content.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {/* Academic Credential Highlight Box */}
            <div className="mt-8 p-6 rounded-2xl bg-white border border-[#E8E2D9] shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-[#0E1B2E] shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#C9828F]" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9828F] block">
                    {content.about.degreeKicker}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#0E1B2E]">
                    {content.about.degreeTitle}
                  </h4>
                  <p className="text-sm text-[#132238]/70 mt-0.5">
                    {content.about.degreeSchool}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Quote & Key Qualities */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0E1B2E] text-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9828F]/10 rounded-full blur-2xl pointer-events-none" />
              <span className="text-4xl font-serif text-[#C9828F] leading-none block mb-3">
                “
              </span>
              <p className="font-serif text-lg sm:text-xl italic font-normal text-[#F5F2EB] leading-relaxed mb-4">
                {content.about.quote.replace(/[«»]/g, '')}
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span className="font-medium text-white">{content.meta.fullName}</span>
                <span>{content.meta.location}</span>
              </div>
            </div>

            {/* 4 Professional Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.about.values.map((val, idx) => (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(201, 130, 143, 0.18)"
                  className="p-5 bg-white border border-[#E8E2D9]"
                >
                  <div className="mb-2.5">{iconList[idx % iconList.length]}</div>
                  <h3 className="font-semibold text-sm text-[#0E1B2E] mb-1">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#132238]/70 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
