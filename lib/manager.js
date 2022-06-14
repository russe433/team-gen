const teamArr = ["Team Manager", "Engineer", "Intern"]

function managerInfo () {
        return inquirer.prompt([
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
                }

    ])
    .then(managerInput => {
        const {name, id, email, office} = managerInput
        const manager = new managerInfo(name, id, email, office)

        console.log(manager);
    })

}

module.exports = managerInfo;