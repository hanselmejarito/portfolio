import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-ink-700/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl animate-fade-up">
        <p className="mb-4 font-mono text-sm text-accent">
          Hello, I&apos;m
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {siteConfig.name}
        </h1>

        <p className="mb-2 text-xl font-medium text-ink-200 sm:text-2xl">
          {siteConfig.title}
        </p>

        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-ink-300">
          {siteConfig.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-ink-200 transition hover:border-white/20 hover:text-white"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 text-sm text-ink-400">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {siteConfig.location}
          </span>
          <span>~8+ years experience</span>
          <span>Open to opportunities</span>
        </div>
      </div>
    </section>
  );
}
