import type { Project } from "@/types";
import { projects as staticProjects } from "./data";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  private: boolean;
  fork: boolean;
  archived: boolean;
}

export async function fetchGitHubRepos(
  username: string
): Promise<Project[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      }
    );

    if (!res.ok) return staticProjects;

    const repos: GitHubRepo[] = await res.json();

    const apiProjects: Project[] = repos
      .filter((r) => !r.fork && !r.archived)
      .map((repo) => ({
        name: repo.name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        description: repo.description ?? "No description provided.",
        tech: [repo.language, ...repo.topics].filter(Boolean) as string[],
        github: repo.html_url,
        live: repo.homepage || undefined,
        private: repo.private,
        featured: false,
      }));

    if (apiProjects.length === 0) return staticProjects;

    // Prefer curated static entries; only append repos not already listed
    const staticSlugs = new Set(
      staticProjects.map((p) => p.github?.split("/").pop()?.toLowerCase())
    );

    return [
      ...staticProjects,
      ...apiProjects.filter(
        (p) => !staticSlugs.has(p.github?.split("/").pop()?.toLowerCase())
      ),
    ];
  } catch {
    return staticProjects;
  }
}

export async function fetchGitHubProfile(username: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json() as Promise<{
      avatar_url: string;
      public_repos: number;
      bio: string | null;
    }>;
  } catch {
    return null;
  }
}
