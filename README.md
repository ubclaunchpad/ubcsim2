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

You can run our unit tests with:
```bash
npm test
```

## Build the app and deploy to GitHub Pages
run the following command to build and deploy

You can run your page locally using ```npm run start``` or ```npm run watch```, the ```npm run watch``` will watch for all changes you made/saved and re-render the page when necessary 

OR

To build your app and put resulted files in folder /dist using ```npm run build``` . (If you ever changed your .ts or .html, rebuild to compile .ts files to .js).

Deploy on GitHub Pages using ```npm run deploy```
url: https://{github-account-name}.github.io/{repo-name}
https://ubclaunchpad.github.io/ubcsim2