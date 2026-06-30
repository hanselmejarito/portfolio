import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-mono text-sm text-accent">About</h2>
        <p className="mb-10 text-3xl font-bold text-white">Who I am</p>

        <div className="grid gap-6 md:grid-cols-3">
          {about.map((paragraph, i) => (
            <p
              key={i}
              className="leading-relaxed text-ink-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
