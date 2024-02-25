// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const jwtpass = "123456";
// app.use(bodyParser.json());

// const USER_INFO = [
//     {
//         username : "manoj@gmail.com",
//         password : "moj657",
//         name : "Manoj Kumar"
//     },
    
//     {
//         username : "ramesh@gmail.com",
//         password : "ram23232",
//         name : "Ramesh Saho"
//     },
    
//     {
//         username : "kamlesh@gmail.com",
//         password : "kam34564",
//         name : "Kamlesh kukhreja"
//     }   
// ];

// function userexist(username , password){
//     let exist = false;
//     for(let i = 0;  i < USER_INFO.length; i++){
//         if(USER_INFO[i].username == username && USER_INFO[i].password == password){
//             exist = true;
//         }
//     }
//     return exist;
// }

// app.post('/signin' , (req , res)=>{
//     let username = req.body.username;
//     let password = req.body.password;

//     if(!userexist(username , password)){
//         res.status(404).send({
//             ServerReply : "Username and password not found"
//         })
//     }else{
//         var token = jwt.sign(username , jwtpass);
//         res.json({
//             ServerReply : token
//         })
//     }
// })
// app.get('/usersdata', (req, res)=>{
//     let token = req.headers.authorization;
//     try{
//         let decoded = jwt.verify(token , jwtpass);
//         // let username = decoded.username
//         res.send({
//             users: USER_INFO
//         });
//     }
//     catch(err){
//         if(err){
//             res.status(500).send({
//                 ServerReply : "Invalid Token"
//             })
//         }
//     }
// })
// app.listen(3000)

// const schema = mongoose.model('users', { name: String, email: String });

// const user = new schema({
//     name: 'Abheet',
//     email: 'abheet@gmail.com'
// });

// user.save()


const express = require('express');
const app = express();
const bodyparser = require('body-parser')
app.use(bodyparser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aseth9588:9824491931abheetseth@cluster0.bhtnmrh.mongodb.net/users');



const schema = mongoose.model('users' , {username : String,password : String,name : String})


app.post('/signup', async (req, res) => {
    const exist = await schema.findOne({ username: req.body.username });
    if (exist) {
        res.send({
            reply: "User already exists"
        });
    } else {
        const user = new schema({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name
        });
        await user.save();
        res.send({
            reply: "Successfully saved"
        });
    }
});

app.listen(3000 , ()=>{
    console.log(`Http on port ${3000}`);
})
