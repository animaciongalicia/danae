export interface NavigationItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
}

export interface SolutionBlock {
  id: string;
  title: string;
  /** One-line teaser shown while the accordion row is collapsed. */
  summary: string;
  problem: string;
  action: string;
  includes: string[];
  result: string;
}

export interface SolutionGroup {
  id: string;
  title: string;
  description: string;
  items: SolutionBlock[];
}

export interface Sector {
  id: string;
  title: string;
  /** Scene-setting opening line that puts the reader in the situation. */
  scene: string;
  description: string;
  highlights: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface BenefitGroup {
  id: string;
  title: string;
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
