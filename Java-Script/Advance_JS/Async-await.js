// Await keyword ko hum hamesa async function ke andar hi use kr skte hai 
function APIs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('weather data');
            resolve(200);
        }, 2000);
    });
};


async function getWeatherData() {
    await APIs(); //1st -- await means phele yeh kaam hoga phirr baki ke kaam honge 
    //jab takke Promise fullfill nhi hoga tab takke yeh uska wait hi krta rhyega!
    await APIs(); //2nd
    await APIs(); //3rd
}


function getData(dataId, getNextdata) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data", dataId);
        resolve("Success");
        if (getNextdata) {
          getNextdata();
        }
      }, 2000);
    });
};

// async await
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}


// IIFE -- Immediately invoked function expression 

// yeh ek baar use hota hai bus aur bina function ko call kiya apna appe call hojata hai 
// async await
// (async function () {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
// })();