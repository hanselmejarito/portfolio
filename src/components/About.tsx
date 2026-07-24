import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import { about, siteConfig } from "@/lib/data";

const facts = [
  { label: "Role", value: "Senior Software Engineer" },
  { label: "Focus", value: "Full-stack · Gov systems" },
  { label: "Based in", value: "Guimba, Nueva Ecija, PH" },
  { label: "Status", value: "Open to remote opportunities" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="01 — About"
          title="Engineering with"
          accent="public impact."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Reveal delay={100}>
            <div className="space-y-6">
              {about.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-ink-300 first:text-xl first:text-ink-200"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={250}>
            <SpotlightCard className="h-full p-7">
              <h3 className="eyebrow mb-6">At a glance</h3>
              <dl className="space-y-5">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-ink-400">{fact.label}</dt>
                    <dd className="text-right text-sm font-medium text-ink-100">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-7 block rounded-xl border border-accent/25 bg-accent/[0.08] px-5 py-3 text-center text-sm font-semibold text-accent-light transition hover:bg-accent/[0.15]"
              >
                Say hello
              </a>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
