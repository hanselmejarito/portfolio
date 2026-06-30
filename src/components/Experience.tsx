import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-mono text-sm text-accent">Experience</h2>
        <p className="mb-12 text-3xl font-bold text-white">Where I&apos;ve worked</p>

        <div className="relative space-y-12 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-white/10 md:before:left-[11px]">
          {experience.map((job, i) => (
            <div key={i} className="relative pl-8 md:pl-10">
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-ink-950 md:h-6 md:w-6" />

              <div className="card-glow rounded-2xl border border-white/5 bg-ink-900/50 p-6 transition">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                    <p className="text-accent-light">{job.company}</p>
                  </div>
                  <div className="text-right text-sm text-ink-400">
                    <p>{job.period}</p>
                    <p className="font-mono text-xs">{job.duration}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.highlights.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-ink-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
