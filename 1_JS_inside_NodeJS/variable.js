//--------------------Let--------------------------------
//This let is main scope - global scope
let name = "Shairful Islam";

function printDetails(data){
    //let - block scope
    let age = 45;
    num = 100;
    console.log(name);
}

printDetails();
console.log(num);
// console.log(age); we can not access age outside printDetails block

//--------------------Const--------------------------------
const pi = 3.1416;
console.log(pi);
