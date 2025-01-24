class employee_name { // parent class
    constructor(full_name, salary)  {
        console.log('In name Constructor');
        this.full_name  = full_name;
        this.salary = this.salary
    }

    first_name() {
        console.log('First name');
    }

    last_name() {
        console.log('last_name');
    }
}

class details extends employee_name{ //child class inheriating the properties of parent class
    constructor(salary) {
        console.log('enter in details Constructor');
        super(salary); // to invoke prent class constructor
        console.log('In Details Constructor');
        this.salary = salary;
    }
    salary() {
        super.first_name();
        console.log('employee salary')
    }
}

let employee_details = new details(); 
employee_details.first_name();


// Super keyword 

// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

// super(args)
// super.parentmetod(args)