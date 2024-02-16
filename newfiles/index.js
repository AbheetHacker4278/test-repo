const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser'); 
const fs = require('fs');
const path = require('path');
app.use(bodyParser.json());

let filepath = path.join(__dirname, 'fil');


app.get('/requestsend' , (req , res)=>{
    res.status(200).json({
        bot : "What do you want"
    })
})
app.post('/requestsend/',(req , res)=>{
    let name = req.body.file;
    let exactfile = path.join(filepath, name);
    fs.readFile(exactfile, "utf-8", (err , data)=>{
        if(err){
            res.status(404).send(
                {
                    Servereply: "Error in getting the file"
                }
            )
        }
        else{
            res.status(200).send({
                data
            })
        }
    })
})
app.put('/requestsend', (req, res) => {
    let name = req.body.file;
    let towrite = req.body.write; 
    let exactfile = path.join(filepath, name);
    fs.writeFile(exactfile, towrite, (err) => {
        if (err) {
            res.status(404).send({
                serverResponse: "Error in writing"
            });
        } else {
            res.send({
                serverResponse: `${name} is successfully updated`
            });
        }
    });
});

app.delete('/requestsend/' , (req , res)=>{
    let name = req.body.file;
    let towrite = req.body.write; 
    let exactfile = path.join(filepath, name);
    if(towrite == "delete"){
        fs.writeFile(exactfile, "", (err)=>{
            if(err){
                res.send({
                    ServerReply : "File is Not Present for deletion"
                })
            } else {
                res.send({
                    serverResponse: `${name} content is successfully Deleted`
                });
            }
        })
    }
    else{
        fs.writeFile(exactfile, towrite, (err) => {
            if (err) {
                res.status(404).send({
                    serverResponse: "Error in writing"
                });
            } else {
                res.send({
                    serverResponse: `${name} is successfully updated`
                });
            }
        });
    }
})
app.listen(port , ()=>{
    console.log(`listening on ${port}`);
});
