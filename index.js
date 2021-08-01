// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const colors = require('colors');
const markdown = require("./utils/generateMarkdown");

//https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
//https://stackoverflow.com/questions/60960327/node-js-problem-inplementing-inquirer-js-for-cli-app
//https://www.npmjs.com/package/colors


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Project's title?" .brightMagenta,
        name: "title",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log(`Please provide the Project's title to continue!` .red);
                return false;
            }
        }        
    },
    {
        type: "input",
        message: "Description of your project." .brightMagenta,
        name: "description",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide the description to continue!' .red);
                return false;
            }
        }        
    },
    {
        type: "input",
        message: "Instructions regarding how to install your project" .brightMagenta,
        name: "install",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide installation instruction to continue!' .red);
                return false;
            }
        }        
    },
    {
        type: "input",
        message: "Usage of your project" .brightMagenta,
        name: "usage",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide the usage to continue!' .red);
                return false;
            }
        }        
    },
    {
        type: "list",
        message: "Project Licence?" .brightMagenta,
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
                console.log('Please select the licence to continue!' .red);
                return false;
            }
        }        
    },
    {
        type: "input",
        message: "Let the user know about contributing to this project" .brightMagenta, 
        name: "contribute",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide instruction on "how to contribute" to continue!' .red);
                return false;
            }
        }        
    },
    {
        type: "input",
        message: "Let the user know how to test your project" .brightMagenta,
        name: "test",        
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log('Please provide testing instruction to continue!' .red);
                return false;
            }
        }        
    },  
    {
        type: "input",
        message: "GitHub username" .brightMagenta, 
        name: "GitHub",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log(`Please provide the GitHub username to continue!` .red);
                return false;
            }
        }        
    },   
    {
        type: "input",
        message: "Email address?" .brightMagenta,
        name: "email",
        validate: value =>{
            if (value){
                return true;  
            }else{
                console.log(`Please provide the email to continue!` .red);
                return false;
            }
        }        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error)
            throw error;
        console.log(' README file created!' .brightYellow)
    });
};

// TODO: Create a function to initialize app
function init() {
    console.log(`Please answer the following questions` .brightYellow)
    inquirer.prompt(questions)
    .then(function (data) {
        // console.log(data)
        writeToFile("./src/README_Test.md", markdown.generateMarkdown(data));
    });
}


// Function call to initialize app
init();
