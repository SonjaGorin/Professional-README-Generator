// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "checkbox",
        name: "license",
        message: "Please choose a license for the project:",
        choices: ["MIT", "Apache", "Boost", "BSD 3-Clause License", "Eclipse",
        "GNU GPL v3", "IBM", "ISC", "Mozilla"],
        validate: your_licence => {
            if (your_licence) {
                return true;
            } else {
                console.log("Select the license:");
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    })
}

// Function call to initialize app
init();
