	function getWebSocket() {

		var wsPromise = new Promise(function(resolve, reject) {
				var ws = new WebSocket(wsUrl);
				ws.addEventListener("open", function() {
					resolve(ws);
				});
		})

		return {
			send: function(msg) {
				return wsPromise.then(function(ws) {
					ws.send(msg);
				});
			}
		}

	}

	var webSocket = getWebSocket();

	webSocket.send("hi class!").then(function() {
		return webSocket.send("time to evacuate!");
	}).catch(function(err) {
		console.log("error: " + err);
	});
