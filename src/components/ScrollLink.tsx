"use client";

import {
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useEffect,
} from "react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function clearHashFromUrl() {
  const { pathname, search } = window.location;
  window.history.replaceState(null, "", pathname + search);
}

/** Clears leftover #section from the address bar (e.g. old shared links). */
export function CleanHashOnLoad() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    // Let the page paint first, then scroll and strip the hash.
    requestAnimationFrame(() => {
      scrollToId(id);
      clearHashFromUrl();
    });
  }, []);

  return null;
}

/** In-page link that scrolls without putting #section in the URL. */
export function ScrollLink({
  href,
  children,
  onNavigate,
  ...props
}: {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    scrollToId(id);
    clearHashFromUrl();
    onNavigate?.();
  };

  return (
    <a href={href} onClick={onClick} {...props}>
      {children}
    </a>
  );
}
