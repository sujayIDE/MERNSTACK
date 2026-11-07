/* 
1.synchronous - code execute task by task
2. Asynchronous - code execute at the end 

*/

// ? ways to make ti asynchronous code
/* >> timing function
   >> promises
*/

// ? what is the timing function 
// the execution is depend on the the time
//1. setTimeout 
//2. setInterval
//3. clearTimeout
//4. clearInterval

// ? setTimeout -
//it is execute the function only once after delay or timeout
// syntax : 
// setTimeout( ()=> {},  timeout)

// timeout in milliseconds

// ? setInterval -
// It is execute function again and again after every interval

// Syntax : setInterval( ()=> {}, interval)

//interval in ms

// ? clearInterval("name of the interval")
// it is clear the interval

// console.log("start")

// setTimeout(() => {
//     for (let index = 0; index < 10; index++) {
//         console.log("hello");   
//     }
// }, 1000);

// setTimeout(() => {
//     for (let index = 0; index < 10; index++) {
//         console.log("world");
        
//     }
// }, 0);


// console.log("Important code");
// console.log("end");

// // ? print counting 1 to 10 after 1sec
// let count=1;
// let countInterval=setInterval(() => {
//     console.log(count)
//     count++;
// }, 1000);

// let countHello=setInterval(() => {
//     console.log("Hello");
// }, 1000);


console.clear();

function print(n) {
    let table=setInterval(() => {
        for (let index = 1; index <= 10; index++) {
            console.log(`${n} x ${index} = ${n * index}`);
        }
    }, 1000);

    setTimeout(() => {
    clearInterval(table);
}, 10000);

}
print(2);






