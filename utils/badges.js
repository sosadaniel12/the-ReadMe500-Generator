function generateBadges(licenseName) {
  switch (licenseName) {
    case "Apache License 2.0":
      return "![Npm package license](https://badgen.net/npm/license/discord.js)";
    case "GNU General Public License v3.0":
      return "https://img.shields.io/badge/license-GNU%20v3.0-blue";
    case "MIT License":
      return "![PyPi license](https://badgen.net/pypi/license/pip/)";
    case "BSD 2-Clause Simplified License":
      return "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg) ";
    case "BSD 3-Clause New or Revised License":
      return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    case "Boost Software License 1.0":
      return "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
    case "Creative Commons Zero v1.0 Universal":
      return "![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)";
    case "Eclipse Public License 1.0":
      return "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";
    case "GNU Affero General Public License v3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "GNU General Public License v2.0":
      return "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
    case "GNU Lesser General Public License v2.1":
      return "";
    case "Mozilla Public License 2.0":
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
    case "The Unlicense":
      return "![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)";
    case "None":
      return "";
  }
}
module.exports = generateBadges;
