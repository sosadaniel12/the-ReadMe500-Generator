function generateBadges(licenseName) {
  switch (licenseName) {
    case "Apache License 2.0":
      return "[![Npm package license](https://badgen.net/npm/llicense/discord.js)](https://npmjs.com/package/discord.js)";
    case "GNU General Public License v3.0":
      return "https://img.shields.io/badge/license-GNU%20v3.0-blue";
    case "MIT License":
      return "[![PyPi license](https://badgen.net/pypi/license/pip/)](https://pypi.com/project/pip/)";
    case "BSD 2-Clause Simplified License":
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause) ";
    case "BSD 3-Clause New or Revised License":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) ";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons Zero v1.0 Universal":
      return "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)";
    case "Eclipse Public License 1.0":
      return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "GNU Affero General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU General Public License v2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU Lesser General Public License v2.1":
      return "";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "The Unlicense":
      return "[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)";
    case "None":
      return "";
  }
}
module.exports = generateBadges;
