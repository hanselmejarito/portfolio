import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  /** Word(s) within the title rendered in the serif italic display face */
  accent?: string;
  description?: string;
}) {
  return (
    <Reveal>
      <div className="mb-14 flex items-center gap-4">
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
      </div>
      <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}{" "}
        {accent && (
          <span className="font-display-italic font-normal text-gradient">
            {accent}
          </span>
        )}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-ink-300">
          {description}
        </p>
      )}
    </Reveal>
  );
}
