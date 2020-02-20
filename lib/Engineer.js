// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

let Sarah = new Employee('sarah', 100, 'sarahmarie.carter@yahoo.com');
// Sarah.getName();
// Sarah.getID();
// Sarah.getEmail();

const Engineer = function() {

}

Engineer.prototype.gitHub = function() {
    console.log('it worked')
}

let mandi = new Engineer();

mandi.gitHub();
