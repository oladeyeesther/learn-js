//boolean values are either true/false
// Tuthy values are
// - all numbers(positive and negative) are truthy except zero
// - all strings are truthy
// - the boolean are true
// False values are 
// - 0, - 0n, - null, - undefined, - NaN, - the boolean false, -'', -"", empty string

let falseValue = 4 < 3;
let trueValue = 4 > 3;
let isMarried = true;
let isHungry = false;

/*  Arithmetic operators are 
- addition(+)
- subtraction(-)
- multiplication(*)
- division(/)
- modulus(%)
- exponential(**)
*/

let numOne = 4;
let numTwo = 6;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf)

console.log(3 != 2)
console.log(3 == "3")
console.log(3 != "3")
console.log(0 == false)
console.log(0 === false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)
console.log(typeof NaN)
console.log(NaN === NaN)

console.log("mango".length == "avocado".length)
console.log("mango".length != "avocado".length )
console.log("mango".length < "avocado".length )
console.log("milk".length == "meat".length )
console.log("milk".length != "meat".length )
console.log("tomato".length == "potato".length )
console.log("python".length != "dragon".length )


/* logical operator
 the following symbols are the common logical operators:
 &&(ampersand), ||(pipe) and !(negotiation)
 the && operator gets true only if thr two operands are true
 the || operator gets true either of the operand is true
 the ! operator negates true to false  and false to true
 */

// && ampersand operator example

let check = 4 > 3 && 10 > 5
console.log(check)
check = 4 > 3 && 10 < 5
console.log(check)
check = 4 < 3 && 10 < 5
console.log(check)

// pipe (||) operator example
 check = 4 > 3 || 10 > 5
console.log(check)
check = 4 > 3 || 10 < 5
console.log(check)
check = 4 < 3 || 10 < 5
console.log(check)

// ! Negation examples
check = 4 > 3;
console.log(check)
check = !(4 > 3);
console.log(check)
let isLightOn = true;
let isLightOff = !isLightOn;
console.log(isLightOff)
isMarried = !false;
console.log(isMarried)

/* Tenary operator
this allows us to write a condition
 */

 let isRaining = true;
 isRaining
 ? console.log("you need a rain coat")
 : console.log("no need for a rain coat");

 isRaining = false;
 isRaining
 ? console.log("you need a rain coat")
 : console.log("no need for a rain coat");

 let digit = 5;
 digit > 0
 ? console.log(`${digit} is a positive number`)
 :console.log(`${digit} is a negative number`);


 /* Windows Method 
 Window display a prompt box with an input on your browser to take
 input values

 */

/* DATE OBJECT/METHOD
always use the get  */

/* Creating a time object */
const now = new Date();
console.log(now)

// grting full year
console.log(now.getFullYear())

// getting month. note it starts counting from 0
console.log(now.getMonth())

// lets extract date of the month from our time object

console.log(now.getDate())

// lets extract day of the week from a time object. note Sunday is 0, monday is 1 and saturday is 6
console.log(now.getDay())

// lets extract the hour from a time object
console.log(now.getHours())

// lets extract the minute
console.log(now.getMinutes())

//lets extract seconds
console.log(now.getSeconds())










