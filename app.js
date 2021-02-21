const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/createhtml');
const Engineer = require('./utils/engineer');
const Intern = require('./utils/intern');

const employees = [];

const questionsManager = [
  {
    type: 'input',
    name: 'readTitle',
    message: 'What is the header of this list of employees?',
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

const questionsEmployee = [
  {
    type: 'list',
    name: 'chooseCardType',
    message: 'What kind of employee would you like to add next?',
    choices: ['Engineer', 'Intern', 'None']
  },
  {
    type: 'input',
    name: 'newName',
    message: 'What is the name of the employee?'
  },
  {
    type: 'input',
    name: 'newID',
    message: 'Enter the employee ID.'
  },
  {
    type: 'input',
    name: 'newEmail',
    message: 'Enter the employee email.'
  },
];



function createMarkdown(fileName, pageContent) {
    fs.writeFile('./output/index.html', pageContent, (err) => err ? 
    console.log(err) : console.log("HTML was generated successfully"));
}

function init() {
  inquirer.prompt(questionsManager).then((responses) => {
    // const generateHTML = generateMarkdown(responses);
    empInit();
  });
}

function empInit() {
  inquirer.prompt(questionsEmployee) 
  .then((questionsEmployee) => {
  console.log(questionsEmployee);
  if (questionsEmployee.chooseCardType === "Engineer") {
    const engineer = new Engineer(questionsEmployee.newName, questionsEmployee.newID, questionsEmployee.newEmail);
    employees.push(engineer);
  }
    if (questionsEmployee.chooseCardType === "Intern") {
    const intern = new Intern(questionsEmployee.newName, questionsEmployee.newID, questionsEmployee.newEmail);
    employees.push(intern);
  }
  console.log(employees);
  })
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