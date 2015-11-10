"use strict";

const
	fs = require("fs"),
	util = require("util");

let
	rs = fs.createReadStream("demo.txt");

rs.on("open", function() {
	console.log("file is open");
});

rs.on("data", function(data) {
	console.log(data.toString());
});

rs.on("readable", function() {
	console.log("readable");
	rs.read();
});

rs.on("end", function() {
	console.log("end");
});
