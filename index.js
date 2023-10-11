// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter a project titile");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Give brief description of the project.",
        validate: userDescription => {
            if (userDescription) {
                return true;
            } else {
                console.log("Please enter a project description");
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please choose a license for the project:",
        choices: ["MIT", "Apache", "Boost", "BSD 3-Clause License", "Eclipse", "GNU GPL v3", "IBM", "ISC", "Mozilla", "No license"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log("Your README file has been created.");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
