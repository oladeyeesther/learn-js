// function can be declared without a parameter

function square() {
	let num = 2
	let sq = num * num
	console.log(sq)
}
square()

// or write it this way
// Function Returning value
function addTwoNumber() {
	let numOne = 10
	let numTwo = 20
	let sum = numOne + numTwo
	return sum
	
}
console.log(addTwoNumber()) // a function has to be called by its name for it to be executed

function printFullName () {
	let firstName = 'David'
	let lastName = 'White'
	let space = ' '
	let fullName = firstName + space + lastName
	console.log(fullName)
}
printFullName()

// FUNCTION WITH A PARAMETER
// Function can take in different data type as a parameter

function areaOfCircle (r) {
	let area = Math.PI * r * r
	return area
}
console.log(areaOfCircle(10)) // when invoking it you will pass the value/ argument which is seen as 10 here

function square(number) {
return number * number
}
console.log(square(10))

// Function with two parameter

function twoNumbers(numOne, numTwo) {
	let sum = numOne + numTwo
	return sum
}
console.log(twoNumbers(20, 30))

function printFullName(firstName, lastName) {
	return `${firstName} ${lastName}`
}
console.log(printFullName('John', 'White'))

// function as a parameter
function profile(greeting) {
	greeting()
}
function greeting() {

	alert ('hello world from profile')
}
profile(greeting)

//function with multiple parameter

function sumArrayValues(arr) {
	let sum = 0
	for (let i=0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
return sum;
}
const numbers = [1, 2, 3, 4, 5,];
console.log(sumArrayValues(numbers))

const areaCircle = (radius) => {
	let area = Math.PI * radius * radius
	return area;
}
console.log(areaCircle(10))

// function declaration to pass unlimited parameter

function sumAllNums() {
	let sum = 0
	for(let i = 0; i < arguments.length; i++) {
		sum += arguments[i]
	}
	return sum
}
console.log(sumAllNums(1, 2, 3, 4))

//  arrow function or unlimited numbers
const sunAllnums = (...args)=>{
	// console.log(arguments)
	console.log(args)
}
console.log(sumAllNums(1, 2,3,4))

console.log(sumAllNums(10, 20,13,40,10))
console.log(sumAllNums(15,20,30,25,10,33,40))
