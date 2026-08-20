export interface NavigationItem {
  label: string;
  href: string;
}

export interface PortfolioInfoItem {
  icon: string;
  label: string;
  value: string;
}

export type JourneyItemType = "experience" | "education" | "course";
export type JourneyItemStatus = "current" | "ongoing" | "completed";

export interface EducationItem {
  id: string;
  icon: string;
  label: string;
  journeyType: "education" | "course";
  title: string;
  institution: string;
  period: string;
  description: string;
}

export interface JourneyItem {
  id: string;
  type: JourneyItemType;
  title: string;
  organization: string;
  location?: string;
  start?: string;
  end?: string;
  periodLabel: string;
  description: string[];
  highlights?: string[];
  technologies?: string[];
  status?: JourneyItemStatus;
  icon: string;
  anchorId?: string;
  credential?: {
    label: string;
    href: string;
  };
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

export type ProjectKind = "professional" | "academic" | "personal";

export interface ProjectPreviewData {
  type: "abstract" | "image";
  src?: string;
  alt: string;
}

export interface ProjectMedia {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectCaseSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  media?: ProjectMedia[];
}

export interface ProjectCaseStudy {
  intro: string;
  sections: ProjectCaseSection[];
  privateSourceNote?: string;
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  kind: ProjectKind;
  summary: string;
  technologies: string[];
  githubUrl?: string;
  privateSource?: boolean;
  preview: ProjectPreviewData;
  caseStudy: ProjectCaseStudy;
}
