// Spread operator is used to dedtructuring an array

const numbers = [23,55,21,87,56];


console.log("Using spread operator:")
console.log(...numbers)

console.log(numbers)

let maxVal= Math.max(...numbers)
console.log(maxVal)