import type { Experience, Project, SkillCategory } from "@/types";

export const siteConfig = {
  name: "Hansel V. Mejarito Jr.",
  title: "Senior Software Engineer",
  tagline:
    "Open to new opportunities — over 8 years building enterprise and government systems across the full stack.",
  email: "mejarito.hansel20@gmail.com",
  linkedin: "https://www.linkedin.com/in/sel-mejarito-1231681b6/",
  location: "Metro Manila, Philippines",
};

export const about = [
  "Software engineer with over 8 years of experience building production systems for enterprise and government clients in the Philippines — primarily for the Parole and Probation Administration (PPA) and the National Authority for Child Care (NACC).",
  "I specialize in full-stack development: PHP backends, React/Next.js frontends, Docker deployments, and on-premise infrastructure. Recently using Cursor for faster AI-assisted development from idea to production.",
  "Previously Senior Software Engineer at Techsolve Systems Solutions Inc. and Software Engineer at Suiterus Technologies Inc. Open to new opportunities.",
];

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Techsolve Systems Solutions Inc.",
    period: "Feb 2022 — Jul 2026",
    duration: "4 yrs 5 mos",
    highlights: [
      "Built PMS, NACC Citizen's Charter System, and PPA 50th Anniversary Interactive Coffee Table Book",
      "Lead developer on UAMS, ECMIS, OTP, and BRS after team handover",
      "BA and backend on RCTS; contributor on PPIS and PMEIS; maintainer on LAN Ports, Access Points and Switches Monitoring",
    ],
  },
  {
    role: "Software Engineer",
    company: "Suiterus Technologies Inc.",
    period: "Nov 2017 — Feb 2022",
    duration: "4 yrs 3 mos",
    highlights: [
      "Contributor on PMT (Project Management Tool) and Dokyumento (Document Management System)",
      "Built and maintained government and enterprise software systems",
      "Collaborated with cross-functional teams on full SDLC delivery",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "PPA 50th Anniversary — Interactive Coffee Table Book",
    description:
      "Interactive digital coffee table book commemorating the 50th anniversary of the Parole and Probation Administration (2026) — flipbook-style web experience with embedded multimedia content and a mobile-friendly viewer.",
    tech: ["HTML", "CSS", "FlipHTML5", "Responsive Design"],
    period: "2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Built",
    featured: false,
  },
  {
    name: "PMS — Print Monitoring System",
    description:
      "Nationwide print monitoring platform where all regional offices with printers report metrics to a central office. Raspberry Pi devices at each region handle SNMP polling and forward data upstream — with department scoping, role-based access, and real-time dashboards at headquarters.",
    tech: ["PHP 8", "CodeIgniter 3", "MySQL", "Docker", "SNMP", "Raspberry Pi", "Bootstrap"],
    period: "2023 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Built",
    featured: true,
  },
  {
    name: "ECMIS — Expansion Case Management Information System",
    description:
      "PPA Expansion Case Management Information System (CodeIgniter portal + REST API) for probation and parole caseload operations — digital forms (F5, F21, F44, F45, F51, F53), probationer records, community service masterlists, regional and field office quarterly reports, form review and approval workflows, backup/restore, and audit trail.",
    tech: ["PHP", "CodeIgniter", "MySQL", "REST API", "Bootstrap", "jQuery"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Lead Developer",
    featured: true,
  },
  {
    name: "UAMS — Unified Access Management Solution",
    description:
      "PPA central SSO and user management hub (ppa_sso database) — single login integrated with the central OTP service, user enrollment across PPA information systems (ECMIS, RCTS, BRS, LAN, and others), role-based access by field office and user level, information system registry with SSO status dashboard, and audit trail.",
    tech: ["PHP", "CodeIgniter", "MySQL", "REST API", "SSO", "Bootstrap"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Lead Developer",
    featured: true,
  },
  {
    name: "NACC Citizen's Charter System",
    description:
      "Citizen's Charter platform for the National Authority for Child Care (NACC) — public lobby kiosk plus admin dashboard. Covers adoption and foster care services, step-by-step requirements, regional offices, accredited agencies, announcements, organization structure, and citizen feedback with SQD ratings.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap", "Kiosk UI"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Built",
    featured: true,
  },
  {
    name: "RCTS — Report Collaboration Transcription System",
    description:
      "Report collaboration and speech-to-text transcription platform for the Parole and Probation Administration. Business analyst and backend developer on the CodeIgniter API — requirements, speech processing integration, data persistence, and REST endpoints supporting the React frontend.",
    tech: ["PHP", "CodeIgniter", "MySQL", "REST API", "React"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "BA · Backend",
    featured: false,
  },
  {
    name: "OTP — One Time Password System",
    description:
      "Centralized SMS OTP gateway for PPA (CodeIgniter admin portal + REST API) — API Key Manager registers per-information-system keys with generated hashes, IP whitelist, and activate/deactivate controls. Integrated apps (UAMS, ECMIS, and others) call the API with their key to queue OTP messages; SMS Manager tracks each message with Pending, Delivered, or Cancelled status, scheduled send time, delivery timestamp, and CSV/PDF/Excel export.",
    tech: ["PHP", "CodeIgniter", "MySQL", "REST API", "Bootstrap", "SMS Gateway"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Lead Developer",
    featured: false,
  },
  {
    name: "BRS — Bug Reporting System",
    description:
      "Internal bug reporting and issue management system with user account controls, API layer, and CodeIgniter MVC structure. Took over development after previous developer left.",
    tech: ["PHP", "CodeIgniter", "MySQL", "REST API"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Lead Developer",
    featured: false,
  },
  {
    name: "RMM — Remote Monitoring",
    description:
      "Remote monitoring and management web application with dashboard-driven device tracking. Responsible for frontend development on the CodeIgniter-based platform.",
    tech: ["PHP", "CodeIgniter", "Bootstrap", "jQuery", "MySQL"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Frontend",
    featured: false,
  },
  {
    name: "PPIS — Probation and Parole Information System",
    description:
      "Information system for managing probation and parole records, case data, and reporting workflows for the Parole and Probation Administration.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "PMEIS — Performance Monitoring and Evaluation Information System",
    description:
      "System for tracking, monitoring, and evaluating performance metrics and outcomes across probation and parole operations.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "LAN Ports, Access Points and Switches Monitoring System",
    description:
      "Network infrastructure monitoring system for LAN ports, wireless access points, and switches. Took over as maintainer after the original developer left.",
    tech: ["PHP", "CodeIgniter", "MySQL", "SNMP", "Bootstrap"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Maintainer",
    featured: false,
  },
  {
    name: "PMT — Project Management Tool",
    description:
      "Enterprise project management platform for tracking tasks, milestones, and team workflows across government and corporate engagements.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    period: "2017 — 2022",
    company: "Suiterus Technologies Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "Dokyumento — Document Management System",
    description:
      "Document management system for storing, organizing, and retrieving institutional files with role-based access and audit trails.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    period: "2017 — 2022",
    company: "Suiterus Technologies Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "Chrome Industries Storefront",
    description:
      "Self-hosted e-commerce storefront with product catalog, localStorage cart, and email-based checkout. Built with Next.js and developed using Cursor — from scaffolding to deployment-ready UI.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Cursor"],
    period: "2026",
    company: "Personal",
    role: "Built",
    featured: false,
  },
  {
    name: "ARC Anti Rabies Clinic — Website",
    description:
      "Professional website for a veterinary clinic — service pages, pricing tables, and responsive layout. Designed and built with Cursor.",
    tech: ["HTML", "CSS", "Responsive Design", "Cursor"],
    period: "2026",
    company: "Personal",
    role: "Built",
    featured: false,
  },
  {
    name: "n8n — Social Media & AI Automations",
    description:
      "Three self-hosted n8n workflows on Docker: (1) automated weather updates posted to a Facebook page; (2) video pipeline from Google Drive to Facebook and YouTube — upload once, auto-publish to social media; (3) Facebook Messenger assistant for Kopimo (sample coffee page) — AI reads product info from Google Docs and replies to customer inquiries in Messenger.",
    tech: ["n8n", "Docker", "PostgreSQL", "Facebook API", "YouTube API", "Google Drive", "Google Docs", "AI"],
    period: "2026",
    company: "Personal",
    role: "Built",
    featured: false,
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
    items: ["Docker", "Docker Compose", "Git", "Linux", "SNMP"],
  },
  {
    category: "Analysis & Automation",
    items: [
      "Business Analysis",
      "Requirements Gathering",
      "n8n",
      "Workflow Automation",
      "Cursor",
      "AI-Assisted Development",
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
