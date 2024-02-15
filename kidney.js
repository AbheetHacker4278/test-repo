const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000;
const fs = require('fs');

app.use(bodyParser.json());

const users = [{
    name: 'John',
    kidney : [{
      healthy: false,
    }]
  }]
  
  app.get('/kidneydata' , (req , res)=>{
    let userkidney = users[0].kidney;
    let numberofkidney = userkidney.length;
    let numberofhealthykidney = userkidney.filter(kidney=>kidney.healthy == true).length;
    letnumberofunhealthykidney = numberofkidney - numberofhealthykidney;
  
    res.json({
      numberofkidney,
      numberofhealthykidney,
      letnumberofunhealthykidney
    })
  })
  
  app.post('/kidneydata' , (req ,  res)=>{
    let ishealthykidney = req.body.isHealthy;
    users[0].kidney.push({
      healthy: ishealthykidney
    })
    res.json({
      response : "Added Kidney Bhaiii"
    })
  })
  
  app.put('/kidneydata' , (req ,  res)=>{
    if(isunhealth()){
      for(let i = 0 ; i < users[0].kidney.length ; i++){
        users[0].kidney[i].healthy = true;  
      }
      res.json({
        reply : "Yes Your Kidney Got updated!!!"
      })
    }
    else{
      res.send({
        reply : "You already have good kidneys"
      })
    }
  })
  
  app.delete('/kidneydata' , (req ,  res)=>{
    if(isunhealth()){
      let newKidney = [];
      for(let i = 0 ; i < users[0].kidney.length ; i++){
        if(users[0].kidney[i].healthy == false){
          newKidney.push({
            healthy : true
          })
        }
      }
      users[0].kidney = newKidney;
      res.json({
        reply: "Bad Kidney got removed"
      })
    }else{
      res.status(411).json({
        msg : "You have no bad kidneys"
      })
    }
  })




  function isunhealth(){
    let isunhealthykidney = false;
    for(let i = 0 ; i < users[0].kidney.length ; i++){
      if(users[0].kidney[i].healthy == false){
        isunhealthykidney = true;
      }
    }
    return isunhealthykidney;
  }
app.listen(port , ()=>{
    console.log(`listening on port:- ${port}`);
});