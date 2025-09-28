

// fetch('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
//      console.log(res);
//      console.log("three");
     
// });
console.log("one");


fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=>{
        console.log(res);
        return res.json();  //extract json body
        
    })
    .then((data)=>{
        console.log("Body response:", data);
    })
    .catch((err) => console.error("error: ", err));


console.log("two");