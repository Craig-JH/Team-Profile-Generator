const Employee = require("./Employee");

//class creates manager object (and overlapping functionality with Employee) by extending Employeeand each function in the class gets and returns information
class Engineer extends Employee {
    constructor (name = " ", id = "", email = " ", github = " "){
     super(name, id, email);

     this.github = github;
    }

    getGithub(){
        return {github: this.github};
    }

    getRole(){
        return "Engineer";
    };
}


module.exports = Engineer;