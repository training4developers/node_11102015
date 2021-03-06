"use strict";

const
	path = require("path"),
	program = require("commander-plus");

let
	defaultPort = process.env.PORT || 8080,
	defaultFolder = path.join(__dirname, "app","www"),
	defaultConfig = null;

program
	.version("0.0.1")
	.option("-P, --port [type]", "set the web server port number")
	.option("-F, --folder [type]", "set the web server root folder")
	.option("-C, --config [type]", "load a configuration file")
	.parse(process.argv);

program.port = program.port || defaultPort;
program.folder = program.folder || defaultFolder;
program.config = program.config || defaultConfig;

let p;

if (program.config) {

	p = new Promise(function(resolve, reject) {
		console.log("running promise");
		const fs = require("fs");
		let configFile = path.join(__dirname, program.config);

		fs.readFile(configFile, "utf-8", function(err, data) {
			if (err) { reject(err); return; }
			resolve(JSON.parse(data));
		});
	});
	console.log("just setup promise");

} else {
	p = new Promise(function(resolve) {
		console.log("running promise");
		resolve({
			webServer: {
				port: program.port,
				folder: program.folder
			}
		})
	});
	console.log("just setup promise");
}

p.then(function(config) {
	console.log("loaded config");
	try {
		require("./app/app")(config);
	} catch(err) {
		console.error(err);
	}
}).catch(function(err) {
	console.error(err.message);
});
console.log("all done");
