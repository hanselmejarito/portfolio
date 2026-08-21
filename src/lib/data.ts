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
    "Senior software engineer with 8+ years shipping full-stack web apps — HTML, CSS, JavaScript, jQuery, Bootstrap, and React on PHP/CodeIgniter backends and REST APIs for nationwide government platforms.",
  email: "mejarito.hansel20@gmail.com",
  formspree: "https://formspree.io/f/xdaqoqzy",
  linkedin: "https://www.linkedin.com/in/sel-mejarito-1231681b6/",
  website: "https://hmejarito.vercel.app",
  location: "Guimba, Nueva Ecija, Philippines",
};

export const stats = [
  { value: "8+", label: "Years of full-stack work" },
  { value: "15+", label: "Production systems shipped" },
  { value: "2", label: "Government agencies served" },
  { value: "PH-wide", label: "Nationwide deployments" },
];

export const about = [
  "Senior software engineer with over 8 years of experience delivering production web applications for enterprise and government clients in the Philippines — primarily the Parole and Probation Administration (PPA) and the National Authority for Child Care (NACC).",
  "I own both sides: HTML, CSS, and JavaScript UIs — jQuery and Bootstrap on the government portals, React and Next.js on newer work — plus REST APIs, PHP/CodeIgniter backends, MySQL, and production upkeep. Experienced shipping screens, workflows, and systems used nationwide.",
  "Previously Senior Software Engineer at Techsolve Systems Solutions Inc. and Software Engineer at Suiterus Technologies Inc. Based in the Philippines and open to hybrid or remote full-time roles.",
];

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Techsolve Systems Solutions Inc.",
    period: "Feb 2022 — Jul 2026",
    duration: "4 yrs 5 mos",
    highlights: [
      "Shipped production web UIs in HTML, CSS, JavaScript, jQuery, and Bootstrap — NACC Citizen's Charter kiosk, PMS dashboards, and the PPA 50th Anniversary coffee table book",
      "Lead developer on UAMS, ECMIS, OTP, and BRS — owned the portals, forms, REST APIs, and production upkeep after team handover",
      "Frontend on RMM dashboards (Chart.js); BA and API work supporting a React frontend on RCTS; contributor on PPIS and PMEIS",
    ],
  },
  {
    role: "Software Engineer",
    company: "Suiterus Technologies Inc.",
    period: "Nov 2017 — Feb 2022",
    duration: "4 yrs 3 mos",
    highlights: [
      "Built and maintained enterprise web applications with jQuery, Bootstrap, and PHP/CodeIgniter across the full SDLC",
      "Contributor on PMT and Dokyumento — task, document, and workflow UIs for government and corporate clients",
      "Worked with cross-functional teams on requirements, UI delivery, testing, and deployment",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "NACC Citizen's Charter System",
    description:
      "Public-facing Citizen's Charter for the National Authority for Child Care — lobby kiosk UI plus admin dashboard. jQuery and Bootstrap screens for adoption and foster care services, step-by-step requirements, regional offices, accredited agencies, announcements, organization structure, and citizen feedback with SQD ratings.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "CodeIgniter",
      "MySQL",
    ],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Built",
    featured: true,
  },
  {
    name: "ECMIS — Expansion Case Management Information System",
    description:
      "PPA case-management portal — digital forms (F5, F21, F44, F45, F51, F53), probationer records, community service masterlists, regional and field office quarterly reports, review and approval workflows, backup/restore, and audit trail. jQuery and Bootstrap UI on a CodeIgniter REST API.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "REST API",
    ],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Lead Developer",
    featured: true,
  },
  {
    name: "RMM — Remote Monitoring",
    description:
      "Frontend for an IT infrastructure monitoring app — dashboard UI with registered device counts, HDD/SSD and NVMe storage totals, RAM usage, and cluster breakdowns via Chart.js. Built cluster management, notifications, prohibited apps, licensing, and app/service monitoring views in jQuery and Bootstrap.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Chart.js",
      "PHP",
      "CodeIgniter",
      "MySQL",
    ],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Frontend",
    featured: true,
  },
  {
    name: "Honest Mistake — Storefront",
    description:
      "Streetwear e-commerce for a Manila-based limited-drop clothing brand — product lineup with quick-add sizes, sale pricing, newsletter signup, and multi-payment checkout options (GCash, Maya, COD). Race-mesh collection UI with Filipino/Japanese bilingual branding.",
    tech: ["HTML", "CSS", "JavaScript", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    period: "2026",
    company: "Personal",
    role: "Built",
    featured: true,
    link: "https://hm-worldwide.vercel.app/",
  },
  {
    name: "PPA 50th Anniversary — Interactive Coffee Table Book",
    description:
      "Interactive digital coffee table book commemorating the 50th anniversary of the Parole and Probation Administration (2026) — flipbook-style web experience with embedded multimedia and a mobile-friendly viewer.",
    tech: ["HTML", "CSS", "JavaScript", "FlipHTML5", "Responsive Design"],
    period: "2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Built",
    featured: false,
    link: "https://qr-ppa50thanniv.org/",
  },
  {
    name: "PMS — Print Monitoring System",
    description:
      "Nationwide print monitoring platform where regional offices report printer metrics to a central office. Raspberry Pi devices poll via SNMP and forward data upstream — department scoping, role-based access, and real-time dashboards at headquarters built with jQuery and Bootstrap.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP 8",
      "CodeIgniter 3",
      "MySQL",
      "Docker",
      "SNMP",
      "Raspberry Pi",
    ],
    period: "2023 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Built",
    featured: false,
  },
  {
    name: "UAMS — Unified Access Management Solution",
    description:
      "PPA central SSO and user-management hub — single login with the central OTP service, user enrollment across PPA systems (ECMIS, RCTS, BRS, LAN, and others), role-based access by field office and user level, information system registry with SSO status dashboard, and audit trail. jQuery and Bootstrap portal on a REST API.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "REST API",
      "SSO",
    ],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Lead Developer",
    featured: false,
  },
  {
    name: "RCTS — Report Collaboration Transcription System",
    description:
      "Report collaboration and speech-to-text transcription platform for PPA. Business analyst and backend developer on the CodeIgniter API — requirements gathering, speech processing integration, data persistence, and REST endpoints supporting the React frontend.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "REST API",
    ],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "BA · Backend",
    featured: false,
  },
  {
    name: "OTP — One Time Password System",
    description:
      "Centralized SMS OTP gateway for PPA — admin portal plus REST API. API Key Manager registers per-system keys with generated hashes, IP whitelist, and activate/deactivate controls. Integrated apps call the API to queue OTP messages; SMS Manager tracks Pending, Delivered, or Cancelled status with scheduled send time, delivery timestamp, and CSV/PDF/Excel export.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "REST API",
      "SMS Gateway",
    ],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Lead Developer",
    featured: false,
  },
  {
    name: "BRS — Bug Reporting System",
    description:
      "PPA internal bug-reporting portal with SSO login — ticket dashboard with category, severity, assignee, and status; severity and category managers; admin-user chat for follow-up; FAQ manager; attachments and assignment; CSV/PDF/Excel export; audit trail and backup/restore. jQuery and Bootstrap UI.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "REST API",
      "SSO",
    ],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Lead Developer",
    featured: false,
  },
  {
    name: "PPIS — Probation and Parole Information System",
    description:
      "Core information system for probation and parole records, case data, and reporting workflows across PPA field offices. Contributed to feature development and maintenance on the jQuery, Bootstrap, and CodeIgniter platform.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "CodeIgniter",
      "MySQL",
    ],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "PMEIS — Performance Monitoring and Evaluation Information System",
    description:
      "Performance monitoring and evaluation system for tracking outcomes and metrics across probation and parole operations. Contributed to data-entry screens, reporting views, and system maintenance.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "CodeIgniter",
      "MySQL",
    ],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "LAN Ports, Access Points and Switches Monitoring System",
    description:
      "Network infrastructure monitoring for LAN ports, wireless access points, and switches across PPA offices. Took over as maintainer — SNMP polling, status dashboards in jQuery and Bootstrap, and ongoing system upkeep after the original developer left.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "SNMP",
    ],
    period: "Feb 2022 — Jul 2026",
    company: "Techsolve Systems Solutions Inc.",
    role: "Maintainer",
    featured: false,
  },
  {
    name: "PMT — Project Management Tool",
    description:
      "Enterprise project management platform for tracking tasks, milestones, and team workflows across government and corporate engagements at Suiterus — jQuery and Bootstrap UI on PHP/CodeIgniter.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "CodeIgniter",
      "MySQL",
    ],
    period: "2017 — 2022",
    company: "Suiterus Technologies Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "Dokyumento — Document Management System",
    description:
      "Document management system for storing, organizing, and retrieving institutional files with role-based access, version tracking, and audit trails — jQuery and Bootstrap screens for enterprise clients.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "CodeIgniter",
      "MySQL",
    ],
    period: "2017 — 2022",
    company: "Suiterus Technologies Inc.",
    role: "Contributor",
    featured: false,
  },
  {
    name: "ARC Anti Rabies Clinic — Website",
    description:
      "Live site for an anti-rabies clinic chain with 11 branches across Nueva Ecija and Tarlac — services catalog, first-aid guide, searchable branch directory with filters, FAQ, and contact form with branch selection.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "React",
      "TypeScript",
      "Leaflet",
      "Formspree",
    ],
    period: "2026",
    company: "Personal",
    role: "Built",
    featured: false,
    link: "https://arcantirabisclinic.vercel.app/",
  },
  {
    name: "KOPIMO — Messenger AI Agent",
    description:
      "Serverless Facebook Messenger assistant for a coffee shop — answers from a file-based knowledge base (menu, hours, FAQ), collects Take-out/Pick-up orders in chat, saves draft rows to Google Sheets so counter staff can review before confirmation, then confirms to Pending Pickup. Gemini function calling, Upstash Redis memory/dedupe/rate limits, Meta webhook signature verification, and Vercel waitUntil async processing.",
    tech: [
      "Node.js",
      "Express",
      "TypeScript",
      "Vercel",
      "Google Gemini",
      "Upstash Redis",
      "Google Sheets API",
      "Facebook Graph API",
    ],
    period: "2026",
    company: "Personal",
    role: "Built",
    featured: false,
    link: "https://github.com/hanselmejarito/coffeeaiagent",
  },
  {
    name: "n8n — Social Media & AI Automations",
    description:
      "Three self-hosted n8n workflows on Docker: (1) automated weather updates posted to a Facebook page; (2) video pipeline from Google Drive to Facebook and YouTube; (3) Facebook Messenger AI assistant prototype (later rebuilt as the typed KOPIMO Messenger AI Agent on Vercel).",
    tech: [
      "n8n",
      "Docker",
      "PostgreSQL",
      "Facebook API",
      "YouTube API",
      "Google Drive",
      "AI",
    ],
    period: "2026",
    company: "Personal",
    role: "Built",
    featured: false,
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & APIs",
    items: ["REST APIs", "PHP", "CodeIgniter", "Node.js", "Express", "MySQL", "PostgreSQL"],
  },
  {
    category: "Delivery",
    items: ["Git", "Docker", "Docker Compose", "Linux", "Vercel", "Agile"],
  },
  {
    category: "Practices",
    items: [
      "Production ownership",
      "Code reviews",
      "Requirements gathering",
      "Business analysis",
      "Responsive UI",
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

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];
