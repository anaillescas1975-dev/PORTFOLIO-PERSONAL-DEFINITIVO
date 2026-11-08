export type Language = 'es' | 'en';

export interface AreaItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  image: string;
  highlights: string[];
  skills: string[];
  statsBadge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  tags: string[];
  programs?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface PortfolioContent {
  meta: {
    title: string;
    kicker: string;
    fullName: string;
    tagline: string;
    shortBio: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    cvUrl: string;
    photoUrl: string;
  };
  nav: {
    home: string;
    about: string;
    areas: string;
    career: string;
    skills: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    kicker: string;
    greeting: string;
    title: string;
    subtitle: string;
    badges: {
      label: string;
      value: string;
    }[];
    ctaPrimary: string;
    ctaSecondary: string;
    availableBadge: string;
    mobilityBadge: string;
    verifiedBadge: string;
  };
  about: {
    kicker: string;
    heading: string;
    quote: string;
    paragraphs: string[];
    values: {
      title: string;
      desc: string;
    }[];
    degreeKicker: string;
    degreeTitle: string;
    degreeSchool: string;
  };
  areasSection: {
    kicker: string;
    heading: string;
    subheading: string;
    learnMore: string;
    viewDetails: string;
    mediaStrip1: string;
    mediaStrip2: string;
    adminStrip: string[];
    modalStrategicSummary: string;
    modalResponsibilities: string;
    modalRelatedSkills: string;
    modalClose: string;
    areas: AreaItem[];
  };
  careerSection: {
    kicker: string;
    heading: string;
    subheading: string;
    educationTitle: string;
    viewLess: string;
    viewResponsibilities: string;
    responsibilitiesTitle: string;
    featuredProgramsTitle: string;
    educationCardKicker: string;
    educationCardTitle: string;
    languagesCardKicker: string;
    languagesCardTitle: string;
    languagesList: { lang: string; level: string }[];
    mobilityCardKicker: string;
    mobilityCardTitle: string;
    mobilityList: string[];
    experiences: ExperienceItem[];
  };
  skillsSection: {
    kicker: string;
    heading: string;
    subheading: string;
    aiBannerTitle: string;
    aiBannerQuote: string;
    aiBannerTag: string;
    categories: SkillCategory[];
  };
  contactSection: {
    kicker: string;
    heading: string;
    subheading: string;
    readyPrompt: string;
    emailLabel: string;
    phoneLabel: string;
    phoneSubtext: string;
    linkedinLabel: string;
    linkedinSubtext: string;
    locationLabel: string;
    copyEmail: string;
    copied: string;
    cvBannerKicker: string;
    cvBannerTitle: string;
    cvBannerBtn: string;
    form: {
      title: string;
      subtext: string;
      nameLabel: string;
      emailLabel: string;
      subjectLabel: string;
      messageLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      submitBtn: string;
      successMsg: string;
      sentNote: string;
      sendAnother: string;
      responseGuarantee: string;
    };
  };
  footer: {
    backToTop: string;
    rightsReserved: string;
    legalNote: string;
  };
}
