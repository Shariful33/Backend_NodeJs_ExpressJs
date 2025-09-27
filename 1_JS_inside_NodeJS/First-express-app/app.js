const express = require("express");

const app = express();

//Json data- js object
const user = {
    name: "shariful", age: "23", city: "dhaka"
}

//get api end point - home route
//asyc use of call back
app.get('/home',function(req,res){
    res.send("hello world");
});

//user route
app.get("/user",function(req,res){
    res.json(user);
});

//get api - query and route parameter
app.get("/student/:id", function(req,res){
    // console.log(req);
    console.log(req.query.id);
    console.log(req.params.id);
    
    
    res.send({
        name: "demo", age : "20+"
    });
});



app.listen(3000, ()=>{
    console.log("server started at port no 3000");
    
});