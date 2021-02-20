const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }

    returnOffice() {
        return this.officeNumber;
    }

    returnRole() {
        return "Manager";
    }
}

module.exports = Manager;