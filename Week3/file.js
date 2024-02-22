const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

let requestCount1 = 0;
let requestCount2 = 0;
let requestCount3 = 0;
function globalchk1(req , res , next){
    requestCount1++;
    next();
}
function globalchk2(req , res , next){
    requestCount2++;
    next();
}
function globalchk3(req , res , next){
    requestCount3++;
    next();
}

app.get('/user', globalchk1 , function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.get('/user2', globalchk2 , function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', globalchk3 , function(req, res) {
  res.status(200).json({
    "first-route" : requestCount1,
    "second-route" : requestCount2,
    "third-route" : requestCount3
  });
});

app.listen(3000 , ()=>{
    console.log(`listening on ${3000}`);
})