const managerCard = manager => {
    if (!manager) {
        return ''
    } else {
        return `
        <div class = 'card'>
            <div class = 'title'>
                <h2 class='employee-name'>${manager.getName()}</h2>
                <h3 class='employee-role'>${manager.getRole()}</h3>
            </div>
            <div class='info'>
                <ul class='info-list'>
                    <li class='info-item'>${manager.getId()}</li>
                    <li class='info-item'><a href='mailto:${manager.getEmail()}' target ='_blank'>${manager.getEmail()}</a></li>
                    <li class='info-item'>${manager.getOfficeNumber()}</li>
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
            <div class = 'title'>
                <h2 class='employee-name'>${engineer.getName()}</h2>
                <h3 class='employee-role'>${engineer.getRole()}</h3>
            </div>
            <div class='info'>
                <ul class='info-list'>
                    <li class='info-item'>${engineer.getId()}</li>
                    <li class='info-item'><a href='mailto:${engineer.getEmail()}' target ='_blank'>${engineer.getEmail()}</a></li>
                    <li class='info-item'><a href='${engineer.getGitHub()}' target ='_blank'>${engineer.getGitHub()}</a></li>
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
            <div class = 'title'>
                <h2 class='employee-name'>${intern.getName()}</h2>
                <h3 class='employee-role'>${intern.getRole()}</h3>
            </div>
            <div class='info'>
                <ul class='info-list'>
                    <li class='info-item'>${intern.getId()}</li>
                    <li class='info-item'><a href='mailto:${intern.getEmail()}' target ='_blank'>${intern.getEmail()}</a></li>
                    <li class='info-item'>${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `
    }
}
function generateTeamHtml(teamInfo) {
    console.log(`teamInfo ${teamInfo}`)
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='./extra/style.css'>
    <title>Team Builder</title>
    </head>
    <body>
    <h1 class="main-title">My Team</h1>
    ${managerCard(teamInfo)}
    </body>
    </html>`
}

module.exports = generateTeamHtml