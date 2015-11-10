"use strict";

var
	EventEmitter = require("events"),
	util = require("util");

function Person2() {

	EventEmitter.call(this);

}

util.inherits(Person2, EventEmitter);

var p2 = new Person2();

p2.on("run", function() {
	console.log("I am running");
});

p2.emit("run");

class Person extends EventEmitter {

	constructor() {
		super();
	}

}

var p = new Person();

p.on("walk", function() {
	console.log("I am walking");
});

p.emit("walk");
