/*********
 * 1.Flat is a method that creates a new array that concatenates all the elements of a subarray into it upto a specified depth
 * 2.Flat method ignors all the empty slots
 * **********/
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
console.log( arr1)

// Depth specification example
const arr2=[1,2,3,[4,5,[6,7,8,[9,10,11]]]]
console.log(arr2.flat(2)) //[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ] ]

// Empty space removal example
const arr3=[1,2,3,[4,    ,5,,6]]
console.log(arr3.flat()) //[ 1, 2, 3, 4, 5, 6 ]
