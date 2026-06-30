export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  private?: boolean;
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
