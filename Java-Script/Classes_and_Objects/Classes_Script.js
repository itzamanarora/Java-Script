class Car {
    constructor(music) {
        console.log('Creating new Object');
        this.music = music;
    }
    start() {
        console.log('Start');
    }

    stop() {
        console.log('stop');
    }

}

let Nexon = new Car(); // create a oject of the class. // jab v hum new object bnate hai to JS automatic consturctor create kr deta hai

//Constructor() method is:
// * automatically invoked by new 
// * initializes object 
// jab v koyi object create hota hai to bina call kiya consturctor apna appe call ho jata hai 
let Harrier = new Car('music'); // create a oject of the class.


