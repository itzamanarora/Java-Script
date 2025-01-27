// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve('Success');
//     // reject('Something went wrong!');
// });

// // How we get response from the APIs

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
}

// Promise Chain
getData(1)
    .then((res) => {
    return getData(2);
}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log(res);
})

// //iss Function mein ek promise create hua
// const getpromise  = () => {
//     return new Promise((resolve, reject) => {
//         console.log('Hey! I am in Promise again.');
//         resolve('Success');
//     });
// };

// //ab hum uss promise ka store krenge jo hum promise return krega
// let Promise2= getpromise();

// // agar Promise fullfill hogya ho uska baadd kuch kaam krvana hai
// Promise2.then((res) => { //iska andar ek parameter ata hai dono mein then aur catch mein
//    console.log('Promise Fulfilled!', res) ;
// });

// // agar promise fullfill nhi hua ho aur uska baad kuch kaam krvana ho
// Promise2.catch((err) => {
//     console.log('Promise is not Fulfilled!', err);
// });

// function asyncFunction1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data 1');
//             resolve('Successfully');
//         }, 4000);
//     });
// }
// function asyncFunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data 2');
//             resolve('Successfully');
//         }, 4000);
//     });
// }

// // console.log('Fetching Data1....');
// // let p1 = asyncFunction1();
// // p1.then((res) => {
// //     console.log('Fetching Data2....');
// //     let p2 = asyncFunction2();
// //     p2.then((res) => {});
// // })

// // //response way
// console.log('Fetching Data1....');
// asyncFunction1().then((res) => {
//     console.log('Fetching Data2');
//     asyncFunction2().then((res) => {});
// })
// // Delay in data fetchinng in both function
