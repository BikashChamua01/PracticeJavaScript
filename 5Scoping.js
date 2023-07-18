/**1 */
var x = Math.floor(Math.random());
if (x > 0.5) {
  var x = 1;
} else {
  let x = 2;
}
console.log(x);

/**2.Flattening an array */
let arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(arr.flat(1));
// Using reduce function
// See how concat function work
let arr1 = [1, 2, 3];
let arr2 = [6, 7, 8];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// flattening
const flattendArr = arr.reduce((acc, el) => {
  return acc.concat(el);
}, []);
console.log(flattendArr);

/**3.FInd the largest prime number from the array */
const numbers = [4, 5, 7, 8, 9, 11, 12, 17, 97, 47];

function isPrime(number) {
  if (number % 2 == 0 || number < 2) return false;

  for (let i = 3; i < +Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }
  return true;
}

console.log(numbers.sort((a,b)=>a-b).findLast)
