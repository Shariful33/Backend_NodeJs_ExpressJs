let inventory = {};

function getInventory(cb){
        setTimeout(function(){
                console.log("done inventory work");
                cb();
                inventory = {name: "mango"}
       },1000);
}

getInventory(function(){
    console.log("checked done..");
        setTimeout(()=>{
        console.log("payment done");
        payment_done = true;
    },100);
});

console.log(inventory);


//Nested call back - callback hell
// task(()=>{
//     task2(()=>{
//         task3(()=>{
//             console.log("all tasks completed");
//         });
//     });
// });