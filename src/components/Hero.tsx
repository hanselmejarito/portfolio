import { Reveal } from "@/components/Reveal";
import { ScrollLink } from "@/components/ScrollLink";
import { siteConfig, stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pb-24 pt-32">
      <div className="bg-grid edge-fade-b pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift-slow absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/[0.07] blur-3xl" />
        <div className="animate-drift-slower absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-accent-violet/[0.07] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-1.5 text-sm text-emerald-300">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
            Available for full-time remote work · {siteConfig.location}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mb-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building systems that
            <br />
            serve a{" "}
            <span className="font-display-italic font-normal text-gradient">
              whole nation.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mb-4 text-xl font-medium text-ink-200">
            {siteConfig.name} — {siteConfig.title}
          </p>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-ink-300">
            {siteConfig.tagline}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-wrap items-center gap-4">
            <ScrollLink
              href="#projects"
              className="group rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-light"
            >
              View my work
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </ScrollLink>
            <ScrollLink
              href="#contact"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-ink-100 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              Get in touch
            </ScrollLink>
            <a
              href="/resume"
              className="px-2 py-3.5 text-sm font-medium text-accent-light underline-offset-4 transition hover:text-accent hover:underline"
            >
              Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={450}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ink-950/90 p-6">
                <dd className="text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm text-ink-400">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <ScrollLink
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-500 transition hover:text-ink-300 md:block"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4v16m0 0l-6-6m6 6l6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ScrollLink>
    </section>
  );
}
