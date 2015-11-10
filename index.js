"use strict";

const
	EventEmitter = require("events"),
	util = require("util");

// ES6 Object Inheritance

class Person extends EventEmitter {
	constructor() {
		super();
	}
}

var p = new Person();
p.on("hungry", function() { console.log("go eat food..."); });
p.emit("hungry");

// ES Object Inheritance

function Person2() {
	EventEmitter.call(this);
}
util.inherits(Person2, EventEmitter);

var p2 = new Person2();
p2.on("hungry", function() { console.log("go eat food too..."); });
p2.emit("hungry");
