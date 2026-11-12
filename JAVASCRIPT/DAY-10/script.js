// ? create array
let arr=[1,2,3,4,5];

// ? read
console.log(arr);

// ? accessing array element one by one

console.log(arr[0]);
console.log(arr[1]);

let arrLength=arr.length;
console.log(arrLength);

arr.push(6);
console.log(arr);

console.log(arr.pop());

console.log(arr.shift());

arr.unshift(10);
console.log(arr);

console.log(arr.slice(0,1));

console.log(arr)

arr.splice(0,2)
console.log(arr);

let arr2=[6,7,8,9];
arr=arr.concat(arr2);

console.log(arr);

arr.reverse();
console.log(arr);

console.log(arr.includes(2));

console.log(Array.isArray(arr));