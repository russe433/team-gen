const teamArr = ["Team Manager", "Engineer", "Intern"]

function internInfo (){
    if (role == teamArr[2]) {
        return inquirer.prompt([
            {
            title: 'input',
            name: 'name',
            message: "Please enter intern's name.",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                console.log("Please enter intern's name.");
                return false;
                }
                }
            },
            {
            title: 'input',
            name: 'id',
            message: "Please enter intern's id number.",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                console.log("Please enter intern's id number.");
                return false;
                }
                }
            },
            {
                title: 'input',
                name: 'email',
                message: "Please enter intern's email address.",
                validate: titleInput => {
                    if (titleInput) {
                      return true;
                    } else {
                    console.log("Please enter intern's email address.");
                    return false;
                    }
                    }
                },
                {
                title: 'input',
                name: 'school',
                message: "Please enter intern's school name.",
                validate: titleInput => {
                    if (titleInput) {
                      return true;
                    } else {
                    console.log("Please enter intern's school name.");
                    return false;
                    }
                    }
                }

    ])
    } else {
        return ''
    }

}

module.exports = internInfo