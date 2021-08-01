// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "GitHub username",
        name: "GitHub"
    },
    {
        type: "input",
        message: "Email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "Project Licence?",
        name: "license",
        choices: [
            "MIT",
            "Apache 2.0",
            "Creative Commons 1.0",
            "GNU GPL v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0",
            "The Unlicense"
        ]
    },
    {
        type: "input",
        message: "Usage of your project",
        name: "usage"
    },
    {
        type: "input",
        message: "Instructions regarding how to install your project",
        name: "install",
    },
    {
        type: "input",
        message: "Let the user know how to test your project",
        name: "tests",
        default: "npm run test"
    },   
    {
        type: "input",
        message: "Let the user know about contributing to this project",
        name: "contribute"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log(markdown.renderLicenseBadge("MIT"));
    

}


// Function call to initialize app
init();
