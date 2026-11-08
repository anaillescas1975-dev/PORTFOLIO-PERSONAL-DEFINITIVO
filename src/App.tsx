/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { contentES, contentEN } from './data/content';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AreasBentoSection } from './components/AreasBentoSection';
import { CareerSection } from './components/CareerSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('ana_portfolio_lang') as Language;
    return saved === 'en' ? 'en' : 'es';
  });

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('ana_portfolio_lang', newLang);
  };

  const content = lang === 'es' ? contentES : contentEN;

  useEffect(() => {
    document.title = content.meta.title;
  }, [content]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#132238] font-sans selection:bg-[#E8D0D6] selection:text-[#0E1B2E]">
      {/* 3-Zone Top Navigation */}
      <Navbar
        content={content}
        currentLang={lang}
        onLanguageChange={handleLanguageChange}
      />

      <main>
        {/* 1. Portada (Hero Section) */}
        <HeroSection content={content} />

        {/* 2. Presentación Personal (About Section) */}
        <AboutSection content={content} />

        {/* 3. Tres Áreas Profesionales (Bento Grid & Spotlight Cards) */}
        <AreasBentoSection content={content} />

        {/* 4. Trayectoria Profesional (Career Timeline) */}
        <CareerSection content={content} />

        {/* 5. Competencias Digitales (Skills Section) */}
        <SkillsSection content={content} />

        {/* 6. Contacto (Direct Contact & Recruiter Inquiry Form) */}
        <ContactSection content={content} />
      </main>

      {/* Footer */}
      <Footer content={content} />
    </div>
  );
}
