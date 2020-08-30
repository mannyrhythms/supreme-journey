let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
     summary: `${book.title} by ${book.author}`,
     pageCountSummary: `${book.title} is ${book.pageCount} pages long`  
     }
    } 

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challenge

let farenheit = 50
let celsius = (farenheit - 32) * 5 / 9
let kelvin = (farenheit - 32) * 5 / 9 + 273.15

let temp = {
    farenheit: 32
    celsius: 'farenheit' - 32 * 5 / 9
    kelvin: 'farenheit' - 32 * 5 / 9 + 273.15
}

let forecast = function (weather) {
return
    todaysweather: `The weather for today is ${temp.farenheit} which is ${temp.celsius}
     in celsius and ${temp.kelvin} in kevin`

}