// Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
// let count = 0;
// function wait(n){
//     return new Promise((reject , resolve)=>{
//         setTimeout(()=>{
//             if(resolve){
//                 clearInterval(intelv);
//                 console.log("Promisified SuccessFull");
//             }
//             else{
//                 console.log("Rejected UnSuccessFull");
//             }
//         } , n)
//     })
// }

// wait(4000).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })



/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
// function wait(n){
//     let intelv = setInterval(() => {

//     } , 1000); 
//     return new Promise((reject , resolve)=>{
//         setTimeout(()=>{
//             if(resolve){
//                 clearInterval(intelv);
//                 console.log("Promisified SuccessFull");
//             }
//             else{
//                 console.log("Rejected UnSuccessFull");
//             }
//         } , n)
//     })
// }
// wait(4000).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })



/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */
// function fn1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Resolved successfully 1");
//         }, 10);
//     });
// }

// function fn2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Resolved successfully 2");
//         }, 80);
//     });
// }

// function fn3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Resolved successfully 3");
//         }, 100);
//     });
// }


// function waitForAllPromises() {
//     var startTime = Date.now();
//     return Promise.all([fn1(), fn2(), fn3()]).then(()=>{
//         var endTime = Date.now();
//         return endTime - startTime;
//     })
// }


// waitForAllPromises().then((time) => {
//     console.log(time + " millisec");
// })


