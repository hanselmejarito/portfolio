#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
  nvm use 20 >/dev/null 2>&1 || nvm use default >/dev/null 2>&1 || true
fi

if ss -tlnp 2>/dev/null | grep -q ':3000 '; then
  echo ""
  echo "Error: Port 3000 is already in use. Stop the other Next.js server first:"
  ss -tlnp | grep ':3000 ' || true
  echo ""
  echo "  kill <PID>    # then run npm run dev again"
  echo "  npm run dev:clean   # wipe .next cache and restart"
  echo ""
  exit 1
fi

exec node ./node_modules/next/dist/bin/next dev "$@"
