const url = require('url');
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
	fs.readFile("./index.html", function (err, data) {
		if (err) throw error;

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end()
	})
});

app.get('/about', function (req, res) {
	fs.readFile("./about.html", function(err, data) {
		if (err) throw err;

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end()
	})
})

app.get('/contact-me', function (req, res) {
	fs.readFile("./contact-me.html", function(err, data) {
		if (err) throw err;

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end()
	})
})

app.listen(8080);