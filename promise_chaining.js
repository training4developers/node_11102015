"use strict";

let buyANewMac = new Promise(function(resolve, reject) {

	setTimeout(function() {
		console.log("yes, of course I should...");
		//resolve("purchased a MacBook Pro");
		reject("purchase a Windows computer");
	}, 2000);

});



buyANewMac.then(function(result) {
	console.log(result);

	return new Promise(function(resolve, reject) {

		setTimeout(function() {
			console.log("I need Visual Studio Enterprise to do C# coding...");
			resolve("my children need food and clothing, go get Windows...");
			//reject("get rid of the client, I am not using Visual Studio");
		}, 2000)

	});

}).catch(function(results) {
	console.log("caught it: " + results);
	//throw Error("something really bad happened!");
	return "World Peace!";
}).then(function(result) {
	console.log(result);

	console.log("select a virtual machine software package...");

	return new Promise(function(resolve, reject) {

		setTimeout(function() {
			resolve("purchase fusion..., everyone will love me...");
			//reject("purchase parallels, my life will fall apart, and my children will hate me...");
		}, 2000)

	});

}).then(function(result) {
	console.log(result);
}).catch(function(result) {
	console.log("error: " + result);
});

console.log("should I buy a Mac?");
