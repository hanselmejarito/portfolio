import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import type { Project } from "@/types";

function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-ink-300">
      {label}
    </span>
  );
}

function LiveLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light transition hover:text-accent"
    >
      View live site
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 17L17 7M17 7H8M17 7v9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <SpotlightCard className="p-8 md:p-10">
      <div className="flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="font-display-italic text-4xl text-ink-700">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.role && (
            <span className="rounded-full border border-accent/25 bg-accent/[0.08] px-3.5 py-1 text-xs font-semibold tracking-wide text-accent-light">
              {project.role}
            </span>
          )}
        </div>

        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white">
          {project.name}
        </h3>
        <p className="mb-4 font-mono text-xs text-ink-500">
          {project.period} · {project.company}
        </p>

        <p className="mb-7 flex-1 leading-relaxed text-ink-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        {project.link && (
          <div className="mt-6 border-t border-white/[0.06] pt-5">
            <LiveLink href={project.link} />
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <SpotlightCard className="p-6">
      <div className="flex h-full flex-col">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h4 className="font-semibold text-white">{project.name}</h4>
          {project.role && (
            <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-wider text-accent/80">
              {project.role}
            </span>
          )}
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <TechBadge key={t} label={t} />
          ))}
          {project.tech.length > 4 && (
            <span className="px-1 py-1 font-mono text-xs text-ink-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {project.link && (
          <div className="mt-4 border-t border-white/[0.06] pt-4">
            <LiveLink href={project.link} />
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}

function ProjectGroup({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  if (projects.length === 0) return null;

  return (
    <Reveal>
      <div className="mb-5 flex items-center gap-4">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
          {title}
        </h3>
        <span className="h-px flex-1 bg-white/[0.06]" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <CompactCard key={project.name} project={project} />
        ))}
      </div>
    </Reveal>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const techsolve = others.filter((p) => p.company.includes("Techsolve"));
  const suiterus = others.filter((p) => p.company.includes("Suiterus"));
  const personal = others.filter((p) => p.company === "Personal");

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="03 — Work"
          title="Selected"
          accent="systems."
          description="Nationwide platforms for the Parole and Probation Administration and the National Authority for Child Care — described by scope and technology, not source code."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 120}>
              <FeaturedCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 space-y-14">
          <ProjectGroup title="More at Techsolve — PPA & NACC" projects={techsolve} />
          <ProjectGroup title="Suiterus" projects={suiterus} />
          <ProjectGroup title="Personal" projects={personal} />
        </div>
      </div>
    </section>
  );
}
