const { log } = require("console");

const data = {
    name: "saiful",
    age : 25,
    print: function(){
        console.log(this.name);
    },
    address:{
        location: "korea",
        district: "seoul"
    }
}

data.print();
console.log(data.address);


let Par = {
    query: "filtering",
    param: "cascaded result"
}

console.log(Par);
