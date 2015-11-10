"use strict";

var x=0, y=0, funcs = [];

for (; x<5; x++) {
	var f = function(t) {
		funcs.push(function() {
			console.log(t);
		});
	};
	f(x);
}

for (; y<5; y++) {
	funcs[y]();
}

// "use strict";
//
// var x=0, y=0, funcs = [];
//
// for (; x<5; x++) {
// 	let t = x;
// 	funcs.push(function() {
// 		console.log(t);
// 	});
// }
//
// for (; y<5; y++) {
// 	funcs[y]();
// }
