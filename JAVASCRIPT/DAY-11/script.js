let obj={
    "name":"Sujay",
    "age":24
};

console.log(obj.name);
console.log(obj.age);
console.log(obj.name+" "+obj.age)

let keys=Object.keys(obj);
console.log(keys);

let values=Object.values(obj);
console.log(values);

let entries=Object.entries(obj);
console.log(entries);

for(let key in obj)
{
    console.log(key);
    console.log(obj[key]);
    
}
