//---------------------Callback Function ----------------------------------

//Sync use of callback function
function callSomeOne(data){
    data();
};

cb = function(){
    console.log("Its a callback function");
}

callSomeOne(cb);

//Arrow function

prints = ()=>{
    console.log("Arrow function");
};

prints();
