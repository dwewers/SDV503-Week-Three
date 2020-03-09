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

//Difference between the two 
//Pre Increment: Increments the value and execute the expression/ statement
//Post Increment: Evaluate the expression/ statement, then increments the value


console.log("Pre - Increment");

y = ++x;
console.log(x);
console.log(y);

console.log("Post - Increment");

y = x++;
console.log(x);
console.log(y);

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

// difference between the two 
//Pre Decrement: Decrements the value and execute the expression/ statement
//Post Decrement: Evaluate the expression/ statement, then decrements the value
