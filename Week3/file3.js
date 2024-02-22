const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());


let errorount = 0;
function errorCount(req , res , next){
    errorount++;
    next();
} 
app.get('/user' , (req , res , next)=>{
    res.send({
        reply : "Print valid name"
    })
})
app.post('/user' , errorCount , (req , res , next)=>{
    if(req.body.name == "john"){
        res.send({
            reply : "Correct name"
        })
    }
    else{
        res.status(404).send({
            reply :errorount
        })
    }
})



app.listen(3000);