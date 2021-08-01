// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "GitHub username",
        name: "GitHub",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide the GitHub username to continue!');
                return false;
            }
        }        
    },   
    {
        type: "input",
        message: "Email address?",
        name: "email",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide the email to continue!');
                return false;
            }
        }        
    },
    {
        type: "input",
        message: "Project's title?",
        name: "title",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log(`Please provide the Project's title to continue!`);
                return false;
            }
        }        
    },
    {
        type: "input",
        message: "Description of your project.",
        name: "description",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide the description to continue!');
                return false;
            }
        }        
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
        ],
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please select the licence to continue!');
                return false;
            }
        }        
    },
    {
        type: "input",
        message: "Usage of your project",
        name: "usage",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide the usage to continue!');
                return false;
            }
        }        
    },
    {
        type: "input",
        message: "Instructions regarding how to install your project",
        name: "install",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide installation instruction to continue!');
                return false;
            }
        }        
    },
    {
        type: "input",
        message: "Let the user know how to test your project",
        name: "test",        
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide testing instruction to continue!');
                return false;
            }
        }        
    },   
    {
        type: "input",
        message: "Let the user know about contributing to this project",
        name: "contribute",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide instruction on how to contribute to continue!');
                return false;
            }
        }        
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log(' README file created!')
    });
};


// TODO: Create a function to initialize app
function init() {
    //console.log(markdown.renderLicenseBadge("MIT"));
    console.log(`Please answer the following questions \n`)
    inquirer.prompt(questions)
    .then(function (data) {
        // console.log(data)
        writeToFile("./src/README_Test.md", markdown.generateMarkdown(data));
    });
}


// Function call to initialize app
init();
