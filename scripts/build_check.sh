#!/usr/bin/env bash
set -euxo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel)
pushd "${REPO_ROOT}"

npm run compile
npm run lint
npm run test

popd
