// // let prms = new Promise((resolve , reject)=>{
// //     if(1 > 5){
// //         resolve("Haa Sab kuch sahii hai")
// //     }
// //     else{
// //         reject(Error("Kay kar raha hai"));
// //     }
// // }) 

// // prms.then((data)=>{
// //     console.log(data);
// // }).catch((err)=>{
// //     console.log(err);
// // })



// function fn(){
//     return new Promise((resolve , reject)=>{
//         resolve(function(){
//             return new Promise((resolve , reject)=>{
//                 resolve(()=>{
//                     return new promise((resolve , reject)=>{
//                         resolve("Correct");
//                     })
//                 });
//             });
//         });
//     });
// }


// fn().then((res)=>{
//     res((res2)=>{
//         res2.then((data)=>{
//             console.log(data);
//         }).catch((err)=>{
//             console.log(err);
//         })
//     })
// })


// let arr = [1 , 2 , 3  , 4 , 5];

// console.log(
//     arr.map((arru)=>{
//         return arru*2;
//     })
// );
// console.log(
//     arr.filter((arri)=>{
//         return arri % 2 == 0;
//     })
// );




