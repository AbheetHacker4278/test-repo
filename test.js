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


// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const z = require('zod');
// app.use(bodyParser.json());

// function username(req, res, next) {
//     if (req.body.username === "abheet") {
//         next();
//     } else {
//         res.status(401).send({ error: 'Invalid username' });
//     }
// }

// function password(req, res, next) {
//     if (req.body.password === 4278) {
//         next();
//     } else {
//         res.status(401).send({ error: 'Invalid password' });
//     }
// }

// function check(req, res, next) {
//     res.send({ reply: "Logged in successfully" });
// }

// app.use(username , password , check);

// app.get('/', (req, res) => {
//     res.send({ reply: `hello user` });
// });


// //global catch handler middleware
// app.use((err , req , res , next)=>{
//     if(err){
//         res.status(404).send({
//             msg : "Someting went wrong"
//         })
//     }
// })

// app.listen(4001, () => {
//     console.log("app is listening on port 4001");
// });


// const express = require('express');
// const app = express();
// const port = 4001
// const bodyParser = require('body-parser');
// const zod = require('zod');
// app.use(bodyParser.json());


// const schema = zod.object({
//     email : zod.string().email({message : "please enter a valid email"}),
//     password : zod.string().max(6 , {message : "please enter a valid password"}),
//     country: zod.literal("IN").or(zod.literal("US"))
// })
// app.get('/data' , (req , res , next) => {
//     const val = req.body;
//     const response = schema.safeParse(val);
//     res.send({ 
//         response: response
//     })
// })



// app.listen(port, () => {
//     console.log(`app is listening on port ${port}`);
// })





const express = require('express');
const port = 5001;
const app = express();
const zod = require('zod');
const bodyParser = require('body-parser');
app.use(bodyParser.json());



schema = zod.object({
    email : zod.string().email({message : "please enter your email correctly"}),
    password : zod.string(),
    country : zod.literal('IN').or(zod.literal('US'))
})
app.get('/route' , (req , res , next)=>{
    const usr = req.body;
    const response = schema.safeParse(usr)
    res.send({
        response
    })
    next()
})

app.use((err , req , res , next)=>{
    res.send({
        reply : "something went wrong"
    })
})

app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);
})