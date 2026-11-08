import React from 'react';
import { PortfolioContent } from '../types';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  content: PortfolioContent;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E1B2E] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              {content.meta.fullName}
            </span>
            <span className="text-xs text-[#E6B5BF] font-light">
              {content.meta.kicker} · {content.meta.location}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/75">
            <a href="#inicio" className="hover:text-white transition-colors">
              {content.nav.home}
            </a>
            <a href="#sobre-mi" className="hover:text-white transition-colors">
              {content.nav.about}
            </a>
            <a href="#areas" className="hover:text-white transition-colors">
              {content.nav.areas}
            </a>
            <a href="#trayectoria" className="hover:text-white transition-colors">
              {content.nav.career}
            </a>
            <a href="#competencias" className="hover:text-white transition-colors">
              {content.nav.skills}
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              {content.nav.contact}
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title={content.footer.backToTop}
            aria-label={content.footer.backToTop}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {content.meta.fullName}. {content.footer.rightsReserved}</p>
          <p className="font-light">{content.footer.legalNote}</p>
        </div>
      </div>
    </footer>
  );
};
