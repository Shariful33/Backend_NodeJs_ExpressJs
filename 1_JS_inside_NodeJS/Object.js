//---------------------------- Object Basics ----------------------------
// 1. Objects in JS = key-value pairs (properties & methods).
// 2. `this` keyword inside an object method refers to the object itself.
// 3. Objects can contain nested objects (hierarchical data).
// 4. Access object property: obj.key OR obj["key"].
// 5. Objects are useful for grouping related data and behavior together.

const data = {
    name: "saiful", // property (string)
    age : 25,       // property (number)

    //Method inside object
    print: function(){              
        console.log(this.name);     // "this" refers to the object "data"
    },

    //Nested Object 
    address:{
        location: "korea",
        district: "seoul"
    }
}


data.print();                 // Calling the method
console.log(data.address);    // Accessing nested object

//---------------------------- Another Object ----------------------------
let Par = {
    query: "filtering",
    param: "cascaded result"
}

console.log(Par);

//------------------------- Conversion between json and object -----------------

const obj = { name: "Sharif", age: 24 };  

// Convert Object -> JSON string
const jsonData = JSON.stringify(obj);
console.log(jsonData);   

// Convert JSON string -> Object
const parsed = JSON.parse(jsonData);
console.log(parsed.name);  
