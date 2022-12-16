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

function generateManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office location number?",
      },
    ])
    .then((response) => {
      let manager = new manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );

      employees.push(manager);
      generateEmployee();
    });
}

function generateIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "school",
        message: "What college or university are you attending?",
      },
    ])
    .then((response) => {
      let intern = new intern(
        response.name,
        response.id,
        response.email,
        response.school
      );

      employees.push(intern);
      generateEmployee();
    });
}

function generateEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub Username?",
      },
    ])
    .then((response) => {
      let engineer = new engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );

      employees.push(engineer);
      generateEmployee();
    });
}

function makeHTML() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(Employees), (err) =>
    err ? console.log(err) : console.log("HTML has been generated")
  );
}

generateEmployee();
