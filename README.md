# :thought_balloon: UBC Simulator 2

[![Build Status](https://travis-ci.com/ubclaunchpad/ubcsim2.svg?branch=master)](https://travis-ci.com/ubclaunchpad/ubcsim2)

UBC Simulator 2 (working title) is a 'choose your own adventure' style browser game where the player tries to survive a year as a student at UBC.
This project is based on the [game](https://slacknotes.com/ubcsimulator) on Slacknotes, go check it out!

## Getting started

Go ahead do the following to clone the repository and install the project's dependencies:
```bash
git clone https://github.com/ubclaunchpad/ubcsim2.git
npm install
```

You can run compilation, linter, and tests with:
```bash
scripts/build_check.sh
```

## Build the app and deploy to GitHub Pages
run the following command to build and deploy

You can run your page locally using ```npm run start```, this will automatically rebuild your app as you change files and supports hot module replacement for fast development.

OR

To build your app and put resulted files in folder /dist using ```npm run build``` . (If you ever changed your .ts or .html, rebuild to compile .ts files to .js).

Deploy on GitHub Pages using ```npm run deploy```
url: https://{github-account-name}.github.io/{repo-name}
https://ubclaunchpad.github.io/ubcsim2