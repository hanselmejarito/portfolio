#!/usr/bin/env bash
# Push all projects to GitHub
# First run: gh auth login

set -euo pipefail

WAMP="$HOME/wamp64/www"
# Windows WAMP path via WSL
if [ -d "/mnt/c/wamp64/www" ]; then
  WAMP="/mnt/c/wamp64/www"
fi

push_repo() {
  local dir="$1"
  local branch="$2"
  local name
  name=$(basename "$dir")

  if [ ! -d "$dir/.git" ]; then
    echo "SKIP $name — no git repo"
    return
  fi

  echo ""
  echo "=== $name → origin/$branch ==="
  git -C "$dir" push -u origin "$branch"
  echo "✓ done"
}

echo "── Projects (~/projects) ──"
push_repo "$HOME/projects/portfolio" main
push_repo "$HOME/projects/arc" main
push_repo "$HOME/projects/n8n-docker" main
push_repo "$HOME/projects/anniversary-flipbook" main
push_repo "$HOME/projects/website" main
push_repo "$HOME/projects/pms" factory-lan

echo ""
echo "── WAMP projects (C:/wamp64/www) ──"
push_repo "$WAMP/ppa-uams" master
push_repo "$WAMP/ppa-api-uams" master
push_repo "$WAMP/ppa-cmis_origin" master
push_repo "$WAMP/ppa-cmis-api_origin" master
push_repo "$WAMP/ppa-bug" master
push_repo "$WAMP/ppa-bug-api" master
push_repo "$WAMP/rmm" master
push_repo "$WAMP/transcription-frontend" master
push_repo "$WAMP/transcription_api" master

echo ""
echo "Done! https://github.com/hanselmejarito?tab=repositories"
