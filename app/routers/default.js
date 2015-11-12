module.exports = function(config) {

	"use strict";

	const
		express = require("express");

	let
		router = express.Router();

	router.route(`/${config.routeName}s`)
		.get(function(req, res) {
			res.json(config.repo.getAll());
		})
		.post(function(req, res) {
			res.json(config.repo.insert(req.body));
		});

	router.route(`/${config.routeName}s/:${config.routeName}Id`)
		.get(function(req, res) {
			res.json(config.repo.get(req.params[config.routeName + "Id"]));
		})
		.put(function(req, res) {
			req.body.id = req.params[config.routeName + "Id"];
			res.json(config.repo.update(req.body));
		})
		.delete(function(req, res) {
			res.json(config.repo.delete(req.params[config.routeName + "Id"]));
		});

	return router;

}
