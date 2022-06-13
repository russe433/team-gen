
const inquirer = require('inquirer');
const fs = require('fs');

const managerInfo = require('./lib/manager');
const engineerInfo = require('./lib/engineer');
const internInfo = require('./lib/intern');
const generateHTML = require('./page/generateHTML');

const teamArr = ['Manager', 'Engineer', 'Intern']


async function addManager () {
    return inquirer.prompt ([
        {
            title: 'input',
            name: 'name',
            message: "Please enter manager's name.",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                console.log("Please enter manager's name.");
                return false;
                }
                }
            },
            {
            title: 'input',
            name: 'id',
            message: "Please enter manager's id number.",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                console.log("Please enter manager's id number.");
                return false;
                }
                }
            },
            {
                title: 'input',
                name: 'email',
                message: "Please enter manager's email address.",
                validate: titleInput => {
                    if (titleInput) {
                      return true;
                    } else {
                    console.log("Please enter manager's email address.");
                    return false;
                    }
                    }
                },
                {
                title: 'input',
                name: 'office',
                message: "Please enter manager's office number.",
                validate: titleInput => {
                    if (titleInput) {
                      return true;
                    } else {
                    console.log("Please enter manager's office number.");
                    return false;
                    }
                    }
                },
            ])
            .then(managerInput => {
                const {name, id, email, office} = managerInput
                const manager = new managerInfo(name, id, email, office)

                console.log(manager);
            })
        };

function addEmployee() {
    return inquirer.prompt ([
        {
        type: 'list',
        name: 'role',
        message: 'Please select role.',
        choices: ['Engineer', 'Intern'],
        validate: titleList => {
            if (titleList) {
              return true;
            } else {
            console.log('Please select an option.');
            return false;
            }
        }
    }])
 

}
addEmployee(role)   
if (role === teamArr[1]) (
    employee = new engineerInfo()
); else (
    employee = new internInfo()
);


const writeFile = data => {
    fs.writeFile('./page/teamPage', data, err =>
    err ? console.log(err) : console.log('Team profiles created.'))
}

addManager()
.then(addEmployee)
.then(teamArr => {
    return generateHTML(teamArr);
})
.then(teamPage => {
    return writeFile(teamPage)
})
.catch(err => {
    console.log(err);
});
