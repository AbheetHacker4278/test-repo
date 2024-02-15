const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
app.use(bodyParser.json());

const filesDirectory = path.join('fil');


app.get('/files' , (req , res)=>{
    fs.readdir(filesDirectory , (err , data)=>{
        if(err){
            res.send("Error to detect the file");
        }
        else{
            res.status(200).send({
                "Files" : data
            })
        }
    })
})


app.post('/files/:file' , (req , res)=>{
    let name = req.params.file;
    let filePath = path.join(filesDirectory, name);
    fs.readFile(filePath , "utf-8" , (err , data)=>{
        if(err){
            res.status(404).send({
                "response" : "File not found: "
            });
        }
        else{
            res.status(200).send({
                data
            })
        }
    })
})

app.listen(port , ()=>{
    console.log(`this server is listening on ${port}`);
})