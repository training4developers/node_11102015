"use strict";

function outerFn() {

	var x = 3;

	setTimeout(function() {
		x = 5;
	}, 2000);

	return function innerFn() {
		console.log(x);
	};

}

var fn = outerFn();
setTimeout(function() {
	fn();
}, 3000);
