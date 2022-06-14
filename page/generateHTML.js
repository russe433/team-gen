const generateManager = function(manager) {
    return `
    <div class="manager">
        <h2>${manager.name}</h2>
        <h3>Team Manager</h3>
        <div class="body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.office}</p>
        </div>
        `;
}
const generateEngineer = function(engineer) {
    return `
    <div class="engineer">
    <h2>${engineer.name}</h2>
    <h3>Engineer</h3>
    <div class="body">
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="username">GitHub: <a href="https://github.com/${engineer.username}">${engineer.username}</p></a>
    </div>
    </div>`
}

const generateIntern = function(intern) {
    return `
    <div class="intern">
    <h2>${intern.name}</h2>
    <h3>Intern</h3>
        <div class="body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School Name: ${intern.school}</p>
        </div>
    </div>
    `
}
generateHTML = (data) =>{
    const managerProfile = generateManager()
    managerProfile();

    const engineerProfile = generateEngineer()
    engineerProfile();

    const internProfile = generateIntern()
    internProfile();

const generateTeam = generateTemplate(cards);
return generateTeam
}
const generateTemplate = function(cards) {
    return `
      <!DOCTYPE html> 
      <html lang="en"> 
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profiles</title>
      </head>
        <main>
        ${cards}
      <body>
      </body>
      </html>
      `;
      
}

module.exports = generateHTML;