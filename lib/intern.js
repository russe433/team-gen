const inquirer = require('inquirer')


function internInfo (){
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
                .then(internInput => {
                    const {name, id, email, school} = internInput
                    const intern = new internInfo(name, id, email, school)
            
                    console.log(intern);
                }
                )

    ])

}

module.exports = internInfo;