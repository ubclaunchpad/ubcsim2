#!/usr/bin/env bash

# Get minigames release version
release=$(head -n 1 release.txt)
binary_location="https://github.com/ubclaunchpad/ubcsim2/releases/download/${release}/ubcsim2-minigames${release}.zip"

# Get Unity binaries from release on GitHub
rm -rf temp
rm -rf public/unity
mkdir temp
mkdir public/unity
wget ${binary_location} -O temp/unity.zip
unzip temp/unity.zip -d temp
cp -r temp/ubcsim2-minigames${release}/* public/unity/