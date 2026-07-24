"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

/**
 * Card with a radial glow that follows the cursor. The glow is rendered on a
 * ::before-style overlay div so content stays fully interactive.
 */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`surface-card group/spot relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(56, 189, 248, 0.08), transparent 65%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
