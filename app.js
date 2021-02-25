const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/createhtml');
const Engineer = require('./utils/engineer');
const Intern = require('./utils/intern');
const Manager = require('./utils/manager.js');

// Array for objects being generated to go to
const employees = [];

// Questions for creating manager object
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
// Questions for which employee you'd like to generate next
const chooseEmployeeType = [
  {
    type: 'list',
    name: 'role',
    message: 'What kind of employee would you like to add next?',
    choices: ['Engineer', 'Intern', 'None'],
  },
];
// Questions for creating engineer object
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
// Questiong for creating intern object
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

// Outputs the index.html file that is generated with prompted queries
function writeToFile(fileName, pageContent) {
  fs.writeFile('./output/index.html', pageContent, (err) =>
    err ? console.log(err) : console.log('HTML was generated successfully')
  );
}

// Function that runs first to ask the questions about the manager creating the objects
function managInit() {
  inquirer.prompt(questionsManager).then((managerResponses) => {
    var manager = new Manager(
      managerResponses.managerName,
      managerResponses.managerID,
      managerResponses.managerEmail,
      managerResponses.managerNumber
    );
        employees.push(manager);

    chooseEmpType();
  });
}

/* Function that lets you choose which type of employee you'd like to enter info for next 
and runs those functions for which one you choose */
function chooseEmpType() {
  inquirer.prompt(chooseEmployeeType).then((response) => {
    switch(response.role) {
      case 'Engineer':
        empInit();
        break;
        case 'Intern':
          intInit()
          break;
        case "None":
          const htmlContents = generateMarkdown(employees);
          writeToFile('./output/index.html',htmlContents);
          break;
        default:
          console.log("something went wrong");
          break;
    } 
  })
}

// Function that recieves the responses about the engineer that the manager has entered
function empInit() {
  inquirer.prompt(questionsEngineer).then((engineerResponses) => {
    var engineer = new Engineer(
      engineerResponses.engName,
      engineerResponses.engID,
      engineerResponses.engEmail,
      engineerResponses.engGithub
    );
    employees.push(engineer);
    chooseEmpType();
  });
}

// Function that recieves the responses about the intern that the manager has entered
function intInit() {
  inquirer.prompt(questionsIntern).then((internResponses) => {
    var intern = new Intern(
      internResponses.intName,
      internResponses.intID,
      internResponses.intEmail,
      internResponses.intSchool
    );
    employees.push(intern);
    chooseEmpType();
  })
}

// runs initializing function
managInit();