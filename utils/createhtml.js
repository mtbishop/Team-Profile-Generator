
// Header of the generated HTML
const start = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>for generating HTML</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div class="jumbotron jumbotron-fluid bg-danger">
            <div class="container">
                <h1 class="display-4 text-white text-center">My Team</h1>
            </div>
        </div>
`;

// End/Footer of generated HTML
const end = `</div>
</body>

</html>`;

// Dynamic generated cards for employees
const cardgenerator = function (employee) {
  return `        <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                ${employee.returnRole()}: ${employee.returnName()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.returnID()}</li>
                <li class="list-group-item">Email: <a>${employee.returnEmail()}</a></li>
                <li class="list-group-item">${
                  employee.returnRole() === 'Manager'
                    ? 'Office Number'
                    : employee.returnRole() === 'Engineer'
                    ? 'Github'
                    : 'School'
                }: 
                ${
                  employee.returnRole() === 'Manager'
                    ? employee.returnOffice()
                    : employee.returnRole() === 'Engineer'
                    ? employee.returnGithub()
                    : employee.returnSchool()
                }
                </li>
            </ul>
        </div>`;
};

// Generates HTML based on responses
function generateMarkdown(employees) {
    console.log(employees);
    return start + employees.map(cardgenerator).join("") + end
}

// Exports file
module.exports = generateMarkdown;