// ? Q1. Write a function that takes a string and returns the total number of characters present in it.
// let str=prompt("Enter String");
// function countCharacter(str)
// {
//     return str.length;
// }

// let result=countCharacter(str);
// console.log(result);

// ? Q2. Write a function that converts the first character of a string into uppercase and keeps the remaining characters unchanged.
function convertIntoUpperCase(str)
{
    let firstChar=str.charAt(0);
    let newStr=firstChar.toUpperCase()+str.slice(1);
    console.log(newStr);
}
convertIntoUpperCase("javascript");

// ? 3. Write a function that checks whether a given string contains the word 'JavaScript'.
let result;
function checkStringContain(str)
{
     result=str.includes("Javascript");
    return result;
}
checkStringContain("I am currently learning Javascript");

if(result)
{
    console.log("Given string contain the word");
}else{
    console.log("Given string doesn`t contain the word");
}

// ? Q4. Write a function that counts how many times the letter 'a 'appears in a string.
let str="Sujay";
let count=0;
let arr=str.split("");
function countA(str)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==="a")
        {
            count++;
        }
    }
}
countA();
console.log(count);
