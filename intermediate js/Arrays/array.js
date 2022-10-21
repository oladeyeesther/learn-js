// modifying the value in an array

const countries = [
'albania',
'bolivia',
'canada',
'denmark',
'ethiopia',
'finland',
'germany',
'hungary',
'ireland',
'japan',
'kenya'
]

countries [0] = 'afghanistan'
console.log(countries)

let lastIndex = countries.length - 1
countries[lastIndex] = 'korea'
console.log(countries[lastIndex])

// Array Constructor

const arr = Array()
console.log(arr)
// creating static values with fill

const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)

// concatenating two arrays

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thridList = firstList.concat(secondList)
console.log(thridList)

// let us check if banana exist in this array
const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')
if (index != -1) {
	console.log('this fruit does exist in the array')
} else {
	console.log('this fruit does not exist in the array')
}

// using tenary to write same 
index != -1 ? console.log('this fruit does exist in the array') : console.log('this fruit does not exist in the array')




//OBJECT EXAMPLE

const car = {
type : "fiat",
model : "500",
color : "red"

};
console.log(`The car type is ${car.type}`)