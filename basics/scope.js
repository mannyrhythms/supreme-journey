// Lexical scope (static scope)
// Global scope - defined outside of all code blocks
// Local scope - defined inside of a code block

// In a scope you can access variable defined in that scope or any parent/ancestor scope

// Global scope (varOne)
  // Local scope (varTwo)
    // Local scope (varFour)
 // Local scope (varThree)

let varOne = "varOne"

if (true) {
    console.log(varOne)
    let varTwo = "varTwo"
    console.log(varTwo)

    if (true) {
        let varFour = "varFour"
    }
}

if (true) {
    let varThree = "varThree"
}

console.log(varTwo)