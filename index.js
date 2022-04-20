// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const savedFile = './saved-readme';
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: import the generateMarkdown function from utils/generateMarkdown.js

// TODO: Write code to get user input, generate markdown, and save it to a file.

inquirer.prompt([
    {
        type: 'input',
        message: "What is the amazing Title of your project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Describe this fantastic project of yours:",
        name: 'description'
    },
    {
        type: 'input',
        message: "How can I install this phenomenal project:",
        name: 'install'
    },
    {
        type: 'input',
        message: "Be the awesome person that you are and provide any instructions I need to know for usage:",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Would you like other awesome people to contribute to your amazing project?",
        name: 'colab'
    },
    {
        type: 'input',
        message: "If you want to add some fun tests for your application, you can do that here! Make sure to include examples on how to run them:",
        name: 'tests'
    },
    {
        type: 'input',
        message: "Let me know any other amazing contributors or fantastic assets that require a shout out:",
        name: 'credits'
    },
    {
        type: 'checkbox',
        message: "Choose your outstanding license:",
        choices: [
            "None",
            "MIT License",
            "GNU GPLv3 License",
            "Apache License",
            "OpenBSD License",
            "Rust Licesnse"
        ],
        name: 'licesnse'
    },
    {
        type: 'input',
        message: "Let me know that sweet GitHub user name of yours:",
        name: 'username',
    },
    {
        type: 'input',
        message: "What email address should I use to contact your awesomeness?",
        name: 'useremail'
    }

])