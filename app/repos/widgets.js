module.exports = function(config) {

	"use strict";

	let
		widgetsData = [
			{ id:1, name: "Widget 1", color:"blue", size:"large", qty:3 },
			{ id:2, name: "Widget 2", color:"red", size:"small", qty:23 },
			{ id:3, name: "Widget 3", color:"yellow", size:"medium", qty:12 },
			{ id:4, name: "Widget 4", color:"saffron", size:"tiny", qty:5 }
		],
		lastWidgetId = widgetsData.length;

	return {
		getAll: function() {
			return widgetsData;
		},
		get: function(widgetId) {
			return widgetsData.filter(function(widget) {
				return widget.id === parseInt(widgetId, 10);
			})[0];
		},
		insert: function(widget) {
			widget.id = ++lastWidgetId;
			widgetsData.push(widget);
			return widget;
		},
		update: function(widget) {
			let
				widgetToUpdate = widgetsData.filter(function(widget) {
					return widget.id === parseInt(widget.id, 10);
				})[0];
			widgetToUpdate.name = widget.name;
			widgetToUpdate.color = widget.color;
			widgetToUpdate.size = widget.size;
			widgetToUpdate.qty = widget.qty;
			return widgetToUpdate;
		},
		delete: function(widgetId) {
			let
				widgetToDelete = widgetsData.filter(function(widget) {
					return widget.id === parseInt(widgetId, 10);
				})[0],
				widgetToDeleteIndex = widgetsData.indexOf(widgetToDelete),
				deletedWidget = widgetsData.splice(widgetToDeleteIndex, 1);

			return deletedWidget;
		}
	}


}
