//------------------Create Server Using NodeJS ------------------------------

const http = require("http");

const cb = (req,res)=>{
    res.writeHead(200,{"content-type": "text/plain"});
    res.end("Hello World!");
}

const server = http.createServer(cb);

//async use of callback- we dont know when callback function is called
server.listen(3000, function(){
    console.log("Server started....");
})


//ctrl+c -> Kill server in terminal
//ctrl+j -> terminal open/close 