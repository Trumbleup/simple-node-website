const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
	const parsedURL = url.parse(req.url, true);
	const fileName = '.' + parsedURL.pathname  + ".html";
	if (parsedURL.pathname == '/') {
		fs.readFile('./index.html', function(err, data) {
			if (err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
				return res.end("Error 404: Not Found");
				
			}
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		})
	} else {
		fs.readFile(fileName, function(err, data) {
			if (err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
				return res.end("Error 404: Not Found");
				
			}
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		})
	}
}).listen(8080);
