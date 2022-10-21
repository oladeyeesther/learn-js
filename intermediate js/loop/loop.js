// FOR loop structure
// for (initialization, condition, increment)

for(let i = 0; i <= 5; i++)
	console.log(i)

// to do a multiplication
for(let i= 0; i <=7; i++)
console.log(`${i} * ${i} = ${i * i}`)

const countries = ['finland', 'sweden', 'denmark', 'norway', 'iceland']
const newArr = []
for(let i = 0; i < countries.length; i++) {
	newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

// adding all element in the array
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
	sum = sum + numbers[i]
}
console.log(sum)

// creating a new array based on existing array
const numb = [1, 2, 3, 4, 5]
const newArra = []
sum = 0
for(let i = 0; i < numb.length; i++) {
	newArra.push(i * i)
}
console.log(newArra)

// 	WHILE LOOP

let i= 0
while (i <= 5) {
	console.log(i)
	i++
}

// DO WHILE LOOP

let a = 0
do {
	console.log(a)
	a++
} while(a <= 5)

// FOR OF LOOP
//we use this for arrays. it is very handy to iterate through an array
// if we are not interested in the index of each element in the array

const numeric = [1, 2, 3, 4, 5]

for (const num of numeric) {
	console.log(num)
}

for (const num of numeric) {
	console.log(num * num)
}

// adding all the numbers in the array

// let sum = 0
for (const num of numeric) {
	sum += sum + num
}
console.log(sum)

const webTechs = [
'HTML',
'CSS',
'JavaScript',
'Redux',
'Node',
'MongoDB'
]

for (const tech of webTechs) {
	console.log(tech.toUpperCase())
}
/* BREAK is used to interupt a loop */

// Continue ; we use this to skip a certain iterations.
for (let i = 0; i <= 5; i++) {
	if (i == 3) {
		continue
	}
}