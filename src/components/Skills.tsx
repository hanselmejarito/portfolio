import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-mono text-sm text-accent">Skills</h2>
        <p className="mb-12 text-3xl font-bold text-white">Tech stack</p>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="card-glow rounded-2xl border border-white/5 bg-ink-900/50 p-6"
            >
              <h3 className="mb-4 font-mono text-sm font-medium text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/5 bg-ink-800/60 px-3 py-1.5 text-sm text-ink-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
