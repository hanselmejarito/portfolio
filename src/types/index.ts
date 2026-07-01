export interface Project {
  name: string;
  description: string;
  tech: string[];
  period: string;
  company: string;
  role?: string;
  featured?: boolean;
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
