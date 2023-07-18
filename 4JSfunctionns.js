/**
 * Function call
 * function apply
 * function bind
 */
//Call() method can be used to call a function with different objects
// Let us consider two objects

const person1 = {
  fname: "bikash",
  lname: "chamua",
  age: 23,
};

const person2 = {
  fname: "Jon",
  lname: "chamua",
  age: 18,
};

// consider a function that can be applied to both the objects
// Remember that this keyword is not used with fat arrow function
function display() {
  console.log(`name: ${this.fname} ${this.lname} age: ${this.age}`);
}
display.call(person1);
display.call(person2);

// Another type of example
function greet(name) {
  console.log("Hi " + name);
}
greet.call(this, "bikash");

/**DIFFERENCE BETWEEN CALL AND APPLY METHOD
 * the main difference is in apply method the arguments are passed as an array
 */

// ******Example******
const City = {
  fullname: function (city, town) {
    console.log(`Hi ${this.fname} ${this.lname}...city:${city} town:${town}`);
  },
};

const Person = {
  fname: "bikash",
  lname: "Chamua",
};
City.fullname.apply(Person, ["Guwahati", "Mangaldai"]);
City.fullname.call(Person, "Guwahati", "Mangaldai");

/***BIND METHOD IN JS FUNCTIONS***/
// APPLICATIONS:
// 1.Function borrowing
// 2.Preserving this

/****Function borrowing ******/

// Consider two objects
const Member = {
  fname: "abc",
  lname: "123",
  show: function () {
    console.log(`name: ${this.fname} ${this.lname}`);
  },
};
const Publics = {
  fname: "bikash",
  lname: "chamua",
};

let newShow = Member.show.bind(Publics);
// Publics.newShow() This is wrong....Simply call newShow()

newShow();

/*****Preserving this****** */
// When a function is used as a callback function then this is lost
const animal = {
  name: "Lion",
  legs: 4,
  tail: "long",
  details: function () {
    console.log(`name:${this.name} legs:${this.legs} tail:${this.tail}`);
  },
};

// When we call a the details method as a callback then it will lost this keyword
setTimeout(animal.details,3000) //This will show undefined
let x= animal.details.bind(animal)
setTimeout(x,3000)