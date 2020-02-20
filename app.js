const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// inquirer.prompt(
//     [
//         {
//             type: 'input',
//             message: 'How many employees are there on this team?',
//             name: 'num-employees'
//         }
//     ]
// ).then(function(response) {
//     let numEmployees = parseInt(response['num-employees']);
//     for(let i=0; i<numEmployees; i++) {
//         inquirer.prompt(
//             [
//                 {
//                     type: 'input',
//                     message: 'What is the employees name?',
//                     name: 'name'
//                 },
//                 {
//                     type: 'input',
//                     message: 'What is their ID?',
//                     name: 'id'
//                 },
//                 {
//                     type: 'input',
//                     message: 'What is their email?',
//                     name: 'email'
//                 },
//                 {
//                     type: 'input',
//                     message: 'What is their role?',
//                     name: 'job'
//                 }
//             ]
//         ).then(function(data) {
//             console.log(data);
//             if(job === 'manager') {
                
//             }
//         })
//     }
    
// }).then(function(response) {

// })

inquirer.prompt(
    {
        type: 'confirm',
        message: 'Would you like to add an employee?',
        name: 'add-employee'
    }
).then(function(response) {
    if(response) {
        
    }
    else {

    }
})

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
