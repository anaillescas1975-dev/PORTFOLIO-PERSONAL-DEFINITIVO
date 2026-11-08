import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { Language, PortfolioContent } from '../types';

interface NavbarProps {
  content: PortfolioContent;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  content,
  currentLang,
  onLanguageChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: content.nav.home, href: '#inicio' },
    { label: content.nav.about, href: '#sobre-mi' },
    { label: content.nav.areas, href: '#areas' },
    { label: content.nav.career, href: '#trayectoria' },
    { label: content.nav.skills, href: '#competencias' },
    { label: content.nav.contact, href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-xs border-b border-[#E8E2D9]'
          : 'bg-[#FAF8F5]/60 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-left"
          >
            <div className="w-9 h-9 rounded-full bg-[#0E1B2E] text-white flex items-center justify-center font-serif text-lg font-semibold tracking-wider transition-transform duration-300 group-hover:scale-105">
              AM
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#0E1B2E]">
                Ana María Muñoz
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#C9828F] -mt-1 hidden sm:block">
                Martínez-Conde
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single line, unboxed, subtle hover) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#132238]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#0E1B2E] hover:underline underline-offset-8 decoration-[#C9828F] decoration-2 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Toggle & CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#EFECE6] p-1 rounded-full text-xs font-semibold">
              <button
                type="button"
                onClick={() => onLanguageChange('es')}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  currentLang === 'es'
                    ? 'bg-[#0E1B2E] text-white shadow-xs'
                    : 'text-[#132238]/70 hover:text-[#0E1B2E]'
                }`}
                title="Cambiar idioma a Español"
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  currentLang === 'en'
                    ? 'bg-[#0E1B2E] text-white shadow-xs'
                    : 'text-[#132238]/70 hover:text-[#0E1B2E]'
                }`}
                title="Switch language to English"
              >
                EN
              </button>
            </div>

            {/* Direct CV Action */}
            <a
              href={content.meta.cvUrl}
              download="CV_Ana_Maria_Munoz_Martinez-Conde.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#0E1B2E] rounded-full hover:bg-[#1A3152] transition-colors shadow-xs whitespace-nowrap shrink-0 group"
            >
              <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              <span>{content.nav.downloadCv}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0E1B2E] hover:bg-[#EFECE6] rounded-lg transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E2D9] px-4 pt-2 pb-6 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#132238] hover:text-[#0E1B2E] hover:bg-[#EFECE6] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E8E2D9] flex flex-col gap-3">
              <a
                href={content.meta.cvUrl}
                download="CV_Ana_Maria_Munoz_Martinez-Conde.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0E1B2E] rounded-xl hover:bg-[#1A3152] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{content.nav.downloadCv}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
