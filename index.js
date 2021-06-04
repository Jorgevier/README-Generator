// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Describe your project??"
    },
    
    {
        type: 'input',
        name: 'table-of-content',
        message: "Enter the table of contents?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "How do you use this program?"
    },
    
    {
        type: 'list',
        name: 'license',
        message: "what license are you using?",
        choices: ['dr','pr']
    },

    {
        type: 'input',
        name: 'contribution',
        message: "what was your contribution to this project?"
    },
    
    {
        type: 'input',
        name: 'test',
        message: "What test did you run?"
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(
        (response) => {
            console.log('Your README is being created......');
            writeToFile('README.md', generateMarkdown(response))
        //console.log(response);
        }
    )
}

// Function call to initialize app
init();
