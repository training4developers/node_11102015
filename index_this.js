"use strict";

function outer(a, b) {

	console.log(a,b);

	var that = this;

	function inner() {

		// 'this' does not pass through via closure
		// 'arguments' does not pass through via closure

		console.log("a: " + a);
		console.log("b: " + b);
		console.log(that.id);

	}

	inner();
}

var o = {
	id: 2,
	outer: outer
};

o.outer("wwww", "tttt");

outer.call({ id: 3 }, "aaaa", "bbbb");
outer.apply({ id: 4 }, ["aaaa", "bbbb"]);

var f = outer.bind({ id: 5}, "aaaa");
f("cccc");
f.call({ id: 6});

o.outer.call({ id:7}, "eeee","ffff");
