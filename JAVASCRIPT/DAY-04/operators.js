let x=49;
let y= --x + x--;
let z=++y - x-- + --y;

console.log(x);
console.log(y);
console.log(z);

console.log("==========================================")

console.clear();

let n=15;
if(n>10)
{
    console.log("n is greater than 10");
}else{
    console.log("n is less than 10");
}

console.log("For Loop")
for(let i=0;i<10;i++)
{
    console.log(i+1);
}

console.log("while loop")
let count=0;
while(count<10)
{
    count++;
    console.log("Count : "+count);
}

console.log("Do while loop")
do{
    console.log("Do is always run");
}while(false)