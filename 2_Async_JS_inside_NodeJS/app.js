const express = require("express");

const app = express();

app.get("/api/message", async(req,res)=>{
    let result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await result.json();
    res.json(data);
});

app.listen(6000, ()=>{
    console.log("server sarted at port no 6000");
});