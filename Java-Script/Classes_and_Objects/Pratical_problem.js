class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }


    viewData() {
        console.log(this.name);
        console.log(this.email);
    }
}

class Admin extends User{
    constructor(name, email) {
        super(name, email);
    }

    editData() {
       
    }
}

let User_obj =  new User('Aman', 'abc@gmail.com');
let User_obj2 =  new User('harsh', 'def@gmail.com');

let Admin_obj = new Admin('Admin','admin@admin.com');
Admin_obj.editData();