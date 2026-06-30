import type { Experience, Project, SkillCategory } from "@/types";

export const siteConfig = {
  name: "Hansel V. Mejarito Jr.",
  title: "Senior Software Engineer",
  tagline: "Building reliable systems — from enterprise apps to modern web platforms.",
  email: "mejarito.hansel20@gmail.com",
  github: "hanselmejarito",
  linkedin: "https://www.linkedin.com/in/hansel-mejarito-jr-90a0b4147",
  location: "Metro Manila, Philippines",
};

export const about = [
  "Software engineer with nearly 9 years of experience building and maintaining production systems for enterprise clients in the Philippines.",
  "I specialize in full-stack development — PHP backends, modern React/Next.js frontends, Docker deployments, and on-premise infrastructure.",
  "Currently serving as Senior Software Engineer at Techsolve Systems Solutions Inc., with prior experience at Suiterus Technologies Inc.",
];

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Techsolve Systems Solutions Inc.",
    period: "Jan 2022 — Present",
    duration: "4 yrs 5 mos",
    highlights: [
      "Lead development of client-facing enterprise applications",
      "Design and deploy on-premise Docker-based solutions",
      "Mentor junior developers and conduct code reviews",
    ],
  },
  {
    role: "Software Engineer",
    company: "Suiterus Technologies Inc.",
    period: "Dec 2017 — Dec 2021",
    duration: "4 yrs 4 mos",
    highlights: [
      "Built and maintained government and enterprise software systems",
      "Collaborated with cross-functional teams on full SDLC delivery",
      "Implemented backend APIs and database-driven applications",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Printer Management System (PMS)",
    description:
      "Enterprise on-premise printer monitoring platform with SNMP polling, department scoping, role-based access, and real-time metrics dashboards. Deployed via Docker on client LANs.",
    tech: ["PHP 8", "CodeIgniter 3", "MySQL", "Docker", "SNMP", "Bootstrap"],
    github: "https://github.com/hanselmejarito/pms",
    featured: true,
    private: true,
  },
  {
    name: "Chrome Industries Storefront",
    description:
      "Self-hosted e-commerce storefront with product catalog, localStorage cart, and email-based checkout — zero monthly cost, built entirely with modern React.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/hanselmejarito/website",
    featured: true,
    private: true,
  },
  {
    name: "n8n Automation Stack",
    description:
      "Production-ready Docker Compose setup for n8n workflow automation with PostgreSQL persistence, health checks, and Asia/Manila timezone configuration.",
    tech: ["Docker", "PostgreSQL", "n8n", "Docker Compose"],
    featured: false,
    private: true,
  },
  {
    name: "ARC Anti Rabies Clinic — Website Proposal",
    description:
      "Professional website proposal and mockup for a veterinary clinic, including service pages, pricing tables, and a print-ready design document.",
    tech: ["HTML", "CSS", "Responsive Design"],
    featured: false,
  },
  {
    name: "50th Anniversary Flipbook",
    description:
      "Interactive commemorative flipbook web page embedding a digital anniversary book with a clean, mobile-friendly viewer interface.",
    tech: ["HTML", "CSS", "FlipHTML5"],
    github: "https://github.com/hanselmejarito/anniversary-flipbook",
    featured: false,
    private: true,
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  {
    category: "Backend",
    items: ["PHP", "CodeIgniter", "REST APIs", "MySQL", "PostgreSQL"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Docker Compose", "Git", "GitHub", "Linux", "SNMP"],
  },
  {
    category: "Automation",
    items: ["n8n", "Workflow Automation", "CI/CD basics"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
