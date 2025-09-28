const { default: axios } = require("axios");
const express = require("express");

const app = express();


app.get('/home',function(req,res){
    res.send("hello world");
});


app.get("/fastapi",function(req,res){
    const url = "http://127.0.0.1:8000";
    axios.get(url)
    .then(response => {
        console.log("Response Data: " , response.data);
        
    })
    .catch(error=>{
        console.error("Error fetching data" , error.message);
    })
    res.send("Ok");
});


app.listen(3001, ()=>{
    console.log("server started at port no 3001");
    
});