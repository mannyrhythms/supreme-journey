//multiple arguments
let add = function (a, b) {
return a + b 
}

let result = add(10, 1)

console.log(result)

//default arguments
let getScoreText = function (name = 'Anon', score = 0) {
   return `Name: ${name} - Score: ${score}`
//return 'Name: ' + name + ' - Score: ' + score

}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge using multiple arguments

//let finalBill = function (bill, patronTip) {
//    return bill * patronTip}

//let endResult = finalBill(20, .2)

//console.log(endResult)

//Challenge using default argument

let getTip = function (total, tipPercent = .25) {

return `A ${tipPercent}% tip on $${total} would be = $${total * tipPercent}`
}

let tip = getTip(60)
console.log(tip)