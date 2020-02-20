// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');

const Employee = function(name, id, email) {    
    this.name = name;
    this.id = id;
    this.email = email;
};

Employee.prototype.getName = function() {
    console.log(this.name);
}

Employee.prototype.getID = function() {
    console.log(this.id);
}

Employee.prototype.getEmail = function() {
    console.log(this.email);
}

Employee.prototype.getRole = function() {
    return 'Employee';
}

let Sarah = new Employee('sarah', 100, 'sarahmarie.carter@yahoo.com');

module.exports = Employee;