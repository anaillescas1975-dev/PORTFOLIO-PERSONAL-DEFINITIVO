import React from 'react';
import { ArrowDown, Download, Mail, Phone, Linkedin, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PortfolioContent } from '../types';
import { SpotlightCard } from './SpotlightCard';
import { TextReveal } from './TextReveal';

interface HeroSectionProps {
  content: PortfolioContent;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C9828F] mb-4"
            >
              <span>{content.hero.kicker}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#132238]/60">{content.meta.location}</span>
            </motion.div>

            {/* Display Headline with TextReveal */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0E1B2E] leading-[1.1] mb-6 text-balance">
              <TextReveal text={content.hero.title} delay={0.05} />
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#132238]/80 leading-relaxed max-w-2xl mb-8 font-light"
            >
              {content.hero.subtitle}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#areas"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0E1B2E] rounded-full hover:bg-[#1B3050] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>{content.hero.ctaPrimary}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#trayectoria"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0E1B2E] bg-white border border-[#E8E2D9] rounded-full hover:bg-[#FAF8F5] hover:border-[#D48B97] transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
              >
                <span>{content.hero.ctaSecondary}</span>
              </a>

              <a
                href={content.meta.cvUrl}
                download="CV_Ana_Maria_Munoz_Martinez-Conde.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#C9828F] hover:text-[#B06B78] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{content.nav.downloadCv}</span>
              </a>
            </motion.div>

            {/* Quiet Unboxed Metadata (Zero-Pill Compliance) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#132238]/70 pt-4 border-t border-[#E8E2D9] w-full"
            >
              <span className="flex items-center gap-1.5 font-medium text-[#0E1B2E]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9828F]" />
                {content.hero.availableBadge}
              </span>
              <span aria-hidden="true" className="text-[#C9828F]">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#132238]/50" />
                {content.hero.mobilityBadge}
              </span>
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait Spotlight Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-md"
            >
              <SpotlightCard
                spotlightColor="rgba(201, 130, 143, 0.22)"
                className="p-3 bg-white shadow-lg border border-[#E8E2D9] group"
              >
                {/* Photo Frame */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#EFECE6]">
                  <img
                    src={content.meta.photoUrl}
                    alt={content.meta.fullName}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Scrim for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/75 via-[#0E1B2E]/15 to-transparent" />

                  {/* Overlay Identity on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#E6B5BF] block">
                      {content.meta.kicker}
                    </span>
                    <p className="font-serif text-xl font-bold tracking-tight text-white drop-shadow-xs">
                      {content.meta.fullName}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-white/80">
                      <span>{content.meta.location}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Contact Tray */}
                <div className="mt-3 pt-3 border-t border-[#E8E2D9] flex items-center justify-between px-2 text-xs">
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${content.meta.email}`}
                      className="p-2 rounded-full bg-[#FAF8F5] text-[#0E1B2E] hover:text-white hover:bg-[#0E1B2E] transition-colors"
                      title={content.meta.email}
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${content.meta.phone.replace(/\s+/g, '')}`}
                      className="p-2 rounded-full bg-[#FAF8F5] text-[#0E1B2E] hover:text-white hover:bg-[#0E1B2E] transition-colors"
                      title={content.meta.phone}
                      aria-label="Teléfono"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={content.meta.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#FAF8F5] text-[#0E1B2E] hover:text-white hover:bg-[#0E1B2E] transition-colors"
                      title="LinkedIn"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <span className="text-[11px] text-[#132238]/60 font-medium">
                    {content.hero.verifiedBadge}
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip (Below the Split, per §2.B & §5.13) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-[#E8E2D9] grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left"
        >
          {content.hero.badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0E1B2E] tabular-nums tracking-tight">
                {badge.value}
              </span>
              <span className="text-xs sm:text-sm text-[#132238]/70 mt-1 font-medium">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
