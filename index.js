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
            console.log(`team is fdasfsdafasfas     ${team}`);
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
            default: 'Manager'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is your id?',
            default: 'ManagerId'
        },
        {
        type: 'text',
        name: 'email',
        message: 'What is your email address?',
        default: 'ManagerEmail'
        },
        {
        type: 'text',
        name: 'officeNumber',
        message: 'What is your officeNumber?',
        default: 'ManagerOfficeNum'
    }]).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        console.log(manager)
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
            default: 'Engineer'
        },
        {
            type: 'text',
            name: 'id',
            message: "What is your Engineer's id?",
            default: 'EngineerId'
        },
        {
        type: 'text',
        name: 'email',
        message: "What is your Engineer's email address?",
        default: 'EngineerEmail'
        },
        {
        type: 'text',
        name: 'github',
        message: "What is your Engineer's GitHub?",
        default: 'EngineerGithub'
    }]).then(response => {
        console.log(`Name: ${response.name}`)
        console.log(`id: ${response.id}`)
        console.log(`email: ${response.email}`)
        console.log(`github: ${response.github}`)

        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        console.log(`engineer      ${engineer}`)
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
            default: 'Intern'
        },
        {
            type: 'text',
            name: 'id',
            message: "What is your Intern's id?",
            default: 'InternId'
        },
        {
        type: 'text',
        name: 'email',
        message: "What is your Intern's email address?",
        default: 'InternEmail'
        },
        {
        type: 'text',
        name: 'school',
        message: 'What school did your intern attend?',
        default: 'InternSchool'
    }]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        console.log(intern)
        team.push(intern)
        createTeam()
    })
}

const createHtml = (data) => {
    console.log(`data     ${data}`);
    // console.log(generateTeamHtml(data))
    // return fs.writeFile('./index.html', generateTeamHtml(data), err => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log('Team Created!');
    //     }
    // })
}


promptManager()