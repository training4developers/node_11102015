"use strict";

const
	util = require("util");

// Node

function Person3(fn, ln) {
	this.firstName = fn;
	this.lastName = ln;
}

Person3.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
};

function Employee3(empId, fn, ln) {
	Person3.call(this, fn, ln);
	this.empId = empId;
}
util.inherits(Employee3, Person3);

Employee3.prototype.getEmpInfo = function() {
	return this.empId + " " + this.lastName + ", " + this.firstName;
}

var emp3 = new Employee3(3, "Sarah", "Greene");
console.log(emp3.getFullName());
console.log(emp3.getEmpInfo());

// ES5

function Person(fn, ln) {
	this.firstName = fn;
	this.lastName = ln;
}

Person.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
};

function Employee(empId, fn, ln) {
	this._super.call(this, fn, ln);
	this.empId = empId;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype._super = Person;

Employee.prototype.getEmpInfo = function() {
	return this.empId + " " + this.lastName + ", " + this.firstName;
}

var emp = new Employee(1, "Eric", "Greene");
console.log(emp.getFullName());
console.log(emp.getEmpInfo());

// ES6

class Person2 {
	constructor(fn, ln) {
		this.firstName = fn;
		this.lastName = ln;
	}

	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

class Employee2 extends Person2 {

	constructor(empId, fn, ln) {
		super(fn, ln);
		this.empId = empId;
	}

	getEmpInfo() {
		return this.empId + " " + this.lastName + ", " + this.firstName;
	}

}

var emp2 = new Employee2(2, "Bob", "Smith");
console.log(emp2.getFullName());
console.log(emp2.getEmpInfo());


// console.log(typeof Employee);
// console.log(typeof Employee2);
// console.log(typeof Employee3);

console.log(Object.getPrototypeOf(Employee) === Employee.prototype);
console.log(Object.getPrototypeOf(emp) === Employee.prototype);

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Employee)));
