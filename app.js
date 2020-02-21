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

let managers = [];
let interns = [];
let engineers = [];

function addEmployee() {
    inquirer.prompt(
        {
            type: 'confirm',
            message: 'Would you like to add an employee?',
            name: 'add-employee'
        }
    ).then(function(response) {
        if(response) {
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
                // let employee = new Employee(data.name, data.email, data.id);
                // console.log(employee);
                // employeeList.push(employee);
                //console.log(data.role);

                if(data.role == 'manager') {
                    inquirer.prompt(
                        {
                            type: 'input',
                            message: 'What is their office number?',
                            name: 'number'
                        }
                    ).then(function(managerResponse) {
                        let Jacob = new Manager(data.name, data.id, data.email, managerResponse.number);
                        managers.push(Jacob);
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
                        let i = new Intern(data.name, data.id, data.email, response.school)
                        console.log(i);
                        interns.push(i);
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
                        let e = new Engineer(data.name, data.id, data.email, response.github)
                        console.log(e);
                        engineers.push(e);
                    })
                }
                
                //addEmployee();
            })
        }
    })
}

addEmployee();


//Would you like to add an employee?
//function addEmployee()
//inquirer....
//what is their name?
//What is their ID?
//What is their email?
// new Employee?
//What is their role?
//switch cases..
//new Intern
//new Engineer
//new Manager
//render HTML
