const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    returnGithub() {
        return this.gitHub;
    }
    
    returnRole() {
        return "Engineer";
    }
}

module.exports = Engineer;