let promise=new Promise((resolve,reject)=>
{
    let success=true;
    if(success)
    {
        resolve("operation successfully");
    }else{
        reject("Operation failed");
    }
})

promise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})


let pendingPromise=new Promise((
    resolve("Pending")
))

console.log(pendingPromise);