const {defaults} = require("jest-config");

module.exports = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/path/to/dir/"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$"
};
