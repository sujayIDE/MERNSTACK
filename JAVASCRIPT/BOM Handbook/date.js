// ? 1. Print current date in format: DD/MM/YYYY
let date=new Date();
let day=date.getDay();
let month=date.getMonth()+1;
let year=date.getFullYear();

console.log(`${day}/${month}/${year}`);

// ? 2. Find difference between two dates
let date1=new Date("2026-11-21");
let date2=new Date("2026-11-07");

let difference =date1-date2;
console.log(difference);

// ? 3. Check if today is weekend
let date3=new Date();
let today=date3.getDay();
if(today==0)
{
    console.log("Weekend");
}else{
    console.log("Not weekend");
}

// ? 4. add 7 days in todays date
let todayDate=new Date();
todayDate.setDate(todayDate.getDate()+7);
console.log(todayDate);
