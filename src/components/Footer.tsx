import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-ink-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-ink-300">{siteConfig.name}</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 font-mono text-xs">
          <a
            href={siteConfig.website}
            className="transition hover:text-ink-200"
          >
            {siteConfig.website.replace("https://", "")}
          </a>
          <a href="/resume" className="transition hover:text-ink-200">
            Resume
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink-200"
          >
            LinkedIn
          </a>
          <span className="text-ink-700">·</span>
          <span>Next.js & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
