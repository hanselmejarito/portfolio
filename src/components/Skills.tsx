import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="04 — Skills"
          title="Tools of the"
          accent="trade."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={(i % 2) * 120}>
              <SpotlightCard className="h-full p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-display-italic text-2xl text-ink-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-sm text-ink-200 transition-colors hover:border-accent/30 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
