const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/createhtml');
const Engineer = require('./utils/engineer');
const Intern = require('./utils/intern');

const employees = [];

const questionsManager = [
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
    message: 'Enter the managers office number',
  },
];

const chooseEmployeeType = [
  {
    type: 'list',
    name: 'chooseCardType',
    message: 'What kind of employee would you like to add next?',
    choices: ['Engineer', 'Intern', 'None'],
  },
];

const questionsEngineer = [
  {
    type: 'input',
    name: 'engName',
    message: 'What is the name of the engineer?',
  },
  {
    type: 'input',
    name: 'engID',
    message: 'Enter the engineers ID.',
  },
  {
    type: 'input',
    name: 'engEmail',
    message: 'Enter the engineers email.',
  },
  {
    type: 'input',
    name: 'engGithub',
    message: 'Enter the engineers GitHub'
  },
];

const questionsIntern = [
  {
    type: 'input',
    name: 'intName',
    message: 'What is the name of the employee?',
  },
  {
    type: 'input',
    name: 'intID',
    message: 'Enter the interns ID.',
  },
  {
    type: 'input',
    name: 'intEmail',
    message: 'Enter the interns email.',
  },
  {
    type: 'input',
    name: 'intSchool',
    message: 'Enter the interns school.',
  },
];

function createMarkdown(fileName, pageContent) {
  fs.writeFile('./output/index.html', pageContent, (err) =>
    err ? console.log(err) : console.log('HTML was generated successfully')
  );
}

function chooseEmpType() {
  inquirer.prompt(chooseEmployeeType).then((response) => {
    switch(response.role) {
      case 'Engineer':
        empInit();
        break;
        case 'Intern':
          intInit()
          break;
        case "No employees to enter":
          console.log(employees);
    }
  })
}

function managInit() {
  inquirer.prompt(questionsManager).then((managerResponses) => {
    manager = new Manager(
      managerResponses.managerName,
      managerResponses.managerID,
      managerResponses.managerEmail,
      managerResponses.managerNumber
    );
    chooseEmpType();
  });
}

function empInit() {
  inquirer.prompt(questionsEngineer).then((engineerResponses) => {
    engineer = new Engineer(
      engineerResponses.engineerName,
      engineerResponses.engineerID,
      engineerResponses.engineerEmail,
      engineerResponses.engineerGithub
    );
  });
}

function intInit() {
  inquirer.prompt(questionsIntern).then((internResponses) => {
    intern = new Intern(
      internResponses.internName,
      internResponses.internID,
      internResponses.internEmail,
      internResponses.internSchool
    );
  });
}

// runs initializing function
managInit();

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
