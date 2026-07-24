import type {
  Achievement,
  Education,
  Experience,
  Project,
  SkillCategory,
} from "@/types";

export const siteConfig = {
  name: "Hansel V. Mejarito Jr.",
  title: "Senior Software Engineer",
  tagline:
    "Senior engineer with 8+ years building nationwide government systems — SSO hubs, case management, IoT monitoring, and citizen-facing platforms for PPA and NACC.",
  email: "mejarito.hansel20@gmail.com",
  formspree: "https://formspree.io/f/xdaqoqzy",
  linkedin: "https://www.linkedin.com/in/sel-mejarito-1231681b6/",
  website: "https://hmejarito.vercel.app",
  location: "Guimba, Nueva Ecija, Philippines",
};

export const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "15+", label: "Production systems shipped" },
  { value: "2", label: "Government agencies served" },
  { value: "PH-wide", label: "Nationwide deployments" },
];

export const about = [
  "Software engineer with over 8 years of experience delivering production systems for enterprise and government clients in the Philippines — primarily the Parole and Probation Administration (PPA) and the National Authority for Child Care (NACC).",
  "I build full-stack solutions across PHP/CodeIgniter backends, React and Next.js frontends, REST APIs, Docker deployments, and on-premise infrastructure. Experienced leading handovers, writing requirements, and shipping systems used nationwide.",
  "Started as a hands-on hardcoder — now I work daily with Cursor, ChatGPT, Claude, and Gemini for AI-assisted development to ship faster while owning architecture, quality, and production systems. Previously Senior Software Engineer at Techsolve Systems Solutions Inc. and Software Engineer at Suiterus Technologies Inc. Looking for full-time remote work.",
];

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Techsolve Systems Solutions Inc.",
    period: "Feb 2022 — Jul 2026",
    duration: "4 yrs 5 mos",
    highlights: [
      "Built PMS (nationwide print monitoring via Raspberry Pi + SNMP), NACC Citizen's Charter, and PPA 50th Anniversary Coffee Table Book",
      "Lead developer on UAMS, ECMIS, OTP, and BRS — continued development after team handover",
      "BA and backend on RCTS; contributor on PPIS and PMEIS; maintainer on LAN monitoring",
    ],
  },
  {
    role: "Software Engineer",
    company: "Suiterus Technologies Inc.",
    period: "Nov 2017 — Feb 2022",
    duration: "4 yrs 3 mos",
    highlights: [
      "Contributor on PMT (Project Management Tool) and Dokyumento (Document Management System) for government clients",
      "Built and maintained enterprise web applications across the full SDLC",
      "Worked with cross-functional teams on requirements, development, testing, and deployment",
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
    link: "https://qr-ppa50thanniv.org/",
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
      "Report collaboration and speech-to-text transcription platform for the Parole and Probation Administration. Business analyst and backend developer on the CodeIgniter API — requirements gathering, speech processing integration, data persistence, and REST endpoints supporting the React frontend.",
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
      "PPA internal bug reporting platform (CodeIgniter portal + REST API) with SSO login — ticket dashboard with category, severity, assignee, and status tracking; severity and category managers; admin-user chat for ticket follow-up; FAQ manager; ticket attachments and assignment; CSV/PDF/Excel export; audit trail and backup/restore.",
    tech: ["PHP", "CodeIgniter", "MySQL", "REST API", "SSO", "Bootstrap"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Lead Developer",
    featured: false,
  },
  {
    name: "RMM — Remote Monitoring",
    description:
      "Remote monitoring and management web application for IT infrastructure — dashboard UI showing registered device counts, HDD/SSD and NVMe storage totals, RAM usage, and cluster breakdowns via Chart.js bar graphs. Frontend development on cluster management, notifications, prohibited apps, licensing, and app/service monitoring views.",
    tech: ["PHP", "CodeIgniter", "Bootstrap", "jQuery", "Chart.js", "MySQL"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Frontend",
    featured: false,
  },
  {
    name: "PPIS — Probation and Parole Information System",
    description:
      "Core information system for probation and parole records, case data, and reporting workflows across PPA field offices. Contributed to feature development and maintenance on the CodeIgniter-based platform.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "PMEIS — Performance Monitoring and Evaluation Information System",
    description:
      "Performance monitoring and evaluation system for tracking outcomes and metrics across probation and parole operations. Contributed to modules for data entry, reporting, and system maintenance.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "LAN Ports, Access Points and Switches Monitoring System",
    description:
      "Network infrastructure monitoring for LAN ports, wireless access points, and switches across PPA offices. Took over as maintainer — SNMP-based polling, status dashboards, and ongoing system upkeep after original developer departure.",
    tech: ["PHP", "CodeIgniter", "MySQL", "SNMP", "Bootstrap"],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Maintainer",
    featured: false,
  },
  {
    name: "PMT — Project Management Tool",
    description:
      "Enterprise project management platform for tracking tasks, milestones, and team workflows across government and corporate engagements at Suiterus.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    period: "2017 — 2022",
    company: "Suiterus Technologies Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "Dokyumento — Document Management System",
    description:
      "Document management system for storing, organizing, and retrieving institutional files with role-based access, version tracking, and audit trails for enterprise clients.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    period: "2017 — 2022",
    company: "Suiterus Technologies Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "Chrome Industries Storefront",
    description:
      "Self-hosted e-commerce storefront with product catalog, localStorage cart, and email-based checkout. Built with Next.js 15, React 19, and TypeScript — from scaffolding to deployment-ready UI.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    period: "2026",
    company: "Personal",
    role: "Built",
    featured: false,
  },
  {
    name: "ARC Anti Rabies Clinic — Website",
    description:
      "Live site for an anti-rabies clinic chain with 11 branches across Nueva Ecija and Tarlac — services catalog, first-aid guide, searchable branch directory with filters, FAQ, and contact form with branch selection.",
    tech: ["HTML", "CSS", "Responsive Design"],
    period: "2026",
    company: "Personal",
    role: "Built",
    featured: false,
    link: "https://arcantirabisclinic.vercel.app/",
  },
  {
    name: "n8n — Social Media & AI Automations",
    description:
      "Three self-hosted n8n workflows on Docker: (1) automated weather updates posted to a Facebook page; (2) video pipeline from Google Drive to Facebook and YouTube; (3) Facebook Messenger AI assistant that reads product info from Google Docs and replies to customer inquiries.",
    tech: ["n8n", "Docker", "PostgreSQL", "Facebook API", "YouTube API", "Google Drive", "AI"],
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
    category: "AI & Automation",
    items: [
      "Cursor",
      "ChatGPT",
      "Claude",
      "Gemini",
      "AI-Assisted Development",
      "n8n",
      "Workflow Automation",
      "Business Analysis",
      "Requirements Gathering",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    year: "2019",
    title: "Web Design Competition — 9th I.T. Skills Olympics",
    issuer: "University of Makati, College of Computer Science",
    detail: "Represented College of Saint John Paul II Arts and Sciences",
  },
  {
    year: "2019",
    title: "Growth Marketing in the New Era — Seminar",
    issuer: "Autumn Creative Mktg.",
  },
  {
    year: "2018",
    title: "Web Design — 8th I.T. Skills Olympics",
    issuer: "University of Makati, College of Computer Science",
    detail: "Represented College of Saint John Paul II Arts and Sciences",
  },
  {
    year: "2018",
    title: "Hackathon — Collaborative Computer Programming",
    issuer: "Hackathon event",
  },
  {
    year: "2016",
    title: "1st Runner-up — Chess Competition",
    issuer: "Datamex Institute of Science and Technology",
  },
  {
    year: "2015",
    title: "5th Outstanding Student — 1st Year Information Technology",
    issuer: "Datamex Institute of Science and Technology",
  },
  {
    year: "2014",
    title: "Chess Champion Overall — University Intramurals",
    issuer: "Polytechnic University of the Philippines",
  },
];

export const education: Education[] = [
  {
    school: "College of Saint John Paul II Arts and Sciences",
    program: "Bachelor's Degree (undergraduate)",
    note: "Competed in the UMak I.T. Skills Olympics web design competitions (2018, 2019)",
  },
  {
    school: "Datamex Institute of Science and Technology",
    program: "Information Technology (vocational) — Graduate",
    note: "5th Outstanding Student — and the face of the school's \"Be a Datamexian!\" enrollment campaign",
  },
  {
    school: "Polytechnic University of the Philippines",
    program: "BS Banking and Finance (1st year)",
    note: "University Intramurals Chess Champion Overall (2014)",
  },
];

export const publicService = {
  role: "SK Kagawad — Sangguniang Kabataan Councilor",
  org: "Barangay St. Joseph, City of San Juan, Metro Manila",
  period: "Jul 2018 — Nov 2023",
  note: "Elected youth council member — served a full five-year term in local government",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];
