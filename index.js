const inquirer = require("inquirer");
const fs = require("fs");

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
  ])

  .then((data) => {
    fs.writeFile("output.json", JSON.stringify(data), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
