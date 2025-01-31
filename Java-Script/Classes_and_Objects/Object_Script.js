// Objects

// Objects ke anadr hum function v bna skte hai
const student = {
  FullName: "Aman Arora",
  Marks: 98.1,
  Age: 24,
  Print_Marks: function () {
    console.log(this.FullName, this.Marks) //this is a keyword. this means current object. in this line this.marks means 'student.marks'
  },

//   prototype is also a object in object which have there own properties.
};
//  All the object in JS contains prototype object which have number of properties which can be used for any object 
//we can also create our own prototype

const employee = {
    calculate_tax() { //we can crate function in object in this format
        console.log('tax rate by 10%');
    }   
};

//If object and prtotype have same method, object's method will be used.
const karanarjun = {
    salary: 50000
};

karanarjun.__proto__ = employee ;//__proto__ this is used to set a prototype. -- jis object ke function ko hum use krna chate hai uska dusra object ke prototype set kr denge 
//protype mein agar function ara hai to vo uska refrence hoga

//prototype is a special property in jsobject . prototype type is a refrence to an object. It can be NULL or in mostly cases it can be refrence of an object