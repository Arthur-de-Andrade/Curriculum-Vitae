export interface NavigationItem {
  label: string;
  href: string;
}

export interface PortfolioInfoItem {
  icon: string;
  label: string;
  value: string;
}

export interface EducationItem {
  icon: string;
  label: string;
  title: string;
  institution: string;
  period: string;
  description: string;
}

export interface CertificationMetaItem {
  icon: string;
  text: string;
}

export interface CertificationItem {
  icon: string;
  title: string;
  institution: string;
  meta: CertificationMetaItem[];
  description: string;
  codeLabel: string;
  code: string;
  verificationLabel: string;
  verificationUrl: string;
}

export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: SkillItem[];
}

export interface LanguageItem {
  icon: string;
  language: string;
  level: string;
}

export interface ContactItem {
  icon: string;
  title: string;
  value: string;
  actionLabel: string;
  href: string;
  external?: boolean;
}
