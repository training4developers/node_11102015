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

	grunt.registerTask("default", "start a web server", function() {

		try {
			require("./app/app")(grunt.config());
		} catch(err) {
			grunt.log.error(err);
		}

		this.async();

	});



};
