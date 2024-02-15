// Easy Week 2 Assignment solutions

//counter using setinterval
// let count = 0;
// setInterval(()=>{
//     console.log(count);
//     count++;
// } , 1000);



//counter without using setinterval
// let count = 0;
// function fn(){
//     setTimeout(() => {
//         count++;
//         console.log(count);
//         fn(); 
//     }, 1000);
// }
// fn();



//read file from the user seleced directory/files
// const fs = require('fs');
// const path = require('path');
// const dir = path.join('files/fil' , 'b.txt');
// // let file = path.join(dir , 'b.txt');
// // for(let i = 0; i < 10000000000000 ; i++){
// //     //due to this expensive operatrion , it will affect the performance
// // }
// fs.readFile(dir , "utf-8" , async(err , data)=>{
//     if(err){
//         await console.log("File not found");
//     }
//     else{
//         await console.log(data);
//     }
// })



// // write file from the user seleced directory/files
// const fs = require('fs');
// const path = require('path');
// const dir = path.join('files/fil' , 'b.txt');
// // let file = path.join(dir , 'b.txt');
// // for(let i = 0; i < 10000000000000 ; i++){
// //     //due to this expensive operatrion , it will affect the performance
// // }
// fs.writeFile(dir , "HELLO ABHEET SETH" , async(err , data)=>{
//     if(err){
//         await console.log("File not found");
//     }
//     else{
//         await console.log(data);
//     }
// })

// fs.readFile(dir , "utf-8" , async(err , data)=>{
//     if(err){
//         await console.log("File not found");
//     }
//     else{
//         await console.log(data);
//     }
// })




