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
  problem: string;
  solution: string;
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
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface BenefitGroup {
  id: string;
  title: string;
  benefits: Benefit[];
}
