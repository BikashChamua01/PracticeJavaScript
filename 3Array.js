/****
 * TRAVERSING
 * for in loop
 * for of loop
 * forEach loop
 */

let animals = ["lion", "tiger", "cow"];
console.log("for in loop");
for (let x in animals) {
  //Prints the index
  console.log(x);
}

console.log("\nfor of loop");
for (let x of animals) console.log(x); //Gives the elements

console.log("\nforeach loop");
animals.forEach((elem, index, array) => {
  console.log(elem + ":" + index);
});
console.log("\n\n");

/**
 * INSERTION and DELETION
 * shift/unshift  at the first
 * push/ pop
 */

console.log(animals.shift()); //Returns the element that is shifted for the array
console.log(animals + "\n");
// Copying an array to another
let animals2 = [...animals];
console.log(animals2 + "\n");

// unshift
console.log(animals.unshift("donkey", "elephent") + "\n"); //Returns the length of the array after adding the elements

// Push returns the length of the array after adding the element to the end
console.log(animals.push("abc") + "\n");

// Pop returns the element that is poped from the array from the end
console.log(animals.pop() + "\n");

/**
 * ARRAY METHODS
 * map , reduce, filter
 */

//GIVEN AN ARRAY ARR=[2,1,3,6,9,6] MULTIPLY EACH ELEMENT WITH 2 AND RETURN THE VALUES WHICH HAS A VALUE GREATER THAN 10

const arr1 = [2, 1, 3, 6, 9, 6];
const newArray = arr1.map((el) => el * 2).filter((el) => el > 10);
console.log(newArray);

// Find the smallest element of the array using reduce method
const smallest = arr1.reduce((acc, el) => {
  return Math.min(acc, el);
});
console.log(smallest);

// Find the sum of all the elements of the arrray using reduce method
const arr = [2, 3, 4, 6, 1];
const sum = arr.reduce((acc, el) => acc + el, 0);
console.log("sum of the elements of the array: " + sum+"\n\n");

/**
 * SPLICE METHOD
 */
let arr2 = [1, 2, 3, 4, 5];
const deleted = arr2.splice(2, 5, "bikash");
console.log(arr2);
console.log(deleted);

/****Array.from() method****/
// It can create an array
// Perform operations on indivisual elements of an array
let array1=[1,2,3,4,5]
let newArr= Array.from(array1,(x)=>x+x)
console.log( newArr) 


let myName="Bikash"
let nameArr= Array.from(myName)
console.log( nameArr)
