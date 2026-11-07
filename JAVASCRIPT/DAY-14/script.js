// let emp={
//     emp_id:101,
//     emp_name:"Sujay",
//     emp_designation:"hr",
// };

// console.log(emp);
// console.log(emp.emp_id);
// console.log(emp.emp_name);
// console.log(emp.emp_designation);
// console.clear();

// let keyArray=Object.keys(emp);
// console.log(keyArray);

// for(let i=0;i<keyArray.length;i++)
// {
//     let keyName=keyArray[i];
//     console.log(emp[keyName]);
// }

// console.clear();

// let valuesArray=Object.values(emp);
// console.log(valuesArray);


// console.clear();

let user={
    user_id:41,
    user_name:"rohan",
    user_gender:"male",
};

//dot notation
console.log(user);
console.log(user.user_id);
console.log(user.user_name);
console.log(user.user_gender);

//square notation
console.log(user["user_id"]);
console.log(user["user_name"]);
console.log(user["user_gender"]);

//print keys
let keyArray=Object.keys(user);
console.log(keyArray);

//print values
let valueArray=Object.values(user);
console.log(valueArray);

//print entries
let entries_array=Object.entries(user);
console.log(entries_array);

//convert object into array
let user2=Object.fromEntries(entries_array);
console.log(user2);

//for in for object
for(let key in user)
{
    console.log(key);
    console.log(user[key]);
    console.log(`[${key},${user[key]}]`);
}

//for of for array
let arr=[1,2,3,4,5];
for (const element of arr) {
    console.log(element);
}





