let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
let result = num * num
return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

let convertFarenheitToCelsius = function (farenheit) {
let celsius = (farenheit - 32) * 5 / 9
return celsius
}

let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
