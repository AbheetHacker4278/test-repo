fs.readFile(dir , "utf-8" , async(err , data)=>{
    if(err){
        await console.log("File not found");
    }
    else{
        await console.log(data);
    }
})
