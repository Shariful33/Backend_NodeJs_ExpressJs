//--------------------- Callback Function ----------------------------------
// - A function passed as an argument to another functio . Called (executed) inside that function
// - Useful for async tasks (like API calls, DB ops) or sync reuse

// Sync use of callback function
function callSomeOne(data){
    data();
};

// function to pass as callback
const cb = function(){
    console.log("Its a callback function");
}

callSomeOne(cb);

//--------------------- Arrow Function (ES6+) -------------------------------------
// Shorter syntax for writing functions


const prints = ()=>{
    console.log("Arrow function");
};
prints();

// One-liner arrow function
const add = (a,b) => a+b;  // Implicit return
console.log(add(5,6));
