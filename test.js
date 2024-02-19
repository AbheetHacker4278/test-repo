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


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

function username(req, res, next) {
    if (req.body.username === "abheet") {
        next(); // Call next() to proceed to the next middleware
    } else {
        res.status(401).send({ error: 'Invalid username' });
    }
}

function password(req, res, next) {
    if (req.body.password === 4278) {
        next(); // Call next() to proceed to the next middleware
    } else {
        res.status(401).send({ error: 'Invalid password' });
    }
}

function check(req, res, next) {
    // This middleware function should only respond when both username and password are valid
    res.send({ reply: "Logged in successfully" });
}

app.use(username , password , check);

app.get('/', (req, res) => {
    res.send({ reply: `${req.body.username} hello` });
});


//global catch handler middleware
app.use((err , req , res , next)=>{
    if(err){
        res.status(404).send({
            msg : "Someting went wrong"
        })
    }
})

app.listen(4001, () => {
    console.log("app is listening on port 4001");
});
