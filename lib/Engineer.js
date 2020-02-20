// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

let Sarah = new Employee('sarah', 100, 'sarahmarie.carter@yahoo.com');

class Engineer extends Employee {
    constructor() {
        super();
    }
}

