
const inquirer = require('inquirer');
const fs = require('fs');

const managerInfo = require('./lib/manager');
// const engineerInfo = require('./lib/engineer');
// const internInfo = require('./lib/intern');
const generateHTML = require('./page/generateHTML');

const teamArr = ['Manager', 'Engineer', 'Intern']

function addManager() {
    return managerInfo.addManager
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
    },
    {
        title: 'input',
        name: 'name',
        message: "Please enter employee name.",
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
            console.log("Please enter employee name.");
            return false;
            }
            }
        },
        {
        title: 'input',
        name: 'id',
        message: "Please enter employee id number.",
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
            console.log("Please enter employee id number.");
            return false;
            }
            }
        },
        {
            title: 'input',
            name: 'email',
            message: "Please enter employee's email address.",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                console.log("Please enter employee's email address.");
                return false;
                }
                }
            },
            {
            title: 'input',
            name: 'username',
            message: "Please enter employee's GitHub username.",
            when: (input) => input.role === teamArr[1],
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                console.log("Please enter employee's username.");
                return false;
                }
                }
            },
            {
                title: 'input',
                name: 'school',
                message: "Please enter name of intern's school.",
                when: (input) => input.role === teamArr[2],
                validate: titleInput => {
                    if (titleInput) {
                      return true;
                    } else {
                    console.log("Please enter school name.");
                    return false;
                    }
                    }
                },
                {
                    type: 'confirm',
                    name: 'confirm',
                    message: 'Add more team members?',
                    default: false
                }
        ])
    };


let role = "role"
if (role === teamArr[1]) {
    exports.engineer = this.engineer
    console.log(engineer);
} else if (role === teamArr[2]) {
    exports.intern = this.intern
    console.log(intern);
}
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
