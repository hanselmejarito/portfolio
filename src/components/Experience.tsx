import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="02 — Experience"
          title="Nearly a decade of"
          accent="shipping."
        />

        <div className="relative mt-14 space-y-10 before:absolute before:left-[5px] before:top-3 before:h-[calc(100%-24px)] before:w-px before:bg-gradient-to-b before:from-accent/40 before:via-white/10 before:to-transparent">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 150}>
              <div className="relative pl-10 md:pl-14">
                <span className="absolute left-0 top-3 h-[11px] w-[11px] rounded-full bg-accent shadow-[0_0_12px_rgba(56,189,248,0.6)]" />

                <SpotlightCard className="p-7 md:p-8">
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {job.role}
                      </h3>
                      <p className="mt-0.5 text-accent-light">{job.company}</p>
                    </div>
                    <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-right">
                      <p className="text-sm text-ink-200">{job.period}</p>
                      <p className="font-mono text-xs text-ink-500">
                        {job.duration}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {job.highlights.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-300"
                      >
                        <span className="mt-[0.55rem] h-1 w-4 shrink-0 rounded-full bg-gradient-to-r from-accent to-transparent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
