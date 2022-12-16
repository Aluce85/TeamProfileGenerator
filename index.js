const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("./lib/manager.js");
const engineer = require(".lib/employee.js");
const intern = require("./lib/intern");
const employees = [];
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "generatedHTML.html");
const render = require("./src/renderHTML");

function generateEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "what is the name of your role?",
        choices: ["manager", "intern", "engineer", "quit"],
      },
    ])
    .then((answers) => {
      if (answers.role === "Intern") {
        console.log(answers);
        generateIntern();
      } else if (answers.role === "Manager") {
        console.log(answers);
        generateManager();
      } else if (answers.role === "Engineer") {
        console.log(answers);
        generateEngineer();
      } else {
        console.log("hello");
        makeHTML();
      }
    });
}
