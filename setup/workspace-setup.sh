#!/usr/bin/env bash
set -euo pipefail

workspace_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")/../starter" && pwd)

# nvm is required because the frontend's Node version is project controlled.
. "${NVM_DIR:-$HOME/.nvm}/nvm.sh"

echo "Installing backend dependencies"
(
  cd "$workspace_dir/backend"
  pipenv --rm >/dev/null 2>&1 || true
  pipenv sync --dev
)

echo "Installing frontend dependencies"
(
  cd "$workspace_dir/frontend"
  nvm install
  npm ci
)

echo "Workspace setup complete"
