const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/createhtml');

const employees = [];

const questions = [
  {
    type: 'input',
    name: 'readTitle',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'managerName',
    message: 'Enter the managers name',
  },
  {
    type: 'input',
    name: 'managerID',
    message: 'Enter the managers ID',
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'Enter the managers email address',
  },
  {
    type: 'input',
    name: 'managerNumber',
    message:
      'Enter the managers office number',
  }

];

function createMarkdown(fileName, pageContent) {
    fs.writeFile('./output/index.html', pageContent, (err) => err ? 
    console.log(err) : console.log("HTML was generated successfully"));
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    const generateHTML = generateMarkdown(responses);
    writeToFile(generateHTML);
  });
}
// runs initializing function
init();









// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
// ```