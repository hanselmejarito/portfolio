import { siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="card-glow rounded-3xl border border-white/5 bg-gradient-to-br from-ink-900/80 to-ink-950 p-10 text-center md:p-16">
          <h2 className="mb-2 font-mono text-sm text-accent">Contact</h2>
          <p className="mb-4 text-3xl font-bold text-white">Let&apos;s connect</p>
          <p className="mx-auto mb-10 max-w-lg text-ink-300">
            Open to full-time, contract, and remote opportunities. Reach out via
            email or LinkedIn — resume available below.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-ink-200 transition hover:border-white/20 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.website}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-ink-200 transition hover:border-white/20 hover:text-white"
            >
              Portfolio
            </a>
            <a
              href="/resume"
              className="rounded-xl border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent-light transition hover:bg-accent/20"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
