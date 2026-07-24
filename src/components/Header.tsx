"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-accent to-accent-violet"
          style={{ transform: `scaleX(${progress})` }}
        />

        <div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 font-mono text-sm font-medium tracking-tight text-ink-200 transition-colors hover:text-white"
          >
            <Image
              src="/logo/HM7.jpg"
              alt="HM logo"
              width={28}
              height={28}
              className="rounded-md"
              priority
            />
            hansel<span className="text-accent">.dev</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-7 md:flex">
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

          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-ink-200 transition hover:border-accent/40 hover:text-white md:hidden"
            >
              {open ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-ink-200 transition hover:border-accent/40 hover:bg-accent/10 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-16 z-40 bg-ink-950/95 backdrop-blur-md md:hidden"
          onClick={() => setOpen(false)}
        >
          <nav
            className="flex flex-col gap-1 px-6 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base text-ink-200 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
