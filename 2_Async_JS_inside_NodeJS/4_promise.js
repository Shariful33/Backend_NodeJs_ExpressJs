// const { resolve } = require("path");

// const call_waeather_api = new Promise((resolve, reject)=>{
//     setInterval(()=>{
//         let success = true;
//         if(success){
//             resolve("task completd");
//         }
//         else{
//             reject("task rejected");
//         }
//     }, 1000);
// });

// const call_waeather_api_two = new Promise((resolve, reject)=>{
//     setInterval(()=>{
//         let success = true;
//         if(success){
//             resolve("task 2 completd");
//         }
//         else{
//             reject("task 2 rejected");
//         }
//     }, 1000);
// });

// call_waeather_api.then((result)=>{
//     console.log(result);
//     call_waeather_api_two.then((res)=>{
//         console.log(res);
//     });
// });

// console.log("one");

// fetch('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
//      console.log(res);
//      console.log("three");
     
// });

// console.log("two");

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=>{
        console.log(res);
        return res.json();  //extract json body
        
    })
    .then((data)=>{
        console.log("Body response:", data);
    })
    .catch((err) => console.error("error: ", err));
