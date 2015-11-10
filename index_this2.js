"use strict";

global.firstName = "Tom";
global.lastName = "Jones";

function gfn() {
	console.log(this);
	return this.firstName + " " + this.lastName;
}

global.gfn = gfn;

var person = {
	firstName: "Bob",
	lastName: "Smith",
	getFullName: gfn
};

console.log(gfn()); // this = undefined
console.log(global.gfn()); // this = global object
console.log(person.getFullName()); // this = person
console.log(global.gfn === person.getFullName);

// console.log(person.firstName);
//
// person.age = 54;
//
// console.log(person);
//
// delete person.age;
//
// console.log(person);
