import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import { achievements, education, publicService } from "@/lib/data";

export function Recognition() {
  return (
    <section id="recognition" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="05 — Recognition"
          title="Credentials &"
          accent="milestones."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal delay={100}>
            <div className="space-y-5">
              <h3 className="eyebrow">Public service</h3>
              <SpotlightCard className="border-accent/20 p-7">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold text-white">
                    {publicService.role}
                  </h4>
                  <span className="shrink-0 pt-0.5 font-mono text-xs text-ink-500">
                    {publicService.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-accent-light">
                  {publicService.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">
                  {publicService.note}
                </p>
              </SpotlightCard>

              <h3 className="eyebrow pt-4">Education</h3>
              {education.map((entry) => (
                <SpotlightCard key={entry.school} className="p-7">
                  <h4 className="font-semibold text-white">{entry.school}</h4>
                  <p className="mt-1 text-sm text-accent-light">
                    {entry.program}
                  </p>
                  {entry.note && (
                    <p className="mt-3 text-sm leading-relaxed text-ink-400">
                      {entry.note}
                    </p>
                  )}
                </SpotlightCard>
              ))}
            </div>
          </Reveal>

          <Reveal delay={250}>
            <h3 className="eyebrow mb-5">Awards & certificates</h3>
            <SpotlightCard className="divide-y divide-white/[0.06] px-7">
              {achievements.map((item) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="flex gap-6 py-5"
                >
                  <span className="w-12 shrink-0 pt-0.5 font-mono text-sm text-accent/80">
                    {item.year}
                  </span>
                  <div>
                    <p className="font-medium leading-snug text-ink-100">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-400">
                      {item.issuer}
                      {item.detail && (
                        <span className="text-ink-500"> · {item.detail}</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
