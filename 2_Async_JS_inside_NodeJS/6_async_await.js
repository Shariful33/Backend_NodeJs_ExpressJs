const task_one = () => {
    
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let success = true;
        if(success){
            resolve("task completd");
        }
        else{
            reject("task rejected");
        }
    }, 1000);
});
}

const task_two = ()=>{

 return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let success = true;
        if(success){
            resolve("task 2 completd");
        }
        else{
            reject("task 2 rejected");
        }
    }, 1000);
});
}



async function completeTask() {
    let res =  await task_one();
    console.log(res);

    let res2 = await task_two();
    console.log(res2);
}

console.log("one");
completeTask().then((res)=>{
    console.log("completed");
});
console.log("two");