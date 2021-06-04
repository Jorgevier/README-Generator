// TODO: Create a function that returns a license badge based on which license is passed in

const Choices = require("inquirer/lib/objects/choices");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    retun `![Github License](https)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.title}

  ## GitHub username is ${data.github}
  
  ## the user email is ${data.email}

  ### the description of the project is ${data.description}

  ### the table of content ${data["table-of-content"]}

  ### the title is ${data.title}

  ### How to run this program ${data.installation}

  ### What license did you use 
        -${Choices.data}

  ### What was your contribution to this project? ${data.contribution}

  ### the test i ran ${data.test}

  ### any questions please contact me at ${data.email}


  
  `;
  
}

module.exports = generateMarkdown;
