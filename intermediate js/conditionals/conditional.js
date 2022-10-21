let a = 0
if (a > 0) {
	console.log(`${a} is a positive number`)
} else if (a < 0) {
	console.log(`${a} is a negative number`)
} else if (a == 0) {
	console.log(`${a} is zero`)
} else {
	console.log(`${a} is not a number`)
}

let weather = 'RAINY'
if (weather === 'rainy') {
	console.log(" you need a rain coat")
} else if (weather === "cloudy") {
	console.log("it might be cold, you need a jacket")
} else if (weather === 'sunny') {
	console.log("go out freely")
} else{
	console.log("no need for rain coat")
}


/*  Switch case starts with a switch keyword followed by a parenthesis and code block
case block runs if the value in the switch statement parenthesis matches with the case value
the break statement is to terminante execution, so the code execution does not go down after the condition is satisfied
the default block runs if all the cases dosent't satisfy the condition
*/

 weather = 'sunny'
 switch (weather) {
 	case 'rainy':
 	console.log('you need a rain coat')
 	break
 	case 'cloudy':
 	console.log('it might be cold, you need a jacket')
 	break
 	case 'sunny':
 	console.log('go out freely')
 	break
 	default:
 	console.log('no need for rain coat')
 }


 let dayUserInput = prompt('what day is it today')
 let day = dayUserInput.toLowerCase()

 switch (day) {
 	case 'monday':
 	console.log('Today is Monday')
 	break
 	case 'tuesday':
 	console.log('Today is Tuesday')
 	break
 	case 'wednesday':
 	console.log('Today is Wednesday')
 	break
 	case 'thursday':
 	console.log('Today is Thursday')
 	break
 	case 'friday':
 	console.log('Today is Friday')
 	break
 	default:
 	console.log('Today is not a week day.')
 	case 'saturdaay':
 	console.log('Today is Saturday')
 	case 'sunday':
 	console.log('Today is Sunday')
 }

 let num = prompt('Enter number')

 switch (true) {
 	case num > 0:
 	console.log('Number is positive')
 	break;
 	case num == 0:
 	console.log('Number is zero')
 	break;
 	case num < 0:
 	console.log('Number is negative')
 	break;
 	default:
 	console.log('Entered value was not a number')
 }


 let legalDrivingAge = prompt('Enter your age')
 if (age >= 18) {
 	console.log('you are old enough to drive')
 } else {
 	console.log('you are too young to drive')
 }

 