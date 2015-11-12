"use strict";

function getTimerPromise(delay, returnValue, shouldResolve) {

	 return new Promise(function(resolve, reject) {

		setTimeout(function() {

			if (shouldResolve) {
				resolve(returnValue);
			} else {
				reject(returnValue);
			}

		}, delay);

	});

}

let
	p1 = getTimerPromise(2000, "a", true),
	p2 = getTimerPromise(4000, "b", true),
	p3 = getTimerPromise(6000, "c", true),
	p4 = getTimerPromise(8000, "d", true),
	p5 = Promise.all([p1,p2]);

p5.then(function(...params) {
	console.log(params);
	console.log("1 and 2 done");
	return params;
});

Promise.all([p5, p3, p4]).then(function(...params) {
	console.log(params);
	console.log("all done");
}).catch(function(...params) {
	console.log(params);
	console.log("one failed");
});

p1.then(function() {
	console.log("promise 1 resolved");
});

p2.then(function() {
	console.log("promise 2 resolved");
});

p3.then(function() {
	console.log("promise 3 resolved");
}).catch(function() {
	console.log("promise 3 failed");
});

p4.then(function() {
	console.log("promise 4 resolved");
});
