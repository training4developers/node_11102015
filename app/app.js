module.exports = function(config) {

	"use strict";

	const
		http = require("http"),
		express = require("express"),
		bodyParser = require("body-parser");

	let
		app = express(),
		server = http.createServer(app),
		widgetsData = [
			{ id:1, name: "Widget 1", color:"blue", size:"large", qty:3 },
			{ id:2, name: "Widget 2", color:"red", size:"small", qty:23 },
			{ id:3, name: "Widget 3", color:"yellow", size:"medium", qty:12 },
			{ id:4, name: "Widget 4", color:"saffron", size:"tiny", qty:5 }
		];

	app.use("/api", bodyParser.json());

	//var repos = ["car", "plane", "train", "automobile"];

	// repos.forEach(function(repo) {
	// 	app.use("/api", require("./routers/default")({
	// 			routeName: repo, repo: require("./repos/" + repo)
	// 	});
	// });

	app.use("/api", require("./routers/default")({
			routeName: "widget", repo: require("./repos/widgets")(config)
	}));

	app.use(express.static(config.webServer.folder));

	server.listen(config.webServer.port, function() {
		console.log("web server started on port " + config.webServer.port);
	});
};
