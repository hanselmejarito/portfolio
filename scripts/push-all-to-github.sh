#!/usr/bin/env bash
# Push all local projects to GitHub (hanselmejarito)
# Run once: gh auth login
# Then: bash scripts/push-all-to-github.sh

set -euo pipefail

GITHUB_USER="hanselmejarito"
PROJECTS_ROOT="$HOME/projects"

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI first:"
  echo "  sudo apt install gh"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Login to GitHub first:"
  echo "  gh auth login"
  exit 1
fi

push_repo() {
  local dir="$1"
  local name="$2"
  local branch="${3:-main}"
  local visibility="${4:-public}"

  echo ""
  echo "=== $name ==="

  if [ ! -d "$dir/.git" ]; then
    echo "Initializing git in $dir"
    git -C "$dir" init -b "$branch"
    if [ "$name" = "n8n-docker" ]; then
      printf 'n8n_data/\npostgres_data/\n' > "$dir/.gitignore"
    fi
    git -C "$dir" add .
    git -C "$dir" commit -m "Initial commit: $name" || true
  fi

  if ! gh repo view "$GITHUB_USER/$name" >/dev/null 2>&1; then
    echo "Creating GitHub repo: $GITHUB_USER/$name ($visibility)"
    gh repo create "$GITHUB_USER/$name" --"$visibility" --source="$dir" --remote=origin --push
  else
    git -C "$dir" remote remove origin 2>/dev/null || true
    git -C "$dir" remote add origin "https://github.com/$GITHUB_USER/$name.git"
    git -C "$dir" push -u origin "$branch" || git -C "$dir" push -u origin HEAD
  fi

  echo "Done: https://github.com/$GITHUB_USER/$name"
}

# Existing repos (may be private — this makes them public)
for entry in "anniversary-flipbook:main" "pms:factory-lan" "website:main" "portfolio:main"; do
  name="${entry%%:*}"
  branch="${entry##*:}"
  push_repo "$PROJECTS_ROOT/$name" "$name" "$branch" "public"
done

# New repos
push_repo "$PROJECTS_ROOT/arc" "arc" "main" "public"
push_repo "$PROJECTS_ROOT/n8n-docker" "n8n-docker" "main" "public"

echo ""
echo "All done! Check: https://github.com/$GITHUB_USER?tab=repositories"
