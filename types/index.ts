export interface NavigationItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  points: string[];
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
