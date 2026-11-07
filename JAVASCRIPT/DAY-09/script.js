// ? function statement
function sum(a,b)
{
    console.log(a+b)
}
sum(10,20)

// ? function expression + named function
let add=function addition(n1,n2)
{
    console.log(n1+n2);
}
add(1,2)

// ? 
let add2=function(n1,n2)
{
    console.log(n1+n2)
}
add2(2,3)

// ? named function
function sub(n1,n2)
{
    console.log(n1-n2)
}
sub(30,20)

// ? function expression with anonymous function

let substraction =function(n1,n2)
{
    console.log(n1-n2)
}
substraction(40,20)


// ? anonymous function
let greet=function()
{
    console.log("Good morning")
}
greet()

// ?1 function statement
function multiplication(n1,n2)
{
    console.log(n1*n2)
}
multiplication(10,2)

// ?2 function expression
let division=function div(n1,n2)
{
    console.log(n1/n2)
}
division(10,5)

// ?3 function expression + anonymous function
let multi=function(n1,n2)
{
    console.log(n1*n2)
}
multi(2,3)

// ?4 function expression + arrow function
let multi2=(n1,n2)=>{
    console.log(n1*n2)
}
multi2(2,5)

//? function statement
function greet2()
{
    console.log("Hello everyone");
}
greet2()


/*function expression with named function*/
let greet9=function greet3()
{
    console.log("Good morning")
}
greet9()

/*function expression with anonymous function*/
let greet4=function()
{
    console.log("Good evening")
}
greet4()

/*function expression with arrow function*/
let greet5=()=>console.log("Good night")
greet5()

console.clear();

function outer()
{
    console.log("Outer function");

    function inner()
    {
        console.log("Inner function");
    }
    inner();
}
outer();

console.clear();

// ? ============================================
function outerFunction()
{
    console.log("Outer function");

    return function innerFunction()
    {
        console.log("Inner function");
    }
}
outerFunction()();
console.clear();

// ?=========================================
function outerFun(f1,f2)
{
    console.log("I am outer function");
    return f1(f2);
}

function innerFun(clf2)
{
    console.log("I am inner function");
    return clf2();
}

function nested()
{
    console.log("I am nested function");
}

outerFun(innerFun,nested);


// ? HOF (Higher order function)
function sum(n1,n2)
{
   return 10+20;
}

function display(callback)
{
    console.log(callback(10,20));
}

display(sum);