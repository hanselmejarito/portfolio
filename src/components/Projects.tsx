import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`card-glow group flex flex-col rounded-2xl border border-white/5 bg-ink-900/50 p-6 transition ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-accent-light transition-colors">
          {project.name}
        </h3>
        {project.private && (
          <span className="shrink-0 rounded-md bg-ink-800 px-2 py-0.5 font-mono text-xs text-ink-400">
            private
          </span>
        )}
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-300">
        {project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-ink-800/80 px-2.5 py-1 font-mono text-xs text-ink-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition hover:text-accent-light"
          >
            GitHub →
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-400 transition hover:text-white"
          >
            Live demo →
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-mono text-sm text-accent">Projects</h2>
        <p className="mb-4 text-3xl font-bold text-white">Things I&apos;ve built</p>
        <p className="mb-12 max-w-2xl text-ink-400">
          A selection of personal and professional projects from my GitHub
          repositories and local work.
        </p>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {others.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
