// ? multiply by 5
let numbers = [2, 4, 6, 8, 10];
let multiply=numbers.map(element=>element*5);
console.log(multiply);

// ? add 10 to every element
let arr = [10, 4, 20, 6, 30];
let add=arr.map(element=>element+10);
console.log(add);

//? filter
let filterArray=arr.filter(a=>a%5==0);
console.log("element divided by 5 : "+filterArray);

// ? reduce
let arr1=[34,31,56,45];
let arr2=arr1.reduce((a,b)=>a+b,0);
console.log(arr2);

// ? forEach()
arr.forEach(element=>console.log(element))

// ? array destructuring
let [a,b,c,d]=arr1;
console.log(a,b,c,d);

// ? object destructuring
let employees={
    id:101,
    name:"Sujay"
}

let {id,name}=employees;
console.log(id,name);

// ? Rest parameter
function numbers1(...num)
{
    console.log(num);
}
numbers1(10,20,30,40);



