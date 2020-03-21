#!/usr/bin/env bash

# Fetch Unity minigame binaries
scripts/unity_fetch.sh

# Deploy app
gh-pages -d build