const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const jwtpass = "123456";
app.use(bodyParser.json());

const USER_INFO = [
    {
        username : "manoj@gmail.com",
        password : "moj657",
        name : "Manoj Kumar"
    },
    
    {
        username : "ramesh@gmail.com",
        password : "ram23232",
        name : "Ramesh Saho"
    },
    
    {
        username : "kamlesh@gmail.com",
        password : "kam34564",
        name : "Kamlesh kukhreja"
    }   
];

function userexist(username , password){
    let exist = false;
    for(let i = 0;  i < USER_INFO.length; i++){
        if(USER_INFO[i].username == username && USER_INFO[i].password == password){
            exist = true;
        }
    }
    return exist;
}

app.post('/signin' , (req , res)=>{
    let username = req.body.username;
    let password = req.body.password;

    if(!userexist(username , password)){
        res.status(404).send({
            ServerReply : "Username and password not found"
        })
    }else{
        var token = jwt.sign(username , jwtpass);
        res.json({
            ServerReply : token
        })
    }
})
app.get('/usersdata', (req, res)=>{
    let token = req.headers.authorization;
    try{
        let decoded = jwt.verify(token , jwtpass);
        // let username = decoded.username
        res.send({
            users: USER_INFO
        });
    }
    catch(err){
        if(err){
            res.status(500).send({
                ServerReply : "Invalid Token"
            })
        }
    }
})
app.listen(3000)