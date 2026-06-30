import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-ink-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className="font-mono text-xs">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
