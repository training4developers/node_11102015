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

if (program.config) {

	const
		fs = require("fs");

	let
		configFile = path.join(__dirname, program.config);

	fs.readFile(configFile, "utf-8", function(err, data) {

		if (err) {
			console.log("unable to load the file");
			return;
		}

		startApplication(JSON.parse(data));
	});

} else {
	startApplication({
		webServer: {
			port: program.port,
			folder: program.folder
		}
	});
}

function startApplication(config) {

	try {
		require("./app/app")(config);
	} catch(err) {
		console.error(err);
	}

}
