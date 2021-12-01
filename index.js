const inquirer = require("inquirer");
const fs = require("fs");
const generateBadges = require("./utils/badges");
const getGitHubLink = require("./utils/gitHub");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the Title of your readme?",
      name: "titleName",
      validate: (title) => {
        if (title) {
          return true;
        } else {
          return "Please enter a title name";
        }
      },
    },
    {
      type: "input",
      message: "Describe why the application was made for?",
      name: "description",
      validate: (description) => {
        if (description) {
          return true;
        } else {
          return "Please enter a description";
        }
      },
    },
    {
      type: "input",
      message: "How will your application be installed?",
      name: "installation",
      validate: (install) => {
        if (install) {
          return true;
        } else {
          return "Please enter installation instructions to continue";
        }
      },
    },
    {
      type: "input",
      message: "How will the application be used?",
      name: "usageInfo",
      validate: (usage) => {
        if (usage) {
          return true;
        } else {
          return "Please enter the usage to continue";
        }
      },
    },
    {
      type: "input",
      message: "Who contributed on the project?",
      name: "credits",
      validate: (credits) => {
        if (credits) {
          return true;
        } else {
          return "Pleas enter the credit section";
        }
      },
    },
    {
      type: "input",
      message: "What are contributing guidelines?",
      name: "contributingGuide",
      validate: (contribute) => {
        if (contribute) {
          return true;
        } else {
          return "Please enter contributing guidelines to continue";
        }
      },
    },
    {
      type: "input",
      message: "What is the deployment link?",
      name: "deployLink",
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "testInstructions",
      validate: (test) => {
        if (test) {
          return true;
        } else {
          return "Please enter test instructions";
        }
      },
    },
    {
      type: "list",
      message: "What license are you using?",
      name: "license",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause Simplified License",
        "BSD 3-Clause New or Revised License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
        "None",
      ],
    },
    {
      type: "input",
      message: "Enter your GitHub username",
      name: "gitHub",
    },
    {
      type: "input",
      message: "Enter your E-mail Address",
      name: "email",
    },
  ])
  .then(
    ({
      titleName,
      description,
      installation,
      usageInfo,
      credits,
      contributingGuide,
      testInstructions,
      license,
      gitHub,
      email,
      deployLink,
    }) => {
      const getBadge = generateBadges(license);
      const mkTemplate = `# ${titleName}

${getBadge}

## Description

${description}

## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

[Badges](#badges) 

[Contributing](#contributing)

[Deployment](#deployment)

[Tests](#tests)

[Questions](#questions)

## Installation

${installation}

## Usage

${usageInfo}

## Credits

${credits}

### License

${license}
---
## Badges

${getBadge}

## Contributing 

${contributingGuide}

##Deployment

${deployLink}

## Test

${testInstructions}

## Questions

- GitHub

${gitHub}

${getGitHubLink(gitHub)}

- Email

${email}
`;
      createNewFile(titleName, mkTemplate);
    }
  );
function createNewFile(fileName, data) {
  fs.writeFile(
    `./${fileName.toLowerCase().split(" ").join("")}.md`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Successful!");
    }
  );
}
