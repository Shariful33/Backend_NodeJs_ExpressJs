//js has no main function
console.log("1. Shariful islam");

// global scope - accessiblity
x = 90;
function names(){
    cm = "2.Scope"
    console.log(cm);
    console.log(x);
}
names();
x = "asd"
console.log(x);

// Js- funtional language, Function in js are treated as a first class citizens
console.log("3. First class citizens: ");

x = function(){};
console.log(x);

//Function - accept fun as parameter
function printName(value1, value2){
    console.log(value1,value2);
}

printName(10,20);
printName(function(){}, function(){});

//Higher Order Function- Function can accept function as parameter/return type is also a function
function printFun(value1, value2){
    console.log("4. Higher Order Function");
    return function(){};
}

printFun(function(){}, function(){});

// Pure function : For same type of input, output always same

function add(a,b){
    console.log("5. Pure Function");
    return a+b;
}
add(3,4);


//Closures 
console.log("6. Closures ");

function innerFunction(){
    num = 50;
    return function outer(){
        console.log(num);
    }
}

result = innerFunction();
result();