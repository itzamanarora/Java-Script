// This is a Synchronous program 
//Synchoronous mein ek time par sirf ek kaam krega jab vo task complete hoga tbhi dusra task krega 
console.log('one');
console.log('two');
console.log('three');


setTimeout(() => {
    console.log('Hello');
}, 1000); //4000 means 4s

console.log('six');

//callback function: esa function jo kisi dusra function mein as an argument pass hota hai 


//call back function 

function sum(a,b) {
    console.log(a+b);
}

function calculator(a, b, sumcallback) {
    sumcallback(a,b);
}

calculator(1, 2, sum);



//Call back function

function getData(dataId, getNextdata) {
    //2s
    setTimeout(() => {
        console.log('data', dataId);
       if(getNextdata) {
        getNextdata();
       }
    }, 2000);
}

//this is called Callback hell
console.log('getting data 1...');
getData(1, () => {
    console.log('getting data 2...');
    getData(2, () => {
        console.log('getting data 3...');
        getData(3, () => {
            console.log('getting data 4...');
            getData(4, () => {
                console.log('getting data 5...');
                getData(5);
            });
        });
    });
});