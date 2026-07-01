import type { Project } from "@/types";

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`card-glow group flex flex-col rounded-2xl border border-white/5 bg-ink-900/50 p-6 transition ${
        featured ? "border-accent/20" : ""
      }`}
    >
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent-light">
          {project.name}
        </h3>
        <p className="mt-1 font-mono text-xs text-ink-400">
          {project.period}
          <span className="mx-1.5 text-ink-600">·</span>
          {project.company}
          {project.role && (
            <>
              <span className="mx-1.5 text-ink-600">·</span>
              <span className="text-accent/80">{project.role}</span>
            </>
          )}
        </p>
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-300">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-ink-800/80 px-2.5 py-1 font-mono text-xs text-ink-300"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
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
    <div>
      <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-ink-500">
        {title}
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const techsolve = others.filter((p) => p.company.includes("Techsolve"));
  const suiterus = others.filter((p) => p.company.includes("Suiterus"));
  const personal = others.filter((p) => p.company === "Personal");

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-mono text-sm text-accent">Projects</h2>
        <p className="mb-4 text-3xl font-bold text-white">Projects & systems</p>
        <p className="mb-12 max-w-2xl text-ink-400">
          Government systems for PPA (probation & parole) and NACC (child care),
          plus personal projects — described by scope and technology, not source
          code.
        </p>

        {featured.length > 0 && (
          <div className="mb-14">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-ink-500">
              Featured
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((project) => (
                <ProjectCard key={project.name} project={project} featured />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-12">
          <ProjectGroup title="Techsolve — PPA & NACC" projects={techsolve} />
          <ProjectGroup title="Suiterus" projects={suiterus} />
          <ProjectGroup title="Personal" projects={personal} />
        </div>
      </div>
    </section>
  );
}
