const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

inquirer.prompt(
    [
        {
            type: 'input',
            message: 'How many employees are there on this team?',
            name: 'num-employees'
        }
    ]
).then(function(response) {
    let numEmployees = parseInt(response['num-employees']);
    return 
}).then(function(response) {

})
