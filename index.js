let x = 10;
let y = x;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

// console.log(x*-y)

//Pre-increment increments by one and then posts x immediately. "(++x)" gives us the new value of x

console.log(x);
console.log(++x);
console.log(x);
console.log(++x);
console.log(x);
console.log(++x);
console.log(x);

// //Post increment returns what x was before when we do "(++x)", and then posts the new value of x with "(x)"

console.log(x);
console.log(x++);
console.log(x);
console.log(x++);
console.log(x);
console.log(x++);
console.log(x);

console.log("Pre - Increment");

y = ++x;
console.log(x);
console.log(y);

console.log("Post - Increment");

y = x++;
console.log(x);
console.log(y);

//Difference between the two 
//Pre Increment: Increments the value and execute the expression/ statement
//Post Increment: Evaluate the expression/ statement, then increments the value


//Pre-decrement drcrements value by one, then returns x

console.log(x);
console.log(--x);
console.log(x);
console.log(--x);
console.log(x);
console.log(--x);
console.log(x);

//Post-Decrement returns x, then decrements value by one
console.log(x);
console.log(x--);
console.log(x);
console.log(x--);
console.log(x);
console.log(x--);
console.log(x);

console.log("Pre - decrement");

y = --x;
console.log(x);
console.log(y);

console.log("Post - decrement");

y = x--;
console.log(x);
console.log(y);
// difference between the two 
//Pre Decrement: Decrements the value and execute the expression/ statement
//Post Decrement: Evaluate the expression/ statement, then decrements the value

for(let i = 0; i<=10; i++)
{
    console.log(i);
}
//console logs values from minimum to maximum.


console.log("Pre Icrement")
console.log(x);
console.log(10 * ++x);
console.log(x)

//Multiplies 10 by new value of x and posts value. Then posts new value of x

console.log("Post Icrement")

console.log(y);
console.log(10 * y++)
console.log(y);

//Multiplies 10 by old value of x and posts value. Then increments it by one and posts new value of x


// *====================================================================================================================================================================================================================================================================================
//     ====================================================================================================================================================================================================================================================================================
//     ====================================================================================================================================================================================================================================================================================*/


//making strings

let a = "hello, ";
let b = "world";

console.log(a + b);

let c = "I am ";
let d = "a string";
let e = c + d;

console.log(e);

let f = "my name is " + "string101";
console.log(f);

console.log(10 + 5); //works like a normal addition
console.log(10 + "5"); //By adding a comment, it puts the number with the other rather than adding them together
console.log("10" + 5); //places the 5 next to the commented number
console.log(10 + 10 + "5"); //Adds the two uncommented values together, then puts the commented number on the end
console.log(" 10"+ "10"); //puts the two commented numbers together without adding them together


const firstWord = "hello";
const secondWord = " world";

console.log(firstWord + secondWord); //The original way we were taught to prin to console using "+"
console.log( `${firstWord} ${secondWord}` ); //This is a different way of printing words to the console without using "+"

console.log(10 - 5); //works like a usual subtraction
console.log(10 - "5"); //By adding a comment, it puts the number with the other rather than adding them together
console.log("10" * 5); //multiplies the commented value by the uncommented value
console.log(10 + 10 + "5"); //adds the two uncommented numbers together, and puts the commented number on the end
console.log(" 10"+ "10"); //puts the two commented numbers together without adding them together
