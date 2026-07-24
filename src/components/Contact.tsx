import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="eyebrow mb-6">06 — Contact</p>
            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s build something{" "}
              <span className="font-display-italic font-normal text-gradient">
                that matters.
              </span>
            </h2>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-ink-300">
              Looking for full-time remote work — also open to contract
              engagements. Send a message with the form, or reach me directly.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block break-all text-xl font-semibold tracking-tight text-white underline decoration-accent/40 decoration-2 underline-offset-8 transition hover:text-accent-light hover:decoration-accent sm:text-2xl"
            >
              {siteConfig.email}
            </a>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-ink-100 transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                LinkedIn
              </a>
              <a
                href="/resume"
                className="rounded-xl border border-accent/25 bg-accent/[0.08] px-6 py-3 text-sm font-semibold text-accent-light transition hover:bg-accent/[0.15]"
              >
                View Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <SpotlightCard className="p-7 md:p-8">
              <ContactForm />
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
