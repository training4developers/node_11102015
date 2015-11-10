"use strict";

function myFunc(a, b, c, ...unicorns) {
	//console.log(a,b,c);
	console.log(arguments[3]);
	console.log(unicorns);
}

myFunc(1,2,3,4,5,6,7,8);

// myFunc.someProp = function() {
// 	console.log("ran some prop");
// }
// myFunc.someProp();
