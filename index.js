//including packages needed// 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

//creating an array of questions for user input// 
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your application title: ",
    },
    {
        type: "input",
        name: "description",
        message: "Enter your application desccription: ",
    },
    {
        type: "input",
        name: "link",
        message: "Enter the link to your deployed application: ",
    },
    {
        type: "input",
        name: "image",
        message: "Paste a link to an image of your application: ",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter instructions for this application: ",
    },
    {
        type: "input",
        name: "features",
        message: "Enter any unique features or purposes for this application: ",
    },
    {
        type: "input",
        name: "required",
        message: "Enter programming languages, dependencies, libraries required for this project: ",
    },
    {
        type: "input",
        name: "contributors",
        message: "Enter contributors GitHub Usernames:",
    },
    {
        type: "checkbox",
        name: "licence",
        message: "Select your GitHub Licence: ",
        choices: ["MIT", "none"],
    },
    {
        type: "input",
        name: "creator",
        message: "Enter your GitHub Username: ",
    },
    {
        type: "input",
        name: "email",
        message: "Enter an email address for users to contact: ",
    },
]

//initialising app 
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md file...");
        writeToFile("./output/README.md", generateMarkdown({ ...responses }));
    });
}
init();

//writing README.md file 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
