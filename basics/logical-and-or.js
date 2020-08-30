let temp = 55

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >=120) {
console.log('Do not go outside')
} else console.log(' Eh. Do what you want')

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan === true && isGuestTwoVegan === true) {
    console.log('Here is our vegan only menu')
} else if (isGuestOneVegan === true || isGuestTwoVegan === true) {
    console.log('Here are some vegan options')
} else console.log('This is the entire menu')
