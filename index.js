const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000;
const fs = require('fs');


app.use(bodyParser.json());

// app.get("/route-handler" , (req , res)=>{
//   setTimeout(()=>{
//     res.status(503).json({
//       Name:"Abheet seth",
//       Age:19,
//       Regno:"22BCY10162",
//       CGPA:8.78
//   })
//   } , 10000)
// })



app.get("/route-handler" , (req , res)=>{
  res.status(503).json({
        Name:"Abheet seth",
        Age:19,
        Regno:"22BCY10162",
        CGPA:8.78
    })
})

// app.post("/conversation" , (req ,res)=>{
//   console.log(req.headers["authorization"]);
//   console.log(req.headers);
//   console.log(req.body);

//   res.send({
//     response:"2 + 2 = 4",
//   })
// })

// app.post("/user-request" , (req , res)=>{
//   var message = req.body.message;
//   console.log(message);
//   res.send.json({
//     reply:"2 + 2 = 4",
//   })
// })


// app.post("/any" , (req , res)=>{
//   var message = req.body.message;
//   console.log(message);
//   fs.readFile("a.txt" , "utf-8" , (err , data)=>{
//     res.send(data);  
//   })
// })


// app.post("/new-route" , (req , res)=>{
//   fs.readFile("a.txt" , "utf-8" , (err , data)=>{
//     res.json({
//       reply: data
//     })
//   })
//   console.log(req.body);  
//   console.log(req.headers);  
//   // console.log(req.headers["auth"]);  
//   // console.log(req.query.ques);
//   // console.log(req.query.name);
// })



// app.post('/new-router' , (req , res)=>{
//   fs.readFile("a.txt" , "utf-8" , (err , data)=>{
//     res.json({
//       answer: data
//     })
//   })
//   console.log(req.body);
//   console.log(req.query);
//   console.log(req.headers.authorization);
// })


// app.get('/new-router' , (req , res) =>{
//   fs.readFile("a.txt" , "utf-8" , (err , data)=>{
//     res.status(300).send(data);
//   })
//   console.log(req.body);
// })


// app.get('/calc' , (req , res)=>{
//   let ans = 0;
//   for(let i = 0 ; i < parseInt(req.query.request) ; i++){
//     ans = ans + i;
//   }
//   res.json({
//     response:ans.toString()
//   })
//   console.log(req.query);
// })


// app.post('/calc/:file' , (req , res)=>{
//   let fl = req.params.file;
//   fs.readFile(fl , "utf-8" , (err , data)=>{
//     res.send({
//       data
//     })
//   })
//   console.log(res.body);
// })




// app.post('/user/' , (req , res)=>{
//   let fl = req.body.pass;
//   if(fl == "4278"){
//     res.send("heloo user");
//   }
//   else{
//     res.send("bhagg jaa");
//   }
// })


function usernamemiddleware(req , res , next){
  if(req.body.username != "abheet"){
    res.send("Wrong username Buddy.....");
  }
  else{
    next();
  }
}
function passwordmiddleware(req , res , next){
  if(req.body.password != 4278){
    res.send("Wrong Password Buddy.....");
  }
  else{
    next();
  }
}

let request = 0;
function calculaterequest(req , res , next){
  request++;
  console.log(request);
  next();
}
app.use(usernamemiddleware , passwordmiddleware , calculaterequest)

app.get('/kidneylogin' , (req , res)=>{
  res.send("LOgined")
})





















// app.get("/new" , (req , res)=>{
//   res.send(`Ye https ke ye port pe chall raha hai: ${port}`);
// })

app.get('/', (req, res) => {
  res.json('Hello World! Abheet seth')
})

// function isunhealth(){
//   let isunhealthykidney = false;
//   for(let i = 0 ; i < users[0].kidney.length ; i++){
//     if(users[0].kidney[i].healthy == false){
//       isunhealthykidney = true;
//     }
//   }
//   return isunhealthykidney;
// }
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



