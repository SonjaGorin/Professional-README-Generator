// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs").promises;
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
        validate: userTitleInput => {
            if (userTitleInput) {
                return true;
            } else {
                console.log("Please enter a project title.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Give brief description of the project.",
        validate: userDescriptionInput => {
            if (userDescriptionInput) {
                return true;
            } else {
                console.log("Please enter a project description.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "How to install the project?", 
        validate: userInstallationInput => {
            if (userInstallationInput) {
                return true;
            } else {
                console.log("Please describe the installation requirements.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "How to use the project?",
        validate: userUsageInput => {
            if (userUsageInput) {
                return true;
            } else {
                console.log("Please describe how to use the project.");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for the project:",
        choices: ["MIT", "Apache", "Boost", "BSD", "Eclipse", "GPLv3", "IBM", "ISC", "Mozilla", "No license"],
    },
    {
        type: "input",
        name: "contribution",
        message: "How to contribute to the project?",
        validate: userContributionInput => {
            if (userContributionInput) {
                return true;
            } else {
                console.log("Please decsribe how can someone contribute to the project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "How can the project be tested?",
        validate: userTestInput => {
            if (userTestInput) {
                return true;
            } else {
                console.log("Please describe how to test the project.");
                return false;
            }
        }
    },
    { 
        type: "input",
        name: "github",
        message: "Enter your GitHub Username:",
        validate: userGithubInput => {
            if (userGithubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email:",
        validate: userEmailInput => {
            if (userEmailInput) {
                return true;
            } else {
                console.log('Please enter your email.');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const destinationDir = "generated-readme";
    fs.mkdir(destinationDir, { recursive: true }).then(() => {
        return fs.writeFile(`${destinationDir}/${fileName}`, data);
    }).then((error) => {
        if (error) {
            return console.log(error);
        }
        console.log(`Your README file has been created under "${destinationDir}" directory`);
    }) 
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
