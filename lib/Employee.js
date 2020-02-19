// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');

const Employee = function(name, id, email) {    
    this.name = name;
    this.id = id;
    this.email = email;
};

Employee.prototype.getName = function() {
    //return process.argv[2];
    console.log(this.name);
}

Employee.prototype.getID = function() {
    //return process.argv[3];
    console.log(this.id);
}

Employee.prototype.getEmail = function() {
    console.log(this.email);
}

Employee.prototype.getRole = function() {
    return 'Employee';
}

let Sarah = new Employee('sarah', 100, 'sarahmarie.carter@yahoo.com');
Sarah.getName();
Sarah.getID();
Sarah.getEmail();

// const e = new Employee();
// console.log(typeof e);

//console.log(typeof e);

// numEmployees = 1;
// for(let i=0; i<numEmployees; i++) {
//     inquirer.prompt(
//         [
//             {
//                 type: 'input',
//                 message: 'What is the employees name?',
//                 name: 'name'
//             },
//             {
//                 type: 'input',
//                 message: 'What is their ID?',
//                 name: 'id'
//             },
//             {
//                 type: 'input',
//                 message: 'What is their email?',
//                 name: 'email'
//             },
//             {
//                 type: 'input',
//                 message: 'What is their role?',
//                 name: 'job'
//             }
//         ]
//     ).then(function(data) {
//         console.log(data);
//         if(job === 'manager') {
            
//         }
//     })
// }