import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, Download, Send, CheckCircle2 } from 'lucide-react';
import { PortfolioContent } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface ContactSectionProps {
  content: PortfolioContent;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.meta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    // Prepare mailto link as fallback to send real email
    const subject = encodeURIComponent(formData.subject || `Contacto desde Portfolio: ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre/Empresa: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:${content.meta.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-24 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9828F] block mb-2">
            {content.contactSection.kicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E1B2E] tracking-tight text-balance">
            {content.contactSection.heading}
          </h2>
          <p className="text-base text-[#132238]/70 mt-3 font-light leading-relaxed">
            {content.contactSection.subheading}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy button */}
            <SpotlightCard className="p-6 bg-white border border-[#E8E2D9]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-[#C9828F] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C9828F] block">
                      {content.contactSection.emailLabel}
                    </span>
                    <a
                      href={`mailto:${content.meta.email}`}
                      className="font-serif text-lg font-bold text-[#0E1B2E] hover:text-[#C9828F] transition-colors break-all"
                    >
                      {content.meta.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#0E1B2E] bg-[#FAF8F5] border border-[#E8E2D9] hover:bg-[#EFECE6] transition-colors shrink-0 cursor-pointer"
                  title={content.contactSection.copyEmail}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">{content.contactSection.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{content.contactSection.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </SpotlightCard>

            {/* Phone Card */}
            <SpotlightCard className="p-6 bg-white border border-[#E8E2D9]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-[#C9828F] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9828F] block">
                    {content.contactSection.phoneLabel}
                  </span>
                  <a
                    href={`tel:${content.meta.phone.replace(/\s+/g, '')}`}
                    className="font-serif text-lg font-bold text-[#0E1B2E] hover:text-[#C9828F] transition-colors"
                  >
                    {content.meta.phone}
                  </a>
                  <p className="text-xs text-[#132238]/60 mt-0.5">
                    {content.contactSection.phoneSubtext}
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* LinkedIn Card */}
            <SpotlightCard className="p-6 bg-white border border-[#E8E2D9]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-[#C9828F] shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9828F] block">
                    {content.contactSection.linkedinLabel}
                  </span>
                  <a
                    href={content.meta.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base font-bold text-[#0E1B2E] hover:text-[#C9828F] transition-colors truncate block"
                  >
                    linkedin.com/in/ana-maría-muñoz-martínez-conde
                  </a>
                  <p className="text-xs text-[#132238]/60 mt-0.5">
                    {content.contactSection.linkedinSubtext}
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* Location & Mobility */}
            <SpotlightCard className="p-6 bg-white border border-[#E8E2D9]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-[#C9828F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9828F] block">
                    {content.contactSection.locationLabel}
                  </span>
                  <p className="font-serif text-base font-bold text-[#0E1B2E]">
                    {content.meta.location}
                  </p>
                  <p className="text-xs text-[#132238]/70 mt-1 font-light">
                    {content.contactSection.readyPrompt}
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* Direct CV Download Banner */}
            <div className="p-6 rounded-2xl bg-[#0E1B2E] text-white flex items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-semibold text-[#E6B5BF] block">
                  {content.contactSection.cvBannerKicker}
                </span>
                <p className="font-serif text-lg font-bold text-white">
                  {content.contactSection.cvBannerTitle}
                </p>
              </div>
              <a
                href={content.meta.cvUrl}
                download="CV_Ana_Maria_Munoz_Martinez-Conde.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0E1B2E] bg-white rounded-full hover:bg-[#FAF8F5] transition-colors shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>{content.contactSection.cvBannerBtn}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 sm:p-10 bg-white border border-[#E8E2D9] h-full flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0E1B2E] mb-2">
                  {content.contactSection.form.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#132238]/70 mb-8 font-light">
                  {content.contactSection.form.subtext}
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#C9828F]/40 text-center space-y-3 animate-in zoom-in-95">
                    <div className="w-12 h-12 rounded-full bg-[#E8D0D6] text-[#0E1B2E] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#0E1B2E]" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#0E1B2E]">
                      {content.contactSection.form.successMsg}
                    </h4>
                    <p className="text-xs text-[#132238]/70">
                      {content.contactSection.form.sentNote}{' '}
                      <span className="font-semibold text-[#0E1B2E]">{content.meta.email}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-3 px-4 py-2 text-xs font-semibold text-[#0E1B2E] bg-white border border-[#E8E2D9] rounded-full hover:bg-[#FAF8F5] cursor-pointer"
                    >
                      {content.contactSection.form.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#132238]/80 mb-1.5">
                        {content.contactSection.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={content.contactSection.form.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-sm text-[#0E1B2E] focus:outline-hidden focus:border-[#C9828F] focus:ring-1 focus:ring-[#C9828F] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#132238]/80 mb-1.5">
                          {content.contactSection.form.emailLabel}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={content.contactSection.form.emailPlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-sm text-[#0E1B2E] focus:outline-hidden focus:border-[#C9828F] focus:ring-1 focus:ring-[#C9828F] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#132238]/80 mb-1.5">
                          {content.contactSection.form.subjectLabel}
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder={content.contactSection.form.subjectPlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-sm text-[#0E1B2E] focus:outline-hidden focus:border-[#C9828F] focus:ring-1 focus:ring-[#C9828F] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#132238]/80 mb-1.5">
                        {content.contactSection.form.messageLabel}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={content.contactSection.form.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-sm text-[#0E1B2E] focus:outline-hidden focus:border-[#C9828F] focus:ring-1 focus:ring-[#C9828F] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0E1B2E] rounded-xl hover:bg-[#1B3050] transition-colors shadow-sm cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{content.contactSection.form.submitBtn}</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E2D9] text-center text-xs text-[#132238]/60">
                <span>{content.contactSection.form.responseGuarantee}</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
