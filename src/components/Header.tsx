import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-ink-200 transition-colors hover:text-white"
        >
          hansel<span className="text-accent">.dev</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`https://github.com/${siteConfig.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-ink-200 transition hover:border-accent/40 hover:bg-accent/10 hover:text-white"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
