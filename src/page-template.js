const managerCard = manager => {
    if (!manager) {
        return ''
    } else {
        return `
        <div class = 'card'>
            <div class = 'manager'>
                <h2 class='employee-name'>${manager.getName()}</h2>
                <h3 class='employee-role'> ☕ ${manager.getRole()}</h3>
            </div>
            <div class='info'>
                <ul class='info-list'>
                    <li class='info-item'>ID: ${manager.getId()}</li>
                    <li class='info-item'>Email: <a href='mailto:${manager.getEmail()}' target ='_blank'>${manager.getEmail()}</a></li>
                    <li class='info-item'>Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `
    }
}
const engineerCard = engineer => {
    if (!engineer) {
        return ''
    } else {
        return `
        <div class = 'card'>
            <div class = 'engineer'>
                <h2 class='employee-name'>${engineer.getName()}</h2>
                <h3 class='employee-role'> 💻 ${engineer.getRole()}</h3>
            </div>
            <div class='info'>
                <ul class='info-list'>
                    <li class='info-item'>ID: ${engineer.getId()}</li>
                    <li class='info-item'>Email: <a href='mailto:${engineer.getEmail()}' target ='_blank'>${engineer.getEmail()}</a></li>
                    <li class='info-item'>GitHub: <a href='https://github.com/${engineer.getGitHub()}' target ='_blank'>${engineer.getGitHub()}</a></li>
                </ul>
            </div>
        </div>
        `
    }
}
const internCard = intern => {
    if (!intern) {
        return ''
    } else {
        return `
        <div class = 'card'>
            <div class = 'intern'>
                <h2 class='employee-name'>${intern.getName()}</h2>
                <h3 class='employee-role'> 🎓 ${intern.getRole()}</h3>
            </div>
            <div class='info'>
                <ul class='info-list'>
                    <li class='info-item'>ID: ${intern.getId()}</li>
                    <li class='info-item'>Email: <a href='mailto:${intern.getEmail()}' target ='_blank'>${intern.getEmail()}</a></li>
                    <li class='info-item'>School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `
    }
}


function generateTeamHtml(teamInfo) {
    const filterManager = teamInfo.filter(employee => {return employee.getRole() === 'Manager'}).map(manager => managerCard(manager))
    const filterEngineer = teamInfo.filter(employee => {return employee.getRole() === 'Engineer'}).map(engineer => engineerCard(engineer))
    const filterIntern = teamInfo.filter(employee => {return employee.getRole() === 'Intern'}).map(intern => internCard(intern))
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='./style/style.css'>
    <title>Team Builder</title>
    </head>
    <body>
    <h1 class="main-title">My Team</h1>
    <div class='employee-box'>
    ${filterManager}
    ${filterEngineer}
    ${filterIntern}
    </div>
    </body>
    </html>`
}

module.exports = generateTeamHtml