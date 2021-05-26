const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const generateTeamHtml = require('./src/page-template')
const team = []
const createTeam = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addTeamMembers',
            message: 'Would you like to add anymore team members?',
            choices: ['Engineer', 'Intern', 'I do not want to add anymore team members']
        }
    ]).then(teamMember => {

        if(teamMember.addTeamMembers === 'Engineer'){
            promptEngineer()
        } else if (teamMember.addTeamMembers === 'Intern'){
            promptIntern()
        } else {
            createHtml()
        }
    })
}

const promptManager = () => {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?',
            validate: name => {
                if (name) {
                    return true
                } else {
                    console.log('Please enter a name')
                    return false
                }
            } 
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is your ID number?',
            validate: idNumber => {
                if (idNumber) {
                    return true
                } else {
                    console.log('Please enter an ID number')
                    return false
                }
            } 
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your email address?',
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter an email address')
                    return false
                }
            } 
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: officeNumber => {
                if (officeNumber) {
                    return true
                } else {
                    console.log('Please enter a office number')
                    return false
                }
            } 
    }]).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        team.push(manager)
        createTeam()
        
    })
}

const promptEngineer = () => {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is your Engineer's name?",
            validate: name => {
                if (name) {
                    return true
                } else {
                    console.log('Please enter a name')
                    return false
                }
            } 
        },
        {
            type: 'text',
            name: 'id',
            message: "What is your Engineer's ID?",
            validate: idNumber => {
                if (idNumber) {
                    return true
                } else {
                    console.log('Please enter an ID number')
                    return false
                }
            } 
        },
        {
            type: 'text',
            name: 'email',
            message: "What is your Engineer's email address?",
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter an email address')
                    return false
                }
            }
        },
        {
            type: 'text',
            name: 'github',
            message: "What is your Engineer's GitHub?",
            validate: github => {
                if (github) {
                    return true
                } else {
                    console.log('Please enter a GitHub')
                    return false
                }
            }
    }]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        team.push(engineer)
        createTeam()
    })
}

const promptIntern = () => {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is your Intern's name?",
            validate: name => {
                if (name) {
                    return true
                } else {
                    console.log('Please enter a name')
                    return false
                }
            } 
        },
        {
            type: 'text',
            name: 'id',
            message: "What is your Intern's ID?",
            validate: idNumber => {
                if (idNumber) {
                    return true
                } else {
                    console.log('Please enter an ID number')
                    return false
                }
            } 
        },
        {
            type: 'text',
            name: 'email',
            message: "What is your Intern's email address?",
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter an email address')
                    return false
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: 'What school did your intern attend?',
            validate: school => {
                if (school) {
                    return true
                } else {
                    console.log('Please enter an school')
                    return false
                }
            }
    }]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        team.push(intern)
        createTeam()
    })
}

const createHtml = (data) => {
    data = team
    return fs.writeFile('./index.html', generateTeamHtml(data), err => {
        if (err) {
            console.log(err)
        } else {
            console.log('Team Created!');
        }
    })
}

promptManager()