import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-ink-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
          <a
            href={siteConfig.website}
            className="transition hover:text-ink-300"
          >
            {siteConfig.website.replace("https://", "")}
          </a>
          <a href="/resume" className="transition hover:text-ink-300">
            Resume
          </a>
          <span className="text-ink-600">·</span>
          <span>Built with Next.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
