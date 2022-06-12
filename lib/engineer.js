const teamArr = ["Team Manager", "Engineer", "Intern"]

function engineerInfo (){
    if (role == teamArr[1]) {
        return inquirer.prompt([
            {
            title: 'input',
            name: 'name',
            message: "Please enter engineer's name.",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                console.log("Please enter engineer's name.");
                return false;
                }
                }
            },
            {
            title: 'input',
            name: 'id',
            message: "Please enter engineer's id number.",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                console.log("Please enter engineer's id number.");
                return false;
                }
                }
            },
            {
                title: 'input',
                name: 'email',
                message: "Please enter engineer's email address.",
                validate: titleInput => {
                    if (titleInput) {
                      return true;
                    } else {
                    console.log("Please enter engineer's email address.");
                    return false;
                    }
                    }
                },
                {
                title: 'input',
                name: 'username',
                message: "Please enter engineer's GitHub username.",
                validate: titleInput => {
                    if (titleInput) {
                      return true;
                    } else {
                    console.log("Please enter engineer's username.");
                    return false;
                    }
                    }
                }

    ])
    } else {
        return ''
    }

}

module.exports = engineerInfo