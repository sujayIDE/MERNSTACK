// ?Generate OTP (4 digit random number) 
let otp=1000+Math.random()*9000;
console.log(Math.floor(otp));

// ? 2. Generate random dice number (1–6)
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice number: " + dice);

// ? 3. Find largest number in array
let arr=[10,45,33,87,23];
let max=Math.max(...arr); //spread operator
console.log(max);


// ? 4. Round a number to 2 decimal places a. use toFixed()
let num = 12.45678;
let result = num.toFixed(2);
console.log(result);

