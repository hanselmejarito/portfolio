import {
  achievements,
  education,
  experience,
  publicService,
  siteConfig,
  skills,
} from "@/lib/data";
import { ResumeActions } from "@/components/ResumeActions";

export const metadata = {
  title: `Resume — ${siteConfig.name}`,
  description: `Resume of ${siteConfig.name}, ${siteConfig.title}`,
};

export default function ResumePage() {
  const featuredSkills = skills.flatMap((g) => g.items).slice(0, 16);

  return (
    <div className="min-h-screen bg-white text-gray-900 print:min-h-0">
      <ResumeActions />

      <article className="mx-auto max-w-3xl px-8 py-12 print:px-0 print:py-0">
        <header className="mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold">{siteConfig.name}</h1>
          <p className="mt-1 text-lg font-medium text-gray-700">{siteConfig.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">{siteConfig.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
            <span>{siteConfig.location}</span>
            <span>{siteConfig.email}</span>
            <a href={siteConfig.linkedin} className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            <a href={siteConfig.website} className="text-blue-600 hover:underline">
              {siteConfig.website.replace("https://", "")}
            </a>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
            Summary
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Software engineer with over 8 years building production systems for PPA and NACC —
            full-stack PHP/CodeIgniter backends, React/Next.js frontends, REST APIs, Docker, and
            on-premise deployments. Experienced as lead developer, business analyst, and
            maintainer across nationwide government platforms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{job.role}</h3>
                  <span className="text-sm text-gray-500">{job.period}</span>
                </div>
                <p className="text-sm font-medium text-blue-700">{job.company}</p>
                <ul className="mt-2 space-y-1">
                  {job.highlights.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-gray-700">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
            Key Projects
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <strong>PMS</strong> — Nationwide print monitoring (Raspberry Pi + SNMP, Docker)
            </li>
            <li>
              <strong>ECMIS / UAMS</strong> — PPA case management + central SSO hub (Lead
              Developer)
            </li>
            <li>
              <strong>OTP</strong> — Centralized SMS OTP gateway with API key management
            </li>
            <li>
              <strong>BRS</strong> — Bug reporting with tickets, chat, severity, and FAQ
            </li>
            <li>
              <strong>NACC Citizen&apos;s Charter</strong> — Public kiosk + admin dashboard
            </li>
            <li>
              <strong>RCTS</strong> — Speech-to-text transcription platform (BA · Backend)
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
            Skills
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            {featuredSkills.join(" · ")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
            Public Service
          </h2>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-sm font-semibold">{publicService.role}</h3>
            <span className="text-sm text-gray-500">{publicService.period}</span>
          </div>
          <p className="text-sm text-gray-600">{publicService.org}</p>
          <p className="mt-1 text-sm text-gray-700">{publicService.note}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((entry) => (
              <div key={entry.school}>
                <h3 className="text-sm font-semibold">{entry.school}</h3>
                <p className="text-sm text-gray-600">{entry.program}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
            Achievements & Certificates
          </h2>
          <ul className="space-y-1">
            {achievements
              .filter((item) => !item.title.includes("Seminar"))
              .map((item) => (
                <li key={`${item.year}-${item.title}`} className="text-sm text-gray-700">
                  <span className="font-medium text-gray-500">{item.year}</span> —{" "}
                  {item.title} · {item.issuer}
                </li>
              ))}
          </ul>
        </section>
      </article>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          @page { margin: 1.5cm; }
        }
      `}</style>
    </div>
  );
}
