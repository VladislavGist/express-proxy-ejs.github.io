var http = require("http");
var url = require("url");
//http://localhost:8081/?name=ivan

http.createServer(function(req, res) {
	var data = "";
	//парсим url который пришел от клиента
	var input = url.parse(req.url);
	//проверяем пришедший url на сервере
	if(input.query) {
		//разделяем url по имеющимся в нем знакам =
		var q = input.query.split("=");
		//начинаем проверять со второго =
		switch(q[1].toLowerCase()) {
			//если имеются подходящие значение то
			//в data положить то что соответствует пришедшему имени
			case "john": data = '[{"name":"john", "age": 25, "admin": true}]';
			break;
			case "mike": data = '[{"name":"mike doe", "age": 20, "admin": false}]';
			break;
			default: data = '[{"name": "Unknown", "age": 0, "admin": false}]';
			break;
		}
	}

	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	//приводим данные к строке и выводим
	res.write(data.toString());
	res.end();
}).listen(8081);