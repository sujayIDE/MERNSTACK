let arr=[1,2,3,4,5,6];
console.log(arr);

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

arr.forEach((value) => {
    console.log(value);
});

arr.map(e=>console.log(e))

//update the values 

arr[1]=50;

for(let i=0;i<arr.length;i++)
{
    arr[i]=arr[i]+2;
    console.log(arr[i]);
}

arr.splice(0,1);

console.clear();

let arr2=[
    {id:1,name:"Rahul"},
    {id:2,name:"aman"},
    {id:3, name:"rohan"}
]

arr2.forEach((obj)=> {
    console.log(obj);
});

arr2.forEach((obj) => {
    console.log(obj.id);
    console.log(obj.name);
});

// let updateArr=arr2.map(obj=>{
//     return obj.id==2 ? ...obj,
// });


console.clear();

let student_arr=[
    { id:1, name:"Ajay", marks:10},
    { id:2, name:"Sujay", marks:22},
    { id:3, name:"Vijay", marks:29},
    { id:4, name:"kumar", marks:33},
    { id:5, name:"Raju", marks:50},
    { id:6, name:"Mayank", marks:60},
]

let result1 = student_arr.filter(e => e.marks < 35);
console.log(result1);
   

let result2 = student_arr.filter(e => e.marks > 25);
console.log(result2)

console.clear();

console.log(
    student_arr.filter(obj=>{
        if(obj.marks>25 && obj.marks<35)
        {
            obj.marks=obj.marks+35-obj.marks;
        }
        return obj;
    })
)
