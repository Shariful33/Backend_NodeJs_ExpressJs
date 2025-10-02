//--------------------------------Javascript Basic For NodeJs---------------

//JS has no main() function, Executtion start top to bottom
console.log("1. Shariful islam");

//---------------------------- Scope ---------------------------------------
// Global scope - if variable declared without let/const/var → becomes global

let x = 90;  // global variable 
function names(){
    let cm = "2.Scope"   // local varible
    console.log(cm); 
    console.log(x);
}
names();
x = "asd"   // re-assigning value
console.log(x);

//---------------------------- First-Class Citizens -------------------------
// Functions in JS are treated as first-class citizens:
// 1. Can be stored in variables
// 2. Passed as parameters
// 3. Returned from functions

console.log("3. First class citizens: ");
x = function(){};
console.log(x);

//---------------------------- Function as Parameter ------------------------
// Functions can accept functions as parameters

function printName(value1, value2){
    console.log(value1,value2);
}
printName(10,20);
printName(function(){}, function(){});

//---------------------------- Higher Order Functions -----------------------
// A Higher Order Function is a function that either:
// 1. Accepts another function as argument
// 2. Returns a function
function printFun(value1, value2){
    console.log("4. Higher Order Function");
    return function(){};
}

printFun(function(){}, function(){});

//---------------------------- Pure Function -------------------------------
// Pure Function: Same input -> always same output and predictable

function add(a,b){
    console.log("5. Pure Function");
    return a+b;
}
add(3,4);

//---------------------------- Closures ------------------------------------
// Closure = Inner Function + Lexical Environment
// Inner function “remembers” variables of outer function

console.log("6. Closures ");
function outerFunction(){
    num = 50;
    return function innerFunction(){
        console.log(num);
    }
}
const result = outerFunction();
result();