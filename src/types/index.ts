export interface Project {
  name: string;
  description: string;
  tech: string[];
  period: string;
  company: string;
  role?: string;
  featured?: boolean;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  duration: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  year: string;
  title: string;
  issuer: string;
  detail?: string;
}

export interface Education {
  school: string;
  program: string;
  note?: string;
}
