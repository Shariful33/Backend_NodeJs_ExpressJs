const { log } = require("console");

const fs = require("fs");

// async use of JS
//Read file form demo text file
fs.readFile("demo.txt", 'utf8', (err, data)=>{
    if(err){
        console.error("Error reading file: ", err);
        return;
    }
    console.log("File content: ", data);
});


setTimeout(()=>{
    console.log("set time out waiting");
},10);

let res = 1+100;
console.log(res);

for(let index = 0; index<5; index++){
    console.log(index);
}

//blocked
console.log("sharif");


