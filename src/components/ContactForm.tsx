"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 transition focus:border-accent/50 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(siteConfig.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-8 text-center">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-lg font-semibold text-white">Message sent</p>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-300">
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent-light transition hover:text-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            autoComplete="name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project or opportunity…"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-center text-sm text-red-400">
          Something went wrong — please try again or email me directly.
        </p>
      )}
    </form>
  );
}
