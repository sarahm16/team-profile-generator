// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(officeNumber) {
        super();
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

//let Sarah = new Manager('sarah', 1084829, 'sarahmarie@test.com', 2532458544);
