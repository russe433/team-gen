
const inquirer = require('inquirer');
const fs = require('fs');

const managerInfo = require('./lib/manager');
const engineerInfo = require('./lib/engineer');
const internInfo = require('./lib/intern');
const generateHTML = require('./page/generateHTML');

const teamArr = ['Manager', 'Engineer', 'Intern']

function addManager() {
    return managerInfo.addManager
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please select an employee to add.',
            choices: ['Engineer', 'Intern']
        }
        ])
        


.then(employeeInfo => {

let {name, id, email, role, username, school} = employeeInfo;

if (role === teamArr[1]) {
    engineer = new engineerInfo (name, id, email, username)
    console.log(engineer);
} else if (role === teamArr[2]) {
    intern = new internInfo (name, id, email, school)
    console.log(intern);
}
})
};

const writeFile = data => {
    fs.writeFile('./page/teamPage', data, err =>
    err ? console.log(err) : console.log('Team profiles created.'))
}

addManager()
addEmployee()
.then(teamArr => {
    return generateHTML(teamArr);
})
.then(teamPage => {
    return writeFile(teamPage)
})
.catch(err => {
    console.log(err);
});
