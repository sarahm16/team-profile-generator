const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];
let managers = [];

function addEmployee() {
    inquirer.prompt(
        {
            type: 'confirm',
            message: 'Would you like to add an employee?',
            name: 'add-employee'
        }
    ).then(function(response) {
        if(response['add-employee']) {
            inquirer.prompt(
                [
                    {
                        type: 'input',
                        message: 'What is the employees name?',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'What is their ID?',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'What is their email?',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'What is their role?',
                        name: 'role'
                    }
                ]
            )
            .then(function(data) {
                if(data.role == 'manager') {
                    inquirer.prompt(
                        {
                            type: 'input',
                            message: 'What is their office number?',
                            name: 'officeNumber'
                        }
                    ).then(function(managerResponse) {
                        let manager = new Manager(data.name, data.id, data.email, managerResponse.number);
                        employees.push(manager);
                        managers.push(manager)
                        addEmployee();
                    })
                }
                else if(data.role == 'intern') {
                    inquirer.prompt(
                        {
                            type: 'input',
                            message: 'What is their school?',
                            name: 'school'
                        }
                    ).then(function(response) {
                        let intern = new Intern(data.name, data.id, data.email, response.school)
                        employees.push(intern);
                        addEmployee();
                    })
                }
                else if(data.role == 'engineer') {
                    inquirer.prompt(
                        {
                            type: 'input',
                            message: 'What is their Github username?',
                            name: 'github'
                        }
                    ).then(function(response) {
                        let engineer = new Engineer(data.name, data.id, data.email, response.github)
                        employees.push(engineer);
                        addEmployee();
                    })
                }
            })

        }
        else {
            if(managers.length >= 1) {
                let main = render(employees);
                fs.writeFileSync('team.html', main, function(err) {
                    if(err) throw err;
                })
            }
            else {
                console.log('Team must have one manager');
                addEmployee();
            }
        }
    })
}

addEmployee();