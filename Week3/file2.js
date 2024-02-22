const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let reqCount = 0;

function requestCounter(req, res, next) {
    reqCount++;
    next();
}

function requestLimiter(req, res, next) {
    if (reqCount <= 5) {
        next();
    }
    else{
        res.send({
            reply: "Request Limit exceeded....."
        });
    }
    next();
}
setInterval(()=>{
    requestLimiter
} , 1000)
app.use(requestCounter , requestLimiter);


app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
});

app.get('/user2', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000, () => {
    console.log(`App is listening on port ${3000}`);
});
