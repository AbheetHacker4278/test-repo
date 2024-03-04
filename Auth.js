// // const express = require('express');
// // const app = express();
// // const bodyParser = require('body-parser');
// // const jwt = require('jsonwebtoken');
// // const jwtpass = "123456";
// // app.use(bodyParser.json());

// // const USER_INFO = [
// //     {
// //         username : "manoj@gmail.com",
// //         password : "moj657",
// //         name : "Manoj Kumar"
// //     },
    
// //     {
// //         username : "ramesh@gmail.com",
// //         password : "ram23232",
// //         name : "Ramesh Saho"
// //     },
    
// //     {
// //         username : "kamlesh@gmail.com",
// //         password : "kam34564",
// //         name : "Kamlesh kukhreja"
// //     }   
// // ];

// // function userexist(username , password){
// //     let exist = false;
// //     for(let i = 0;  i < USER_INFO.length; i++){
// //         if(USER_INFO[i].username == username && USER_INFO[i].password == password){
// //             exist = true;
// //         }
// //     }
// //     return exist;
// // }

// // app.post('/signin' , (req , res)=>{
// //     let username = req.body.username;
// //     let password = req.body.password;

// //     if(!userexist(username , password)){
// //         res.status(404).send({
// //             ServerReply : "Username and password not found"
// //         })
// //     }else{
// //         var token = jwt.sign(username , jwtpass);
// //         res.json({
// //             ServerReply : token
// //         })
// //     }
// // })
// // app.get('/usersdata', (req, res)=>{
// //     let token = req.headers.authorization;
// //     try{
// //         let decoded = jwt.verify(token , jwtpass);
// //         // let username = decoded.username
// //         res.send({
// //             users: USER_INFO
// //         });
// //     }
// //     catch(err){
// //         if(err){
// //             res.status(500).send({
// //                 ServerReply : "Invalid Token"
// //             })
// //         }
// //     }
// // })
// // app.listen(3000)

// // const schema = mongoose.model('users', { name: String, email: String });

// // const user = new schema({
// //     name: 'Abheet',
// //     email: 'abheet@gmail.com'
// // });

// // user.save()


// // const express = require('express');
// // const app = express();
// // const bodyparser = require('body-parser')
// // app.use(bodyparser.json());

// // const mongoose = require('mongoose');
// // mongoose.connect('mongodb+srv://aseth9588:9824491931abheetseth@cluster0.bhtnmrh.mongodb.net/users');



// // const schema = mongoose.model('users' , {username : String,password : String,name : String})


// // app.post('/signup', async (req, res) => {
// //     const exist = await schema.findOne({ username: req.body.username });
// //     if (exist) {
// //         res.send({
// //             reply: "User already exists"
// //         });
// //     } else {
// //         const user = new schema({
// //             username: req.body.username,
// //             password: req.body.password,
// //             name: req.body.name
// //         });
// //         await user.save();
// //         res.send({
// //             reply: "Successfully saved",
// //         });
// //     }
// // });

// // app.listen(3000 , ()=>{
// //     console.log(`Http on port ${3000}`);
// // })


// // const express = require('express');
// // const app = express();
// // const bodyParser = require('body-parser');
// // const mongoose = require('mongoose');
// // app.use(bodyParser.json());

// // mongoose.connect('mongodb+srv://aseth9588:9824491931abheetseth@cluster0.bhtnmrh.mongodb.net/users');
// // const schema = mongoose.model('users' , {username : String , password : String , name : String })
// // app.post('/signup' , async (req ,res)=>{
// //     try{
// //         let exist = await schema.findOne({username : req.body.username});
// //         if(exist){
// //             res.status(404).send({
// //                 ServerReply : "Already Exist"
// //             })
// //         }
// //         else if(!req.body.username || !req.body.password|| !req.body.name){
// //             res.send({
// //                 ServerReply : "Invalid Format"
// //             })
// //         }
// //         else{
// //             const user = new schema({
// //                 username : req.body.username,
// //                 password : req.body.password,
// //                 name : req.body.name
// //             })
// //             user.save();
// //             res.status(200).send({
// //                 ServerReply : "User Added successfully"
// //             })
// //         }
// //     }catch{
// //         res.json({
// //             ServerReply : "Internal Server Error"
// //         })
// //     }
// // })
// // app.use((err , req , res , next)=>{
// //     res.send({
// //         ServerReply : "PLease Add correct Credentials"
// //     })
// // })


// // app.listen(3000 , ()=>{
// //     console.log("app is listening on port 3000");
// // })





const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const zod = require('zod');
const port = 3000;

mongoose.connect('mongodb+srv://aseth9588:9824491931abheetseth@cluster0.bhtnmrh.mongodb.net/users');

app.use(bodyParser.json());

const schema = zod.object({
    username: zod.string(),
    email: zod.string().email({ message: "Enter your correct email address" }),
});

const schema2 = mongoose.model('users', { username: String, email: String });

app.post('/users', async (req, res , next) => {
    const verify = schema.safeParse(req.body);
    if(verify.success) {
        const existingUser = await schema2.find({ username: req.body.username });
        if (existingUser.length > 0) {
            return res.send({
                Server: "User already registered"
            });
        }
        else {
            const user = new schema2({
                username: req.body.username,
                email: req.body.email
            });
            await user.save();
            return res.send({
                ServerReply: "User successfully registered"
            });
        }
    } 
    else {
        res.status(404).send({
            ServerReply: "Invalid data format",
        });
    }
    next();
});

app.use((err , req , res , next)=>{
    res.status(404).send({
        ServerReply : "Invalid data format",
    })
})
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});







// const express = require('express');
// const app = express();
// const bodyparser = require('body-parser');
// const zod = require('zod');
// const port = 3000;
// const jwt = require('jsonwebtoken');
// const jwtpass = "12345679";
// const fs = require('fs');
// const path = require('path');
// const dir = path.join('files/fil');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://aseth9588:9824491931abheetseth@cluster0.bhtnmrh.mongodb.net/users')
// const schema2 = mongoose.model('users' , {username : String , email : String})
// app.use(bodyparser.json());

// const schema = zod.object({
//     username : zod.string(),
//     email : zod.string().email({message : "Please enter your email address correctly"}),
// });

// app.post('/user' , async(req , res)=>{
//     if(schema.safeParse(req.body).success){
//         let exist = await schema2.findOne({username : req.body.username})
//         if(exist){
//             res.send({
//                 Mess: "Already Exist",
//             })
//         }
//         else{
//             const user = new schema2({
//                 username : req.body.username,
//                 email : req.body.email
//             })
//             user.save();
//             res.send({
//                 usSrpl : "user added Successfully"
//             })
//         }
//     }
// });

// app.get('/users' , (req , res)=>{
//     const decode = jwt.verify(req.headers.authentication , jwtpass);
//     if(decode){
//         fs.readdir(dir , (err , data)=>{
//             if(err){
//                 res.status(404).send({
//                     Reply: "Error to getting the data from the server"
//                 });
//             }
//             else{
//                 res.status(200).send({
//                     Reply: data
//                 });
//             }
//         });
//     }
// });

// app.listen(port, () => {
//     console.log(`app is listening on port ${port}`);
// });
