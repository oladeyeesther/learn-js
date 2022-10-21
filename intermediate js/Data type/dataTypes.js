// data types are divided into 
// primitive and non-primitive
// primitives are numbers, strins, undefined, null,
// non-primitivea are array, function, object
//the values of primitives can be compared but cant be modified

let word = "javascript"
word[0] = "l"
console.log(word)

// comparing string value
let js = "javascript"
let py = "python"
console.log(js == py)

// Non-primitive data types are modifiable or mutable. we can modif the value of non-primitive types after it gets created

let nums = [1, 2, 3, 5,]
nums[1] = 20
console.log(nums)
// non primitive data types cannot be compared by value even if they have the same properties and values
// they are not strictly equal

let numbers = [1, 2, 3,]
let numb = [1, 2, 3]
console.log(numbers === numb)

// example on object

let userOne = {
	name: "david",
	role: "repairing",
	country: "finland"

}
let userTwo = {
	name : "lola",
	role: "chef",
	country: "nigeria"
}

console.log(userOne == userTwo)

// rule of thumb
// we do not compare non-primitive data types.
// do not compare array, function, objects
// non-primitive data types are referred to as reference types because they are being compared by reference instead of value
//two objects are only strictly equal if they refer to the same underlying object
// example of referencing
numbers = numb
console.log(numb == numbers)

userOne = userTwo
console.log(userTwo === userOne)

// math object
let randomNum = Math.random()
console.log(randomNum)

// how to generate number between zero and ten
let numBtnZeroAndTen = randomNum * 11
console.log(numBtnZeroAndTen)
// math.floor takes it to the nearest whole number
let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)

// using a string template or string interpolation method , we can add expressions, which could be a value or some operations
//(comparison, arithmetic operation, tenary operation)

let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)

// changing data types 
// casting: converting one data tpe to another data typee.
// we use _parseInt()_, _parseFloat()_, _Number()_, _+sign_, _str()_
// when we do arithmetic operations, string numbers should be first converted to integer or float if not it returns an error

// string to Int
// we can convert string number ("10") to a number (10) using the following method;
// parseInt()
// Number()
// plus sign(+)

let nos = "10"
let numInt =parseInt(nos)
console.log(numInt)

nos = "10"
numInt = Number(nos)
console.log(numInt)

nos = "10"
numInt = +nos
console.log(numInt)

// string to float
// we can convert string float number ('1.44') to a float number(1.44). using the following method
// parseFloat(), Number(), plus sign(+)

let dec = '9.81'
let numFloat = parseFloat(dec)
console.log(numFloat)

//float to Int
// we can convert float numbers(9.81) to integers(9). using the following method
// parseInt()
dec = '9.81'
numInt = parseInt(dec)
console.log(numInt)