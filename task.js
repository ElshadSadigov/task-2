

//         <-----  QUESTION  ----->

// Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.

const numbers = [1, 28, 74, 17, 22, 115, 40]


// EX-1
console.log(numbers.sort()) // funkisyasiz sort() yazanda ilk rəqəmə görə artan siralama edir


// EX-2
const newNumber1 = numbers.sort((a, b) =>{
    return b-a // böyükdən kiçikə doğru
})
console.log(newNumber1)


// EX-3
const newNumber2 = numbers.sort((a, b) =>{
    return a-b // kiçikdən böyükə doğru
})
console.log(newNumber2)

