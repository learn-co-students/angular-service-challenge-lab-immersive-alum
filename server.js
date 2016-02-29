var express = require('express');
var app = express();
var request = require('request');

app.use(express.static(__dirname));

app.listen(8080);

app.get('/rest/subreddit/:name', function (req, res) {
	request('https://www.reddit.com/r/' + req.params.name + '.json', function (error, response, body) {
		res.json(JSON.parse(body));
	})
});

app.get('/rest/domain/:name', function (req, res) {
	request('https://www.reddit.com/domain/' + req.params.name + '.json', function (error, response, body) {
		res.json(JSON.parse(body));
	})
});

console.log('Server started at http://localhost:8080');
