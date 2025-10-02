//-------------------- Let --------------------------------
// let has **block scope** (limited to {})

let name = "Shairful Islam";    // Global variable 

function printDetails(data){
    let age = 45;  // Local variable
    num = 100;
    
    console.log(name);
    console.log(age);
}

printDetails();
console.log(num);  // Accessible because declared without let/const -> global

//-------------------- Const --------------------------------
// const is used for constants (cannot be reassigned)
// Must be initialized at declaration

const pi = 3.1416;
console.log(pi);
