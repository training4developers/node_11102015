function Promise(fn) {

	let
		resolveHandlerFns =[], rejectHandlerFns = [];

	function resolve(result) {
		resolveHandlerFns.forEach(function(resolveHandlerFn) {
			resolveHandlerFn(result);
		})
	}

	function reject(result) {
		rejectHandlerFns.forEach(function(rejectHandlerFn) {
			rejectHandlerFn(result);
		})
	}

	fn(resolve, reject);

	this.then = function(resolveHandlerFn) {
		resolveHandlerFns.push(resolveHandlerFn);

	};

	this.catch = function(rejectHandlerFn) {
		rejectHandlerFns.push(rejectHandlerFn);
	}



var p = new Promise(function(resolve, reject) {
	if (err)
		reject("it failed!");
	else
		resolve("it was successful!");
});

p.then()

p.then(function(result) {
	console.log(result);
}).then().catch(function(result) {
	console.error(result);
})
