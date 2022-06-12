const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const managerInfo = require('./lib/manager');
const engineerInfo = require('./lib/engineer');
const internInfo = require('./lib/intern');



function promptUserInput () {
inquirer
    .prompt ([
        {
        type: 'list',
        name: 'role',
        message: 'Please select role.',
        choices: ['Employee', 'Team Manager', 'Engineer', 'Intern'],
        validate: titleList => {
            if (titleList) {
              return true;
            } else {
            console.log('Please select an option.');
            return false;
            }
        }
    }
    ])

}