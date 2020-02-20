// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super();
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

let Sarah = new Engineer('sarah', 100, 'sarahmarie.carter@yahoo.com', 'sarahm16');
console.log(Sarah.getGithub());
