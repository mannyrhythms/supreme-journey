let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

let person = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}


console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

//person.age = 28
      //or 
person.age = + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)