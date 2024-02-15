const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
// app.get('/files/:file', (req, res) =>{
//     let name = req.params.file;
//     fs.readFile(name , "utf-8" , (err, data)=>{
//         res.send({
//             data
//         })
//     })
// })

const filedr = path.join('files/fil')
app.get('/files', (req, res)=>{
    fs.readdir(filedr, (err, data)=>{
        res.send({
            data
        })
    })
})
app.post('/files/:files', (req, res)=>{
    const name = req.params.files;
    const filepath = path.join(filedr , name);
    fs.readFile(filepath, "utf-8", (err, data)=>{
        res.send({
            data
        })
    })
})

app.listen(3001);




















app.listen(3000);