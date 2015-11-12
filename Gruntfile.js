module.exports = function(grunt) {

	"use strict";

	const
		path = require("path");

	grunt.initConfig({
		webServer: {
			port: 8070,
			folder: path.join(__dirname, "app", "www")
		}
	});

	grunt.registerTask("default", "start a web server", function(port, folder) {

		try {
			let config = grunt.config();
			if (port) config.webServer.port = port;
			if (folder) config.webServer.folder = folder;
			require("./app/app")(config);
		} catch(err) {
			grunt.log.error(err);
		}

		this.async();

	});



};
