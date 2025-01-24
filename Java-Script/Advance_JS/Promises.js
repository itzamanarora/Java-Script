let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve('Success');
    // reject('Something went wrong!');
});

// How we get response from the APIs

function getData(dataId, getNextdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data', dataId);
            resolve('Success');
            if (getNextdata) {
                getNextdata();
            };
        }, 2000);
    })
}



//iss Function mein ek promise create hua
const getpromise  = () => {
    return new Promise((resolve, reject) => {
        console.log('Hey! I am in Promise again.');
        resolve('Success');
    });
};


//ab hum uss promise ka store krenge jo hum promise return krega
let Promise2= getpromise();

// agar Promise fullfill hogya ho 
Promise2.then((res) => { //iska andar ek parameter ata hai dono mein then aur catch mein
   console.log('Promise Fulfilled!') ;
});

// agar promise fullfill nhi hua ho 

Promise2.catch((err) => {
    console.log('Promise is not Fulfilled!');
});