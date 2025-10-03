let name = "saiful";

// function namePrint(){
//     console.log(name);
//     for(let i =0; i<100000000; i++){
//         // console.log(i);
//     }
// }

namePrint();

module.exports = {
    name : name,
    namePrint: function (){
    console.log(name);
    }
}
