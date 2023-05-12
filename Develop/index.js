// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// use activity 20

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project title?",
      },
      {
        type: 'input',
        name: 'description',
        message: "Describe your project in details => ",
      },
      {
        type: 'input',
        name: 'installation',
        message: "Provide installation instructions => ",
      },
      {
        type: 'input',
        name: 'usage',
        message: "Describe the steps of usage of the software => ",
      },
      {
        type: 'list',
        name: 'license',
        message: "Choose a license for your application",
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'EPL', 'CDDL', 'Not Licensed'],
      },
      {
        type: 'input',
        name: 'contribution',
        message: "Provide contribution guidelines => ",
      },
      {
        type: 'input',
        name: 'tests',
        message: "Describe the tests procedures => ",
      },
      {
        type: 'input',
        name: 'github',
        message: "Enter your GitHub username => ",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter your email address => ",
      },
];

// **** Create the README.md *****
function createREADME(answers) {

  let licenseLogo = '';
  let licenseInfo = '';

  if (answers.license !== 'Not Licensed') {
    licenseLogo = `![License](https://img.shields.io/badge/license-${encodeURIComponent(answers.license)}-blue.svg)`;
    licenseInfo = `This application is covered under the ${answers.license} license.`;
  }

    return `# ${answers.title}  ${licenseLogo}

  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This application is covered under the ${answers.license} license.
  
  ## Contributing
  ${answers.contribution}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  For any questions or inquiries, please reach out to me via [GitHub](https://github.com/${answers.github}) or email me at ${answers.email}.
  `;
  }


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Congratulations!! README.md created :)')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readme = createREADME(answers);
        writeToFile('README.md', readme);
      });
}

// Function call to initialize app
init();






